import "./PopUp.scss";

export default function PopUp({ name }) {
  return (
    <div className={name ? "visable" : "hidden"}>
      <h2>CONGRATULATIONS {name.toUpperCase()}!!</h2>
      <p>You have successfully deployed an app!</p>
    </div>
  );
}
