import "../App.css";
import yeschad from "../images/yeschad.jpg"
//Change  ulkonäkö ja ehkä naama kuva mukaan. Myös jotain pieni juttu.
function About() {
    return(
        <div className="w-3/5 mx-auto border-purple-800 border-4 border-solid bg-slate-800 rounded-full text-white p-2">
            <h1 className="text-center text-2xl py-2">
                What is this?
            </h1>
            <br/>
            <div className="">
            <p className="text-center mb-10 w-4/5 mx-auto">
                This site is made to make wildtalent games easier to manage.
                There is many weird rules and made up rules for powers so it can become hard for gamemasters to run game.
                With this site/tool, it would be easier and faster make new rules, power and minions.
                This also is my exercise to learn full stack with mern stack.
            </p>
                <p className="text-center">I ain't best making things look good, but hey at least they work!</p>
            <img className="rounded-full w-20 mx-auto" src={yeschad} alt="YES"/>
            </div>
        </div>
    );
}

export default About;