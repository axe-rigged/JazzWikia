import "../App.css";

//Change  ulkonäkö ja ehkä naama kuva mukaan. Myös jotain pieni juttu.
function Notfound() {
    return(
        <div className="w-3/5 mx-auto border-purple-800 border-4 border-solid bg-slate-800 rounded-full text-white">
            <h1 className="text-center text-2xl py-2">
                Oops, page you were looking is not found or does not exist.
            </h1>
        </div>
    );
}

export default Notfound;