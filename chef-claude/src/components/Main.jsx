import React from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import {getRecipeFromMistral} from '../AI'

export default function Main(){
    const [ingredients, setIngredient] = React.useState([]);
    const[recipe, setRecipe] =  React.useState('');

    async function getRecipe(){
        const recipeText = await getRecipeFromMistral(ingredients);
        setRecipe(recipeText)
    }

    function addIngredient(ingredientInputData){
        const newIngredient = ingredientInputData.get("ingredient");
        setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    }

    const recipeRef = React.useRef(null);
    React.useEffect(() => {
        if(recipeRef.current !== null){
            recipeRef.current.scrollIntoView({behavior:"smooth"});
        }  
    },[recipe.length])

    return(
        <main>
            <form className="input-form" action={addIngredient}>
                <input placeholder="e.g. oregano" aria-label="Add Ingredient" className="user-input" name='ingredient'></input>
                <button className="submit-btn">+ Add Ingredient</button>
            </form>
            {ingredients.length !== 0 &&
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeRef}></IngredientsList>
            }
            {recipe.length !== 0 &&
                <ClaudeRecipe recipe={recipe}></ClaudeRecipe>
            }
            
        </main>
    )
}
