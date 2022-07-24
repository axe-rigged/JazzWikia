import { useState } from "react";
import trash from "./trash.svg"

function DeletePower (props) {
    const [open, setOpen] = useState(false);

    //Tämä functi olisi voinut olla navsite/extras ja sieltä propsin avulla antaa vaan function. Mutta tuli kokeiltua siirtää useampi propsilla.
    const deletePower = () => {
        var extra = props.extraAtr.powers;
        fetch('http://192.168.8.116:8080/api/power',{method: 'DELETE', body: JSON.stringify({extra})})
        .then(response=>props.extraAtr.fetchPowers())
        .catch(err=>console.log(err))
        console.log(extra._id);
        setOpen(false)
    }

    return(
        <div className="col-start-6 col-end-6 mx-auto my-auto py-2">
            <button onClick={()=>{setOpen(true)}}>
                    <img src={trash} alt="trashcan" className="w-6 h-6 bg-yellow-300 rounded-full"/>
            </button>
            <dialog className="w-2/5 rounded-lg border-solid border-black border-2" open={open}>
                <p className="text-center">You sure you wanna delete this power?</p>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={deletePower}>Yes</button>
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={()=>{setOpen(false)}}>no</button>
                </div>
            </dialog>   
        </div>
    )

}

export default DeletePower;