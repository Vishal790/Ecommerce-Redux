import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => {
      return acc + curr.price
    }, 0))
  }, [cart])


  return (
    <div className=" mb-10">
      {
        cart.length > 0 ?
          (
            <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5">
              <div className="w-[60%] flex flex-col p-2">
                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>
              <div>
                <div className=" font-semibold text-xl text-green-800">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                <p className=" text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total items: {cart.length}</span>
                </p>

              </div>
              <div>
                <p>Total Amount:{totalAmount} </p>
                <button>Checkout Now</button>
              </div>
            </div>
          )
          :
          (
            <div>
              <h1>Cart is empty</h1>
              <NavLink to={"/"}>
                <button>Continue Shopping</button>
              </NavLink>
            </div>
          )

      }

    </div>
  );
};

export default Cart;
