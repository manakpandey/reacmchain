import React from "react";
import './App.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: "",
      pid: "",
      qty: "",
      supplier: "",   
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const pid = target.pid;

    this.setState({
      [pid]: value
    });
    console.log("Change detected. Order placed" + pid + " = " + value);
  }

  handleSubmit(event) {
    alert(
      "Order is placed: " +
        this.state.orderNumber
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {/* <label for="nameInput">Name</label> */}
            <input
              type="int"
              name="pid"
              value={this.state.pid}
              onChange={this.handleChange}
              className="form-control"
              id="pidInput"
              placeholder="Product ID"
            />
          </div>
          <div className="form-group">
            {/* <label for="emailInput">Name</label> */}
            <input
              name="qty"
              type="qty"
              value={this.state.qty}
              onChange={this.handleChange}
              className="form-control"
              id="qtyImput"
              placeholder="Quantity"
            />
          </div>

          <input
            type="submit"
            value="Place Order"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

class MainTitle extends React.Component {
  render() {
    return <h1>Place Order</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MainTitle />
        <ContactForm />
      </div>
    );
  }
}

export default App;
