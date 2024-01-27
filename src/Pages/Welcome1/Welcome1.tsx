import { Welcome } from "../../Components"
import { obj } from "../../Constants/data.type";
import { useContext } from "react";
import { BackgroundContext } from "../../Components/Context";

function Welcome1() {
  // Background context
  const { background } = useContext(BackgroundContext);

  const ls: obj[] = [
    {
      id: 1,
      text: "“Generate a design for our black friday with promo code 4444”",
    },
    {
      id: 2,
      text: "“A new year post with for an healthtech startup”",
    },
    {
      id: 3,
      text: "“A new month design with illustration”",
    },
  ];
   const svg: any = (
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
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M10.5 0.833374V2.50004"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M10.5 17.5V19.1667"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M4.0166 3.51672L5.19993 4.70006"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M15.7998 15.3L16.9831 16.4834"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M1.3335 10H3.00016"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M18 10H19.6667"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M4.0166 16.4834L5.19993 15.3"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
           stroke-linecap="round"
           stroke-linejoin="round"
         />
         <path
           d="M15.7998 4.70006L16.9831 3.51672"
           stroke={`${background == "white" ? "#000060AB" : "white"}`}
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
   );
  return (
    <div className="animate__animated animate__backInLeft h-full">
      <Welcome ls={ls} svg={svg} link_to="/welcome_2" />
    </div>
  );
}

export default Welcome1