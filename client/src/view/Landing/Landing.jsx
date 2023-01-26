import style from './Landing.module.css';
import BtnSeeMore from '../../components/Button/BtnSeeMore'

export default function Landing() {
  return(
    <main className={style.container}>
      <div className={style.card}>
        <h1 className={style.cardTitle}>Wellcome!</h1>
        <div className={style.cardContent}>
          On this site, you can find the best <span>recipes. </span>
          In addition to the necessary <span>ingredients </span>and <span>instructions </span>to prepare them.
        </div>

        <BtnSeeMore />
      </div>
    </main>
  )
}