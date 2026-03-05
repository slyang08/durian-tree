export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-100 p-4">
        <nav className="space-y-2">
          <a href="/admin/inventories">Inventories</a>
          <br />
          <a href="/admin/inventories/create">Create Inventory</a>
          <br />
          <a href="/admin/varieties">Varieties</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
