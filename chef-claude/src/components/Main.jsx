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
            <ul>
                {newIng}
            </ul>
        </main>
    )
}
