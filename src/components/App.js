import { useState } from 'react';
import Stats from './Stats';
import Packinglist from './Packinglist';
import Form from './Form';
import Logo from './Logo';

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      'are you sure you want to delete all items ?'
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={handleItems} />
      <Packinglist
        items={items}
        deleteItem={handleDelete}
        toggleItem={handleToggle}
        clearItems={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
