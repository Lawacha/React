

function Hello({user,textColor}){
    let styles={color:textColor};
    return(
       <div>
            <p style={styles}>hello @{user} </p>
       </div>
    );
}

export default Hello;