export default function NavBar({ onOpen, onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value); // Call the onSearch callback with the input value
  };

  return (
    <>
      <div className="navbar bg-base-100  p-4 shadow-lg">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">ClientBase</a>
        </div>
        <div className="navbar-center">
          <div className="form-control w-full md:w-48">
            <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-full" />
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary" onClick={onOpen}>
            <i className="fas fa-plus-circle"></i> Add Client
          </button>
        </div>
      </div>
    </>
  );
}
