import { r } from "../../assets";
import "./Welcome.scss";
import Wcafrd from "../Wcard/Wcafrd";
import { obj } from "../../Constants/data.type";

function Welcome(props: { ls: obj[];  link_to?: string}) {
  const { ls, link_to } = props
  
  return (
    <div className="welcome__container__ flex justify-center items-center pt-8 h-lvh">
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={r} alt="r.png" />
          <h1>
            Welcome to <br />
            Readiily
          </h1>
          <h6>Graphics Made Easy</h6>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_617_608)">
                  <path
                    d="M10.5002 14.1667C12.8013 14.1667 14.6668 12.3012 14.6668 10C14.6668 7.69885 12.8013 5.83337 10.5002 5.83337C8.19898 5.83337 6.3335 7.69885 6.3335 10C6.3335 12.3012 8.19898 14.1667 10.5002 14.1667Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 0.833374V2.50004"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 17.5V19.1667"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.0166 3.51672L5.19993 4.70006"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7998 15.3L16.9831 16.4834"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.3335 10H3.00016"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 10H19.6667"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.0166 16.4834L5.19993 15.3"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7998 4.70006L16.9831 3.51672"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_617_608">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="mt-3 icon__txt">Examples</h1>
            </div>
          </div>
          {/* List container */}
          <div className="flex flex-col gap-8 mt-8">
            {
              ls.map((out) => (
                <Wcafrd key={out.id} text={out.text}  />
              ))
            }
          </div>
        </div>
        <div className="next__btn">
          <Wcafrd type="btn" text="Next" link_to={link_to} />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
