export function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex justify-center py-4 flex-col items-center mt-10">
      <h1 className="text-blue-1 mb-4">Welcome to online shop</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-3 focus:border-transparent px-4 py-2 rounded-lg"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
