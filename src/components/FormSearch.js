export default function Search({ query, setQuery }) {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="text-md">
        Search product
      </label>
      <input
        type="search"
        className="form-input"
        placeholder="Search for something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}
