import React, { Component } from "react";

class CompleteEvent extends Component {
  state = { stackId: null };

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = _event => {
    const { Bileto } = this.props.drizzle.contracts;
    const stackId = Bileto.methods.completeEvent.cacheSend(this.props.eventId);
    this.setState({ stackId });
  };

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];
    if (!txHash || !transactions[txHash]) return "...";
    return transactions[txHash].status;
  };

  render() {
    return (
      <div className="card shadow bg-success text-white text-center">
        <div className="card-body">
          <button
            type="button"
            className="btn btn-outline-light btn-block"
            onClick={this.handleOnClick}
          >
            <strong>COMPLETE</strong> event #{this.props.eventId}
          </button>
        </div>
        <span className="card-footer font-weight-bold text-uppercase">
          {this.getTxStatus()}
        </span>
      </div>
    );
  }
}

export default CompleteEvent;
