import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Heading</h2>
      <label htmlFor="input">Input Label</label>
      <input id="input" />
      <a href="https://wikipedia.org" className="article__link">
        Link
      </a>
    </article>
  );
}
