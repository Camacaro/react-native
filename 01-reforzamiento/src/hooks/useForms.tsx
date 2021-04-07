import { useState } from "react";

// Generico interface Custom Hooks
const useForms = <T extends Object> ( formulario: T ) => {

  const [state, setState] = useState(formulario);

  // Hacer que el campo pertenezca al objeto T
  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value
    });
  }

  return {
    ...state,
    formulario: state,
    onChange,
  }
}

export default useForms
