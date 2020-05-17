import React, { useState} from "react";
import './Form.css';

const UpdateStatus = () => {
    const [status, setStatus]= useState("");
    
    const [orderNumber, setOrderNumber] = useState("");

    const handleSubmit =(e) =>{
      e.preventDefault();
      alert('Status updated');

    };

    return(
      <div>
        <div className="form-group">
          <input type="int" name= "orderNumber" onChange={t=>setOrderNumber(t.target.value)} 
          className="form-control" id="orderNumberInput" placeholder="Order Number"/>
        </div>
        <div className="form-group">
          <input type="string" name= "status" onChange={t=>setStatus(t.target.value)} 
          className="form-control" id="statusInput" placeholder="Status"/>
        </div>
        

        

        <input
          value="Update Status"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        />
    
      </div>
    );
};

export default UpdateStatus;















//class based


// import React from "react";
// import './App.css';

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orderNumber: "",//dropdown of view orders
//       status: "" //dropdown
//     };

//     this.handleChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const orderNumber = target.orderNumber;

//     this.setState({
//       [orderNumber]: value
//     });
//     console.log("Change detected. Status updated" + orderNumber + " = " + value);
//   }

//   handleSubmit(event) {
//     alert(
//       "Order status was updated: " +
//         this.state.orderNumber +
//         " // " +
//         this.state.status
//     );
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             {/* <label for="nameInput">Name</label> */}
//             <input
//               type="int"
//               name="orderNumber"
//               value={this.state.orderNumber}
//               onChange={this.handleChange}
//               className="form-control"
//               id="orderNumberInput"
//               placeholder="Order Number"
//             />
//           </div>
//           <div className="form-group">
//             {/* <label for="emailInput">Name</label> */}
//             <input
//               name="status"
//               type="status"
//               value={this.state.status}
//               onChange={this.handleChange}
//               className="form-control"
//               id="statusImput"
//               placeholder="Updated Status"
//             />
//           </div>

//           <input
//             type="submit"
//             value="Update Status"
//             className="btn btn-primary"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// class MainTitle extends React.Component {
//   render() {
//     return <h1>Update Status</h1>;
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MainTitle />
//         <ContactForm />
//       </div>
//     );
//   }
// }

// export default App;
