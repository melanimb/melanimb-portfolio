import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'

function Navbar () {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <div>
          <div className="social">
            <a href="https://github.com/melanimb" target='_blank' rel='noreferrer'>
              <img src="github.png" alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/melania-mares-321034262/" target='_blank' rel='noreferrer'>
              <img src="linkedin.png" alt="linkedin icon" />
            </a>
            <a href="https://www.instagram.com/melani.mares/" target='_blank' rel='noreferrer'>
              <img src="instagram.png" alt="instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
