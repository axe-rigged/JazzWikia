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
    return(
        <div>
            <div className="grid grid-cols-2 w-2/5 mx-auto mb-4">
            <h1 className="font-bold text-center mb-5 text-2xl">Miracles:</h1>
            <AddMiracle SavePower={SavePower}/>
            </div>
            <div className="w-4/5 bg-slate-700 border-solid border-4 border-violet-800 mx-auto min-h-screen rounded-lg">
                {mir.map((mir, index)=><div key={index} className="grid grid-cols-3 w-4/5 mx-auto my-4 p-2 border-black border-2 border-solid bg-slate-500 place-items-center">
                        <h1>{mir.name} || {mir.cost}</h1>
                            {mir.miracles.map((m, index)=><div key={index}><h1>{m.quality}</h1><h1>{m.ruleforextra}</h1></div>)}
                        <h1>{mir.effect}</h1>
                    </div>)}
            </div>
        </div>
    );
}

export default Miracles;