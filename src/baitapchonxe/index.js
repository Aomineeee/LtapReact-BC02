import React, { Component } from "react";

export default class Baitapchonxe extends Component {
  state = {
    carOption: "./img/imgRedCar.jpg",
  };
  handleChangeOption = (option) => {
    this.setState({
      carOption: option,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-7">
          <img
            style={{
              width: "100%",
            }}
            src={this.state.carOption}
            alt=""
          />
        </div>
        <div className="col-5">
          <button
            onClick={() => this.handleChangeOption("./img/imgRedCar.jpg")}
            className="btn btn-danger mx-2"
          >
            Red Card
          </button>
          <button
            onClick={() => this.handleChangeOption("./img/imgSilverCar.jpg")}
            className="btn btn-secondary mx-2"
          >
            Silver Card
          </button>
          <button
            onClick={() => this.handleChangeOption("./img/imgBlackCar.jpg")}
            className="btn btn-dark mx-2"
          >
            Black Card
          </button>
        </div>
      </div>
    );
  }
}
