import arrowRight from '../utils/landing/arrowRight.png'
import style from './Landing.module.css';
import {Link} from 'react-router-dom'

export default function Landing() {
  return(
    <main className={style.container}>
      <div className={style.card}>
        <h1 className={style.cardTitle}>Wellcome!</h1>
        <div className={style.cardContent}>
          On this site, you can find the best <span>recipes. </span>
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