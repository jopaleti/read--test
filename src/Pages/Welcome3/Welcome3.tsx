import { Welcome } from "../../Components";
import { obj } from "../../Constants/data.type";
import { useContext } from "react";
import { BackgroundContext } from "../../Components/Context";

function Welcome3() {
  // Background context
  const { background } = useContext(BackgroundContext);
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
      text: "generates design in Instagram post size (1080px by 1080px)",
    },
  ];
  const svg: any = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
    >
      <path
        d="M10.6108 2.06364L1.25314 17.6856C1.06021 18.0197 0.95812 18.3985 0.95704 18.7843C0.95596 19.1702 1.05592 19.5495 1.24698 19.8847C1.43804 20.2199 1.71354 20.4992 2.04607 20.6949C2.37859 20.8906 2.75656 20.9958 3.14236 21H21.8577C22.2435 20.9958 22.6215 20.8906 22.954 20.6949C23.2866 20.4992 23.5621 20.2199 23.7531 19.8847C23.9442 19.5495 24.0441 19.1702 24.0431 18.7843C24.042 18.3985 23.9399 18.0197 23.747 17.6856L14.3893 2.06364C14.1923 1.73895 13.915 1.4705 13.5841 1.28419C13.2532 1.09788 12.8798 1 12.5001 1C12.1203 1 11.7469 1.09788 11.416 1.28419C11.0851 1.4705 10.8078 1.73895 10.6108 2.06364Z"
        stroke={`${background == "white" ? "#000060AB" : "white"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 7.74237V12.1616"
        stroke={`${background == "white" ? "#000060AB" : "white"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 16.5808H12.511"
        stroke={`${background == "white" ? "#000060AB" : "white"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="h-full animate__animated animate__backInLeft">
      <Welcome svg={svg} ls={ls}link_to="/conversation" />
    </div>
  );
}

export default Welcome3;
