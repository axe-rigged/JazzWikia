//Ctrl+c/v. PItää koittaa jos voisi tehdä componenteiksi ja käyttää useammassa paikassa.
//material-ui dialog jutut voisi olla hyödyksi, mutta me tehdää vähän itse asiat tailwindilla
//MUISTA ETTÄ KUN SET() NIIN SISÄLLÄ PITÄÄ KÄYTTÄÄ {}, jos on objecti tai [], jos kyseessä on lista/array
import React, { useState } from "react";

function AddMinion(props) {
    const [open, setOpen] = useState(false);
    const [minion, setMinion] = useState({name:"", points:0, basestats:{}, basewill:0, skills:[]})
    const [skill, setSkill] = useState({skill:"", dices:0});
    const [lista, setLista] = useState([]);

    const handlerOpen = () =>{
        setOpen(true);
    }
    const handlerClose = () =>{
        setOpen(false);
    }

    const saveMinion = () =>{
        console.log(point());
        console.log(minion)
        //props.SaveMinion(minion);
        handlerClose();
    }

    const point = () => {
        var total = 0;
        for(var x of minion.basestats){total += x*5;}
        for(var y of lista){total += y.dices*2}
        total += minion.basewill*3
        return total;
    }
    
    const inputChanged = (event) => {
        setMinion({...minion, [event.target.name]: event.target.value});
    }
    const inputSkill = (event) => {
        setSkill({...skill, [event.target.name]: event.target.value});
    }

    const adds = () => {
        setLista([...lista, skill]);
        setSkill({skill:"", dices:0});
    }


    return(
        <div className="center">
            <button className="basis-1/2 px-10 rounded-full border-solid border-black border-2 text-white bg-blue-500" onClick={handlerOpen}>Add Minion</button>
            <dialog className="w-3/5" open={open}>
                <h1 className="text-center">New Minion</h1>
                <div className="">
                    <label >Name:</label>
                    <input name="name" type="text" onChange={inputChanged} value={minion.name}/>
                    <label >Basewill:</label>
                    <input name="basewill" type="number" onChange={inputChanged} value={minion.basewill}/>
                    <h1 className="text-center">Basestats:</h1>
                    <label>Body</label>
                    <input name="basestats.body" type="number" onChange={inputChanged} value={minion.basestats.body} placeholder="Body"/>
                    <label>Coordination</label>
                    <input name="basestats.coordinatuion" type="number" onChange={inputChanged} value={minion.basestats.coordinatuion} placeholder="coordination"/>
                    <label>Sense</label>
                    <input name="basestats.sense" type="number" onChange={inputChanged} value={minion.basestats.sense} placeholder="sense"/>
                    <label>Mind</label>
                    <input name="basestats.mind" type="number" onChange={inputChanged} value={minion.basestats.mind} placeholder="mind"/>
                    <label>Charm</label>
                    <input name="basestats.charm" type="number" onChange={inputChanged} value={minion.basestats.charm} placeholder="charm"/>
                    <label>Command</label>
                    <input name="basestats.command" type="number" onChange={inputChanged} value={minion.basestats.command} placeholder="command"/>
                </div>
                <br/>
                
                <h1 className="text-center">Skills:</h1>
                <div className="flex w-1/2 mx-auto">
                    <input className="basis-1/3" name="skill" type="text" onChange={inputSkill} value={skill.skill} placeholder="Skill name"/>
                    <input className="basis-1/3" name="dices" type="number" onChange={inputSkill} value={skill.dices} placeholder="Dices"/>
                    <button className="basis-1/3 text-2xl" onClick={adds}>+</button>
                </div>
                <ul>
                    {
                        lista.map((lista,index)=><li key={index}>{lista.skill}</li>)
                    }
                </ul>
                <br/>
                <br/>
                <button onClick={saveMinion}>Save</button>
                <button onClick={handlerClose}>Cancel</button>
            </dialog>
        </div>
    );
}

export default AddMinion;