import arrowRight from '../../utils/landing/arrowRight.png'
import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnSeeMore() {
  return(
    <Link to='/home'>
      <button className={style.button}>
        See recipes <span><img src={arrowRight} alt="icon-new-recipe" /></span>
      </button>
    </Link>
  )
}