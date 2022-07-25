import "../App.css";
import React, {useState, useEffect} from 'react'
import AddPower from "../components/AddPower";
import DeletePower from "../components/DeletePower";

//lisää tapa järjestää jutut. Tulevaisuudessa koita pitää functiot täällä ja siirttää niitä componeitteihin mielumminin
//!!Tee mielummin korteiksi jokainen kyky ja laita ne 3-4 grid cloumeihin ja ruudun mukaa sit 1 asti ja isomlla jne enmmän
function EXTRA(){

    const [powers, setPowers] = useState([]);

    const fetchPowers = () =>{
        fetch('http://192.168.8.116:8080/api/power')
        .then(response=>response.json())
        .then(data=>setPowers(data))
        .then(data=>console.log(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchPowers();
    },[]);

    const SavePower = (newPower) =>{
        fetch('http://192.168.8.116:8080/api/power', {method: 'POST', body: JSON.stringify(newPower)})
        .then(response => fetchPowers())
        .catch(err => console.error(err))
    }    


    return (
    <div>
        <div className="grid grid-cols-2 w-2/5 mx-auto">
        <h1 className="font-bold text-center mb-5 text-2xl">Powers:</h1>
        <AddPower SavePower={SavePower}/>
        </div>
        <div className="">
            <table className="table-fixed mx-auto w-4/5 text-white">
                <thead className="bg-slate-800 border-b-2 border-slate-400">
                    <tr><th>Power:</th><th>Type:</th><th>Cost:</th><th>Effect</th></tr>
                </thead>
                <tbody className="bg-slate-600">
                    {
                    powers.map((powers,index)=><tr key={index}><td className="text-center border-black border-b py-4">{powers.name}<DeletePower extraAtr={{powers, fetchPowers}}/></td><td className="text-center border-black border-b">{powers.type}</td><td className="text-center border-black border-b">{powers.cost}</td><td className="text-center border-black border-b">{powers.effect}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>);
}
//lisää nappi joka lähettää put requestin nodejs ja tallentaa kyvyn. Nappi avaa windowin/consolen ja sulkeutuu sit myös
export default EXTRA;