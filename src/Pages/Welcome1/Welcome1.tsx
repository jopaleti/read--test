import { Welcome } from "../../Components"
import { obj } from "../../Constants/data.type";

function Welcome1() {
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
  return (
    <div className="animate__animated animate__backInLeft">
      <Welcome ls={ls} link_to="/welcome_2" />
    </div>
  );
}

export default Welcome1