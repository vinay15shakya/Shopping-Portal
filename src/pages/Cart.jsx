import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
  <div >
  {
    cart.length > 0  ? 
    (<div className="flex flex-row mt-8">


      <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col ">

        <div className="flex flex-col gap-4">
          <div className="text-green-600 font-semibold">Your Cart</div>
          <div className="text-green-600 text-3xl">Summary</div>
          <p>
            <span className="text-gray-700 font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="">Total Amount: ${totalAmount}</p>
          <Link to="/">
          <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
          </Link>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1 className="text-green-600 font-semibold">Cart Empty</h1>
      <Link to={"/"}>
        <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
</div>
  );
};

export default Cart;
