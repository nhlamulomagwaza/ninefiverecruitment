import "../styles/components/Auth/auth.scss";
import authIllustration from "../assets/auth.svg";
import { useState } from "react";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";

const Auth = () => {
  const [toggleForms, setToggleForms] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validator, setValidator] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    //VALIDATE USER INPUT

    if (
      !email.trim() ||
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Please fill in all the fields", {
        position: "top-center",
      });

      return setValidator(false);
    }
    //VALIDATE EMAIL INPUT

    if (!email.includes("@") || email < 8) {
      return toast.error("Invalid Email");
    }

    //VALIDATE USERNAME INPUT

    if (username.length < 2) {
      return toast.error("Username should be at least 2 Characters");
    }

    //VALIDATE PASSWORD INPUT
    if (password.length < 6) {
      return toast.error("Password should be at least 6 Characters");
    }

    if (confirmPassword !== password) {
      toast.error("Passwords do not match");
      setValidator(true);

      return;
    }

    //BACKEND COMMUNICATION LOGIC
    try {
      setLoading(true);
      const res = await fetch("https://ninefiverecruitment.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password, confirmPassword }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      if (!res.ok) {
        toast.error(data.message);
      } else if (res.ok) {
        toast.success("Registration Successful");
        setValidator(true);
        setTimeout(() => {
          location.reload();
        }, 1000);

        // Store user object in local storage
        localStorage.setItem("ninefive-user", JSON.stringify(data.user));
        localStorage.setItem("ninefive-access-token", data.accessToken.token);

        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    //VALIDATE USER INPUT

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all the fields", {
        position: "top-center",
      });

      return setValidator(false);
    }

    //VALIDATE EMAIL INPUT

    if (!email.includes("@") || email < 8) {
      return toast.error("Invalid Email");
    }

    //VALIDATE PASSWORD INPUT
    if (password.length < 6) {
      return toast.error("Password should be at least 6 Characters");
    }
    //BACKEND COMMUNICATION LOGIC
    try {
      setLoading(true);
      const res = await fetch("https://ninefiverecruitment.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (!res.ok) {
        toast.error(data.message);
      } else if (res.ok) {
        toast.success("Login Successful");
        setValidator(true);
        setTimeout(() => {
          location.reload();
        }, 1000);

        // Store user object in local storage
        localStorage.setItem("ninefive-user", JSON.stringify(data.user));

        localStorage.setItem("ninefive-access-token", data.accessToken);

        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="auth">
        <div className="auth-content">
          <IoMdClose
            className="close-auth"
            size={25}
            onClick={() => navigate("/")}
          />
          <img src={authIllustration} alt="" className="auth-illustration" />
          <div className="sign-in-content">
            {toggleForms ? (
              <div className="sign-in-container">
                <h2 className="sign-in-title">Sign In</h2>
                <div className="sign-in-cta">
                  please sign with your credentials to continue
                </div>
                <form className="sign-in-form" onSubmit={handleSignIn}>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit" className="sign-in-btn">
                    {loading ? (
                      <ScaleLoader
                        className="loader"
                        color="white"
                        height={10}
                      />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>
                <div className="new-user">
                  <p>
                    new to NineFive?{" "}
                    <a
                      className="sign-up-link"
                      onClick={() => setToggleForms(!toggleForms)}
                    >
                      {" "}
                      register here{" "}
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="sign-in-container">
                <h2 className="sign-in-title">Sign Up</h2>
                <div className="sign-in-cta">
                  register with a unique username and email
                </div>
                <form className="sign-in-form" onSubmit={handleRegister}>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    // style={validator && confirmPassword.length==0? null: {outline:'1px solid #fc353f'} }
                  />
                  <button type="submit" className="sign-in-btn">
                    {loading ? (
                      <ScaleLoader
                        className="loader"
                        color="white"
                        height={10}
                      />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>
                <div className="new-user">
                  <p>
                    already have an account?{" "}
                    <a
                      className="sign-up-link"
                      onClick={() => setToggleForms(!toggleForms)}
                    >
                      {" "}
                      sign in here{" "}
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
