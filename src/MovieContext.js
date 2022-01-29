import React,{useState, createContext} from "react";

export const MovieContext = createContext();


export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name:"Saw",
            price: '$40',
            id: 12345
        },
        {
            name:"The Outsiders",
            price: '$10',
            id: 54321
        },
        {
            name:"Malignant",
            price: '$20',
            id: 14235
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}