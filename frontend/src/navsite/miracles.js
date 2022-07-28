import "../App.css";
import React, {useState, useEffect} from 'react'
import AddMiracle from "../components/AddMiracle";

function Miracles() {

    const [miracles, setMiracles] = useState([]);

    const fetchMiracels = () =>{
        fetch('http://192.168.8.116:8080/api/miracles')
        .then(response=>response.json())
        .then(data=>setMiracles(data))
        .then(data=>console.log(data))
        .catch(err => console.error(err))
    }

    useEffect(()=>{
        fetchMiracels();
    },[])

    return(
        <div>
            <div className="grid grid-cols-2 w-2/5 mx-auto mb-4">
            <h1 className="font-bold text-center mb-5 text-2xl">Miracles:</h1>
            <AddMiracle/>
            </div>
            <div className="w-4/5 bg-slate-700 border-solid border-4 border-violet-800 mx-auto min-h-screen rounded-lg">

            </div>
        </div>
    );
}

export default Miracles;