//AddMiracle//DeleteMIracle
import { useState, useEffect } from "react";

function AddMiracle(props) {
    
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch('http://192.168.8.116:8080/api/power/')
        .then(response=>response.json())
        .then(data=>setList(data))
        .catch(err=>console.error(err))
    },[]);

    const [open, setOpen] = useState(false);
    
    const [name, setName] = useState("");
    const [qualities, setQualities] = useState("");
    const [lastcost, setLastcost] = useState(0);
    //miraclen rakennus
    const [miracles, setMiracles] = useState([]);
    const [miracle,setMiracle] = useState([]); //sisällä on quality, extras/flaws (ei pakko. Pow lisätään extraFlaws:iin), capacity
    const [quality, setQuality] = useState("");
    const [extraFlaws, setExtraFlaws] = useState([]); //Ei tietoa miten lisätä lennosta extrarule. Mahdollisesti tyhjä teksti paikka joka on optional täyttää?
    const [ruleforextra, setRuleforextra] = useState("");
    const [capacity, setCapacity] = useState("");
    //^
    const [effect, setEffect] = useState("");
        
    const handlerOpen = () =>{
        setOpen(true);
    }
    const handlerClose = () =>{
        setOpen(false);
    }
    const savePower = () =>{
        //create miracle = useStates+---
        console.log(miracles)
        //props.SavePower();
        handlerClose();
    }
    //Jotenin muokata extralawsin sisällä olevat propeties oikein; [name, cost, extrarule]. Delay tapahtuu
    const newmiracle = () =>{
        setMiracle({quality: quality, extraFlaws: extraFlaws, capacity:capacity})
        setMiracles([...miracles, miracle]);
        setQuality("");
        setExtraFlaws([]);
        setCapacity("");
        setRuleforextra("");
    }

    const [searchv, setSearchv] = useState("");
    const addextras = () => {
        var x = list.findIndex(element => element.name === searchv);
        setLastcost(lastcost + list[x].cost);
        setExtraFlaws([...extraFlaws, list[x]]);
        setSearchv("");
    }
    const bb = (y) => {
        const pointsback = extraFlaws.filter(x => x._id === y); //filter retruns array!
        setLastcost(lastcost - pointsback[0].cost);
    }
    //remove extra/flaw and remove or add to points/cost. Use arrow syntac onClick when wanna parse values
    const removeindex = (index) => {
        bb(index);
        setExtraFlaws(extraFlaws.filter(extra => extra._id !== index));
    }
    //Täydellinen systeemi olisi valita nimi. Sitten automaatisesti valita Qualities joko A, D tai U. Sitten tekee sen. SIt voi plussa toisen A,D tai U ja jne. Todella ruma.
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

                <div className="mx-auto w-3/5 grid grid-cols-4 my-2">
                    <label>Powers</label>
                    <input className="border" name="search" type="seach" placeholder="Extra/Flaws name" onChange={(event)=>{setSearchv(event.target.value)}} value={searchv} list="powa"/>
                    <datalist id="powa">
                        {
                            list.map((list, index)=><option key={index} value={list.name}/>)
                        }
                    </datalist>
                    <button className="text-xl rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-green-500" onClick={addextras}>Add</button>
                    <button className="text-xl rounded-full border-solid border-black border-2 text-white bg-violet-600 hover:bg-yellow-400" onClick={newmiracle}>New miracle</button>
                </div>
                <div className="mx-auto w-3/5 grid grid-cols-1 gap-2 my-2">
                    <input className="text-center text-2xl my-2 border" type="text" name="quality" onChange={(event)=>{setQuality(event.target.value)}} value={quality} placeholder="Quality"/>
                </div>
                <div className="text-center grid grid-cols-1 gap-1 place-items-center my-2">
                {
                    extraFlaws.map((extra)=><div key={extra._id}>{extra.name}{extra.type}{extra.cost}{extra.effect}<button className="mx-2 text-red-400" onClick={()=>removeindex(extra._id)}>X</button></div>)
                }
                </div>
                <div className="mx-auto w-3/5 grid grid-cols-2 gap-2 my-4">
                    <label>Extrarule</label><input type="text" className="text-xl border" onChange={(event)=>{setRuleforextra(event.target.value)}} value={ruleforextra} placeholder="Possible extra rules for this power part"/>        
                    <label>Capacity</label><input className="border" type="text" onChange={(event)=>{setCapacity(event.target.value)}} value={capacity} placeholder="Capacity"/>
                    <label>Effect</label><textarea rows="6" cols="50" className="border" type="text" onChange={(event)=>{setEffect(event.target.value)}} value={effect} placeholder="Miracles/powers effect"/>
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