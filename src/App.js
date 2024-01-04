import logo from './logo.svg';
import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import './App.css';
import reactImg from './assets/components.png';

 

function App() {
  return (
 <div>
  <Header />
<main>
  <section id ="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      <CoreConcepts title="Componemts" description = "Asd jhdksj jdkskj" img={reactImg} />
      <CoreConcepts />
      <CoreConcepts />
    </ul>
  </section>
</main>
 </div>   
  );
}

export default App;
