import {useState} from 'react';
import './App.css';
import Axios from 'axios';
import RecipeTile from './components/RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] =useState("vegan");


  const YOUR_APP_ID =  "e1c6e01a";
  const YOUR_APP_KEY =  "9b192bd5f0b39c3dfa933970d4aa1c58";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes(){
      var result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data);


  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    getRecipes();
  }


  return (
    <div className="app">
        <h1  >FOOD RECIPE APP</h1>
        <form  className="app_searchForm"  onSubmit={handleSubmit}>
          <input type="text" className="Text-input" placeholder='enter ingredient' value={query} onChange={(e)=> setQuery(e.target.value)} />
          <input className='app_submit' type="submit" value="Search" />
        <select name="" id="" className="app_healthLabel">

          <option  onClick={()=>setHealthLabels("vegan")}> Vegan</option>
          <option  onClick={()=>setHealthLabels("Low Potassium")}> Low Potassium</option>
          <option  onClick={()=>setHealthLabels("Kidney-Friendly")}> Kidney-Friendly</option>
          <option  onClick={()=>setHealthLabels("Vegetarian")}> Vegetarian</option>
          <option  onClick={()=>setHealthLabels("Pescatarian")}> Pescatarian</option>
          <option  onClick={()=>setHealthLabels("Gluten-Free")}> Gluten-Free</option>
          <option  onClick={()=>setHealthLabels("Wheat-Free")}> Wheat-Free</option>
          <option  onClick={()=>setHealthLabels("Egg-Free")}> Egg-Free</option>
          <option  onClick={()=>setHealthLabels("Peanut-Free")}> Peanut-Free</option>
          <option  onClick={()=>setHealthLabels("Tree-Nut-Free")}> Tree-Nut-Free</option>
          <option  onClick={()=>setHealthLabels("Soy-Free")}> Soy-Free</option>
          <option  onClick={()=>setHealthLabels("Fish-Free")}> Fish-Free</option>
          <option  onClick={()=>setHealthLabels("Shellfish-Free")}> Shellfish-Free</option>
          <option  onClick={()=>setHealthLabels("Pork-Free")}> Pork-Free</option>
          <option  onClick={()=>setHealthLabels("Red-Meat-Free")}> Red-Meat-Free</option>
          <option  onClick={()=>setHealthLabels("Crustacean-Free")}> Crustacean-Free</option>


        </select>

        </form>

    <div className='app_recipes' >
        {recipes.map(recipe =>{
         return <RecipeTile  recipe={recipe} />

        })}
    </div>


    </div>
  );
}

export default App;
