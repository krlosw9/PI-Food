import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnKnowMore({idRecipe}) {
  return(
    <Link to={`/detail/${idRecipe}`}>
      <button className={`${style.button} ${style.btnKnowMore}`}>
        Know more
      </button>
    </Link>
  )
}