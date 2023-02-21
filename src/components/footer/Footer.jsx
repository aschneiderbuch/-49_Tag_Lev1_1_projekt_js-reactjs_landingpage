import Gallery from "../footer_gallery/Gallery";
import "./Footer.scss";

// bilder holen
import bild_1 from "../footer_img/bild_1_salat.jpg";
import bild_2 from "../footer_img/bild_2_kuche.jpg";
import bild_3 from "../footer_img/bild_3_salat_mit_fleisch.jpg";
import bild_4 from "../footer_img/bild_4_trinkGlas.jpg";
import bild_5 from "../footer_img/bild_5_pizza.jpg";
import bild_6 from "../footer_img/bild_6_suppeGernelen.jpg";
import bild_7 from "../footer_img/bild_7_nachtisch.jpg";
import bild_8 from "../footer_img/bild_8_dekoEssen_rot.jpg";

const bilderArray = [bild_1, bild_2, bild_3, bild_4, bild_5, bild_6, bild_7, bild_8];
console.log(bilderArray);
console.log(bilderArray.length);

const idArray = [];
for (let i = 0; i < bilderArray.length; i++) {
    idArray.push(i);
}
console.log(idArray);

const titelArray = ["Fusce dictum finibus", "Aliquam sagittis", "Sed varius turpis", " Aliqum sagittis", "Maecenas eget justo", "Quisque et felis eros", "sed ultricies dui", "Donec porta consequat"];

const textArray = [];
for (let i = 0; i < titelArray.length; i++) {
    const textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    textArray.push([i] + textLorem);
}
console.log(textArray);

const preisArray = ["$45 / $55", "$65 / $70", "$30.50", "$25.50", "$25.50", "$25.50", "$25.50", "$25.50"];
console.log(preisArray.length);


// Bauplan fürs Object
class Bauplan_Obj {
    constructor(id0, titel0, text0, preis0, bild0) {
        this.id0 = id0;
        this.titel0 = titel0;
        this.text0 = text0;
        this.preis0 = preis0;
        this.bild0 = bild0;
    }
    description() {
        console.log(this.id0, this.titel0, this.text0, this.preis0, this.bilder0);
    }
}


// Bauplan mit Array s befüllen
const obj_befüllt = [];
for (let i = 0; i < idArray.length; i++) {
    const obj_i_runden = new Bauplan_Obj(idArray[i], titelArray[i], textArray[i], preisArray[i], bilderArray[i])
    console.log(obj_i_runden);

    obj_befüllt.push(obj_i_runden);
}

console.log(obj_befüllt);



// Befülltes Objekt ins HTML holen
const gallery_HTML = obj_befüllt.map((obj) => {
    return <Gallery titel={obj.titel0} text={obj.text0} preis={obj.preis0} bild={obj.bild0}  > </Gallery>
    /*  // !   >   der Schließt erst nach dem ganzen Code ;-) */
})

console.log(gallery_HTML);


const Footer = () => {
    return (

        <section className="section_Footer">
            <article className="article_Footer">
                {gallery_HTML}


            </article>
        </section>
    );
}

export default Footer;