import icon from '../../utils/button/iconNextArrow.svg'
import style from './Button.module.css'

export default function BtnNext({handlerNext}) {
  return(
    <button className={`${style.btnRoundBack}`} onClick={handlerNext} >
      <img src={icon} alt="icon-next-arrow"/>
    </button>
  )
}