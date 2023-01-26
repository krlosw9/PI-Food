import { Link } from 'react-router-dom'
import logo from '../../utils/logo/logo.png'

export default function Logo() {
  return(
    <Link to='/home'>
      <img src={logo} alt="logo" />
    </Link>
  )
}