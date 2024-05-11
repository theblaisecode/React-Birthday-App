import { entries } from "./data";
import { useState } from "react";
import Birthday from "./components/Birthday";
import "./style.css";

function App() {
  const [person, setPerson] = useState(entries);

  function remove(id) {
    console.log(id);
    setPerson((pervPerson) => pervPerson.filter((item) => item.id !== id));
  }

  const logic = person.length > 1 ? "Birthdays Today" : "Birthday Today";

  return (
    <main>
      <h1>
        {person.length} {logic}
      </h1>

      <Birthday eachPerson={person} remove={remove} />

      <div className="buttons">
        <button className="clear" onClick={() => setPerson(entries)}>
          Refresh
        </button>

        <button className="clear" onClick={() => setPerson([])}>
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;

// function remove(id) {
//   console.log(id);
//   setPerson((prevPerson) => prevPerson.filter((item) => item.id !== id));
// }

// function clearAll() {
//   setPerson([]);
// }

// function refresh() {
//   setPerson(entries);
// }

// {
/* {person.map((dDay) => {
          const { id, name, img, age } = dDay;
          const icon = "fa-solid fa-xmark fa-2x";
  
          return (
            <div className="entry" key={id}>
              <img src={img} alt={name} />
              <div className="content">
                <div>
                  <h3>{name}</h3>
                  <span>{age} years</span>
                </div>
  
                <button type="button" className="btn" onClick={() => remove(id)}>
                  <i className={icon}></i>
                </button>
              </div>
            </div>
          );
        })} */
// }
