import data from "./helper/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="container">
        {data.map((item, index) => <Card key={index} item={item} />)}
        </div>
    </div>
  );
}

export default App;
