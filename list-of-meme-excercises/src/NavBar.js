import React, {useContext} from 'react'
import {MyContext} from "./MyContext"

function NavBar(){
    const  {exercises} = useContext(MyContext)
    return (
        <div>
            <h2>Some bullshit list</h2>
            <h2>Meme list length: {exercises.length}</h2>
        </div>
    );
}

export default NavBar;