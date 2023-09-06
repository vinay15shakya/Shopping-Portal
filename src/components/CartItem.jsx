
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div  className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline w-50 h-50">

      <div className="flex gap-4 ">

        <div>
          <img src={item.image}    className="h-40 w-40 "  />
        </div>
        <div className="grid">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1  className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div>
            <p  className="text-green-600 font-semibold">{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-2xl border-2 "/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
