import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./component/Navbar";

const App = () => {
  axios.defaults.baseURL = "https://fakestoreapi.com/";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar greeting={""} onClick={function (): void {
          throw new Error("Function not implemented.");
        } } toggleSettingsDropdown={function (): void {
          throw new Error("Function not implemented.");
        } } showSettingsDropdown={false} navigate={function (path: string): void {
          throw new Error("Function not implemented.");
        } } handleLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />} path="/" />

      </Routes>
    </BrowserRouter>
  );
};

export default App;