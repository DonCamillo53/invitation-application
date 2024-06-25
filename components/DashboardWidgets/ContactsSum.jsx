export default function ContactsSum({ data }) {
  return (
    <div className="widget_container">
      <h3>Total Contacts</h3>
      <div className="countdown_container"></div>
      <div className="widget_value_container">
        <span className="countdown_value">{data.length}</span>
      </div>
    </div>
  );
}
