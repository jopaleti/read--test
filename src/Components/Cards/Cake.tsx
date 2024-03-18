import { lb, lt, rb } from "../../assets";
import "./Cake.scss";

function Cake(props: any) {
  return (
    <div className="birthday flex justify-center items-center">
      <main className="__main flex flex-col gap-4 items-center justify-center relative">
        <div className="__text__top pt-10">
          <h2>Hey</h2>
          <h1>{props.user ? props.user : "Kate"},</h1>
        </div>
        <div className="__text__middle mt-4">
          <h1>
            {props.designText.headline
              ? props.designText.headline
              : "Happy Birthday"}
          </h1>
          <h2>
            {props.designText.additional_info
              ? props.designText.additional_info
              : ""}{" "}
          </h2>
        </div>
        <div className="__text__bottom flex flex-col items-center justify-center">
          <p>{props.user ? props.user : ""}</p>
          <img src={props.file ? props.file : ""} alt="img.jpg" />
        </div>
        {/* Four corners design */}
        <div className="absolute top-0 right-0">
          <img src={lt} alt="" className="w-10" />
        </div>
        <div className="absolute br">
          <img src={rb} alt="" />
        </div>
        <div className="absolute lb">
          <img src={lb} alt="" />
        </div>
      </main>
    </div>
  );
}

export default Cake;
