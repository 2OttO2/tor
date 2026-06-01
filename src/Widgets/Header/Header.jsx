import logo from '../../assets/logoTor.png';
import './Header.css'

function Header(){
  return(
  <div className="logo">
  <img src={logo}/>
  <a id='botaoLogin'>LOG IN</a>
  </div>
  )
}
export default Header
