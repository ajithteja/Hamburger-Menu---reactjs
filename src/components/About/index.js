import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-header-container">
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-cart-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-cart-sm"
      />
    </div>
  </div>
)

export default About
