import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../redux/reducers/dataActions";
import { toast } from "react-toastify";
import Character from "./Character";
import Navegacion from "./Navegacion";

const CharacterList = () => {
  const { isLoading, info, error } = useSelector((state) => state.Data);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData({ toast, page }));
  }, [page]);
  return (
    <div className="container ">
      <Navegacion page={page} setPage={setPage} />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="row bg-secondary rounded-4">
          {info.map((e) => {
            return (
              <div className="col-md-4" key={e.id}>
                <Character e={e} />
              </div>
            );
          })}
        </div>
      )}
      <Navegacion page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
