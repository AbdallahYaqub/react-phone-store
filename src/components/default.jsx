import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 text-center mx-auto text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h1>Page not found</h1>
            <h1>
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
