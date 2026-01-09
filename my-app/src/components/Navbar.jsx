export function Navbar({ userName, userRole }) {
  return (
    <header className="w-full bg-white border-b p-4 flex justify-between items-center">
      <div className="font-semibold">{userRole} Dashboard</div>
      <div className="text-sm text-gray-600">{userName}</div>
    </header>
  );
}
