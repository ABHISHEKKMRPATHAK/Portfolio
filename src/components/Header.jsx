const greet = ["Hello","Hi","Namaste","Hola"];
function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
export default function Header(){
    const greetIN = greet[genRandomInt(4)]; 
    return(
      <h1>{greetIN} Visitor</h1>
    );
  
  }