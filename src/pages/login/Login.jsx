import axios from "axios";
import "./login.css";

const API = process.env.REACT_APP_BACKEND_API;

export default function Login() {
  async function handleLogin(email, password) {
    const response = await axios.post(`${API}user/login`, {
      email: email,
      password: password,
    });
    alert(response.data.message);
    console.log(response);
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends Around the World
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button
              className="loginButton"
              onClick={() => handleLogin("john@gmail.com", "1234")}
            >
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
