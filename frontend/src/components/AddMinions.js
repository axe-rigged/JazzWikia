//Ctrl+c/v. PItää koittaa jos voisi tehdä componenteiksi ja käyttää useammassa paikassa.
//material-ui dialog jutut voisi olla hyödyksi, mutta me tehdää vähän itse asiat tailwindilla
//MUISTA ETTÄ KUN SET() NIIN SISÄLLÄ PITÄÄ KÄYTTÄÄ {}, jos on objecti tai [], jos kyseessä on lista/array
import { useState, useEffect } from "react";

function AddMinion(props) {
    const [open, setOpen] = useState(false);
    const [minion, setMinion] = useState({name:"", points:0, basestats:{}, basewill:0, skills:[]})
    
    const[name, setName] = useState("");
    const[basewill, setBasewill] = useState(0);

    const [stat, setStat] = useState({body:0, coordinatuion:0, sense:0, mind:0, charm:0, command:0});

    const [lista, setLista] = useState([]);
    const [skill, setSkill] = useState({skill:"", dices:0});
    //Pitäisi tehdä form/required ennen lähetystä ja try juttuja
    //Clear, delete and edit buttons needed. Different component. Jalka component tiedoille ja pika tiedoille
    //WE could just track all stats and creat object before send it to backend.
    //Miksi tää on tapa nytten saada toimimaan koko homaa?!?! ME päivitetään koko minion objecti aina kun lisata muutetaan a.k.a lisätään objecteja. Kummiskin pitää olla yksi minimissä backendia varten vaikaa ei ole requmentia laitettu vielä
    //useCallback tai jokin muu pitää opetella. Mutta ei idea miten parhaiten updatee koko homma kun valittaa miljoonasta asiasta. Palaa myöhemmin takas tähän useEffectiin
    useEffect(()=>{
        saveminion();
    }, [lista])// eslint-disable-line react-hooks/exhaustive-deps
    
    function saveminion (){
        //setMinion({name:name, points:0, basewill:basewill, basestats:stat, skills:lista});
        setMinion({...minion, name:name, points:0, basewill:basewill, basestats:stat, skills:lista}); //Puuttuu piste määrä lasku
    }
    
    const handlerOpen = () =>{
        setOpen(true);
    }
    const handlerClose = () =>{
        setOpen(false);
    }


    function saveMinion() {
        props.SaveMinion(minion);
        handlerClose();
    }

    const inputChanged = (event) => {
        setStat({...stat, [event.target.name]: event.target.value});
    }
    
    const inputSkill = (event) => {
        setSkill({...skill, [event.target.name]: event.target.value});
    }
    const adds = () => {
        setLista([...lista, skill]);
        setSkill({skill:"", dices:0});
    }
    
    //row-span-{n}
    return(
        <div className="">
            <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600" onClick={handlerOpen}>Add Minion</button>
            <dialog className="w-3/5 rounded-lg border-solid border-black border-2 " open={open}>
                <h1 className="text-center my-4 underline">New Minion</h1>
                <div className="grid grid-cols-2 grid-rows-3 gap-2 w-1/2 mx-auto">
                    <label >Name:</label>
                    <input className="border" name="name" type="text" onChange={(event)=>{setName(event.target.value)}} value={name}/>
                    <label >Basewill:</label>
                    <input className="border" name="basewill" type="number" onChange={(event)=>{setBasewill(event.target.value)}} value={basewill}/>
                </div>
                <h1 className="text-center my-4 underline">Basestats:</h1>
                <div className="grid gap-4 grid-rows-3 grid-cols-2 w-1/2 mx-auto">
                    <label >Body</label>
                    <input name="body" type="number" onChange={inputChanged} value={stat.body}  className="border"/>
                    <label>Coordination</label>
                    <input name="coordinatuion" type="number" onChange={inputChanged} value={stat.coordinatuion}  className="border"/>
                    <label>Sense</label>
                    <input name="sense" type="number" onChange={inputChanged} value={stat.sense}  className="border"/>
                    <label>Mind</label>
                    <input name="mind" type="number" onChange={inputChanged} value={stat.mind}  className="border"/>
                    <label>Charm</label>
                    <input name="charm" type="number" onChange={inputChanged} value={stat.charm}  className="border"/>
                    <label>Command</label>
                    <input name="command" type="number" onChange={inputChanged} value={stat.command}  className="border"/>
                </div>
                <br/>
                
                <h1 className="text-center">Skills:</h1>
                <div className="grid grid-cols-3 gap-2 mx-auto w-4/5">
                    <input className="border" name="skill" type="text" onChange={inputSkill} value={skill.skill} placeholder="Skill name"/>
                    <input className="border" name="dices" type="number" onChange={inputSkill} value={skill.dices} placeholder="Dices"/>
                    <button className="text-2xl rounded-full border-solid border-black border-2 text-white bg-violet-600" onClick={adds}>+</button>
                </div>
                <ul className="w-4/5 mx-auto">
                    {
                        lista.map((lista,index)=><li key={index}>{lista.skill} | {lista.dices}</li>)
                    }
                </ul>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={saveMinion}>Save</button>
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={handlerClose}>Cancel</button>
                </div>
            </dialog>
        </div>
    );
}

export default AddMinion;