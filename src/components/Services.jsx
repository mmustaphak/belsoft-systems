import cone from "../assets/cone.png"

export default function Services() {
    return (
        <section>
            <h1>My Services</h1>
            <div>
                <div>
                    <img src={cone} alt=" " />
                    <div>
                        <h2>Art Direction</h2>
                        <p>I lead creative teams to execute cohesive visual concepts, overseeing the entire design process to ensure alignment with brand identity and project goals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}