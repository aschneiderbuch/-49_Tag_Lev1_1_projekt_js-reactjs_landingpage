import "./Gallery.scss"



const Gallery = (props) => {
    return (

        <section className="section_Gallery">

            <article>
                <img src={props.bild} alt="" />
            </article>
            <article>
                <h4>{props.titel}</h4>
                <p>{props.text}</p>
                <h5>{props.preis}</h5>
            </article>

        </section>

    );
}

export default Gallery;