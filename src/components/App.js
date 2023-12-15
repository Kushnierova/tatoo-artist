import css from "./App.module.css";
import Header from "./Header/Header";
import Hero from "./Hero";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
