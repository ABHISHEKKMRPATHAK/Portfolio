import logo from './logo.svg';
import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import './App.css';
import reactImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import propsImg from './assets/config.png';
import TabButton from './components/TabButton.jsx';
 

function App() {
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
    <TabButton>Components</TabButton>
    <TabButton>JSX</TabButton>
    <TabButton>Props</TabButton>
    <TabButton>State</TabButton>
    </menu>
  </section>

</main>
 </div>   
  );
}

export default App;
