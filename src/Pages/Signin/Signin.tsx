import { readily, readily_light } from "../../assets";
import "./Signin.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Start from "../Start/Start";
import { useContext } from "react";
import { BackgroundContext } from "../../Components/Context";
import LightToggle from "../../Layouts/LightToggle/LightToggle";

function Signin() {
  // Background context
  const { background } = useContext(BackgroundContext);

  const navigate = useNavigate();
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setPreloader(false), 2800);
  }, []);
  return (
    <>
      <LightToggle>
        {preloader ? (
          <Start />
        ) : (
          <div className="animate__animated animate__zoomIn signin__container__ h-lvh">
            <div className="pt-8 flex justify-center items-center">
              {background == "white" ? (
                <img src={readily_light} alt="logo.jpg" />
              ) : (
                <img src={readily} alt="logo.jpg" />
              )}
            </div>
            <hr className="__hr" />
            <h1
              className="h__ mt-10"
              style={{ color: `${background == "white" ? "#000060" : "#fff"}` }}
            >
              Sign in for Readiily
            </h1>
            {/* Signin form container */}
            <div className="flex flex-col justify-center items-center">
              <section
                className={`mt-3 px-4 py-6 signup__section ${
                  background == "white" && "__app__white__signin"
                }`}
              >
                <button
                  className={`shadow-2xl text-white ${
                    background == "white" && "__app__white__btn"
                  }`}
                >
                  <div className="flex justify-center items-center gap-2 px-12 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C18.9304 18.3696 16.4379 20.25 13.5 20.25C9.77231 20.25 6.75 17.2277 6.75 13.5C6.75 9.77231 9.77231 6.75 13.5 6.75C15.2207 6.75 16.7861 7.39912 17.9781 8.45944L21.1601 5.27737C19.1509 3.40481 16.4633 2.25 13.5 2.25C7.28719 2.25 2.25 7.28719 2.25 13.5C2.25 19.7128 7.28719 24.75 13.5 24.75C19.7128 24.75 24.75 19.7128 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.54736 8.26369L7.24355 10.9744C8.24368 8.49825 10.6658 6.75 13.5002 6.75C15.2209 6.75 16.7864 7.39912 17.9783 8.45944L21.1604 5.27737C19.1511 3.40481 16.4635 2.25 13.5002 2.25C9.17911 2.25 5.43174 4.68956 3.54736 8.26369Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M13.5002 24.75C16.4061 24.75 19.0464 23.638 21.0427 21.8295L17.5609 18.8831C16.3934 19.771 14.9669 20.2512 13.5002 20.25C10.5741 20.25 8.08949 18.3842 7.15349 15.7804L3.48486 18.607C5.34674 22.2503 9.12786 24.75 13.5002 24.75Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M24.5312 11.2967H23.625V11.25H13.5V15.75H19.8579C19.4142 16.9967 18.615 18.0862 17.559 18.8837L17.5607 18.8826L21.0426 21.8289C20.7962 22.0528 24.75 19.125 24.75 13.5C24.75 12.7457 24.6724 12.0094 24.5312 11.2967Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <h1
                      className="__h"
                      style={{
                        color: `${background == "white" ? "#000060" : "#fff"}`,
                      }}
                    >
                      Sign in with Google
                    </h1>
                  </div>
                </button>
                <div>
                  <form action="#">
                    <div className="flex flex-col gap-3">
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            color: `${
                              background == "white" ? "#000060" : "#fff"
                            }`,
                          }}
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="johndoe@gmail.com"
                          style={{
                            background: `${
                              background == "white" ? "white" : "#141414"
                            }`,
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            color: `${
                              background == "white" ? "#000060" : "#fff"
                            }`,
                          }}
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          placeholder="************"
                          style={{
                            background: `${
                              background == "white" ? "white" : "#141414"
                            }`,
                          }}
                        />
                      </div>
                      <h2
                        className="forgot__pass__"
                        style={{
                          color: `${
                            background == "white" ? "#000060" : "#fff"
                          }`,
                        }}
                      >
                        Forgotten your password?
                      </h2>
                    </div>
                  </form>
                </div>
                <div
                  className="mt-4 signup__btn flex gap-2 px-4 py-3 rounded-full bg-black cursor-pointer"
                  onClick={() => {
                    navigate("/welcome_1");
                  }}
                  style={{
                    background: `${background == "white" ? "#000060" : "#000"}`,
                  }}
                >
                  <h3 className="text-white">Sign in</h3>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 20C11.3132 20 12.6136 19.7413 13.8268 19.2388C15.0401 18.7362 16.1425 17.9997 17.0711 17.0711C17.9997 16.1425 18.7362 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 -1.95685e-08 10 0C7.34784 3.95203e-08 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM10.7856 14.1189C10.6824 14.2221 10.5599 14.304 10.4251 14.3599C10.2903 14.4158 10.1458 14.4446 9.99984 14.4447C9.85389 14.4447 9.70937 14.416 9.57452 14.3602C9.43966 14.3044 9.31712 14.2226 9.21389 14.1194C9.11065 14.0163 9.02875 13.8938 8.97285 13.759C8.91696 13.6242 8.88816 13.4797 8.88811 13.3337C8.888 13.039 9.00499 12.7563 9.21333 12.5478L10.65 11.1111H6.66667C6.37198 11.1111 6.08937 10.994 5.88099 10.7857C5.67262 10.5773 5.55556 10.2947 5.55556 10C5.55556 9.70532 5.67262 9.4227 5.88099 9.21433C6.08937 9.00595 6.37198 8.88889 6.66667 8.88889H10.6511L9.21445 7.45222C9.0061 7.24373 8.88912 6.96102 8.88922 6.66627C8.88932 6.37153 9.00651 6.0889 9.215 5.88056C9.42349 5.67221 9.7062 5.55523 10.0009 5.55533C10.2957 5.55543 10.5783 5.67262 10.7867 5.88111L14.12 9.21445C14.3283 9.42281 14.4453 9.70537 14.4453 10C14.4453 10.2946 14.3283 10.5772 14.12 10.7856L10.7867 14.1189H10.7856Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </section>
              <div className="bottom__text mt-4">
                <h4
                  style={{
                    color: `${background == "white" ? "#000060" : "#fff"}`,
                  }}
                >
                  Don’t have an account yet?{" "}
                  <button>
                    <span>Sign up</span>
                  </button>
                </h4>
              </div>
            </div>
          </div>
        )}
      </LightToggle>
    </>
  );
}

export default Signin;
