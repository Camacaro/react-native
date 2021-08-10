import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  /**
   * Aqui usare useRef es porque voy hacer un cambio de estado
   * pero no necesito que lo haga en la parte visual, no haga ese
   * render visual, solo el cambio de estado de la variable
   */
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroText: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroText === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroText === '.') {
        setNumero(numero + numeroText);

        // Evaluar si es otro cero y hay un punto
      } else if (numeroText === '0' && numero.includes('.')) {
        setNumero(numero + numeroText);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroText !== '0' && !numero.includes('.')) {
        setNumero(numeroText);

        // Eviar el 0000.0
      } else if (numeroText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroText);
      }
    } else {
      setNumero(numero + numeroText);
    }
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    let negative = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negative = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negative + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }

    // Me falto evaluar el negativo, porque lo muestra
    // const numeroSubs = numero.substring(0, numero.length - 1);
    // if (numeroSubs) {
    //   setNumero(numeroSubs);
    // } else {
    //   setNumero('0');
    // }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positiveNegative,
    btnDel,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
