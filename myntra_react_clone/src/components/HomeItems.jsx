import { useDispatch, useSelector } from "react-redux"
import { bagAction } from "../store/bagSlice"
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id))
  }
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id))
  }
  const bagItems = useSelector((store) => store.bag)
  const elementFound = bagItems.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag" >Add to Bag</button> */}

      {elementFound ? <button className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}> <MdDeleteOutline /> Remove</button> :
        <button className="btn btn-success btn-add-bag" onClick={handleAddToBag}> <IoAddCircleOutline />  Add to Bag</button>}

    </div>
  )
}
export default HomeItems