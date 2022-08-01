//AddMiracle//DeleteMIracle
import { useState, useEffect } from "react";

function AddMiracle(props) {
    useEffect(()=>{
        fetch('http://192.168.8.116:8080/api/power/')
        .then(response=>response.json())
        .then(data=>setList(data))
        .catch(err=>console.error(err))
    },[])

    const [open, setOpen] = useState(false);
    
    const [name, setName] = useState("");
    const [qualities, setQualities] = useState("");
    //alla oleva cost on ka
    const [lastcost, setLastcost] = useState(0);
    //miraclen rakennus
    const [mir,setMir] = useState([]); //sisällä on quality, extras/flaws (ei pakko. Pow lisätään extraFlaws:iin), capacity
    const [quality, setQyality] = useState("");
    const [extraFlaws, setExtraFlaws] = useState([]);
    //const [pow, setPow] = useState({name:"", cost:0, ruleforextra:""});
    const [cap, setCap] = useState("")
    //^
    const [effect, setEffect] = useState("");
    
    
    const handlerOpen = () =>{
        setOpen(true);
    }
    const handlerClose = () =>{
        setOpen(false);
    }
    
    const savePower = () =>{
        console.log(name)
        //create miracle = useStates+---
        //props.SavePower();
        handlerClose();
    }
    
    const [list, setList] = useState([]);
    const [searchv, setSearchv] = useState("");
    const addextras = () => {
        var x = list.findIndex(element => element.name === searchv);
        setExtraFlaws([...extraFlaws, list[x]]);
        setSearchv("");
    }
    //remove extra/flaw and remove or add to points/cost. Use arrow syntac onClick when wanna parse values
    const removeindex = (index) => {
        setExtraFlaws(extraFlaws.filter(extra => extra._id !== index));
    }
    //Täydellinen systeemi olisi valita nimi. Sitten automaatisesti valita Qualities joko A, D tai U. Sitten tekee sen. SIt voi plussa toisen A,D tai U ja jne.
    return(
        <>
            <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-emerald-500" onClick={handlerOpen}>Add Miracle</button>
            <dialog className="w-4/5 rounded-lg border-solid border-black border-2 " open={open}>
                <h1 className="text-center my-4 underline">New Miracle</h1>
                <h1 className="text-green-600 text-center mb-4">Cost: {lastcost}</h1>
                <div className="grid gap-4 grid-rows-3 grid-cols-2 w-1/2 mx-auto">
                    <label>Name</label>
                    <input name="name" type="text" className="border text-center" onChange={(event)=>{setName(event.target.value)}} value={name}/>
                    <label>Qualities</label>
                    <input name="qualities" type="text" className="border text-center" onChange={(event)=>{setQualities(event.target.value)}} value={qualities}/>
                </div>

                <div className="mx-auto w-3/5 grid grid-cols-3 mb-2">
                    <label>Powers</label>
                    <input className="border" name="search" type="seach" placeholder="Extra/Flaws name" onChange={(event)=>{setSearchv(event.target.value)}} value={searchv} list="powa"/>
                    <datalist id="powa">
                        {
                            list.map((list, index)=><option key={index} value={list.name}/>)
                        }
                    </datalist>
                    <button className="text-xl rounded-full border-solid border-black border-2 text-white bg-violet-600" onClick={addextras}>+</button>
                </div>
                <div className="text-center">
                {
                    extraFlaws.map((extra)=><div key={extra._id}>{extra.name}{extra.type}{extra.cost}{extra.effect}<button onClick={()=>removeindex(extra._id)}>X</button></div>)
                }
                <div className="mx-auto w-3/5 grid grid-cols-2 gap-2">
                    <label>Capacity</label><input className="border" type="text" onChange={(event)=>{setCap(event.target.value)}} value={cap}/>
                    <label>Effect</label><textarea rows="6" cols="50" className="border" type="text" onChange={(event)=>{setEffect(event.target.value)}} value={effect}/>
                </div>
                </div>
                <br/>
                <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={savePower}>Save</button>
                    <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-red-500" onClick={handlerClose}>Cancel</button>
                </div>
            </dialog>
        </>
    );
}

export default AddMiracle;