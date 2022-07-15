import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";
import { AllUsers } from "./views/AllUsers";
import { Header } from "./components/Header";
import { Login } from "./views/Login";
// react router dom

function App() {
  return (
    <BrowserRouter>
      <Header emri="Test" color="red" />
      {/* <Header emri="Test" color="blue" /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<AllUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
