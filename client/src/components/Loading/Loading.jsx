import style from './Loading.module.css'
import icon from '../../utils/Loading/iconLoading.gif'

export default function Loading() {
  return(
    <div className={style.loading}>
      <div className={style.container}>
        <img src={icon} alt="" />
        <p>
          Loading
        </p>
      </div>
    </div>
  )
}