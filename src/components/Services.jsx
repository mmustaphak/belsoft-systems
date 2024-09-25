import cone from "../assets/cone.png"
import ui from "../assets/ui-ux.png"
import visualDesign from "../assets/visual-design.png"
import spring from "../assets/spring.png"

const services = [
    {
        "title": "Art Direction",
        "description": "I lead creative teams to execute cohesive visual concepts, overseeing the entire design process to ensure alignment with brand identity and project goals.",
        "img": cone
    },
    {
        "title": "UI/UX Design",
        "description": "I design user-friendly interfaces that are both visually appealing and highly functional, focusing on enhancing the overall user experience through research, wireframing, and prototyping.",
        "img": ui
    },
    {
        "title": "Visual Design",
        "description": "I craft compelling visuals that effectively communicate messages, focusing on branding, digital marketing, and web design to create visually striking and impactful designs.",
        "img": visualDesign
    },
    {
        "title": "Product Design",
        "description": "I create products that solve real-world problems, blending design and strategy throughout the product lifecycle to meet both user needs and business goals.",
        "img": spring
    }
]


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

    const renderedServices = services.map(service    => <ServicesCard {...service}/>)

    return (
        <section className="mt-[108px]">
            <h1 id="services-section" className="font-bold text-[2.5rem] text-project-green">My Services</h1>
            <div className="grid grid-cols-2 gap-x-6">
                {renderedServices}
            </div>
        </section>
    )
}