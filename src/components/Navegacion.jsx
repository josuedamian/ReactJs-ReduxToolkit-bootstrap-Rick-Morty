import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/reducers/dataActions";

const Navegacion = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const handleClick = (action) => {
    if (action === "back") {
      setPage(page - 1);
    }
    if (action === "next") {
      setPage(page + 1);
    }
    console.log(action);
    // setPage(page + 1);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      {page > 1 && (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleClick("back")}
        >
          Página {page - 1}
        </button>
      )}
      <p>Página {page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => handleClick("next")}
      >
        Página {page + 1}
      </button>
    </div>
  );
};

export default Navegacion;
