import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Routes from "./Routes";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./contexts/auth";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
