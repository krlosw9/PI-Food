import iconReturnArrow from '../../utils/button/iconReturnArrow.svg'
import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnSeeMore() {
  return(
    <Link to='/home'>
      <button className={`${style.btnRoundBack}`}>
        <span><img src={iconReturnArrow} alt="icon-return-arrow"/></span>
      </button>
    </Link>
  )
}