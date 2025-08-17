export default function IngredientsList(props){
    const newIng = props.ingredients.map((item) => {
                    return <li>{item}</li>
    });
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>
                {newIng}
            </ul>
            {props.ingredients.length > 3 && 
                <div className='recipe-container' ref={props.ref}>
                    <div className='about-recipe-gen'>
                        <p id='hype-user'>Ready for a recipe?</p>
                        <p id='actual-ins'>Generate a recipe from your set of ingredients</p>
                    </div>
                    <button className='get-recipe-btn' onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}