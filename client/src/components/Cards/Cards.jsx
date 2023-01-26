import style from './Cards.module.css'
import Card from '../Card/Card'
import Error404 from '../Errors/Error404'

export default function Cards({recipes}) {

  return(
    recipes.length === 0 
    ? <Error404 />
    :
    <div className={style.cards}>
      {
        recipes.map(recipe  => <Card key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} healthScore={recipe.healthScore} time={recipe.time} diets={recipe.diets}/>)
      }
    </div>
  )
}