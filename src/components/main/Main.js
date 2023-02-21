import Block from "../main_Block/Block.jsx";
import "./Main.scss";

import logo_brand from "../img/logo_brand.jpg";
import logo_Illus from "../img/logo_Illus.jpg";
import logo_marke from "../img/logo_marke.jpg";
import logo_Web from "../img/logo_Web.jpg";




const loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum`
const textArray = [loremString,loremString,loremString, loremString]
const titelArray = ["Brand Identity", "Illustration", "Marketing", "Web Design"]
const imgSrcArray = [logo_brand, logo_Illus, logo_marke, logo_Web];
console.log(imgSrcArray)

// Obj Bauplan
class ObjBauplan {
    constructor(titel, text, imgSrc) {
        this.titel = titel
        this.text = text
        this.imgSrc = imgSrc  // ! oben noch rein
    }
    description() {
        console.log(this.titel, this.text)
    }
}

// Obj erstellen und mit Arrays befüllen
const obj_befüllt = [];
for (let i = 0; i < textArray.length; i++){
    const obj_i_runden = new ObjBauplan(titelArray[i], textArray[i], imgSrcArray[i])
    console.log(obj_i_runden)
    obj_befüllt.push(obj_i_runden)
}
console.log(obj_befüllt)


// Block für HTML befüllen lassen
const blocks_Html = obj_befüllt.map((obj) => {
    return <Block titel={obj.titel} text={obj.text} imgSrc={obj.imgSrc} ></Block>
})


const Main = () => {



    return (
        <section className="Main_Section">
            <h3>What We Do</h3>
            <h2>We've got everything you need to launch and grow your business</h2>

            <article>
                {blocks_Html}

{/*                 <img src={logo_brand} alt="" />
 */}

               {/*  <Block titel={obj_befüllt[0].titel} text="lorem"></Block> */}
            </article>
        </section>
    );
}

export default Main;