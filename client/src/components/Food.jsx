import React from "react";
import "./Food.css";

const foods = [
  "broccoli",
  "chicken",
  "mandarin"
];
function Food() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = foods.filter(food =>
      food.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="form_group field">
      <input
      className="form-field"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className="broc">
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Food;