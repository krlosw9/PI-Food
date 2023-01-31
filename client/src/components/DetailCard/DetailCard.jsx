import Header from '../Header/Header'
import Error404 from '../Errors/Error404'
import style from './DetailCard.module.css'
import IconHeart from '../../utils/card/IconHeart.svg'
import iconClock from '../../utils/card/iconClock.svg'

export default function DetailCard({ recipe }) {

  if (recipe.hasOwnProperty('error')) {
    return <div><Header /> <Error404 /></div>
  }
  return (
    <article className={style.detailCard}>
      <Header />
      {recipe.hasOwnProperty('message') && <h3 className={style.successMessage}>{recipe.message}</h3>}
      
      <div className={style.card}>
        <section className={style.mainContent}>
          <figure className={style.containerImage}>
            <img src={recipe.image} alt={recipe.title} className={style.recipeImage} />
          </figure>
          <div className={style.basicDetails}>
            <h1>{recipe.title}</h1>
            <h3>Dish type:</h3>
            <p>{recipe.dishTypes.map((dishType, index) => (
              (recipe.dishTypes.length -1) > index 
                ? <span key={index}>{dishType} - </span>
                : <span key={index}>{dishType}</span>
            ))}</p>
            <h3>Diet:</h3>
            <p>{recipe.diets.map((diet, index) => (
              (recipe.diets.length -1) > index 
                ? <span key={index}>{diet} - </span>
                : <span key={index}>{diet}</span>
            ))}</p>
            <div className={style.scores}>
              <span className={style.scoreHeart}>
                <img src={IconHeart} alt="icon-heart" />
                {recipe.healthScore}
                </span>
              <span>
                <img src={iconClock} alt="icon-clock" />
                {recipe.time}
              </span>
            </div>
          </div>
        </section>
        <section className={style.secondaryContent}>
          <h2>Summary:</h2>
          <p className={style.summary} dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
          {/* <p className={style.summary}>{recipe.summary}</p> */}
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