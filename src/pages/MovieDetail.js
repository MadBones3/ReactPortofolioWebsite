import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../MovieState';
//import components

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    //useeffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
    }, [movies, url]);
    return(
        <>
        {movie && (
        <Details>
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie" />
            </HeadLine>
            <Awards>
                {movie.awards.map((award) => (
                    <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="secondaryImg" />
            </ImageDisplay>
        </Details>
        )}
        </>
    )
}

const Details = styled.div`
    color: #fff;
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
  }
`;
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;
`;
const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

// Award component
const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

export default MovieDetail;