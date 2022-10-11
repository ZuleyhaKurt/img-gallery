import data from "./helper/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        {data.map((item, index) => <Card key={index} item={item} />)}
        </div>
    </div>
  );
}

export default App;
