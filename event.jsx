function doSomething(){
    console.log("button was clicked");
}
export default function Button(){
    return(
        <div>
            <p onMouseOver={doSomething}>hover on me</p>
            <button onClick={doSomething}>click me</button>
        </div>
    );
}