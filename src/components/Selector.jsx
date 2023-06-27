import React, { useContext } from "react";
import { SelectContext } from "../context/SelectContext";

const Selector = () => {
  const { selectOption, setSelectOption } = useContext(SelectContext);

  return (
    <div className="selector">
      <button
        onClick={() => setSelectOption("topics")}
        className={`topics ${selectOption === "topics" && "underline"}`}
      >
        Topics
      </button>
      <button
        onClick={() => setSelectOption("companies")}
        className={`companies ${selectOption === "companies" && "underline"}`}
      >
        Companies
      </button>
      <button
        onClick={() => setSelectOption("sheets")}
        className={`sheets ${selectOption === "sheets" && "underline"}`}
      >
        Sheets
      </button>
    </div>
  );
};

export default Selector;
