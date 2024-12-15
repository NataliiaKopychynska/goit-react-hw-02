import { useEffect, useState } from "react";

import "./App.css";
// import PropTypes from "prop-types";
import Description from "./components/description//Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";

function App() {
  let reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [options, setOptions] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("feedback"));

    return saveData ? saveData : reviews;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(options));
  }, [options]);

  const updateFeedback = (feedbackType) => {
    setOptions((p) => ({
      ...p,
      [feedbackType]: p[feedbackType] + 1,
    }));
  };

  const handlProcentGood = () => {
    if (totalFeedback !== 0) {
      const procentGood = ((options.good / totalFeedback) * 100).toFixed(2);
      console.log(procentGood);
      return procentGood;
    }
    return 0;
  };

  const totalFeedback = options.good + options.neutral + options.bad;

  const handlReset = () => {
    setOptions(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  return (
    <>
      <Description />
      <Options
        handlClick={updateFeedback}
        procentValue={handlProcentGood}
        totalFeedback={totalFeedback}
        reset={handlReset}
      />
      <Feedback
        goodCount={options.good}
        neutralCount={options.neutral}
        badCount={options.bad}
        total={totalFeedback}
        positivePercentage={handlProcentGood()}
      />
    </>
  );
}

export default App;
