import Form from "../Form/Form";

export default function Main() {
  return (
    <>
      <h2 className="h2">New Entry</h2>
      <Form></Form>
      <section className="entrie_tabs">
        <button className="button_all" type="button">
          All Entries
        </button>
        <button className="button_list">List</button>
      </section>
    </>
  );
}
