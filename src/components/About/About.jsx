function About() {
  return (
    <section className="about">
      <h2 className="about__title">Acerca del proyecto</h2>

      <p className="about__description">
        Esta aplicación permite explorar información de Pokémon mediante datos
        obtenidos desde la PokeAPI. Puedes buscar Pokémon por nombre, número o
        tipo, y consultar sus datos principales de forma sencilla e intuitiva.
      </p>

      <p className="about__description">
        El proyecto fue desarrollado con React, Vite y React Router. También
        utiliza componentes reutilizables, consumo de API, manejo de estados y
        una interfaz responsiva adaptable a distintos dispositivos.
      </p>
    </section>
  );
}

export default About;