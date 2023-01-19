import arrowRight from '../utils/arrowRight.png'
import style from './Landing.module.css';
import {Link} from 'react-router-dom'

export default function Landing() {
  return(
    <main className={style.container}>
      <div className={style.card}>
        <div className={style.cardTitle}>¡Wellcome!</div>
        <div className={style.cardContent}>
          On this site, you can find the best <span>recipes </span>.
          In addition to the necessary <span>ingredients </span>and <span>instructions </span>to prepare them.
        </div>
        <Link to='/home'>
          <button className={style.cardButton}>
            See recipes <span><img src={arrowRight} alt="arrowRight" /> </span>
          </button>
        </Link>
      </div>
    </main>
  )
}