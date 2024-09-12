import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-3 p-2">
      <h1 className="text-2xl font-bold font-serif">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleclearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>
            Your cart is empty<br></br>
            You can go to home page to view more restaurants
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
