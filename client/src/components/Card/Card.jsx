import style from './Card.module.css'
import IconHeart from '../../utils/card/IconHeart.png'
import iconClock from '../../utils/card/iconClock.png'
import BtnKnowMore from '../Button/BtnKnowMore'

export default function Card({id, image, title, healthScore, time, diets}) {
  return(
    <div className={style.card}>
      <img className={style.recipeImage} src={image} alt={title} />
      <h3>{title}</h3>
      <h4><img src={IconHeart} alt="icon-heart" /> {healthScore}</h4>
      <h4><img src={iconClock} alt="icon-clock" />{time}min</h4>
      <section>
        {diets.map(diet => diet)}
      </section>
      <BtnKnowMore idRecipe={id}/>
    </div>
  )
}