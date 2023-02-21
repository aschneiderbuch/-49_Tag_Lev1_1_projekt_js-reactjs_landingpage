import "./Header.scss"
import ZahlenFeld from "../header_zahlenFeld/ZahlenFeld.js";

let p1 = "Hello There"
console.log(p1)

const nummernArray = [127, 1505, 109, 102]
const nameArray = ["Award Received", "Cups of Coffee", "Projects Completed", "Happy Clients"]
const [eins, zwei, drei, vier] = nummernArray
console.log(eins, zwei, drei, vier , nummernArray, nameArray)
const testObj = [
    {
        number: 127,
        title: "Award Received"
    },
    {
        number: 1505,
        title: "Cups of Coffee"
    },
    {
        number: 109,
        title: "Projects Completed"
    },
    {
        number: 102,
        title: "Happy Clients"
    }
]

// bau der Blaupause / Bauplan
class test2_Bauplan_Obj { 
    constructor(number, title) {
        this.number = number;
        this.title = title;
    }
    description() {
        console.log(this.number, this.title)
    }
}

// const test2_Obj = new test2_Bauplan_Obj(nummernArray, nameArray)

// die Blaupause / Bauplan   wird mit den beiden Arrays   nummernArray und nameArray   gefüllt
const test2_Obj = [];
for (let i = 0; i < nummernArray.length; i++) {
    const obj_i_runden = new test2_Bauplan_Obj(nummernArray[i], nameArray[i]);
    console.log(obj_i_runden)

    test2_Obj.push(obj_i_runden);

};

console.log(test2_Bauplan_Obj)
console.log(test2_Obj)

console.log(testObj)

const Header = () => {
    return (

        <section className="header">
            <p>{p1}</p>
            <h1>We Are Glint</h1>
            <p></p> {/* der gestylte Strich */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, accusantium ut magni, perferendis praesentium omnis eveniet consectetur cum aperiam doloremque sequi incidunt magnam delectus sint autem vero pariatur, officia unde.</p>


            <article>
                {/* hier wird es zusätzlich mit Inhalt gefüllt
                wie bei Funktionen mit Parametern die übergeben werden.
                so bleibt das ZahlenFeld.js clean --> dort steht props.number
                props.titel   und wird somit variabel / dynamisch befüllt  */}
                <ZahlenFeld number={test2_Obj[0].number} title={testObj[0].title}></ZahlenFeld>
                <hr />
                <ZahlenFeld number={nummernArray[1]} title="Cups of Coffee"></ZahlenFeld>
                <hr />
                <ZahlenFeld number={drei} title="Projects Completed"></ZahlenFeld>
                <hr />
                <ZahlenFeld number={vier} title={testObj[3].title}></ZahlenFeld>
            </article>
        </section>
    );
}

export default Header;