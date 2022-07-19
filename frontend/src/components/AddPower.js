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

    return(
        <div className="">
            <button className="basis-1/2 px-10 rounded-full border-solid border-black border-2 text-white bg-blue-500" onClick={handlerOpen}>Add power</button>
            <dialog className="w-3/5 rounded-lg border-solid border-black border-2 " open={open}>
                <h1 className="text-center">New Power</h1>
                <div>
                <label >Name</label>
                <input name="name" type="text" onChange={inputChanged} value={power.name}/>
                <label >Type</label>
                <input name="type" type="text" onChange={inputChanged} value={power.type}/>
                <label >Cost</label>
                <input name="cost" type="number" onChange={inputChanged} value={power.cost}/>
                <label >Effect</label>
                <input name="effect" type="text" onChange={inputChanged} value={power.effect}/>
                </div>
                <div>
                    <button onClick={savePower}>Save</button>
                    <button onClick={handlerClose}>Cancel</button>
                </div>
            </dialog>
        </div>
    );
}

export default AddPower;