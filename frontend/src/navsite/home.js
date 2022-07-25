import "../App.css";
import book from "../images/book.svg";
import archive from "../images/archive.svg";
import minio from "../images/user.svg";
import zap from "../images/zap.svg";
import {Link} from "react-router-dom";
//We need search, we need delete, we need update, we need chatarchters, we need way to create scene/encounter. Health tracker
function Home(){


    return(
        <div className="h-96 w-4/5 mx-auto text-white bg-slate-800 border-solid border-4 border-purple-800 grid grid-cols-4 grid-rows-3 place-items-center rounded-lg">
            <div>
                <Link to={"/about"}>
                <button>
                <img src={book} alt="Home" className="w-14 h-14 bg-yellow-300 rounded-lg"/>
                <p>About</p>
                </button>
                </Link>
            </div>
            <div>
                <Link to={"/extra"}>
                <button onClick={()=>{console.log("Extra")}}>
                <img src={archive} alt="Extra" className="w-14 h-14 bg-yellow-300 rounded-lg"/>
                <p>Extras</p>
                </button>
                </Link>
            </div>
            <div>
                <Link to={"/minions"}>
                <button>
                <img src={minio} alt="Minion" className="w-14 h-14 bg-yellow-300 rounded-lg"/>
                <p>Minion</p>
                </button>
                </Link>
            </div>
            <div>
                <Link to={"/"}>
                <button>
                <img src={zap} alt="Miracles?" className="w-14 h-14 bg-yellow-300 rounded-lg"/>
                <p>Miracles?</p>
                </button>
                </Link>
            </div>
            
        </div>
    );
}

export default Home;