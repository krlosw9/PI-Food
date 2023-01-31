import style from './Error404.module.css'
import icon from '../../utils/Error/icon.svg'

export default function BtnSeeMore() {
  return(
    <div className={style.containerError}>
      <img src={icon} alt="icon-not-found" />
      <p>Not found</p>
    </div>
  )
}