
const TiposBasicos = () => {
  
  const nombre: string = 'Jesus';
  const edad: number = 24;
  const estaAtivo: boolean = true;

  // const poderes: (string | number )[] = [];
  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos Básicos</h3>
      { nombre } - { edad } - { (estaAtivo) ? 'Activo' : 'No Activo' }
      <br />
      { poderes.join(', ') }
    </>
  )
}

export default TiposBasicos
