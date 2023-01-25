import { useEffect, useState } from "react";

const Joke = props => {
    const {setup, punchline} = props.joke;
    return(
        <p> {setup} <em>{punchline}</em> </p>
    )
};

const Jokes  = () => {
    const [jokes, setJokes] = useState([]);
    const [joke, setJoke] = useState(null);

    const fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then( jokes=> {
            setJokes(jokes)
        });
    }

    const fetchJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then( joke=> {
            setJoke(joke)
        });
    }

    useEffect(()=>{
        fetchJoke();
    },[]);

    return(
        <div>
             <h2>Highled Joked </h2>
             {joke && <Joke joke={joke} />}
             <button type="button" onClick={fetchJokes}>Load More</button>
            {
                jokes.map( joke => (<Joke key={joke.id}  joke={joke} />))
            }    
        </div>
    );
}

export default Jokes;