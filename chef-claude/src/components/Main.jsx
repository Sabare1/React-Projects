export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const newIng = ingredients.map((item) => {
                    return <li>{item}</li>
    });
    function submitEvent(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
    }
    return(
        <main>
            <form className="input-form" onSubmit={submitEvent}>
                <input placeholder="e.g. oregano" aria-label="Add Ingredient" className="user-input" name='ingredient'></input>
                <button className="submit-btn">+ Add Ingredient</button>
            </form>
            <ul>
                {newIng}
            </ul>
        </main>
    )
}
