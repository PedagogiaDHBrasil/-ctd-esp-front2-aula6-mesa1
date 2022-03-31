import "./style.css";

const About = () => {
  return (
    <>
      <div className="block-text">
        <p>Rick and Morty é uma série de animação.</p>
        <p>
          A série estreou em 2 de dezembro de 2013 e acompanha as perigosas
          aventuras do cientista alcoólatra Rick e seu neto Morty, que divide
          seu tempo entre a vida familiar e viagens interdimensionais. Em 2016,
          suas duas primeiras temporadas foram lançadas na Netflix com a
          dublagem brasileira.
        </p>

        <a
          href="https://pt.wikipedia.org/wiki/Rick_and_Morty"
          className="button-about"
        >
          <img src="file-text.svg" alt="ícone branco de um papel" />
          <p>Leia mais sobre</p>
        </a>
      </div>

      <img
        src="cite.png"
        alt="A frase na imagem diz: Eu não estou olhando para você. Estou tirando sua foto. - Rick and Morty "
        className="image-cite"
      />
    </>
  );
};

export default About;
