import logo from './logo.svg';
import './App.css';
import Movielist from './Component/Movielist';

function App() {
  const list= [
    {
      "id": 1,
      "title": "Avatar",
      "distributor": "20th Century Fox",
      "year": 2009,
      "amount": "$2,787,965,087",
      "img": {
        "src": "D:\JS\movielist\src\movieimages\avatar.png",
        "alt": "avatar"
      },
      "ranking": 1
    },
    {
      "id": 2,
      "title": "Titanic",
      "distributor": "20th Century Fox",
      "year": 1997,
      "amount": "$2,187,463,944",
      "img": {
        "src": "D:\JS\movielist\src\movieimages\titanic.png",
        "alt": "titanic"
      },
      "ranking": 2
    },
    {
      "id": 3,
      "title": "Star Wars: The Force Awakens",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2015,
      "amount": "$2,068,223,624",
      "img": {
        "src": "D:\JS\movielist\src\movieimages\starwars.png",
        "alt": "star_wars_the_force_awakens"
      },
      "ranking": 3
    },
    {
      "id": 4,
      "title": "Avengers: Infinity War",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2018,
      "amount": "$2,048,359,754",
      "img": {
        "src": "D:\JS\movielist\src\movieimages\avengers.png",
        "alt": "avengers_infinity_war"
      },
      "ranking": 4
    },
    {
      "id": 5,
      "title": "Jurassic World",
      "distributor": "Universal Pictures",
      "year": 2015,
      "amount": "$1,671,713,208",
      "img": {
        "src": "D:\JS\movielist\src\movieimages\jurassic.png",
        "alt": "jurassic_world"
      },
      "ranking": 5
    }
  ]

  return (
    <div className="App">
      <Movielist data={list}/>
    </div>
  );
}

export default App;
