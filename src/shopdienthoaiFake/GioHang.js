import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class GioHang extends Component {
  state = {
    isOpen: false,
  };
  setVisible = (item) => {
    this.setState({
      isOpen: item,
    });
  };
  renderGioHang = () => {
    let { handleSoLuong } = this.props;
    return this.props.DSGioHang.map((item) => {
      return (
        <tr>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img style={{ width: "50px" }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => {
                handleSoLuong(item.maSP, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span>{item.soLuong}</span>
            <button
              onClick={() => {
                handleSoLuong(item.maSP, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
        </tr>
      );
    });
  };
  renderTotalGioHang = () => {
    return this.props.DSGioHang.reduce((a, b) => {
      return a + b.soLuong;
    }, 0);
  };
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" onClick={() => this.setVisible(true)}>
            Giỏ Hàng {this.renderTotalGioHang()}
          </Button>
        </div>

        <Modal
          title="Sản Phẩm Của Bạn"
          centered
          visible={this.state.isOpen}
          onOk={() => this.setVisible(false)}
          onCancel={() => this.setVisible(false)}
          width={1000}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Mã Sản phẩm</th>
                <th>Tên Sản Phẩm</th>
                <th>Hình Ảnh</th>
                <th>Đơn Giá</th>
                <th>Số Lượng</th>
              </tr>
            </thead>
            <tbody>{this.renderGioHang()}</tbody>
          </table>
        </Modal>
      </>
    );
  }
}
