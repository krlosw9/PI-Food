import iconNewRecipe from '../../utils/navBar/IconNewRecipe.svg'
import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnSeeMore() {
  return(
    <Link to='/create'>
      <button className={`${style.button} ${style.btnNew}`}>
        New Recipe <span><img src={iconNewRecipe} alt="icon-new-recipe" /></span>
      </button>
    </Link>
  )
}