import { useContext } from "react";
import "./Conversation.scss";
import { ConversationTemplate } from "../../Components";
import { drop, r } from "../../assets";
// Import SidebarContext Component
import { SidebarContext, BackgroundContext } from "../../Components/Context";

function Conversation() {
  // Use Background Context
  const { background } = useContext(BackgroundContext);

  // SidarContext Usage
  const { setSidebarOpen } = useContext(SidebarContext);

  return (
    <div className="__conversation__container h-full">
      <ConversationTemplate>
        <div className="__main__conversation__container p-4 w-full">
          <div className="__sub__container__top">
            <div className="__top__flex flex items-start justify-between w-full">
              {/* Menu icon for small screen size */}
              <div className="___menu">
                <button
                  onClick={() =>
                    setSidebarOpen((prevState: boolean) => !prevState)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="11"
                    viewBox="0 0 22 11"
                    fill="none"
                  >
                    <line
                      x1="0.901855"
                      y1="1.375"
                      x2="21.0381"
                      y2="1.375"
                      stroke="#000060"
                    />
                    <line
                      x1="0.901855"
                      y1="1.375"
                      x2="21.0381"
                      y2="1.375"
                      stroke="#000060"
                    />
                    <line
                      x1="0.901855"
                      y1="1.375"
                      x2="21.0381"
                      y2="1.375"
                      stroke={`${
                        background == "white" ? "#000060AB" : "white"
                      }`}
                    />
                    <line
                      x1="0.929199"
                      y1="9.875"
                      x2="14.0108"
                      y2="9.875"
                      stroke="#000060"
                    />
                    <line
                      x1="0.929199"
                      y1="9.875"
                      x2="14.0108"
                      y2="9.875"
                      stroke="#000060"
                    />
                    <line
                      x1="0.929199"
                      y1="9.875"
                      x2="14.0108"
                      y2="9.875"
                      stroke={`${
                        background == "white" ? "#000060AB" : "white"
                      }`}
                    />
                  </svg>
                </button>
              </div>
              <img src={r} alt="logo.jpg" />
            </div>
          </div>
          <div className="__sub__container__middle">
            {/* Empty conversation chat */}
            {/* <div className="__empty__conversation h-full w-full flex justify-center items-center">
              <h2
                className={`${
                  background == "white" && "__app__white__text__h2 "
                }`}
              >
                Think the design, get it here
              </h2>
            </div> */}
            <section className="w-full">
              {/* Contains conversation chat */}
              <div className="__chat__container">
                <h2
                  className={`__chat__text__user ${
                    background == "white" && "__app__white__chat__text__user"
                  }`}
                >
                  I need a promotional flyer.
                </h2>

                <div className="__chat__text__incoming mt-8">
                  <h2 className="flex gap-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <circle
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        fill={`${background == "white" ? "#000000" : "white"}`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <circle
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        fill={`${background == "white" ? "#000000" : "white"}`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <circle
                        cx="4.5"
                        cy="4.5"
                        r="4.5"
                        fill={`${background == "white" ? "#000000" : "white"}`}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h2>
                </div>
              </div>

              {/* Generative Design */}
              {/* <div className="__chat__container">
                <h2
                  className={`__chat__text__user ${
                    background == "white" && "__app__white__chat__text__user"
                  }`}
                >
                  I need a promotional flyer.
                </h2>

                <div className="__chat__text__incoming__img mt-8">
                  <div className="flex flex-col">
                    <div className="__incoming__img">
                      <img src={img} alt="img.jpg" className="h-full w-full" />
                    </div>
                    <div className="mt-3 __incoming__react flex items-center gap-10">
                      <div className="flex items-center gap-4">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                          >
                            <path
                              d="M5.33317 8.16666L8.6665 0.666656C9.32954 0.666656 9.96543 0.930049 10.4343 1.39889C10.9031 1.86773 11.1665 2.50362 11.1665 3.16666V6.49999H15.8832C16.1248 6.49725 16.3641 6.54708 16.5845 6.646C16.8049 6.74493 17.0012 6.8906 17.1597 7.07292C17.3183 7.25524 17.4353 7.46984 17.5026 7.70187C17.57 7.93389 17.5861 8.17779 17.5498 8.41666L16.3998 15.9167C16.3396 16.3141 16.1377 16.6763 15.8314 16.9367C15.5252 17.197 15.1351 17.3379 14.7332 17.3333H5.33317M5.33317 8.16666V17.3333M5.33317 8.16666H2.83317C2.39114 8.16666 1.96722 8.34225 1.65466 8.65481C1.3421 8.96737 1.1665 9.3913 1.1665 9.83332V15.6667C1.1665 16.1087 1.3421 16.5326 1.65466 16.8452C1.96722 17.1577 2.39114 17.3333 2.83317 17.3333H5.33317"
                              stroke={`${
                                background == "white" ? "#000000" : "white"
                              }`}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M14.6668 10.8333L11.3335 18.3333C10.6705 18.3333 10.0346 18.07 9.56573 17.6011C9.09689 17.1323 8.8335 16.4964 8.8335 15.8333V12.5H4.11683C3.87524 12.5027 3.63594 12.4529 3.41552 12.354C3.1951 12.2551 2.99882 12.1094 2.84028 11.9271C2.68174 11.7448 2.56474 11.5302 2.49738 11.2981C2.43002 11.0661 2.41391 10.8222 2.45016 10.5833L3.60016 3.08334C3.66043 2.68592 3.8623 2.32367 4.16857 2.06334C4.47485 1.80301 4.86489 1.66213 5.26683 1.66668H14.6668M14.6668 10.8333V1.66668M14.6668 10.8333H17.1668C17.6089 10.8333 18.0328 10.6577 18.3453 10.3452C18.6579 10.0326 18.8335 9.6087 18.8335 9.16668V3.33334C18.8335 2.89132 18.6579 2.46739 18.3453 2.15483C18.0328 1.84227 17.6089 1.66668 17.1668 1.66668H14.6668"
                              stroke={`${
                                background == "white" ? "#000000" : "white"
                              }`}
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                          >
                            <rect
                              x="1"
                              y="0.5"
                              width="6.99996"
                              height="6.99996"
                              stroke={`${
                                background == "white" ? "#000000" : "white"
                              }`}
                            />
                            <rect
                              x="4.50049"
                              y="4.00009"
                              width="7.99996"
                              height="7.99996"
                              fill={`${
                                background == "white" ? "#000000" : "white"
                              }`}
                            />
                          </svg>
                        </button>
                        <button>
                          {background == "white" ? (
                            <h5 className="__app__white__copy__text">Copy</h5>
                          ) : (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                              >
                                <path
                                  d="M9.64286 7.58971L10.924 6.30971C11.1394 6.10138 11.428 5.98597 11.7277 5.98836C12.0273 5.99075 12.3141 6.11074 12.5261 6.32249C12.7381 6.53424 12.8585 6.8208 12.8614 7.12045C12.8642 7.42011 12.7492 7.70888 12.5411 7.92457L9.308 11.1577C9.20211 11.2642 9.07621 11.3487 8.93755 11.4064C8.79888 11.4641 8.65018 11.4938 8.5 11.4938C8.34982 11.4938 8.20112 11.4641 8.06245 11.4064C7.92379 11.3487 7.79789 11.2642 7.692 11.1577L4.45886 7.92457C4.35275 7.81831 4.26861 7.6922 4.21124 7.55342C4.15387 7.41465 4.1244 7.26593 4.12451 7.11576C4.12461 6.9656 4.1543 6.81692 4.21186 6.67823C4.26942 6.53954 4.35374 6.41354 4.46 6.30743C4.56626 6.20132 4.69238 6.11718 4.83115 6.05981C4.96993 6.00245 5.11864 5.97297 5.26881 5.97308C5.41897 5.97319 5.56765 6.00287 5.70634 6.06043C5.84504 6.118 5.97104 6.20231 6.07714 6.30857L7.35714 7.58971V1.14286C7.35714 0.839753 7.47755 0.549062 7.69188 0.334735C7.90621 0.120408 8.1969 0 8.5 0C8.80311 0 9.09379 0.120408 9.30812 0.334735C9.52245 0.549062 9.64286 0.839753 9.64286 1.14286V7.58971ZM1.64286 13.7143H15.3571C15.6602 13.7143 15.9509 13.8347 16.1653 14.049C16.3796 14.2633 16.5 14.554 16.5 14.8571C16.5 15.1602 16.3796 15.4509 16.1653 15.6653C15.9509 15.8796 15.6602 16 15.3571 16H1.64286C1.33975 16 1.04906 15.8796 0.834735 15.6653C0.620408 15.4509 0.5 15.1602 0.5 14.8571C0.5 14.554 0.620408 14.2633 0.834735 14.049C1.04906 13.8347 1.33975 13.7143 1.64286 13.7143Z"
                                  fill="white"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Regenerating the text */}
              {/* <div className="mt-10 __regenerate__text__container w-full flex items-center justify-center">
                Regenerating Button
                <button>
                  <div className="flex items-center gap-2.5 __regenerate__text">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M0.5 2V5H3.5"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.5 10V7H8.5"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.245 4.50001C9.99142 3.7834 9.56043 3.14271 8.99227 2.63772C8.4241 2.13272 7.73727 1.77989 6.99586 1.61214C6.25445 1.44438 5.48262 1.46718 4.7524 1.67839C4.02219 1.88961 3.35737 2.28236 2.82 2.82001L0.5 5.00001M11.5 7.00001L9.18 9.18001C8.64263 9.71765 7.97781 10.1104 7.2476 10.3216C6.51738 10.5328 5.74555 10.5556 5.00414 10.3879C4.26273 10.2201 3.5759 9.86729 3.00773 9.3623C2.43957 8.85731 2.00858 8.21661 1.755 7.50001"
                          stroke="white"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="__regenerate__txt">Regenerate Design</h1>
                  </div>
                </button>
              </div> */}
            </section>
          </div>
          <div className="__sub__container__bottom flex justify-center items-center">
            <div
              className={`__input__bottom relative ${
                background == "white" && "__app__white__input__box__"
              }`}
            >
              {/* <input
                type="text"
                className={`h-full w-full p-3 __input__box ${
                  background == "white" && "__app__white__input__box__"
                }`}
              /> */}
              <div
                className="__send__icon p-1 rounded"
                style={{
                  background: `${
                    background == "white" ? "#000060" : "#0D0D0D"
                  }`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3332 1.66666L9.1665 10.8333"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3332 1.66666L12.4998 18.3333L9.1665 10.8333L1.6665 7.49999L18.3332 1.66666Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {/* Dropdown button */}
              <button className="flex justify-between items-center">
                <h1>Design Details</h1>
                <img src={drop} alt="logo.jpg" />
              </button>
            </div>
          </div>
        </div>
      </ConversationTemplate>
    </div>
  );
}

export default Conversation;
