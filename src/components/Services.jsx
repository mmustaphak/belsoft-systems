import cone from "../assets/cone.png"

export default function Services() {
    function ServicesCard({img, title, description}) {
        return (
            <div className="flex py-16 px-[41px]">
                <img className="object-scale-down max-h-[5rem] mr-[42px]" src={img} alt=" " />
                <div>
                    <h2 className="font-semibold text-[1.6875rem]">{title}</h2>
                    <p className="max-w-[455px] text-project-gray text-xl">{description}</p>
                </div>
            </div>

        )
    }

    return (
        <section className="mt-[108px]">
            <h1 className="font-bold text-[2.5rem] text-project-green">My Services</h1>
            <div>
                <ServicesCard img={cone} title="Art Direction" description="I lead creative teams to execute cohesive visual concepts, overseeing the entire design process to ensure alignment with brand identity and project goals."/>
            </div>
        </section>
    )
}