export function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 ${
        hover ? "hover:shadow-md transition" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}