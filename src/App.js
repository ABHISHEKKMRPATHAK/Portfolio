import logo from './logo.svg';
import './App.css';
const greet = ["Hello","Hi","Namaste","Hola"];
function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
function Header(){
  const greetIN = greet[genRandomInt(4)]; 
  return(
    <h1>{greetIN} Visitor</h1>
  );

}
function Welcome(props) {
  return(
  <h1>Hello,{props.name}</h1>
  );
}
 
function CoreConcepts(props){
return(
  <li>
    <img src={props.img} alt = {props.alt}  />
    <h3>{props.til}</h3>
    <p>{props.des}</p>
  </li>
)
}
function App() {
  return (
 <div>
  <Header />
<main>
  <section id ="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      <CoreConcepts til="Componemts" des = "Asd jhdksj jdkskj " img="https://www.istockphoto.com/photo/multi-layers-color-texture-3d-papercut-layers-in-gradient-vector-banner-carving-art-gm1573329496-528120566?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpic&utm_medium=affiliate&utm_source=unsplash&utm_term=pic%3A%3A%3A"/>
      <CoreConcepts til="Props"  des ="hgkjh"/>
      <CoreConcepts />
      <CoreConcepts />
    </ul>
  </section>
</main>
 </div>   
  );
}

export default App;
