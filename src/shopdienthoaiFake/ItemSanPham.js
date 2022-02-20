import React, { Component } from "react";

export default class ItemSanPham extends Component {
  render() {
    let { hinhAnh, tenSP } = this.props.data;
    let { handleChiTietSanPham, handleThemSP } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={hinhAnh} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <button
            onClick={() => {
              handleChiTietSanPham(this.props.data);
            }}
            className="btn btn-primary"
          >
            Chi Tiết
          </button>
          <button
            onClick={() => {
              handleThemSP(this.props.data);
            }}
            className="btn btn-danger mx-2"
          >
            Thêm Vào Giỏ
          </button>
        </div>
      </div>
    );
  }
}
