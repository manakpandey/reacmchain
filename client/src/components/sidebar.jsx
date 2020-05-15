const navLinks = [
  { url: '/manage-products', name: 'Manage products' },
  { url: '/manage-orders', name: 'Manage orders' },
  { url: '/order-handling', name: 'Order-handling' },
  { url: '/reliability-predictor', name: 'Reliability-Predictor' },
  { url: '/customer-handling', name: 'Customer-Handling' },
   { url: '/data-visualisation', name: 'Data-Visualisation' }
];

class Menu extends React.Component {  
  constructor(){
    super();
    this.state = {
      style:"menu active",
      menuStatus:"open"
    };
  };

  render() {
    return (      
      <div>
        <div className={this.state.style}>               
          <ul>
            {navLinks.map(({ url, name }) => (
              <li>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('app')
);