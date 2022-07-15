import "../App.css";
import React, {useState, useEffect} from 'react'

function Home(){

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
        <h1 className="font-bold mx-auto text-center mb-5">Hello JazzWikia</h1>
        <table className="table-auto mx-auto">
            <thead>
                <tr><th>Power:</th><th>Type:</th><th>Cost:</th><th>Effect</th></tr>
            </thead>
            <tbody>
                {
                power.map((power,index)=><tr key={index}><td>{power.name}</td><td>{power.type}</td><td>{power.cost}</td><td>{power.effect}</td></tr>)
                }
            </tbody>
        </table>
    </div>);
}

export default Home;