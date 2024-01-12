import { readily } from "../../assets";
import "./Sign.scss";

function Sign() {
  return (
    <>
        <div className="sign__ flex justify-center flex-col gap-6">
            <img src={readily} alt="" />
            <h1 className="h__">Sign up for Readiily</h1>
        </div>
    </>
  )
}

export default Sign