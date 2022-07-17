import "../App.css";
import React, {useState, useEffect} from 'react'

//add maybe way to edit and save.
function MINIONS(){

    const [minions, setMinions] = useState([]);

    useEffect(()=>{
        fetch('http://192.168.8.116:8080/api/minion')
        .then(response=>response.json())
        .then(data=>setMinions(data))
        .catch(err => console.error(err))
    },[]);

    //return (div) tai jos meillä on => ilman {} niin se on return. HTML data pitää returnaa
    //Lisää key id li jutuille. Itkien eteenpäin... koita tehdä base stats kauniimaksi
    //for(x in minions.basetstats)=><li>{x} | {minions.basestats[x]}</li>
    return (
    <div>
        <h1 className="font-bold text-2xl mx-auto text-center pb-5">Minions:</h1>
        <div className="grid grid-flow-row auto-rows-max">
            {
                minions.map((minions, index)=><div className="overflow-y-auto mx-10 border-solid border-black border-2 w-1/5 max-h-600 rounded-lg min-w-min max-w-xs">
                    <h1 className="underline text-xl text-center">{minions.name}</h1>
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