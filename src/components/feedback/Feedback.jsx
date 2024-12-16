import stl from "./Feedback.module.css";

export default function Feedback({
  goodCount,
  neutralCount,
  badCount,
  total,
  positivePercentage,
}) {
  return (
    <div className={stl.div}>
      <p className={stl.title}>Good: {goodCount}</p>
      <p className={stl.title}>Neutral: {neutralCount}</p>
      <p className={stl.title}>Bad: {badCount}</p>
      <p className={stl.title}>Total: {total}</p>
      <p className={stl.title}>Positive: {positivePercentage}%</p>
    </div>

    // <div className={stl.div}>
    //   <p className={stl.title}>
    //     {" "}
    //     {total === 0 ? "No feedback yet" : `Good: ${goodCount}`}
    //   </p>
    //   <p className={stl.title}>{total !== 0 && `Neutral: ${neutralCount}`}</p>
    //   <p className={stl.title}>{total !== 0 && `Bad: ${badCount}`}</p>
    //   <p className={stl.title}>{total !== 0 && `Total: ${total}`}</p>
    //   <p className={stl.title}>
    //     {total !== 0 && `Positive: ${positivePercentage}%`}
    //   </p>
    // </div>

    // <div className={stl.div}>
    //   {total === 0 && <p className={stl.title}>No feedback yet</p>}
    //   {total !== 0 && (
    //     <>
    //       <p className={stl.title}>Good: {goodCount}</p>
    //       <p className={stl.title}>Neutral: {neutralCount}</p>
    //       <p className={stl.title}>Bad: {badCount}</p>
    //       <p className={stl.title}>Total: {total}</p>
    //       <p className={stl.title}>Positive: {positivePercentage}%</p>
    //     </>
    //   )}
    // </div>
  );
}
