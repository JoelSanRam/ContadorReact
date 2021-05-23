const Contador = () => {
  const [contador, setContador] = React.useState(5);

  const aumentar = () => setContador(contador + 1);
  const quitar = () => setContador(contador - 1);
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>
        Contador : {contador}
      </h1>
      <hr />
      <button className="colorboton" onClick={aumentar}>
        Aumentar
      </button>
      <button onClick={quitar}>Disminuir</button>
    </div>
  );
};
