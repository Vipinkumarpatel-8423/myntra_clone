import { IoIosPersonAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector(state => state.bag)

  return (
    <header>
      <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more" />
      </div>
      <div className="action_bar">
        <Link className="action_container" to="/profile">
          {/* <span className="material-symbols-outlined action_icon">person</
          span> */}
          <IoIosPersonAdd />
          <span className="action_name">Profile</span>
        </Link>

        <Link className="action_container" to="/wishlist">
          {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
          <FaRegHeart />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link className="action_container" to="/bag">
          {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
          <BsBagFill />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  )
}
export default Header