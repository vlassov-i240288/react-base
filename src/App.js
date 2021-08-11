import Routes from "./components/Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Routes />
      </div>
    </Provider>
  )
}

export default App;
