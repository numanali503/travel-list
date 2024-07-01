export default function Item({ item, deleteItem, toggleItem }) {
  return (
    <div className="list">
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => toggleItem(item.id)}
        ></input>
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.description}{' '}
          <button onClick={() => deleteItem(item.id)}>❌</button>
        </span>
      </li>
    </div>
  );
}
