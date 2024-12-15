import stl from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={stl.nameCafe}>Sip Happens Café</h1>
      <p className={stl.tittle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
