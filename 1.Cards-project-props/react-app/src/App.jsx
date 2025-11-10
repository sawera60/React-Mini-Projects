import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="parent">
        <Card/>
        <Card jobTitle= "Software Engineer" salary= {110} />
        <Card jobTitle= "Crafting Engineer" salary= {120}/>
      </div>
    </>
  );
}

export default App;
