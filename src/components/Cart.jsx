/* 
Note: 
on clicking the button Add of dish, the cart will show 1, on adding other dishes, the cart on header will also increment.
This feature is acheived using Redux ToolKit.
Whar happens is:
- When we click add button, it dispatches an action and the action calls a function and the function modifies the data in cart slice. This function is known as Reducer.
- Using Selector we read data from cart slice and this selector will update the UI with the data. This is known as Subscribing to the store bcoz as soon as the data in slice changes, our UI is also updated.
- In short, on clicking add btn, cart sice is updated and bcoz the Cart component is subscribed to the cart slice, as soon as cart slice updates, the data on UI will be updated as well.

Steps followed:
- install redux toolkit(npm i @reactjs/toolkit) and react redux(npm i react-redux) (both libraries are needed for working with redux toolkit)
- build our store
- connect store to application
- create cart slice
- dispatch action
- selector 

*/
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store)=>store.cart.totalPrice);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-800 h-full min-h-screen text-light-gray px-6 py-9 rounded-md">
      {
      (cartItems.length > 0) ?
      ( <div className="flex justify-between cart-items gap-3 max-[650px]:flex-col">
        <div className="flex flex-col gap-4 w-8/12 max-[650px]:w-full">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} idx={index} />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <div className="font-bold text-lg text-green-600">YOUR CART</div>
            <div className="font-bold text-3xl text-green-600">SUMMARY</div>
            <div className="font-semibold opacity-70">Total Items: {cartItems.length}</div>
          </div>
          <div className="mb-5">
            <div className="text-white opacity-50 font-semibold text-xl mb-2">
              Total Amount: Rs. {totalPrice}
            </div>
            <div className="flex flex-col">
            <button className="text-2xl font-bold text-white opacity-80 bg-green-500 rounded-lg px-3 py-1">
              Checkout Now
            </button>
            <button
              className="text-xl mt-2 font-semibold text-white opacity-80 bg-red-500 rounded-lg p-1"
              onClick={clearCartHandler}
            >
              Clear Cart
            </button>
            </div>
          </div>
        </div>
      </div>
            )
      : (
          <div className='h-screen'>
          <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='font-semibold text-2xl'>Cart Empty</div>
          <Link to="/" className='rounded-lg bg-green-600 font-semibold text-white text-xl px-3 py-1 hover:scale-110 transition-transform '>
            Shop Now</Link>
          </div>
          </div>
        )  
     }
     
    </div>
  );
};

export default Cart;
