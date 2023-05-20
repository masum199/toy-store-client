import { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://toy-store-server-alpha.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearchText = () => {
    fetch(`https://toy-store-server-alpha.vercel.app/alltoys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const limitedToys = showAll ? toys : toys.slice(0, 20);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold my-5">Welcome to ToyMania!</h1>
        <h1 className="text-3xl">HERE ALL TOYS THAT R AVAILABLE</h1>
        <div className="flex items-center justify-center">
          <div className="form-control">
            <div className="input-group">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearchText} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {limitedToys.map((toy, index) => (
              <AllToysTable key={toy._id} toy={toy} index={index}></AllToysTable>
            ))}
          </tbody>
        </table>
        {!showAll && toys.length > 20 && (
          <div className="text-center">
            <button className="btn" onClick={toggleShowAll}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;