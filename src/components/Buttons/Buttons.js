import { handleReset } from "../../utils/actions";
import "./Buttons.scss";

export default function Buttons() {
  return (
    <>
      <button className="btn bouncy" type="submit" value="Submit">
        CELEBRATE!
      </button>
      <button className="reset-btn bouncy" type="reset" onClick={handleReset}>
        reset
      </button>
    </>
  );
}
