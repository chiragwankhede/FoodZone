import { CDN_URL } from "../utils/constants";


const Rescard = ({ resdata }) => {
    const {
      info: {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: { deliveryTime },
      },
    } = resdata;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="logo"
          src={ CDN_URL+ cloudinaryImageId}
        />
        <h7>{name}</h7>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
        <h6>{deliveryTime} minutes</h6>
      </div>
    );
  };

  
  export default Rescard;