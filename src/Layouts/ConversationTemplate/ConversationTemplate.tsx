import { useContext, useRef, useEffect, useState } from "react";
import "./ConversationTemplate.scss";
import { ReactElement } from "react";
// Import SidebarContext component
import { SidebarContext, BackgroundContext } from "../../Components/Context";

function ConversationTemplate(props: { children: ReactElement }) {
  // UseContext BackgroundContext
  const { background, setBackground } = useContext(BackgroundContext);
  // UseContext SidebarContext
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  // SidebarRef
  const sidebarRef = useRef<HTMLDivElement>(null);
  // Click Outside Handler
  const clickOutsideHandler = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };
  // UseEffect Hook to add click listener for closing sidebar when clicking outside of it
  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  // State for managing background changing
  const [x, setX] = useState(false);
  x == true ? setBackground("white") : setBackground("black");

  // Aside functional Component
  function aside() {
    return (
      <>
        <aside
          className={`__aside h-full ${
            sidebarOpen && "__aside__mobile shadow-xl"
          } ${
            background == "white" && "__app__white__aside__mobile shadow-xl"
          }`}
        >
          <div className="flex gap-4 items-center __aside__top">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M23.9827 3.83645L21.083 1.06569C20.8583 0.851049 20.5536 0.730469 20.2359 0.730469C19.9181 0.730469 19.6134 0.851049 19.3887 1.06569L13.9009 6.30952C13.6762 6.52419 13.5499 6.81536 13.5498 7.11899V9.88975C13.5498 10.1934 13.6761 10.4846 13.9008 10.6993C14.1255 10.9141 14.4302 11.0347 14.748 11.0347H17.6477C17.9655 11.0346 18.2702 10.914 18.4948 10.6992L23.9827 5.45539C24.2073 5.24069 24.3335 4.94952 24.3335 4.64592C24.3335 4.34232 24.2073 4.05116 23.9827 3.83645ZM17.1528 8.74481H15.9462V7.593L20.2359 3.49411L21.4413 4.64592L17.1528 8.74481ZM20.7032 12.1361C20.3854 12.1361 20.0806 12.2568 19.8559 12.4715C19.6312 12.6862 19.5049 12.9774 19.5049 13.2811V16.0198L17.7316 14.3252C17.107 13.7292 16.2604 13.3944 15.3777 13.3944C14.495 13.3944 13.6484 13.7292 13.0238 14.3252L12.1874 15.1233L9.20868 12.2769C8.58482 11.6818 7.73931 11.3476 6.85778 11.3476C5.97625 11.3476 5.13074 11.6818 4.50688 12.2769L2.72993 13.9749V7.55636C2.73024 7.2528 2.85659 6.96175 3.08123 6.7471C3.30587 6.53245 3.61045 6.41172 3.92814 6.41142H11.1174C11.4352 6.41142 11.74 6.29079 11.9647 6.07607C12.1894 5.86136 12.3157 5.57014 12.3157 5.26648C12.3157 4.96282 12.1894 4.6716 11.9647 4.45688C11.74 4.24217 11.4352 4.12154 11.1174 4.12154H3.92814C2.97508 4.12245 2.06132 4.48462 1.38739 5.12858C0.713474 5.77254 0.334448 6.64567 0.333496 7.55636V21.2956C0.334448 22.2063 0.713474 23.0795 1.38739 23.7234C2.06132 24.3674 2.97508 24.7296 3.92814 24.7305H18.3067C19.2598 24.7296 20.1736 24.3674 20.8475 23.7234C21.5214 23.0795 21.9004 22.2063 21.9014 21.2956V13.2811C21.9014 12.9774 21.7751 12.6862 21.5504 12.4715C21.3257 12.2568 21.0209 12.1361 20.7032 12.1361ZM3.92814 22.4406C3.61045 22.4403 3.30587 22.3196 3.08123 22.1049C2.85659 21.8903 2.73024 21.5992 2.72993 21.2956V17.2128L6.20116 13.8959C6.37893 13.7362 6.61376 13.6473 6.85778 13.6473C7.1018 13.6473 7.33663 13.7362 7.5144 13.8959L11.3103 17.5219C11.3211 17.5334 11.3247 17.5471 11.3343 17.5563L16.4471 22.4406H3.92814ZM19.5049 21.2956C19.4989 21.5164 19.4243 21.7304 19.2905 21.9105L13.8817 16.7422L14.7181 15.943C14.8932 15.7766 15.1301 15.6832 15.3771 15.6832C15.6241 15.6832 15.861 15.7766 16.0361 15.943L19.5049 19.2577V21.2956Z"
                  fill={`${background == "white" ? "#000060AB" : "white"}`}
                />
              </svg>
            </div>
            <h1
              className={`${
                background == "white" ? "__app__white__conversation" : ""
              }`}
            >
              New Design
            </h1>
          </div>
          <div className="__aside__middle">
            <div className="__middle__overflow__container">
              <h1
                className={`${
                  background == "white" ? "__app__white__conversation" : ""
                }`}
              >
                Today
              </h1>
              <div className="mt-3">
                {/* Display History Here... */}
                <h2
                  className={`__middle__lst pb-3 ${
                    background == "white" ? "__app__white__conversation" : ""
                  }`}
                >
                  I need a promotional design
                </h2>
              </div>
            </div>
            <hr className="__hr" />
          </div>
          <div className="__aside__bottom">
            <div className="flex flex-col justify-between items-start h-full">
              <a href="" className="__bottom__lst__item">
                <div className="flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_650_1379)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3335 2.33349C8.93426 2.33324 7.55942 2.69998 6.34622 3.39712C5.13301 4.09426 4.12387 5.09741 3.41952 6.30645C2.71517 7.51548 2.34025 8.88811 2.33217 10.2873C2.3241 11.6865 2.68315 13.0634 3.3735 14.2805C3.84011 13.6741 4.43993 13.1831 5.12659 12.8455C5.81324 12.5079 6.56834 12.3327 7.3335 12.3335H13.3335C14.0987 12.3327 14.8538 12.5079 15.5404 12.8455C16.2271 13.1831 16.8269 13.6741 17.2935 14.2805C17.9838 13.0634 18.3429 11.6865 18.3348 10.2873C18.3267 8.88811 17.9518 7.51548 17.2475 6.30645C16.5431 5.09741 15.534 4.09426 14.3208 3.39712C13.1076 2.69998 11.7327 2.33324 10.3335 2.33349ZM18.2765 16.4095C19.6135 14.6665 20.3367 12.5303 20.3335 10.3335C20.3335 4.81049 15.8565 0.333496 10.3335 0.333496C4.8105 0.333496 0.333507 4.81049 0.333507 10.3335C0.330206 12.5303 1.05341 14.6665 2.39051 16.4095L2.3855 16.4275L2.7405 16.8405C3.67839 17.937 4.84289 18.8171 6.15373 19.4201C7.46458 20.0231 8.8906 20.3348 10.3335 20.3335C12.3608 20.3372 14.3409 19.7214 16.0085 18.5685C16.7194 18.0773 17.3641 17.4965 17.9265 16.8405L18.2815 16.4275L18.2765 16.4095ZM10.3335 4.33349C9.53785 4.33349 8.77479 4.64956 8.21218 5.21217C7.64957 5.77478 7.3335 6.53784 7.3335 7.33349C7.3335 8.12914 7.64957 8.8922 8.21218 9.45481C8.77479 10.0174 9.53785 10.3335 10.3335 10.3335C11.1291 10.3335 11.8922 10.0174 12.4548 9.45481C13.0174 8.8922 13.3335 8.12914 13.3335 7.33349C13.3335 6.53784 13.0174 5.77478 12.4548 5.21217C11.8922 4.64956 11.1291 4.33349 10.3335 4.33349Z"
                          fill={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_650_1379">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3
                    className={`${
                      background == "white" ? "__app__white__conversation" : ""
                    }`}
                  >
                    My Brands
                  </h3>
                </div>
              </a>

              <div className="__bottom__lst__item">
                <div className="flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_650_1392)">
                        <path
                          d="M10.0002 14.1667C12.3013 14.1667 14.1668 12.3012 14.1668 10C14.1668 7.69882 12.3013 5.83334 10.0002 5.83334C7.69898 5.83334 5.8335 7.69882 5.8335 10C5.8335 12.3012 7.69898 14.1667 10.0002 14.1667Z"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 0.833344V2.50001"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 17.5V19.1667"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5166 3.51666L4.69993 4.7"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.2998 15.3L16.4831 16.4833"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.833496 10H2.50016"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 10H19.1667"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5166 16.4833L4.69993 15.3"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.2998 4.7L16.4831 3.51666"
                          stroke={`${
                            background == "white" ? "#000060AB" : "white"
                          }`}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_650_1392">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3
                    onClick={() => setX((prev) => !prev)}
                    className={`cursor-pointer ${
                      background == "white" ? "__app__white__conversation" : ""
                    }`}
                  >
                    {background == "white" ? "Dark" : "Light"} mode
                  </h3>
                </div>
              </div>

              <a href="" className="__bottom__lst__item">
                <div className="flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                        stroke={`${
                          background == "white" ? "#000060AB" : "white"
                        }`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 2.5H17.5V7.5"
                        stroke={`${
                          background == "white" ? "#000060AB" : "white"
                        }`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.3335 11.6667L17.5002 2.5"
                        stroke={`${
                          background == "white" ? "#000060AB" : "white"
                        }`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`${
                      background == "white" ? "__app__white__conversation" : ""
                    }`}
                  >
                    Updates & FAQ
                  </h3>
                </div>
              </a>

              {/* Logout section */}
              <a href="" className="__bottom__lst__item">
                <div className="flex gap-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                        stroke="#ED8C8C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3335 14.1667L17.5002 10L13.3335 5.83334"
                        stroke="#ED8C8C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 10H7.5"
                        stroke="#ED8C8C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="__logout">Logout</h3>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </>
    );
  }

  return (
    <div className="__conversation__template h-full">
      {aside()}
      {sidebarOpen && (
        <div ref={sidebarRef}>
          {/* Sidebar for mobile screen size display */}
          {aside()}
        </div>
      )}
      <div className="__main__page">{props.children}</div>
    </div>
  );
}

export default ConversationTemplate;
