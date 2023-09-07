import { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";

import InputLogin from "../components/sandy/InputLogin";
import ButtonLogin from "../components/sandy/ButtonLogin";

const Login = () => {
  const navigate: NavigateFunction = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      Swal.fire({
        icon: "success",
        title: "Succes",
        text: `Welcome to Immersive Dashboard`,
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/Dashboard");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: `Please check your username or password`,
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-5">
      <section className="hidden sm:flex p-4 w-full ">
        <img className=" w-full object-cover" src="public\bgLanding.svg" />
      </section>
      <section className="flex-col justify-center mt-1 p-3 flex">
        <div className=" flex-col max-w-[300px] w-full mx-auto gap-10 ">
          <img className="w-36 h-20" src="public\logo-ALTA.svg" />
          <InputLogin
            id="username"
            name="username"
            type="text"
            label="Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputLogin
            id="password"
            name="password"
            type="text"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonLogin id="login" label="Login" onClick={() => handleLogin()} />
        </div>
      </section>
    </div>
  );
};

export default Login;
