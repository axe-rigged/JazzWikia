import "../App.css";
import React, {useState, useEffect} from 'react'
import AddMiracle from "../components/AddMiracle";
import DeleteMiracle from "../components/DeleteMiracle";

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

    const deleteMiracle = (miracle) => {
        fetch('http://192.168.8.116:8080/api/miracles',{method: 'DELETE', body: JSON.stringify({miracle})}) //{miracle} ottaa parameter ja asettaa sen miracle nimiseen objectiin. Ilman {} se laittaisi vain datan.
        .then(response=>fetchMiracels())
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchMiracels();
    },[])

    //Ehkä componenti extraFlaws jotta voidaan nopeasti tehdä alert/dialog jossa näkyis kaikki extrat ja flwasit. Hover tietona kaikki extrat ja flawsit omaan quality osa alueeseen?
    //Keywordit kuten effect, quality ja ranget eri väreillä? Parempi layout kaikille statseille ja teksti selkeämmäksi (eri värejä)
    return(
        <div>
            <div className="grid grid-cols-2 w-2/5 mx-auto mb-4">
            <h1 className="font-bold text-center mb-5 text-2xl">Miracles:</h1>
            <AddMiracle SavePower={SavePower}/>
            </div>
            <div className="w-4/5 bg-slate-800 border-solid border-4 border-violet-800 mx-auto min-h-screen rounded-lg text-white text-xl">
                {mir.map((mir, index)=><div key={index} className="gap-3 grid grid-cols-6 grid-rows-2 w-4/5 mx-auto my-4 p-2 border-black border-2 border-solid bg-slate-600 place-items-center rounded-lg text-center">
                        <h1 className="col-span-6 underline decoration-violet-800 decoration-double">Miracle name: {mir.name} || Cost: {mir.cost} || Qualities: {mir.qualities}  <DeleteMiracle mira={{deleteMiracle, mir}}/></h1>
                        
                            {mir.miracles.map((m, index)=><div key={index} className="col-span-2"><h1>{m.quality} || {m.capacity}</h1><p>{m.ruleforextra}</p></div>)}
                            {mir.miracles.map((m)=><div>{m.extraFlaws.map((e, index)=><div key={index} className="col-span-2">{e.name}</div>)}</div>)}

                        <h1 className="col-span-6">Effect: {mir.effect}</h1>
                    </div>)}
            </div>
        </div>
    );
}

export default Miracles;