
function handleForm(event){
    console.log("form was submitted");
    event.preventDefault();
}


export default function Form(){
    return(
        <form >
            <input type="text" placeholder="enter something" />
            <button onClick={handleForm}>submit</button>
        </form>
    )
}