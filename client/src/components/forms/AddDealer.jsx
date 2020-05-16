import React from 'react';
import './App.css';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      contactNo:''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            {/* <label for="nameInput">Name</label> */}
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Dealer Name" />
          </div>
          <div className="form-group">
            {/* <label for="emailInput">Name</label> */}
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="Dealer Email" />
          </div>
          <div className="form-group">
            {/* <label for="contactNoInput">Name</label> */}
            <input name="contactNo" type="number" value={this.state.contactNo} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="Dealer Contact No" />
          </div>
          <input type="submit" value="Add Dealer" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

class MainTitle extends React.Component {
  render(){
    return(
      <h1>Add Dealer</h1>
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
