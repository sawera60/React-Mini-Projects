import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="parent">
        <Card  />
        <Card jobTitle= "Senior Software Engineer"  />
        <Card jobTitle= "Associate Software Engineer"/>
      </div>
    </>
  );
}

export default App;
