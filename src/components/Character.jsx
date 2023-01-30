const Character = ({ e }) => {
  return (
    <div className="text-center p-5">
      <h3>{e.name} </h3>
      <img className="img-fluid rounded-circle" src={e.image} alt={e.name} />
    </div>
  );
};

export default Character;
