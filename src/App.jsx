import "./App.css";
import Navbar from "./components/navbar";
import Email from "./components/email";
import About from "./components/about";
import Video from "./components/video";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="container-video">
          <h2>Vídeo</h2>
          <Video />
        </section>
        <section className="container-about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </section>
        <section className="container-news">
          <h2>Receber notícias sobre a série</h2>
          <Email />
        </section>
      </main>
    </>
  );
};

export default App;
