import data from "./helper/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {data.map((item, index) => <Card key={index} item={item} />)}
    </div>
  );
}

export default App;
