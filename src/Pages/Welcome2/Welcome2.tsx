import { Suspense, lazy } from "react";
// import { Welcome } from "../../Components";
import { obj } from "../../Constants/data.type";
import Start from "../Start/Start";
import { useContext } from "react";
import { BackgroundContext } from "../../Components/Context";

const Welcome = lazy(() =>
  import("../../Components").then((module) => ({
    default: module.Welcome,
  }))
);
function Welcome2() {
  // Background context
  const { background } = useContext(BackgroundContext);

  const ls: obj[] = [
    {
      id: 1,
      text: "Generate graphic designs with prompt",
    },
    {
      id: 2,
      text: "Allows user to provide follow-up corrections",
    },
    {
      id: 3,
      text: "Trained to decline inappropriate requests`",
    },
  ];
  const svg: any = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
    >
      <path
        d="M1.03857 12.5385L11.8078 1L9.50011 9.46154H17.9617L7.19242 21L9.50011 12.5385H1.03857Z"
        stroke={`${background == "white" ? "#000060AB" : "white"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="h-full animate__animated animate__backInLeft">
      <Suspense fallback={<Start />}>
        <Welcome ls={ls} svg={svg} link_to="/welcome_3" />
      </Suspense>
    </div>
  );
}

export default Welcome2;
