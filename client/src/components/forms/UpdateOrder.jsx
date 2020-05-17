import React, { useState} from "react";
import './Form.css';

const UpdateOrder = () => {
    const [pname, setPname]= useState("");
    const [qty, setQty]= useState("");

    const [orderNumber, setOrderNumber] = useState("");

    const handleSubmit =(e) =>{
      e.preventDefault();
      alert('Order updated');

    };

    return(
      <div>
        <div className="form-group">
          <input type="int" name= "orderNumber" onChange={t=>setOrderNumber(t.target.value)} 
          className="form-control" id="orderNumberInput" placeholder="Order Number"/>
        </div>
        <div className="form-group">
          <input type="string" name= "pname" onChange={t=>setPname(t.target.value)} 
          className="form-control" id="pnameInput" placeholder="Product Name"/>
        </div>
        <div className="form-group">
          <input type="int" name= "qty" onChange={t=>setQty(t.target.value)} 
          className="form-control" id="qtyInput" placeholder="Quantity"/>
        </div>

        

        <input
          value="Update Order"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        />
    
      </div>
    );
};

export default UpdateOrder;











































//class based

// import React from "react";
// import './App.css';

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orderNumber: "",
//       pid: "",
//       qty: "",
//      };

//     this.handleChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const pid = target.pid;

//     this.setState({
//       [pid]: value
//     });
//     console.log("Change detected. updated" + pid + " = " + value);
//   }

//   handleSubmit(event) {
//     alert(
//       "Order is updated: " +
//         this.state.orderNumber
//     );
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//         <div className="form-group">
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
//             {/* <label for="nameInput">Name</label> */}
//             <input
//               type="int"
//               name="pid"
//               value={this.state.pid}
//               onChange={this.handleChange}
//               className="form-control"
//               id="pidInput"
//               placeholder="Product ID"
//             />
//           </div>
//           <div className="form-group">
//             {/* <label for="emailInput">Name</label> */}
//             <input
//               name="qty"
//               type="qty"
//               value={this.state.qty}
//               onChange={this.handleChange}
//               className="form-control"
//               id="qtyImput"
//               placeholder="Quantity"
//             />
//           </div>

//           <input
//             type="submit"
//             value="Update Order"
//             className="btn btn-primary"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// class MainTitle extends React.Component {
//   render() {
//     return <h1>Update] Order</h1>;
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
