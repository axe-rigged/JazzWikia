import { useState } from "react";
import trash from "../images/trash.svg";

function DeleteMinion (props) {
    const [open, setOpen] = useState(false);

    const deleteMinion = () => {
        var minion = props.minionsAtr.minions;
        fetch('http://192.168.8.116:8080/api/minion',{method: 'DELETE', body: JSON.stringify({minion})})
        .then(response=>props.minionsAtr.fetchMinions())
        .catch(err=>console.log(err))
        console.log(minion._id);
        setOpen(false)
    }

    return(
        <div className="col-start-6 col-end-6 py-2">
            <button onClick={()=>{setOpen(true)}}>
                    <img src={trash} alt="trashcan" className="w-6 h-6 bg-yellow-300 rounded-full"/>
            </button>
            <dialog className="w-2/5 rounded-lg border-solid border-black border-2" open={open}>
                <p className="text-center">You sure you wanna delete this minion?</p>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={deleteMinion}>Yes</button>
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={()=>{setOpen(false)}}>no</button>
                </div>
            </dialog>   
        </div>
    )

}

export default DeleteMinion;