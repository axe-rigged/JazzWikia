import "../App.css";
import React, {useState, useEffect} from 'react'
import AddMiracle from "../components/AddMiracle";

function Miracles() {

    const [mir, setMir] = useState([]);

    const fetchMiracels = () =>{
        fetch('http://192.168.8.116:8080/api/miracles')
        .then(response=>response.json())
        .then(data=>setMir(data))
        .then(data=>console.log(data))
        .catch(err => console.error(err))
    }

    const SavePower = (item) => {
        fetch('http://192.168.8.116:8080/api/miracles', {method: 'POST', body: JSON.stringify(item)})
        .then(response=>fetchMiracels())
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchMiracels();
    },[])
    //extraFlaws on array huomio||delete nappi tarvitaan
    //Jaa 5 osaan. 1/5 on nimi ja hinta. Extrat ja range ja qualityt 1/5 ja 3/5 on effecti.
    return(
        <div>
            <div className="grid grid-cols-2 w-2/5 mx-auto mb-4">
            <h1 className="font-bold text-center mb-5 text-2xl">Miracles:</h1>
            <AddMiracle SavePower={SavePower}/>
            </div>
            <div className="w-4/5 bg-slate-800 border-solid border-4 border-violet-800 mx-auto min-h-screen rounded-lg text-white text-xl">
                {mir.map((mir, index)=><div key={index} className="gap-3 grid grid-cols-6 grid-rows-2 w-4/5 mx-auto my-4 p-2 border-black border-2 border-solid bg-slate-600 place-items-center rounded-lg">
                        <h1 className="col-span-6 underline">Miracle name: {mir.name} || Cost: {mir.cost}</h1>
                        
                            {mir.miracles.map((m, index)=><div key={index} className="col-span-2"><h1>{m.quality} || {m.capacity}</h1><h1>{m.ruleforextra}</h1></div>)}
                            {mir.miracles.map((m)=><div>{m.extraFlaws.map((e, index)=><div key={index} className="col-span-2">{e.extraFlawName} {e.cost}</div>)}</div>)}

                        <h1 className="col-span-6">{mir.effect}</h1>
                    </div>)}
            </div>
        </div>
    );
}

export default Miracles;