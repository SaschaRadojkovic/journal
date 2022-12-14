export default function Main() {
  return (
    <>
      <h2 className="h2">New Entry</h2>
      <form className="input_form">
        <label htmlFor="input-field">Motto</label>
        <input id="input-field" />
        <label htmlFor="text">Notes</label>
        <textarea id="text"></textarea>
        <button className="create">Create</button>
      </form>
      <section className="enterie_tabs">
        <button className="button_all" type="button">
          All Entries
        </button>
        <button className="button_list">List</button>
      </section>
    </>
  );
}
