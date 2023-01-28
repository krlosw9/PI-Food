import { Link } from 'react-router-dom'
import Logo from "../Logo/Logo";
import style from './Header.module.css'
import iconReturnArrow from '../../utils/navBar/iconReturnArrow.png'

const Header = () =>{
  return(
    <nav className={style.header}>
      <Logo />
      <Link to='/home'>
        <div className={style.btnBack}>
          <img src={iconReturnArrow} alt="icon-return-arrow" />
        </div>
      </Link>
    </nav>
  )
}

export default Header;