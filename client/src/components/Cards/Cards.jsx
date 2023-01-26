import style from './Cards.module.css'
import Card from '../Card/Card'

export default function Cards({recipes}) {
  return(
    <div className={style.cards}>
      {
        recipes.map(recipe  => <Card key={recipe.id} id={recipe.id} image={recipe.image} title={recipe.title} healthScore={recipe.healthScore} time={recipe. time} diets={recipe.diets}
          />)
      }
    </div>
  )
}