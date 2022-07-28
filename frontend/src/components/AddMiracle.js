//AddMiracle//DeleteMIracle
import React, { useState } from "react";

function AddMiracle(props) {
    const [open, setOpen] = useState(false);
    
    const [name, setName] = useState("");
    const [qualities, setQualities] = useState("");
    //alla oleva cost on ka
    const [lastcost, setLastcost] = useState(0);
    //kaksi alinta kuuluu toisiinsta. Nimi, cost, qualities, ruleforextra jos if/then tai muu. Lisää pow aina Extraflaws
    const [extraFlaws, setExtraFlaws] = useState([]);
    const [pow, setPow] = useState({name:"", cost:0, qualities:"", ruleforextra:"", capacity:""});
    //^
    const [effect, setEffect] = useState("");

    //find.all(extra), add, ... , profit?

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

    const findextras = () => {
        //Show options
        //On add button press add them to extraFlaws and reset this. HTML option dropbox jotta voi löytää edellisen haetun nopeammin
    }
    //Täydellinen systeemi olisi valita nimi. Sitten automaatisesti valita Qualities joko A, D tai U. Sitten tekee sen. SIt voi plussa toisen A,D tai U ja jne.
    //Toinen tarvittava asia olisi valita range, speed ja mass ja mahdollisesti automaatisesti kun ottaa tietyn kyvyn listaan niin voi valita useamman.
    //Tärkein asia olisi hakea jotenkin databasesta powerita extraFlaws osioon
    return(
        <div className="">
            <button className="px-10 rounded-full border-solid border-black border-2 text-white bg-emerald-500" onClick={handlerOpen}>Add Miracle</button>
            <dialog className="w-4/5 rounded-lg border-solid border-black border-2 " open={open}>
                <h1 className="text-center my-4 underline">New Miracle</h1>
                <div className="grid gap-4 grid-rows-3 grid-cols-2 w-1/2 mx-auto">
                    <label>Name</label>
                    <input name="name" type="text" className="border text-center" onChange={(event)=>{setName(event.target.value)}} value={name}/>
                    <label>Qualities</label>
                    <input name="qualities" type="text" className="border text-center" onChange={(event)=>{setQualities(event.target.value)}} value={qualities}/>
                </div>
                <div className="grid grid-cols-4 gap-4 mx-auto w-3/5">
                    <label>Extras</label>
                    <input className="border" name="skill" type="text" placeholder="Skill name"/>
                    <input className="border" name="dices" type="number" placeholder="Dices"/>
                    <button className="text-2xl rounded-full border-solid border-black border-2 text-white bg-violet-600">+</button>
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

export default AddMiracle;