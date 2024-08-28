import React from 'react';
import { useSelector } from 'react-redux';
import { selectNetflix } from '../features/netflix/Netflix';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function NetflixMovies() {
    const collection = useSelector(selectNetflix);
    const collectionResult = collection?.data?.results;

    // Ensure that collectionResult is available and has a length greater than 0
    if (!collectionResult || collectionResult.length === 0) {
        return <p>Loading...</p>;
    }

    // Pick a random index within the range of collectionResult length
    const randomV = Math.floor(Math.random() * collectionResult.length);

    return (
        <div className='shadow-lg'>
            <Swiper spaceBetween={50} slidesPerView={4}>
                {
                    collectionResult.slice(randomV, randomV + 10).map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.name}
                            />
                            <h3 className='text-danger text-center py-4'>{movie.name}</h3>
                            <h5 className='text-center'>{movie.overview}</h5>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default NetflixMovies;
