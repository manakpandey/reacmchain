import React from 'react';
import './App.css';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pid:'',
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [pid]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert('Product Added: ' + this.state.pid + ' // ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <input type="int" name="pid" value={this.state.pid} onChange={this.handleChange} className="form-control" id="pidImput" placeholder="Product ID" />
          </div>
          <div className="form-group">
            {/* <label for="emailInput">Name</label> */}
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Product Name" />
          </div>
          
          <input type="submit" value="Add Product" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

class MainTitle extends React.Component {
  render(){
    return(
      <h1>Add Product</h1>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <MainTitle/>
        <ContactForm/>
      </div>
    )
  }
}


export default App;
