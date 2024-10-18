import React, { useState } from 'react';
import "./Table.css";
import { MdDelete } from "react-icons/md";


const TableComponent = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedItems, setCheckedItems] = useState([]);
  const itemsPerPage =  10;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevState =>
      prevState.includes(id)
        ? prevState.filter(item => item !== id)
        : [...prevState, id]
    );
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={`table-container`}>
          <input
              className='table-search'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
          />
          {checkedItems > [0] ?
              <div className='table-item-checked-info'>{checkedItems.length}
                  <button onClick={() => console.log(checkedItems)}>
                    <MdDelete/>
                  </button>
              </div> : ""}
      <table>
        <thead>
          <tr>
            <th>Select</th>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              {Object.values(item).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table-button-section'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default TableComponent;