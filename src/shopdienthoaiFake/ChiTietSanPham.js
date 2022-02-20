import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    let {
      tenSP,
      hinhAnh,
      heDieuHanh,
      manHinh,
      cameraTruoc,
      cameraSau,
      giaBan,
    } = this.props.spct;
    return (
      <div className="row">
        <div className="col-5">
          <h2>{tenSP}</h2>
          <img
            style={{ width: "500px", height: "400px", objiectFit: "cover" }}
            src={hinhAnh}
            alt=""
          />
        </div>
        <div className="col-7">
          <h2>Chi Tiết Sản Phẩm</h2>
          <div className="py-5">
            <p>Hệ Điều Hành: {heDieuHanh}</p>
            <p>Màn Hình: {manHinh}</p>
            <p>Cam Trước: {cameraTruoc}</p>
            <p>Cam Sau: {cameraSau}</p>
            <p>Giá Bán: {giaBan}</p>
          </div>
        </div>
      </div>
    );
  }
}
