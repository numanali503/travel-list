import { useState } from 'react';
import Item from './Item';

export default function Packinglist({
  items,
  deleteItem,
  toggleItem,
  clearItems,
}) {
  const [sortBy, setSortItem] = useState('input');

  let sortedItem;

  if (sortBy === 'input') sortedItem = items;
  if (sortBy === 'description')
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortItem(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={clearItems}>Clear list</button>
      </div>
    </div>
  );
}
