import "./Block.scss";





//scf
const Block = (props) => {

    return (

        <section className="section_Block">
            
            <article>
                <img src={props.imgSrc} alt="" />
            </article>
            <article>
                <h3>{props.titel}</h3>
                <p>{props.text}</p>
            </article>

        </section>
    );
} 

export default Block;