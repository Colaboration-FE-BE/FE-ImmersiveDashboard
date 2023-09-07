import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./component/Navbar";
import Header from "./component/Header";
import UserPage from './Pages/UserPage';
import Newuser from './Pages/NewUser';
import Update from './Pages/Updateuser';

const App = () => {
  axios.defaults.baseURL = "";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} path="/" />
        <Route element={<Header />} path="/header" />
        <Route element={<UserPage />} path="/page" />
        <Route element={<Newuser />} path="/Newuser" />
        <Route element={<Update />} path="/updateuser" />

      </Routes>
    </BrowserRouter>
  );
};

export default App;