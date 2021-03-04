import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader';

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id).then((data)=>setRecipe(data.meals[0]))
    
    })
    return (
        <>
            <button className='btn go-back-btn' onClick={goBack}>Back</button>
            {!recipe.idMeal ? <Preloader/> : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6>:null} 
                    <h6>{recipe.strInstructions}</h6>
                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredient</th>    
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(recipe).map((key)=> {
                                    if(key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>

                    {recipe.strYoutube? (
                        <div className="row">
                            <h5 style={{margin: '2rem 0 1.5rem'}}>Video recipe</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                        </div>
                    ) : null}
                </div>
            )}
        </>

    )
}
export {Recipe};