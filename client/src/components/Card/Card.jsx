import style from './Card.module.css'
import IconHeart from '../../utils/card/IconHeart.svg'
import iconClock from '../../utils/card/iconClock.svg'
import BtnKnowMore from '../Button/BtnKnowMore'

export default function Card({id, image, title, healthScore, time, diets}) {
  return(
    <div className={style.card}>
      <img className={style.recipeImage} src={image} alt={title} />
      <h3>{title}</h3>
      <div className={style.scores}>
        <h4 className={style.scoreHeart}><img src={IconHeart} alt="icon-heart" /> {healthScore}</h4>
        <h4><img src={iconClock} alt="icon-clock" />{time}min</h4>
      </div>
      <section className={style.diets}>
        {diets.map((diet, index) => (
          (diets.length-1) > index
            ? `${diet} - `
            : diet
        ))}
      </section>
      <BtnKnowMore idRecipe={id}/>
    </div>
  )
}