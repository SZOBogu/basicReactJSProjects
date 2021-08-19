import React, {useState, createContext} from 'react'

export const MyContext = createContext()



function MyContextProvider(props){
    const [exercises, setExercises] = useState([
        {name : "asdasd", whyMeme: "asfdfadfadfa", bench: 20},
        {name : "dfgdfhh", whyMeme: "dghdgukfukfk", bench: 120},
        {name : "bmvbm", whyMeme: "bnmvbmbjhm", bench: 50}
    ])

    const addMeme = (name, whyMeme, bench) => {
        setExercises([...exercises, {name, whyMeme, bench}])
    }

    return (
        <MyContext.Provider value={{exercises, addMeme}}>
            {props.children}
        </MyContext.Provider>
    );

}

export default MyContextProvider;