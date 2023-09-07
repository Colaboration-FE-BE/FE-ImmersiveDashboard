import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import UserPage from './Pages/UserPage';
import Newuser from './Pages/NewUser';
import Update from './Pages/Updateuser';
import Classpage from './Pages/Classpage';
import Layout from "./Layout";

const App = () => {
  axios.defaults.baseURL = "";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/" />
        <Route element={<Header />} path="/header" />
        <Route element={<UserPage />} path="/page" />
        <Route element={<Newuser />} path="/Newuser" />
        <Route element={<Update />} path="/updateuser" />
        <Route element={<Classpage />} path="/classpage" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
