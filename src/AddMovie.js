import React, {useState, useContext} from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setname] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext); 

    const UpdateName = (e) => {
        setname(e.target.value)
    }

    const UpdatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(previousMovie => [...previousMovie, {name: name, price: price}])
    }

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={UpdateName}/>
            <input type="text" name="price" value={price} onChange={UpdatePrice}/>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;