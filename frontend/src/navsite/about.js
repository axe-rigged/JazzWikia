import "../App.css";
//Change  ulkonäkö ja ehkä naama kuva mukaan. Myös jotain pieni juttu.
function About() {
    return(
        <div className="w-3/5 mx-auto border-purple-800 border-4 border-solid bg-slate-800 rounded-full text-white">
            <h1 className="text-center text-2xl">
                What is this?
            </h1>
            <br/>
            <p className="text-center mb-10">
                This site is made to make wildtalent games easier to manage.
                There is many weird rules and made up rules for power so it can become hard for gamemasters to run game.
                With this site/tool, it would be easier and faster make new rules, power and minions.
                This also is my exercise to learn full stack with mern stack.
            </p>
        </div>
    );
}

export default About;