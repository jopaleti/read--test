import { Suspense, lazy } from "react";
// import { Welcome } from "../../Components";
import { obj } from "../../Constants/data.type";
import Start from "../Start/Start";

const Welcome = lazy(() =>
  import("../../Components").then((module) => ({
    default: module.Welcome,
  }))
);
function Welcome2() {
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

  return (
    <div className="animate__animated animate__backInLeft">
      <Suspense fallback={<Start />}>
        <Welcome ls={ls} link_to="/welcome_3" />
      </Suspense>
    </div>
  );
}

export default Welcome2;
