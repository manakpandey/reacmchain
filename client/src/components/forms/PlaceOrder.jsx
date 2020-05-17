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