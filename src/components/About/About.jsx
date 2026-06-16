function About() {
  return (
    <section className="about">
      <h2 className="about__title">Acerca del proyecto</h2>

      <p className="about__description">
        Esta aplicación permite consultar información de Pokémon mediante la
        PokeAPI, puedes buscar de hasta 500 pokemons ya sea por nombre, número o tipo.
      </p>

      <p className="about__description">
        Fue desarrollada con React, Vite y React Router, utilizando componentes
        reutilizables y una interfaz adaptable a distintos dispositivos.
      </p>
    </section>
  );
}

export default About;