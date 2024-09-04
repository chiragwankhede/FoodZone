import Rescard from "./Rescard";
import resObj from "../utils/mockdata";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resObj.map((resdata)=>(
            <Rescard  key={resdata.info.id}  resdata={resdata} />
          ))}
        </div>
      </div>
    );
  };


export default Body;