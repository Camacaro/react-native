import { useState } from 'react'

const useCounter = (initialNumber: number = 10) => {
  const [valor, setValor] = useState(initialNumber);

  const acumular = (numero: number) => () => {
    setValor( valor + numero )
  }

  return {
    valor,
    acumular
  }
}

export default useCounter;
