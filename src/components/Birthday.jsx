import "../style.css";

function Birthday(props) {
  return (
    <>
      {props.eachPerson.map((dDay) => {
        const { id, name, img, age } = dDay;
        const icon = "fa-solid fa-xmark fa-2x";

        return (
          <div className="entry" key={id}>
            <div className="img">
              <img src={img} alt={name} />
            </div>

            <div className="content">
              <div>
                <h3>{name}</h3>
                <span>{age} years old</span>
              </div>

              <button
                type="button"
                className="btn"
                onClick={() => props.remove(id)}>
                <i className={icon}></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Birthday;
