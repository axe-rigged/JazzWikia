import "../App.css";
import React, {useState, useEffect} from 'react'
import AddMinion from "../components/AddMinions";
import DeleteMinion from "../components/DeleteMinion";
//add maybe way to edit and save.
function MINIONS(){

    const [minions, setMinions] = useState([]);

    const fetchMinions = () =>{
        fetch('http://192.168.8.116:8080/api/minion')
        .then(response=>response.json())
        .then(data=>setMinions(data))
        .then(data=>console.log(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchMinions();
    },[]);

    const SaveMinion = (newMinion) =>{
        fetch('http://192.168.8.116:8080/api/minion', {method: 'POST', body: JSON.stringify(newMinion)})
        .then(response => fetchMinions())
        .catch(err => console.error(err))
    }


    //Lisää key id li jutuille. Itkien eteenpäin... Ei uudistu kun poistaa.
    //for(x in minions.basetstats)=><li>{x} | {minions.basestats[x]}</li>. Eisaa tehdä render osiossa
    return (
    <div>
        <div className="grid grid-cols-2 w-2/5 mx-auto">
        <h1 className="font-bold text-2xl text-center pb-5">Minions:</h1>
        <AddMinion SaveMinion={SaveMinion}/>
        </div>
        <div className="grid grid-cols-4 gap-2 w-4/5 mx-auto">
            {
                minions.map((minions, index)=><div className="overflow-y-auto border-solid border-purple-800 border-4 max-h-600 rounded-lg min-w-min max-w-xs bg-slate-800 text-white">
                    <div className="grid grid-cols-6 items-center">
                    <h1 className="underline text-xl text-center col-start-3 col-end-5">{minions.name}</h1>
                    <DeleteMinion minionsAtr={{minions,fetchMinions}}/>
                    </div>
                    <p className="text-center">Points: {minions.points}</p>
                    <p className="text-center">Basewill: {minions.basewill}</p>
                    <h1 className="underline text-xl text-center">Bastestas</h1>
                    <ul className="text-center">
                    <li className="text-center">Body | {minions.basestats.body}</li>
                    <li className="text-center">Coordinatuion | {minions.basestats.coordinatuion}</li>
                    <li className="text-center">Sense | {minions.basestats.sense}</li>
                    <li className="text-center">Mind | {minions.basestats.mind}</li>
                    <li className="text-center">Charm | {minions.basestats.charm}</li>
                    <li className="text-center">Command | {minions.basestats.command}</li>
                    </ul>
                    <h1 className="underline text-xl text-center">Skills</h1>
                    <ul>
                    {
                        minions.skills.map((skill)=><li className="text-center">{skill.skill} | {skill.dices}</li>)
                    }
                    </ul>
                </div>)
            }
        </div>        
    </div>);
}

export default MINIONS;