import stl from "./Feedback.module.css";

export default function Feedback({
  goodCount,
  neutralCount,
  badCount,
  total,
  positivePercentage,
}) {
  return total === 0 ? (
    <div className={stl.div}>
      <p className={stl.title}>No feedback yet</p>
    </div>
  ) : (
    <div className={stl.div}>
      <p className={stl.title}>Good: {goodCount}</p>
      <p className={stl.title}>Neutral: {neutralCount}</p>
      <p className={stl.title}>Bad: {badCount}</p>
      <p className={stl.title}>Total: {total}</p>
      <p className={stl.title}>Positive: {positivePercentage}%</p>
    </div>
  );
}
