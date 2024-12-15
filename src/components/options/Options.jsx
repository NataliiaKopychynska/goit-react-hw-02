// import { useState } from "react";
import stl from "./Options.module.css";

export default function Options({ handlClick, reset, totalFeedback }) {
  //   const [goodCount, setGoodCount] = useState(0);
  //   const handlClickGood = () => {
  //     setGoodCount((p) => p + 1);
  //   };

  return (
    <div className={stl.conainer}>
      <button onClick={() => handlClick("good")} className={stl.btn}>
        Good
      </button>
      <button onClick={() => handlClick("neutral")} className={stl.btn}>
        Neutral
      </button>
      <button onClick={() => handlClick("bad")} className={stl.btn}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button onClick={reset} className={stl.btn}>
          Reset
        </button>
      )}
    </div>
  );
}
