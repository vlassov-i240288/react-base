import Routes from "./components/Routes/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App-header">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;