
// type, interface =  la interfaz es mas facil de expandir que el tipo
interface Direccion {
  pais: string;
  casaNo: number;
}

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

// No hacer
// interface Persona {
//   nombreCompleto: string;
//   edad: number;
//   direccion: {
//     pais: string;
//     casaNo: number;
//   }
// }

const ObjetosLiterales = () => {

  const personas: Persona = {
    nombreCompleto: 'Jesus',
    edad: 24,
    direccion: {
      pais: 'Chile',
      casaNo: 502
    }
  };
  
  // JSON.stringify(objeto, arreglo de las propiedaddes que quiero mostrar, tabulador)
  // JSON.stringify(personas, ['nombre'], 2)
  // JSON.stringify(personas, ['direccion', 'cadaNo'], 2)
  return (
    <>
      <h3>Objetos Literales </h3>
      
      <code>
        <pre>
          { JSON.stringify(personas, null, 2) }
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales
