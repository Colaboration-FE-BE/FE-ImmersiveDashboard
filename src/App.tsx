import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Mente from "./Pages/Mente";
import MenteLog from "./Pages/MenteLog";
import FormAdd from "./Pages/FormAdd";

import Header from "./components/Header";
import UserPage from "./Pages/UserPage";
import Newuser from "./Pages/NewUser";
import Update from "./Pages/Updateuser";
import Classpage from "./Pages/Classpage";
import Layout from "./Layout";

const App = () => {
  axios.defaults.baseURL = "";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<FormAdd />} path="/FormAdd" />
        <Route element={<Mente />} path="/Mente" />
        <Route element={<MenteLog />} path="/MenteLog" />
        <Route element={<Layout />} path="/Layout" />
        <Route element={<UserPage />} path="/page" />
        <Route element={<Newuser />} path="/Newuser" />
        <Route element={<Update />} path="/updateuser" />
        <Route element={<Classpage />} path="/classpage" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
