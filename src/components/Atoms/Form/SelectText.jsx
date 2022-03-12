import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const SelectText = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [prev, setPrev] = useState("");

  const selectHandler = (e) => {
    if (prev !== "") {
      const prevElement = document.getElementById(prev);
      prevElement.classList.toggle("active_item");
    }
    setSelected(e.target.firstChild.nodeValue);
    setPrev(e.target.id);
    e.target.classList.toggle("active_item");
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="dropdown">
        <div
          className={`dropdown__btn ${open && "active_btn"}`}
          onClick={() => setOpen(!open)}
        >
          {selected ? selected : "Cортировка"}
          <div className="icon-dropdown">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L5 5L1 1"
                stroke="#191919"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen(false);
          }}
        >
          <div className={`dropdown__content ${open && "active_content"}`}>
            <div
              className="dropdown__content-title"
              onClick={() => setOpen(!open)}
            >
              {selected ? selected : "Cортировка"}
              <div className="icon-dropdown">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#191919"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {props.options.map((option) => (
              <div
                key={option.id}
                id={option.id}
                className={`dropdown__item`}
                onClick={(e) => selectHandler(e)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default SelectText;
