import { gentlemanList } from "../../model/gentlemanList";
import { Button } from "../button/Button";
import { Gentlemen } from "../gentlemen/Gentlemen";
import { Info } from "../info/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info initial={gentlemanList}></Info>
        <Button initial={false}></Button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentlemen gentlemanList={gentlemanList}></Gentlemen>
        </ul>
      </main>
    </div>
  );
}

export default App;
