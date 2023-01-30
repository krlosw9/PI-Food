import iconAdd from '../../utils/button/iconAdd.svg'
import style from './Button.module.css'

export default function BtnAdd({add}) {
  
  return(
      <button className={`${style.btnRoundBack}`} onClick={add} >
        <img src={iconAdd} alt="icon-add"/>
      </button>
  )
}