import { useEffect, useState } from "react";
import { useOffice } from "../Context/OfficeContext";

function Search() {
  const { Office } = useOffice();
  const [input, setInput] = useState('');
  const [Status, setStatus] = useState('');
  const [Total, setTotal] = useState('');

  useEffect(() => {
    setTotal(Office.length.toString());
  }, [Office]);

  const employeeExists = Office.some((employee) => employee.id === input || employee.name === input);

  const get = () => {
    if (employeeExists) {
      setStatus('PRESENT');
    } else {
      setStatus('ABSENT');
    }
  };

  return (
    <>
      <div className="search-container">
        <label htmlFor="">Search:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span>Status: {Status}</span>
        <span>Total: {Total}</span>
        <button onClick={get}>Get</button>
      </div>
    </>
  );
}

export default Search;
