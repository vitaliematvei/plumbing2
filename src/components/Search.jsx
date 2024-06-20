import { useState } from "react";
import data from "../data.json";

const Search = ({ isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    console.log(event);
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);

    const results = data.filter((item) =>
      item.first_name.toLowerCase().includes(searchQuery)
    );
    setFilteredData(results);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1086px]">
      <div className="p-8 shadow-lg text-2xl font-ptSans ">
        <div className="flex gap-12 items-center">
          <p className="font-orenburg text-4xl">Что вы ищете?</p>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              placeholder="Раковина для ванной комнаты..."
              value={searchTerm}
              onChange={handleInputChange}
              className="border-2 rounded-md border-orange w-[580px] p-2"
            />
            <div className="border border-orange rounded">
              <button
                className="text-xl text-white bg-orange px-5 pt-2 pb-3 rounded
          hover:transform hover:-translate-x-1 hover:-translate-y-1"
              >
                Искать
              </button>
            </div>
          </div>
        </div>

        {/* <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="border-2 rounded-md border-orange"
        /> */}
        {filteredData.length > 0 && (
          <ul className="border bg-green-900">
            {filteredData.map((item) => (
              <li key={item.id} className="text-2xl text-black">
                y{item.first_name}
              </li>
            ))}
          </ul>
        )}
        {filteredData.length === 0 && searchTerm && (
          <p className="text-gray-500 mt-5">No results found.</p>
        )}
      </div>
    </div>
  );
};
export default Search;
