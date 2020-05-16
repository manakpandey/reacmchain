import React, { useState} from "react";
import './Form.css';

const PlaceOrder = () => {
    const [pname, setPname]= useState("");
    const [qty, setQty]= useState("");

    const [supplier, setSupplier] = useState("");

    const handleSubmit =(e) =>{
      e.preventDefault();
      alert('Order placed');

    };

    return(
      <div>
        <div className="form-group">
          <input type="string" name= "pname" onChange={t=>setPname(t.target.value)} 
          className="form-control" id="pnameInput" placeholder="Product Name"/>
        </div>
        <div className="form-group">
          <input type="int" name= "qty" onChange={t=>setQty(t.target.value)} 
          className="form-control" id="qtyInput" placeholder="Quantity"/>
        </div>

        <div className="form-group">
          <input type="string" name= "supplier" onChange={t=>setSupplier(t.target.value)} 
          className="form-control" id="supplierInput" placeholder="Supplier"/>
        </div>

        <input
          value="Place Order"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        />
    
      </div>
    );
};

export default PlaceOrder;


// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orderNumber: "",
//       pid: "",
//       qty: "",
//       supplier: "",   
//     };

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
//     console.log("Change detected. Order placed" + pid + " = " + value);
//   }

//   handleSubmit(event) {
//     alert(
//       "Order is placed: " +
//         this.state.orderNumber
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
//             value="Place Order"
//             className="btn btn-primary"
//           />
//         </form>
//       </div>
//     );
//   }
// }

// class MainTitle extends React.Component {
//   render() {
//     return <h1>Place Order</h1>;
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





