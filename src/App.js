import { useEffect } from 'react';
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
      "ranking": 1,
      "link":"https://en.wikipedia.org/wiki/Avatar_(2009_film)"
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
      "ranking": 2,
      "link":"https://en.wikipedia.org/wiki/Titanic_(1997_film)"
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
      "ranking": 3,
      "link":"https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens"
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
      "ranking": 4,
      "link":"https://en.wikipedia.org/wiki/Avengers:_Infinity_War"
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
      "ranking": 5,
      "link":"https://en.wikipedia.org/wiki/Jurassic_World"
    }
  ]
//  const apireq = async()=> {
//    let response = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
//    let data= response.json();
//    console.log(data)
 //}
 useEffect( ()=>{
  fetch("https://my-json-server.typicode.com/typicode/demo/posts").then((result)=> result.json()).then((data)=> console.log(data))
 },[])
  return (
    <div className="App">
      <Movielist data={list}  />

      
    </div>
  );
}

export default App;
