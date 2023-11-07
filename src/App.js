import { useState } from "react";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  const [addNote, setAddNote] = useState([]);

  const AddEvent = (note) => {
    // alert("kapil");
    setAddNote((prev) => {
      return [...prev, note];
    });
  };

  const OnDelete = (id) => {
    setAddNote((oldData) => {
      oldData.filter((index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNotes passNote={AddEvent} />

      {addNote &&
        addNote.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              desc={val.desc}
              delete={OnDelete}
            />
          );
        })}
    </>
  );
}

export default App;
