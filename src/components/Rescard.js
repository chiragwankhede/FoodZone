import { CDN_URL } from "../utils/constants";


const Rescard = ({ resdata }) => {
    const {
      info: {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: { slaString
        },
      },
    } = resdata;
  
    return (
      <div className="m-10 p-3 w-[250px] bg-gray-100  hover:bg-gray-300       rounded-lg">
        <img
          className="rounded-md w-[250px] h-[200px] "
          alt="logo"
          src={ CDN_URL+ cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-lg font-serif">{name}</h3>
        <h4 className="py-2 text-lg font-serif">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold py-2 text-md">⭐{avgRating} ▪ {slaString }</h4>
        <h4 className="font-semibold py-2 text-lg">{costForTwo}</h4>
      </div>
    );
  };

  
  export default Rescard;