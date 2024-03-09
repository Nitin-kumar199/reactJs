import Card from "./components/Card";
import "./App.css";

function App() {
  let user = "Raaju";
  return (
    <>
      <Card username="Nitin" />
      <Card username={user} />
    </>
  );
}

export default App;
