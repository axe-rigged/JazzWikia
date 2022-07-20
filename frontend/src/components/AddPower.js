//make power component that you just add to power.js
//material-ui dialog jutut voisi olla hyödyksi, mutta me tehdää vähän itse asiat tailwindilla
import React, { useState } from "react";

function AddPower(props) {
    const [open, setOpen] = useState(false);
    const [power, setPower] = useState({name:"", type:"", cost:0, effect:""})

    const handlerOpen = () =>{
        setOpen(true);
    }
    const handlerClose = () =>{
        setOpen(false);
    }

    const savePower = () =>{
        console.log(power)
        props.SavePower(power);
        handlerClose();
    }

    const inputChanged = (event) => {
        setPower({...power, [event.target.name]: event.target.value});
    }
    //html <form/> voisi antaa muutaman mukavan edun esimerkiksi valmiin objectin tai tarkistus syntaxin et ei voi lähettää tyhjää... 
    return(
        <div className="">
            <button className="basis-1/2 px-10 rounded-full border-solid border-black border-2 text-white bg-blue-500" onClick={handlerOpen}>Add power</button>
            <dialog className="w-3/5 rounded-lg border-solid border-black border-2 " open={open}>
                <h1 className="text-center my-4 underline">New Power</h1>
                <div className="grid gap-4 grid-rows-3 grid-cols-2 w-1/2 mx-auto">
                <label >Name</label>
                <input name="name" type="text" className="border text-center" onChange={inputChanged} value={power.name}/>
                <label >Type</label>
                <input name="type" type="text" className="border text-center" onChange={inputChanged} value={power.type}/>
                <label >Cost</label>
                <input name="cost" type="number" className="border text-center" onChange={inputChanged} value={power.cost}/>
                <label >Effect</label>
                <input name="effect" type="text" className="border text-center" onChange={inputChanged} value={power.effect}/>
                </div>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={savePower}>Save</button>
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={handlerClose}>Cancel</button>
                </div>
            </dialog>
        </div>
    );
}

export default AddPower;