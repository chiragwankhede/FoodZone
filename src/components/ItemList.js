import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left "
        >
            <img src = {CDN_URL + item.card.info.imageId} className="w-3/12 rounded-md"></img>
            {<button className="mb-2 ml-5 w-2/12 p-2 bg-black text-green-500 text-mdshadow-lg  rounded-lg size-15 text font-bold ">Add</button>}
          <div className="py-2">
            <span className="font-semibold">{item.card.info.name} </span>
            <span>- ₹{item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
