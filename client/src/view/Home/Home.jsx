import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getAll } from '../../redux/actions'
import style from './Home.module.css'
import Cards from '../../components/Cards/Cards'
import BtnNew from '../../components/Button/BtnNew'
import Logo from "../../components/Logo/Logo"
import Pagination from '../../components/Pagination/Pagination'
import iconGithub from '../../utils/footer/iconGithub.png'
import iconLinkedin from '../../utils/footer/iconLinkedin.png'

export default function Home() {
  const PAGINATOR_SIZE = 9;
  const dispatch = useDispatch();
  const allRecipes = useSelector(store => store.allRecipes);
  const currentPage = useSelector(store => store.currentPage);

  useEffect(() => {
    dispatch(getAll())
  },[dispatch])

  const paginatedRecipes = () =>{
    const offset = (currentPage-1) * PAGINATOR_SIZE;
    const limit = offset + PAGINATOR_SIZE;
    return allRecipes.slice(offset, limit)
  }

  const pageCount = () => Math.ceil(allRecipes.length / PAGINATOR_SIZE)

  return (
    <div className={style.containerHome}>
      <div className={style.secondContainer}>
        <header className={style.header}>
          <Logo />
          <BtnNew />
        </header>
        <main>
          <Cards recipes={paginatedRecipes()}/>
          {allRecipes.length !== 0 && <Pagination pageCount={pageCount()} currentPage={currentPage}/>}
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