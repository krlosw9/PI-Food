import { Link } from 'react-router-dom'
import logo from '../../utils/logo/logo.svg'

export default function Logo() {
  return(
    <Link to='/home'>
      <img src={logo} alt="logo" />
    </Link>
  )
}