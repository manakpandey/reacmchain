import React from "react";
import './App.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: "",
      name: "",
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
    console.log("Change detected. updated" + pid + " = " + value);
  }

  handleSubmit(event) {
    alert(
      "Product is updated: " +
        this.state.name + this.state.pid
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
           
          <div className="form-group">
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
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
              id="productName"
              placeholder="Product Name"
            />
          </div>

          <input
            type="submit"
            value="Update Product"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

class MainTitle extends React.Component {
  render() {
    return <h1>Update Product</h1>;
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