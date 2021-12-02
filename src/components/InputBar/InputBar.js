import "./InputBar.scss";

export default function InputBar({ setUserInput, userInput }) {
  return (
    <>
      <input
        className="input-bar"
        placeholder="Type your name here..."
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
    </>
  );
}
