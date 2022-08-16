import { useState } from "react";
import trash from "../images/trash.svg"
//tämän olisi voinut tehdä ja varmaa tulevaisuudessa kannattaa tehdä recylettäväksi componentiksi hookilla tai toisella frameworkilla.
function DeleteMiracle(props){
    const [open, setOpen] = useState(false);

    const deletemir = () => {
        console.log(props.mira.mir._id)
        var mir = props.mira.mir;
        props.mira.deleteMiracle(mir);
        setOpen(false);
    }

    return(
        <div className="float-right ml-2">
            <button onClick={()=>{setOpen(true)}}>
                    <img src={trash} alt="trashcan" className="w-6 h-6 bg-yellow-300 rounded-full"/>
            </button>
            <dialog className="w-2/5 rounded-lg border-solid border-black border-2" open={open}>
                <p className="text-center">You sure you wanna delete this Miracle?</p>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={()=>{deletemir()}}>Yes</button>
                    <button className="rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={()=>{setOpen(false)}}>no</button>
                </div>
            </dialog>   
        </div>
    )
}

export default DeleteMiracle;