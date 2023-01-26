import iconReturnArrow from '../../utils/navBar/iconReturnArrow.png'
import {Link} from 'react-router-dom'
import style from './Button.module.css'

export default function BtnSeeMore() {
  return(
    <Link to='/home'>
      <button className={`${style.button} ${style.btnBack}`}>
        <span><img src={iconReturnArrow} alt="icon-return-arrow"/></span>Back
      </button>
    </Link>
  )
}