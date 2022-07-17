import "../App.css";
import React, {useState, useEffect} from 'react'

//lisää tapa järjestää jutut
//Tee mielummin korteiksi jokainen kyky ja laita ne 3-4 grid cloumeihin ja ruudun mukaa sit 1 asti ja isomlla jne enmmän
function EXTRA(){

    const [power, setPower] = useState([]);

    useEffect(() => {
        fetch('http://192.168.8.116:8080/api/power')
        .then(response=>response.json())
        .then(data=>setPower(data))
        .then(data=>console.log(data))
        .catch(err => console.error(err))
    },[]);

    return (
    <div>
        <h1 className="font-bold mx-auto text-center mb-5 text-2xl">Powers:</h1>
        <div className="">
            <table className="table-fixed mx-auto w-4/5">
                <thead>
                    <tr><th>Power:</th><th>Type:</th><th>Cost:</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    {
                    power.map((power,index)=><tr key={index}><td className="text-center">{power.name}</td><td className="text-center">{power.type}</td><td className="text-center">{power.cost}</td><td className="text-center">{power.effect}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>);
}
//lisää nappi joka lähettää put requestin nodejs ja tallentaa kyvyn. Nappi avaa windowin/consolen ja sulkeutuu sit myös
export default EXTRA;