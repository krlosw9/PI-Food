import Logo from "../Logo/Logo";
import style from './Header.module.css'
import BtnBack from '../Button/BtnBack'

const Header = () =>{
  return(
    <nav className={style.header}>
      <Logo />
      <BtnBack />
    </nav>
  )
}

export default Header;