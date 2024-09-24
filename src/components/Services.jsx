import cone from "../assets/cone.png"

export default function Services() {
    return (
        <section className="mt-[108px]">
            <h1 className="font-bold text-[2.5rem] text-project-green">My Services</h1>
            <div>
                <div className="flex py-16 px-[41px]">
                    <img className="object-scale-down max-h-[5rem] mr-[42px]" src={cone} alt=" " />
                    <div>
                        <h2 className="font-semibold text-[1.6875rem]">Art Direction</h2>
                        <p className="max-w-[455px] text-project-gray text-xl">I lead creative teams to execute cohesive visual concepts, overseeing the entire design process to ensure alignment with brand identity and project goals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}