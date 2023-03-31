import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-header-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-cart-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-cart-sm"
      />
    </div>
  </div>
)

export default Home
