import { b } from "../../assets";
import "./Birthday.scss";

function Birthday(props: any) {
  return (
    <div className="birthday flex justify-center items-center">
      <main className="__main">
        <div className="flex gap-2">
          <img src={props.file ? props.file : ""} alt="" />
          <div className="__left flex flex-col gap-4">
            <div>
              <h1>HAPPY</h1>
              <span>Birthday</span>
            </div>
            <div className="__left__bottom">
              <p>{props.user ? props.user.split(" ")[0] : ""}</p>
              <h2>{props.user ? props.user.split(" ")[1] : ""}</h2>
            </div>
          </div>
        </div>
        <div className="bottom px-2 py-4 flex flex-col justify-between items-center">
          <div>
            <h2>{props.designText.additional_info ? props.designText.additional_info : ""}</h2>
            {/* <h2>WE APPRECIATE YOU</h2>
            <h2>WE HONOR YOU AND LOVE YOU</h2> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Birthday;
