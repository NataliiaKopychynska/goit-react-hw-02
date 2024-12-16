import stl from ".././feedback/Feedback.module.css";

export default function Notification() {
  return (
    <div className={stl.div}>
      <p className={stl.title}>No feedback yet</p>
    </div>
  );
}
