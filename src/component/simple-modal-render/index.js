import React, { Component, Fragment } from "react";
import "./index.scss";

export const SomeCustomPage = () => {
  return <ModalWrapper render={() => <MyCustomBody name="Madan" />} />;
};

export const MyCustomBody = props => {
  return (
    <div className="custom-body">
      Hello, {props.name} . This is Custom unreleated componenet elements to be
      render inside modal.
    </div>
  );
};

export default class ModalWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState, prevProps) => {
      return { showModal: !prevState.showModal };
    });
  }

  render() {
    let classes = this.state.showModal || "modal-viewer--hidden";
    return (
      <Fragment>
        <div onClick={this.toggleModal}>Toggle Modal</div>
        <div className={`modal-viewer ${classes}`}>
          <div className="modal-viewer__modal">
            <div className="modal-viewer__modal-content">
              <div className="modal-viewer__modal-header">
                <div>Title</div>
                <span
                  className="modal-viewer__modal-close"
                  onClick={this.toggleModal}
                >
                  X
                </span>
              </div>
              <div className="modal-viewer__modal-body">
                Modal Body
                {this.props.render()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
