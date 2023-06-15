import logo from "./logo.svg";
import "./App.css";

function App() {
  const categories = [
    {
      id: 1,
      title: "Hat",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category)=>(
        <div className="category-container">
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
