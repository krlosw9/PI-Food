import style from './Home.module.css'
import Cards from '../../components/Cards/Cards'
import BtnNew from '../../components/Button/BtnNew'
import Logo from "../../components/Logo/Logo"
import iconGithub from '../../utils/footer/iconGithub.png'
import iconLinkedin from '../../utils/footer/iconLinkedin.png'

const data = [
  {
    "id": "273ae03e-1ffa-486e-a2cf-ed0ecdd45b88",
    "title": "Salmon Quinoa Risotto",
    "healthScore": 12,
    "time": 15,
    "image": "https://mayoresconectados.com.ar/wp-content/uploads/2017/05/comida-misteriosa-2.jpg",
    "diets": [
      "Ketogenic"
    ]
  },
  {
    "id": "0bb9b3d6-e1f2-4fd0-b42b-a92f571e4436",
    "title": "two recipe",
    "healthScore": 21,
    "time": 45,
    "image": "https://mayoresconectados.com.ar/wp-content/uploads/2017/05/comida-misteriosa-2.jpg",
    "diets": [
      "Ketogenic"
    ]
  },
  {
    "id": "6f82732a-7f3b-4694-be0e-7c15b8590f0d",
    "title": "three recipe",
    "healthScore": 21,
    "time": 45,
    "image": "https://mayoresconectados.com.ar/wp-content/uploads/2017/05/comida-misteriosa-2.jpg",
    "diets": [
      "Ketogenic"
    ]
  },
  {
    "id": "aece5dcf-7b02-44f3-acca-446fc2890410",
    "title": "three recipe",
    "healthScore": 21,
    "time": 45,
    "image": "https://mayoresconectados.com.ar/wp-content/uploads/2017/05/comida-misteriosa-2.jpg",
    "diets": [
      "Ketogenic"
    ]
  },
  {
    "id": 782585,
    "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
    "healthScore": 100,
    "time": 45,
    "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    "diets": [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan"
    ],
    "created": false
  },
  {
    "id": 716426,
    "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    "healthScore": 75,
    "time": 30,
    "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    "diets": [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan"
    ],
    "created": false
  }
]

export default function Home() {
  return (
    <div className={style.containerHome}>
      <div className={style.secondContainer}>
        <header className={style.header}>
          <Logo />
          <BtnNew />
        </header>
        <main>
          <Cards recipes={data}/>
        </main>
      </div>
      <footer className={style.footer}>
        <section className={style.footerDeveloper}>
          Desarrollado por: <span>Carlos Eduardo Waldo Rojas</span>
          </section>
        <section>
          <img src={iconLinkedin} alt="logo-linkedin" className={style.footerLinkedin}/>
          <img src={iconGithub} alt="logo-github" className={style.footerGithub}/>
        </section>
      </footer>
    </div>
  )
}