import React from 'react'

export default function Main(){
    const [ingredients, setIngredient] = React.useState([]);
    const newIng = ingredients.map((item) => {
                    return <li>{item}</li>
    });

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
            <section>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {newIng}
                </ul>
                <div className='recipe-container'>
                    <div className='about-recipe-gen'>
                        <p id='hype-user'>Ready for a recipe?</p>
                        <p id='actual-ins'>Generate a recipe from your set of ingredients</p>
                    </div>
                    <button className='get-recipe-btn'>Get a recipe</button>
                </div>
            </section>
            
        </main>
    )
}
