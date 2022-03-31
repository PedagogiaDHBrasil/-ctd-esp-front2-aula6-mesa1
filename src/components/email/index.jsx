import "./style.css";

const Email = () => {
  return (
    <form>
      <input
        type="email"
        placeholder="Digite aqui seu melhor e-mail"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Email;
