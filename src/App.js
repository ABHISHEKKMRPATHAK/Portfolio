import logo from './logo.svg';
import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import './App.css';
import reactImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import propsImg from './assets/config.png';
import TabButton from './components/TabButton.jsx';
import Canvas from './components/Canvas.jsx';

function App() {
  function HandleClick(selectedButtons){
    console.log(selectedButtons);
   }
  
  return (
    
 <div>
  <Header />
<main>
  <section id ="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      <CoreConcepts title="Components" description = "Asd jhdksj jdkskj" img={reactImg} />
      <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={propsImg}/>
      <CoreConcepts title="Components" description = "Asd jhdksj jdkskj" img={reactImg} />
    </ul>
  </section>
  <section id ="Examples">
    <menu>
    <TabButton onSelect={() =>HandleClick("components")}>Components</TabButton>
    <TabButton onSelect={() =>HandleClick("JSX")}>JSX</TabButton>
    <TabButton onSelect={() =>HandleClick("Props")}>Props</TabButton>
    <TabButton onSelect={() =>HandleClick("State")}>State</TabButton>
    </menu>
  </section>
  <section>
    <Canvas />
  </section>
</main>
 </div>   
  );
}

export default App;
