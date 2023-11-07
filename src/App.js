import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNotes />
      <Notes />
    </div>
  );
}

export default App;
