import "./ZahlenFeld.scss"

// hier wird es gebaut, damit man es mehrfach mit unterschiedlichem Inhalt füllen kann
const ZahlenFeld = (props) => {
    return (
        <section className="section_ZahlenFeld">
            <h1>{props.number}</h1>
            <p>{props.title}</p>
        </section>

        /* wenn man section nicht braucht, kann man auch
        <> </> machen, damit wird es nicht mit unnötigen div s usw überladen */
    );
}

export default ZahlenFeld;