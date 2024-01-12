import { Welcome } from "../../Components";
import { obj } from "../../Constants/data.type";

function Welcome3() {
  const ls: obj[] = [
    {
      id: 1,
      text: "May occasionally generate incorrect graphics",
    },
    {
      id: 2,
      text: "May occasionally give wrong content ideas",
    },
    {
      id: 3,
      text: "Limited knowledge of world and events after 2021",
    },
  ];

  return (
    <div className="animate__animated animate__backInLeft">
      <Welcome ls={ls} />
    </div>
  );
}

export default Welcome3;
