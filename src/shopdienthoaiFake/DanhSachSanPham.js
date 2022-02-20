import React, { Component } from "react";
import ItemSanPham from "./ItemSanPham";

export default class DanhSachSanPham extends Component {
  renderDanhSachSanPham = () => {
    return this.props.dssp.map((item, index) => {
      return (
        <ItemSanPham
          handleChiTietSanPham={this.props.handleChiTietSanPham}
          handleThemSP={this.props.handleThemSP}
          key={index}
          data={item}
        />
      );
    });
  };
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {this.renderDanhSachSanPham()}
      </div>
    );
  }
}
