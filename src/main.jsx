import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/global.css";
import { StateProvider } from "./Store/UserProgress";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <StateProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </StateProvider>
    </Provider>
  </React.StrictMode>
);
