import style from './DetailCard.module.css'
import Header from '../Header/Header'
import IconHeart from '../../utils/card/IconHeart.png'
import iconClock from '../../utils/card/iconClock.png'

export default function DetailCard({ recipe }) {

  return (
    <article className={style.detailCard}>
      <Header />
      <div className={style.card}>
        <section>
          <figure className={style.containerImage}>
            <img src={recipe.image} alt={recipe.title} className={style.recipeImage} />
          </figure>
          <div>
            <h1>{recipe.title}</h1>
            <h3>Dish type:</h3>
            <p>{recipe.dishTypes.map((dishType, index) => <span key={index}>{dishType}</span>)}</p>
            <h3>Diet:</h3>
            <p>{recipe.diets.map((diet, index) => <span key={index}>{diet}</span>)}</p>
            <span>
              <img src={IconHeart} alt="icon-heart" />
              {recipe.healthScore}
            </span>
            <span>
              <img src={iconClock} alt="icon-clock" />
              {recipe.time}
            </span>
          </div>
        </section>
        <section>
          <h2>Summary:</h2>
          <p className={style.summary}>{recipe.summary}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
          </ul>
          <h2>Instructions:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
          </ol>
        </section>
      </div>
    </article>

  )
}