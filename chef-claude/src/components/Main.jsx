import React from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'

export default function Main(){
    const [ingredients, setIngredient] = React.useState([]);

    const[recipeShown, setRecipeShown] =  React.useState(false);
    function getRecipe(){
        setRecipeShown((prevRecipeShown) => {if(!prevRecipeShown) return true});
    }
    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

    function addIngredient(ingredientInputData){
        const newIngredient = ingredientInputData.get("ingredient");
        setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    }
    return(
        <main>
            <form className="input-form" action={addIngredient}>
                <input placeholder="e.g. oregano" aria-label="Add Ingredient" className="user-input" name='ingredient'></input>
                <button className="submit-btn">+ Add Ingredient</button>
            </form>
            {ingredients.length !== 0 &&
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe}></IngredientsList>
            }
            {recipeShown &&
                <ClaudeRecipe></ClaudeRecipe>
            }
            
        </main>
    )
}
