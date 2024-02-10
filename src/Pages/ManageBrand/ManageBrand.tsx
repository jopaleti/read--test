import "./ManageBrand.scss";
import { useState, useContext } from "react";
import { BackgroundContext } from "../../Components/Context";
import LightToggle from "../../Layouts/LightToggle/LightToggle";

function ManageBrand() {
  const { background } = useContext(BackgroundContext);
  const [open, setOpen] = useState(false);
  return (
    <LightToggle>
      <div className="manage__brand__container">
        <div>
          <div className="flex gap-4 items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M8.38462 15.5L1 8.5L8.38462 1.5M2.02564 8.5H17"
                  stroke={`${background == "white" ? "#000060" : "#fff"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <h2
              className={`brand__text ${
                background == "white" ? "__app__white__text" : ""
              }`}
            >
              Brands
            </h2>
          </div>
          {/* Create brand functionality button */}
          <div className="mt-4 brand__container flex gap-4 items-center">
            <button
              onClick={() => setOpen(false)}
              className={`__btn ${!open ? "__active_" : ""} ${
                background == "white" ? "__app__white__text" : ""
              }`}
            >
              Create Brand
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`__btn ${open ? "__active_" : ""} ${
                background == "white" ? "__app__white__text" : ""
              }`}
            >
              Manage Brand
            </button>
          </div>

          {/* Manage Brand Created container */}

          {!open && (
            <div className="mt-2">
              {/* Manage content container */}
              <div className="pb-2 flex gap-6 items-center __brand">
                <h2
                  className={`__manage__txt ${
                    background == "white" ? "__app__white__text" : ""
                  }`}
                >
                  Your Brands
                </h2>
                <button
                  className={`__manage__txt ${
                    background == "white" ? "__app__white__btn__bg" : ""
                  }`}
                >
                  ADD NEW BRAND
                </button>
              </div>
              <hr className="__hr" />
              {/* Brands created container */}
              <div className="brand__created__container mt-2">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
                    <thead className="text-xs uppercase">
                      <tr className="border-b border-gray-800 dark:border-gray-700">
                        <th
                          scope="col"
                          className={`px-6 py-3 ${
                            background == "white" ? "__app__white__text" : ""
                          }`}
                        >
                          Brand(s)
                        </th>
                        <th
                          scope="col"
                          className={`px-6 py-3 ${
                            background == "white" ? "__app__white__text" : ""
                          }`}
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-white whitespace-nowrap"
                        >
                          <div className="flex flex-col justify-start gap-3">
                            <h3
                              className={`__brand_name ${
                                background == "white"
                                  ? "__app__white__name"
                                  : ""
                              }`}
                            >
                              Ayomi brand
                            </h3>
                            <div className="flex items-center gap-2">
                              <h6 className="__code">6d68640a7f993</h6>
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <rect
                                    x="0.5"
                                    y="0.499695"
                                    width="6.99996"
                                    height="6.99996"
                                    stroke="#B1ADAD"
                                  />
                                  <rect
                                    x="4.00049"
                                    y="3.99982"
                                    width="7.99996"
                                    height="7.99996"
                                    fill="#B1ADAD"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">
                          <div className="flex gap-4 items-center">
                            <h2>Active</h2>
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M5.66634 2.33333H8.33301C8.33301 1.97971 8.19253 1.64057 7.94248 1.39052C7.69243 1.14048 7.3533 1 6.99967 1C6.64605 1 6.30691 1.14048 6.05687 1.39052C5.80682 1.64057 5.66634 1.97971 5.66634 2.33333ZM4.66634 2.33333C4.66634 2.02692 4.72669 1.7235 4.84396 1.44041C4.96122 1.15731 5.13309 0.900087 5.34976 0.683417C5.56643 0.466747 5.82365 0.294875 6.10675 0.177614C6.38984 0.0603535 6.69326 0 6.99967 0C7.30609 0 7.60951 0.0603535 7.8926 0.177614C8.17569 0.294875 8.43292 0.466747 8.64959 0.683417C8.86626 0.900087 9.03813 1.15731 9.15539 1.44041C9.27265 1.7235 9.33301 2.02692 9.33301 2.33333H13.1663C13.2989 2.33333 13.4261 2.38601 13.5199 2.47978C13.6137 2.57355 13.6663 2.70072 13.6663 2.83333C13.6663 2.96594 13.6137 3.09312 13.5199 3.18689C13.4261 3.28065 13.2989 3.33333 13.1663 3.33333H12.2863L11.5063 11.4073C11.4465 12.026 11.1584 12.6002 10.6981 13.0179C10.2379 13.4356 9.63855 13.6669 9.01701 13.6667H4.98234C4.36092 13.6667 3.76174 13.4354 3.30164 13.0177C2.84154 12.6 2.5535 12.0259 2.49367 11.4073L1.71301 3.33333H0.833008C0.7004 3.33333 0.573223 3.28065 0.479454 3.18689C0.385686 3.09312 0.333008 2.96594 0.333008 2.83333C0.333008 2.70072 0.385686 2.57355 0.479454 2.47978C0.573223 2.38601 0.7004 2.33333 0.833008 2.33333H4.66634ZM5.99967 5.5C5.99967 5.36739 5.947 5.24021 5.85323 5.14645C5.75946 5.05268 5.63228 5 5.49967 5C5.36707 5 5.23989 5.05268 5.14612 5.14645C5.05235 5.24021 4.99967 5.36739 4.99967 5.5V10.5C4.99967 10.6326 5.05235 10.7598 5.14612 10.8536C5.23989 10.9473 5.36707 11 5.49967 11C5.63228 11 5.75946 10.9473 5.85323 10.8536C5.947 10.7598 5.99967 10.6326 5.99967 10.5V5.5ZM8.49967 5C8.36707 5 8.23989 5.05268 8.14612 5.14645C8.05235 5.24021 7.99967 5.36739 7.99967 5.5V10.5C7.99967 10.6326 8.05235 10.7598 8.14612 10.8536C8.23989 10.9473 8.36707 11 8.49967 11C8.63228 11 8.75946 10.9473 8.85323 10.8536C8.947 10.7598 8.99967 10.6326 8.99967 10.5V5.5C8.99967 5.36739 8.947 5.24021 8.85323 5.14645C8.75946 5.05268 8.63228 5 8.49967 5Z"
                                  fill="#FF0000"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Create Brand Container */}
          {open && (
            <div className="__create__container mt-2">
              <div
                className={`__set__brand ${
                  background == "white"
                    ? "__app__white__input __app__input"
                    : ""
                }`}
              >
                <h1
                  className={`${
                    background == "white" ? "__app__white__text" : ""
                  }`}
                >
                  Set your brand’s name
                </h1>
                <input
                  type="text"
                  placeholder="My Brand"
                  className={`shadow-2xl py-3 px-4 mt-2 w-full ${
                    background == "white" ? "__app__white__input" : ""
                  }`}
                />
              </div>
              {/* Brand Color */}
              <div
                className={`__brand__color mt-3 w-full px-2 py-2 relative ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <h1
                  className={`${
                    background == "white" ? "__app__white__text" : ""
                  }`}
                >
                  Brand Colors
                </h1>
                <div className="mt-2 relative flex items-center gap-3">
                  <div>
                    <div
                      className="rounded-full"
                      style={{
                        background: "#FF543E",
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <button className="absolute top-0 left-7 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.99984 14.1667L9.99984 11.1667L12.9998 14.1667L14.1665 13L11.1665 10L14.1665 7.00002L12.9998 5.83335L9.99984 8.83335L6.99984 5.83335L5.83317 7.00002L8.83317 10L5.83317 13L6.99984 14.1667ZM9.99984 18.3334C8.84706 18.3334 7.76373 18.1145 6.74984 17.6767C5.73595 17.2389 4.854 16.6453 4.104 15.8959C3.354 15.1459 2.76039 14.2639 2.32317 13.25C1.88595 12.2361 1.66706 11.1528 1.6665 10C1.6665 8.84724 1.88539 7.76391 2.32317 6.75002C2.76095 5.73613 3.35456 4.85419 4.104 4.10419C4.854 3.35419 5.73595 2.76058 6.74984 2.32335C7.76373 1.88613 8.84706 1.66724 9.99984 1.66669C11.1526 1.66669 12.2359 1.88558 13.2498 2.32335C14.2637 2.76113 15.1457 3.35474 15.8957 4.10419C16.6457 4.85419 17.2396 5.73613 17.6773 6.75002C18.1151 7.76391 18.3337 8.84724 18.3332 10C18.3332 11.1528 18.1143 12.2361 17.6765 13.25C17.2387 14.2639 16.6451 15.1459 15.8957 15.8959C15.1457 16.6459 14.2637 17.2397 13.2498 17.6775C12.2359 18.1153 11.1526 18.3339 9.99984 18.3334ZM9.99984 16.6667C11.8609 16.6667 13.4373 16.0209 14.729 14.7292C16.0207 13.4375 16.6665 11.8611 16.6665 10C16.6665 8.13891 16.0207 6.56252 14.729 5.27085C13.4373 3.97919 11.8609 3.33335 9.99984 3.33335C8.13873 3.33335 6.56234 3.97919 5.27067 5.27085C3.979 6.56252 3.33317 8.13891 3.33317 10C3.33317 11.8611 3.979 13.4375 5.27067 14.7292C6.56234 16.0209 8.13873 16.6667 9.99984 16.6667Z"
                          fill={`${background == "white" ? "#000060" : "#fff"}`}
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Add color button */}
                  <div>
                    <button
                      onClick={() => {
                        setOpen((prev) => !prev);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M25 3.90625C20.8281 3.90625 16.7498 5.14338 13.2809 7.46119C9.8121 9.779 7.10846 13.0734 5.51193 16.9278C3.91539 20.7822 3.49766 25.0234 4.31157 29.1152C5.12548 33.207 7.13446 36.9655 10.0845 39.9155C13.0345 42.8655 16.793 44.8745 20.8848 45.6884C24.9766 46.5023 29.2179 46.0846 33.0722 44.4881C36.9266 42.8915 40.221 40.1879 42.5388 36.7191C44.8566 33.2502 46.0938 29.1719 46.0938 25C46.0876 19.4075 43.8632 14.0458 39.9087 10.0913C35.9542 6.13682 30.5925 3.91245 25 3.90625ZM25 41.4062C21.7552 41.4062 18.5832 40.444 15.8852 38.6413C13.1872 36.8386 11.0844 34.2762 9.84261 31.2784C8.60086 28.2805 8.27596 24.9818 8.909 21.7993C9.54204 18.6168 11.1046 15.6935 13.399 13.399C15.6935 11.1046 18.6168 9.54203 21.7993 8.90899C24.9818 8.27595 28.2806 8.60085 31.2784 9.8426C34.2763 11.0844 36.8386 13.1872 38.6413 15.8852C40.444 18.5832 41.4063 21.7551 41.4063 25C41.4016 29.3498 39.6716 33.5201 36.5958 36.5958C33.5201 39.6716 29.3498 41.4016 25 41.4062ZM35.1563 25C35.1563 25.6216 34.9093 26.2177 34.4698 26.6573C34.0303 27.0968 33.4341 27.3438 32.8125 27.3438H27.3438V32.8125C27.3438 33.4341 27.0968 34.0302 26.6573 34.4698C26.2178 34.9093 25.6216 35.1562 25 35.1562C24.3784 35.1562 23.7823 34.9093 23.3427 34.4698C22.9032 34.0302 22.6563 33.4341 22.6563 32.8125V27.3438H17.1875C16.5659 27.3438 15.9698 27.0968 15.5302 26.6573C15.0907 26.2177 14.8438 25.6216 14.8438 25C14.8438 24.3784 15.0907 23.7823 15.5302 23.3427C15.9698 22.9032 16.5659 22.6562 17.1875 22.6562H22.6563V17.1875C22.6563 16.5659 22.9032 15.9698 23.3427 15.5302C23.7823 15.0907 24.3784 14.8438 25 14.8438C25.6216 14.8438 26.2178 15.0907 26.6573 15.5302C27.0968 15.9698 27.3438 16.5659 27.3438 17.1875V22.6562H32.8125C33.4341 22.6562 34.0303 22.9032 34.4698 23.3427C34.9093 23.7823 35.1563 24.3784 35.1563 25Z"
                          fill={`${background == "white" ? "#000060" : "#fff"}`}
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Adding Modal Box */}
                {/* {open && (
                  <div className="py-3 __modal__color fixed top-1/4">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
                        <thead className="text-xs uppercase">
                          <tr className="border-b border-gray-800 dark:border-gray-700">
                            <th scope="col" className="px-6 py-3">
                              <div className="flex flex-col gap-2 items-start">
                                <small>F7A4A4</small>
                                <small className="text-center">Hex</small>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <div className="flex flex-col gap-2 items-start">
                                <small>247</small>
                                <small className="text-center">R</small>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <div className="flex flex-col gap-2 items-start">
                                <small>164</small>
                                <small className="text-center">G</small>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <div className="flex flex-col gap-2 items-start">
                                <small>164</small>
                                <small className="text-center">B</small>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-white whitespace-nowrap"
                            >
                              <button className="__select__color">MAIN</button>
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-white whitespace-nowrap"
                            >
                              <button className="__select__color">
                                SECONDARY
                              </button>
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-white whitespace-nowrap"
                            >
                              <button className="__select__color">OTHER</button>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )} */}
              </div>

              {/* Font Container */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Font
                  </h1>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    FontUse a Custom Font
                  </h1>
                </div>
                <div className="select-group mt-3">
                  <select
                    id="countries"
                    className={` border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ${
                      background == "white" ? "__select" : ""
                    } `}
                  >
                    <option selected>Search for a font</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              {/* Logo for light */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Logo for Light Background
                  </h1>
                </div>
                <div
                  className={`mt-3 __upload__container p-2.5 relative z-0 flex w-full items-center justify-between ${
                    background == "white"
                      ? "__app__white__upload__container"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <label>
                      <input
                        id="photobutton"
                        type="file"
                        className="hidden w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      />
                      <div className="__input__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="27"
                          viewBox="0 0 31 27"
                          fill="none"
                        >
                          <path
                            opacity="0.5"
                            d="M0.916992 13.7589C0.916992 7.52406 0.916992 4.40665 3.05199 2.46902C5.18991 0.532715 8.62574 0.532715 15.5003 0.532715C22.3749 0.532715 25.8122 0.532715 27.9472 2.46902C30.0837 4.40798 30.0837 7.52406 30.0837 13.7589C30.0837 19.9937 30.0837 23.1111 27.9472 25.0474C25.8137 26.985 22.3749 26.985 15.5003 26.985C8.62574 26.985 5.18845 26.985 3.05199 25.0474C0.916992 23.1124 0.916992 19.9937 0.916992 13.7589Z"
                            fill={`${
                              background == "white" ? "#472B90" : "black"
                            }`}
                          />
                          <path
                            d="M9.66699 8.13773C9.37691 8.13773 9.09871 8.03322 8.89359 7.84719C8.68848 7.66116 8.57324 7.40885 8.57324 7.14577C8.57324 6.88269 8.68848 6.63038 8.89359 6.44435C9.09871 6.25832 9.37691 6.15381 9.66699 6.15381H21.3337C21.6237 6.15381 21.9019 6.25832 22.1071 6.44435C22.3122 6.63038 22.4274 6.88269 22.4274 7.14577C22.4274 7.40885 22.3122 7.66116 22.1071 7.84719C21.9019 8.03322 21.6237 8.13773 21.3337 8.13773H9.66699ZM16.5941 20.3719C16.5941 20.635 16.4788 20.8873 16.2737 21.0733C16.0686 21.2594 15.7904 21.3639 15.5003 21.3639C15.2102 21.3639 14.932 21.2594 14.7269 21.0733C14.5218 20.8873 14.4066 20.635 14.4066 20.3719V13.5075L11.8982 15.7824C11.6909 15.9577 11.4167 16.0531 11.1333 16.0485C10.85 16.044 10.5796 15.9399 10.3792 15.7581C10.1788 15.5764 10.064 15.3312 10.059 15.0742C10.054 14.8172 10.1592 14.5685 10.3524 14.3805L14.7274 10.4126C14.9325 10.2269 15.2105 10.1225 15.5003 10.1225C15.7902 10.1225 16.0682 10.2269 16.2732 10.4126L20.6482 14.3805C20.7557 14.4713 20.8419 14.5808 20.9017 14.7025C20.9615 14.8242 20.9936 14.9555 20.9962 15.0887C20.9988 15.2219 20.9718 15.3542 20.9168 15.4777C20.8617 15.6012 20.7799 15.7134 20.676 15.8076C20.5721 15.9018 20.4484 15.9761 20.3122 16.026C20.176 16.0759 20.0302 16.1004 19.8833 16.098C19.7365 16.0957 19.5916 16.0665 19.4575 16.0123C19.3233 15.9581 19.2025 15.8799 19.1024 15.7824L16.5941 13.5075V20.3719Z"
                            fill={`${
                              background == "white" ? "#472B90" : "white"
                            }`}
                          />
                        </svg>
                      </div>
                    </label>
                    <h3>Upload</h3>
                  </div>
                  <button type="submit" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M8.99984 0.858887C13.6082 0.858887 17.3332 4.23722 17.3332 8.41669C17.3332 12.5961 13.6082 15.9745 8.99984 15.9745C4.3915 15.9745 0.666504 12.5961 0.666504 8.41669C0.666504 4.23722 4.3915 0.858887 8.99984 0.858887ZM11.9915 4.63779L8.99984 7.35104L6.00817 4.63779L4.83317 5.70344L7.82484 8.41669L4.83317 11.1299L6.00817 12.1956L8.99984 9.48234L11.9915 12.1956L13.1665 11.1299L10.1748 8.41669L13.1665 5.70344L11.9915 4.63779Z"
                        fill={`${background == "white" ? "#472B90" : "white"}`}
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Logo for Dark Background */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Logo for Dark Background
                  </h1>
                </div>
                <div
                  className={`mt-3 __upload__container p-2.5 relative z-0 flex w-full items-center justify-between ${
                    background == "white"
                      ? "__app__white__upload__container"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <label>
                      <input
                        id="photobutton"
                        type="file"
                        className="hidden w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      />
                      <div className="__input__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="27"
                          viewBox="0 0 31 27"
                          fill="none"
                        >
                          <path
                            opacity="0.5"
                            d="M0.916992 13.7589C0.916992 7.52406 0.916992 4.40665 3.05199 2.46902C5.18991 0.532715 8.62574 0.532715 15.5003 0.532715C22.3749 0.532715 25.8122 0.532715 27.9472 2.46902C30.0837 4.40798 30.0837 7.52406 30.0837 13.7589C30.0837 19.9937 30.0837 23.1111 27.9472 25.0474C25.8137 26.985 22.3749 26.985 15.5003 26.985C8.62574 26.985 5.18845 26.985 3.05199 25.0474C0.916992 23.1124 0.916992 19.9937 0.916992 13.7589Z"
                            fill={`${
                              background == "white" ? "#472B90" : "black"
                            }`}
                          />
                          <path
                            d="M9.66699 8.13773C9.37691 8.13773 9.09871 8.03322 8.89359 7.84719C8.68848 7.66116 8.57324 7.40885 8.57324 7.14577C8.57324 6.88269 8.68848 6.63038 8.89359 6.44435C9.09871 6.25832 9.37691 6.15381 9.66699 6.15381H21.3337C21.6237 6.15381 21.9019 6.25832 22.1071 6.44435C22.3122 6.63038 22.4274 6.88269 22.4274 7.14577C22.4274 7.40885 22.3122 7.66116 22.1071 7.84719C21.9019 8.03322 21.6237 8.13773 21.3337 8.13773H9.66699ZM16.5941 20.3719C16.5941 20.635 16.4788 20.8873 16.2737 21.0733C16.0686 21.2594 15.7904 21.3639 15.5003 21.3639C15.2102 21.3639 14.932 21.2594 14.7269 21.0733C14.5218 20.8873 14.4066 20.635 14.4066 20.3719V13.5075L11.8982 15.7824C11.6909 15.9577 11.4167 16.0531 11.1333 16.0485C10.85 16.044 10.5796 15.9399 10.3792 15.7581C10.1788 15.5764 10.064 15.3312 10.059 15.0742C10.054 14.8172 10.1592 14.5685 10.3524 14.3805L14.7274 10.4126C14.9325 10.2269 15.2105 10.1225 15.5003 10.1225C15.7902 10.1225 16.0682 10.2269 16.2732 10.4126L20.6482 14.3805C20.7557 14.4713 20.8419 14.5808 20.9017 14.7025C20.9615 14.8242 20.9936 14.9555 20.9962 15.0887C20.9988 15.2219 20.9718 15.3542 20.9168 15.4777C20.8617 15.6012 20.7799 15.7134 20.676 15.8076C20.5721 15.9018 20.4484 15.9761 20.3122 16.026C20.176 16.0759 20.0302 16.1004 19.8833 16.098C19.7365 16.0957 19.5916 16.0665 19.4575 16.0123C19.3233 15.9581 19.2025 15.8799 19.1024 15.7824L16.5941 13.5075V20.3719Z"
                            fill={`${
                              background == "white" ? "#472B90" : "white"
                            }`}
                          />
                        </svg>
                      </div>
                    </label>
                    <h3>Upload</h3>
                  </div>
                  <button type="submit" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M8.99984 0.858887C13.6082 0.858887 17.3332 4.23722 17.3332 8.41669C17.3332 12.5961 13.6082 15.9745 8.99984 15.9745C4.3915 15.9745 0.666504 12.5961 0.666504 8.41669C0.666504 4.23722 4.3915 0.858887 8.99984 0.858887ZM11.9915 4.63779L8.99984 7.35104L6.00817 4.63779L4.83317 5.70344L7.82484 8.41669L4.83317 11.1299L6.00817 12.1956L8.99984 9.48234L11.9915 12.1956L13.1665 11.1299L10.1748 8.41669L13.1665 5.70344L11.9915 4.63779Z"
                        fill={`${background == "white" ? "#472B90" : "white"}`}
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Brand Industry */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Brand industry
                  </h1>
                </div>
                <div className="select-group mt-3">
                  <select
                    id="countries"
                    className={` border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ${
                      background == "white" ? "__select" : ""
                    } `}
                  >
                    <option selected>Select your industry</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>

              {/* Brand Social Media */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Brand industry
                  </h1>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="select-group w-2/5">
                    <select
                      id="countries"
                      className={` border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 ${
                        background == "white" ? "__select" : ""
                      } `}
                    >
                      <option selected>Brand Social Handle</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div
                    className={`w-1/2 __upload__container p-2.5 relative z-0 flex items-center justify-between ${
                      background == "white"
                        ? "__app__white__upload__container"
                        : ""
                    }`}
                  >
                    <h3>Enter your handle</h3>
                    <button type="submit" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                      >
                        <path
                          d="M8.99984 0.858887C13.6082 0.858887 17.3332 4.23722 17.3332 8.41669C17.3332 12.5961 13.6082 15.9745 8.99984 15.9745C4.3915 15.9745 0.666504 12.5961 0.666504 8.41669C0.666504 4.23722 4.3915 0.858887 8.99984 0.858887ZM11.9915 4.63779L8.99984 7.35104L6.00817 4.63779L4.83317 5.70344L7.82484 8.41669L4.83317 11.1299L6.00817 12.1956L8.99984 9.48234L11.9915 12.1956L13.1665 11.1299L10.1748 8.41669L13.1665 5.70344L11.9915 4.63779Z"
                          fill={`${
                            background == "white" ? "#472B90" : "white"
                          }`}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Brand Website */}
              <div
                className={`__font__container w-full mt-4 p-4 ${
                  background == "white" ? "__app__white__container__bg" : ""
                }`}
              >
                <div>
                  <h1
                    className={`${
                      background == "white" ? "__app__white__text" : ""
                    }`}
                  >
                    Brand Website
                  </h1>
                </div>
                <div
                  className={`select-group mt-3 ${
                    background == "white" ? " __app__input" : ""
                  }`}
                >
                  <input
                    type="text"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 __input__site ${
                      background == "white" ? "__app__input__container" : ""
                    }`}
                    placeholder="www.website.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              className={`__brand__submit__btn py-3 px-2 ${
                background == "white" ? "__app__white__btn__bg" : ""
              }`}
            >
              Create brand
            </button>
          </div>
        </div>
      </div>
    </LightToggle>
  );
}

export default ManageBrand;
