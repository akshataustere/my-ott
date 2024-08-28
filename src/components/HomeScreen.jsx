import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NetflixMovies from './NetflixMovies';
import { fetchMovies, selectNetflix } from '../features/netflix/Netflix'; 

function Homescreen() {
    const dispatch = useDispatch();
    // const netflixState = useSelector(selectNetflix);

    useEffect(() => {
      dispatch(fetchMovies());
      
    }, [dispatch]);

    return (
        <>
           <NetflixMovies />
           <NetflixMovies />
        </>
    );
}

export default Homescreen;
