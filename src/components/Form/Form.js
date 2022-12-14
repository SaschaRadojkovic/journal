export default function Form() {
  return (
    <>
      <form className="input_form">
        <label htmlFor="input-field">Motto</label>
        <input id="input-field" />
        <label htmlFor="text">Notes</label>
        <textarea id="text"></textarea>
        <button className="create">Create</button>
      </form>
    </>
  );
}
