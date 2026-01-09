export function Sidebar({ items = [] }) {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="font-bold text-lg mb-4">Sidebar</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={item.onClick}
            className={`cursor-pointer p-2 rounded ${
              item.active ? "bg-blue-100 font-medium" : "hover:bg-gray-100"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

