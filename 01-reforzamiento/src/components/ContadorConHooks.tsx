import useCounter from '../hooks/useCounter';

const ContadorConHooks = () => {

  const {valor, acumular} = useCounter(12);

  return (
    <>
      <h3>Contador <small> {valor} </small> </h3>

      <button 
        className="btn btn-primary"
        onClick={acumular(1)}
      > 
        +1
      </button>

      &nbsp;
      
      <button 
        className="btn btn-primary"
        onClick={acumular(-1)}
      > 
        -1
      </button>
    </>
  )
}

export default ContadorConHooks
