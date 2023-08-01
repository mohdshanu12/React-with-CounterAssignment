// // import React, { Component } from 'react';
// import './index.css';
// import LOGO from "./image/atlassian-logo.svg"
// function App () {
  
    
//     return (
//       <div>
//       <nav>
//         <div className="logo">
//           <img src={LOGO} alt="logo1" />
//         </div>
//         <ul className="firstul">
//           <li>
//             <a href="https://www.atlassian.com/software/jira">Products</a>
//           </li>
//           <li>
//             <a href="https://www.atlassian.com/solutions/work-management">
//               For Team's
//             </a>
//           </li>
//           <li>
//             <a href="https://www.atlassian.com/migration/assess/journey-to-cloud">
//               Support
//             </a>
//           </li>
//         </ul>
//         <button class="try-free-btn">Try free</button>
//         <ul class="secondul">
//           <li>Buy Now </li>
//           <li>
//             <a href="https://start.atlassian.com/">Login</a>
//           </li>
//         </ul>
//       </nav>
      

// <img src={require("./image/image1.png")} alt="logo"/>
// </div>
//     );
//   }

  
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>Car name is {props.color} ford!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);
// export default Car;
              

// import React, { Component } from 'react';

// class MessageToggle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMessage: false,
//     };
//   }

//   toggleMessage = () => {
//     this.setState((prevState) => ({
//       showMessage: !prevState.showMessage,
//     }));
//   };

//   render() {
//     const { showMessage } = this.state;

//     return (
//       <div>
//         <button onClick={this.toggleMessage}>
//           {showMessage ? 'Hide Message' : 'Show Message'}
//         </button>
//         {showMessage && <p>This is a hidden message. Toggle the button to show/hide it.</p>}
//       </div>
//     );
//   }
// }

// export default MessageToggle;

import React, { Component } from 'react';

 

class Counter extends Component {

  state = {

    count: 0,

  };

//increment the count by 1

  increment = () => {

    this.setState((prevState) => ({

      count: prevState.count + 1,

    }));

  };

  //decrement the count by 1

  decrement = () => {

    this.setState((prevState) => ({

      count: prevState.count - 1,

    }));

  };

  render() {

    const { count } = this.state;

    return (

      <div class="container">

        <h1>Simple Counter</h1>

        <p>Count: {count}</p>

        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>decrement</button>

      </div>

    );

  }

}

 

export default Counter;