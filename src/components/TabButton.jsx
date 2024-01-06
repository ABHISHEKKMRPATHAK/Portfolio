export default function TabButton(props,handleClick){
    function handleClick(){
        console.log("Hello There");
    }
    return(
        <button onClick={handleClick}>{props.children}</button>    //child props
    )
}