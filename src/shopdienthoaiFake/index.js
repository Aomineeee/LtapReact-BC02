import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import { dssp } from "./data";
import GioHang from "./GioHang";

export default class ShopDienThoaiFake extends Component {
  state = {
    chiTietSanPham: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [],
  };
  handleChiTietSanPham = (sp) => {
    this.setState({
      chiTietSanPham: sp,
    });
  };
  handleThemSP = (SP) => {
    let newGioHang = [...this.state.gioHang];
    let indexSP = this.state.gioHang.findIndex((item) => {
      return item.maSP == SP.maSP;
    });
    if (indexSP == -1) {
      SP.soLuong = 1;
      newGioHang.push(SP);
    } else {
      newGioHang[indexSP].soLuong++;
    }
    this.setState({
      gioHang: newGioHang,
    });
  };
  handleSoLuong = (index, type) => {
    let newGioHang = [...this.state.gioHang];
    let indexSP = this.state.gioHang.findIndex((item) => item.maSP == index);
    if (indexSP !== -1 && type == 1) {
      newGioHang[indexSP].soLuong++;
    }
    if (indexSP !== -1 && type == -1) {
      if (newGioHang[indexSP].soLuong == 1) {
        newGioHang.splice(indexSP, 1);
      } else {
        newGioHang[indexSP].soLuong--;
      }
    }
    this.setState({
      gioHang: newGioHang,
    });
  };
  render() {
    return (
      <div>
        <GioHang
          handleSoLuong={this.handleSoLuong}
          DSGioHang={this.state.gioHang}
        />
        <DanhSachSanPham
          dssp={dssp}
          handleChiTietSanPham={this.handleChiTietSanPham}
          handleThemSP={this.handleThemSP}
        />
        <ChiTietSanPham spct={this.state.chiTietSanPham} />
      </div>
    );
  }
}
