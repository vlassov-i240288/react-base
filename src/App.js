// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Message from './components/Message';

const myMessage = "My message text!";

function App(props) {
 return (
   <div className="App">
     <header className="App-header">
       My First React App
       <h3>Hello, {props.name}</h3>
       <Message message={myMessage} />
     </header>
   </div>
 );
}

export default App;

