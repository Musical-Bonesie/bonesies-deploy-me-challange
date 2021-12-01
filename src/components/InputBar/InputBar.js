import "./InputBar.scss";

export default function InputBar({ handleSubmit }) {
  return (
    <>
      <label>
        Type In Your Name
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </>
  );
}
