import React, { Component } from "react";
import "./index.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        <div class="table-row-col">
          <div class="table-row-col__table">
            <div class="table-row-col__body">
              <div class="table-row-col__row">
                <div class="table-row-col__cell">A 1</div>
                <div class="table-row-col__cell">A 2</div>
                <div class="table-row-col__cell">A 3</div>
              </div>

              <div class="table-row-col__row">
                <div class="table-row-col__cell">B 1</div>
                <div class="table-row-col__cell">B 2</div>
                <div class="table-row-col__cell">B 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
