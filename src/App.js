
import './App.css';
import Movielist from './Component/Movielist';

function App() {
  const list= [
    {
      "id": 1,
      "title": "Avatar (2009)",
      "distributor": "20th Century Fox",
      "year": 2009,
      "amount": "$2,787,965,087",
      "img": {
        "src": require("./movieimages/avatar.png"),
        "alt": "avatar",
        "width":'100',
        "height":"180"
      },
      "ranking": 1
    },
    {
      "id": 2,
      "title": "Titanic (1997)",
      "distributor": "20th Century Fox",
      "year": 1997,
      "amount": "$2,187,463,944",
      "img": {
        "src": require("./movieimages/titanic.png"),
        "alt": "titanic",
        "width":'100',
        "height":"180"
      },
      "ranking": 2
    },
    {
      "id": 3,
      "title": "Star Wars: The Force Awakens (2015)",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2015,
      "amount": "$2,068,223,624",
      "img": {
        "src":  require("./movieimages/starwars.png"),
        "alt": "star_wars_the_force_awakens",
        "width":'100',
        "height":"180"
      },
      "ranking": 3
    },
    {
      "id": 4,
      "title": "Avengers: Infinity War (2018)",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2018,
      "amount": "$2,048,359,754",
      "img": {
        "src":  require("./movieimages/avengers.png"),
        "alt": "avengers_infinity_war",
        "width":'100',
        "height":"180"
      },
      "ranking": 4
    },
    {
      "id": 5,
      "title": "Jurassic World (2015)",
      "distributor": "Universal Pictures",
      "year": 2015,
      "amount": "$1,671,713,208",
      "img": {
        "src":  require("./movieimages/jurassic.png"),
        "alt": "jurassic_world",
        "width":'100',
        "height":"180"
      },
      "ranking": 5
    }
  ]
 
  return (
    <div className="App">
      <Movielist data={list}  />

      
    </div>
  );
}

export default App;
