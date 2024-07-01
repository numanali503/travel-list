export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some item in your Packinglist 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const packItems = items.filter((item) => item.packed).length;
  const packPercent = Math.floor((packItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packPercent === 100
          ? 'You got everything! Ready for Travel ✈️'
          : ` 💼 You have ${numItems} item on our list and you have packed ${packItems} (${packPercent}%)`}
      </em>
    </footer>
  );
}
