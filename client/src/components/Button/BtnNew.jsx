import iconNewRecipe from '../../utils/navBar/IconNewRecipe.png'
import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnSeeMore() {
  return(
    <Link to='/form'>
      <button className={`${style.button} ${style.btnNew}`}>
        New Recipe <span><img src={iconNewRecipe} alt="icon-new-recipe" /></span>
      </button>
    </Link>
  )
}