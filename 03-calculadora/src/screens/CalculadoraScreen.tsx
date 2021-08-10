import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
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
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {' '}
        {numero}{' '}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc color="#9B9B9B" text="C" action={limpiar} />
        <BotonCalc color="#9B9B9B" text="+/-" action={positiveNegative} />
        <BotonCalc color="#9B9B9B" text="del" action={btnDel} />
        <BotonCalc color="#FF9427" text="/" action={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="7" action={armarNumero} />
        <BotonCalc text="8" action={armarNumero} />
        <BotonCalc text="9" action={armarNumero} />
        <BotonCalc color="#FF9427" text="X" action={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="4" action={armarNumero} />
        <BotonCalc text="5" action={armarNumero} />
        <BotonCalc text="6" action={armarNumero} />
        <BotonCalc color="#FF9427" text="-" action={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="1" action={armarNumero} />
        <BotonCalc text="2" action={armarNumero} />
        <BotonCalc text="3" action={armarNumero} />
        <BotonCalc color="#FF9427" text="+" action={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc text="0" action={armarNumero} ancho />
        <BotonCalc text="." action={armarNumero} />
        <BotonCalc color="#FF9427" text="=" action={calcular} />
      </View>
    </View>
  );
};
