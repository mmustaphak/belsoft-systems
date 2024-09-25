import nike from "../assets/nike.png"
import ui from "../assets/ui.png"
import fivar from "../assets/fivar.png"
import junk from "../assets/junk.png"
import lay from "../assets/lay.png"
import vanity from "../assets/vanity.png"

const projects = [
    {
        "title": "Project Name",
        "description": "Description (i.e Nike Photoshoot)",
        "img": nike
    },
    {
        "title": "Project Name",
        "description": "Description (i.e App UI Design)",
        "img": ui
    },
    {
        "title": "Project Name",
        "description": "Description",
        "img": fivar
    },
    {
        "title": "Project Name",
        "description": "Description",
        "img": junk
    },
    {
        "title": "Project Name",
        "description": "Description",
        "img": lay
    },
    {
        "title": "Project Name",
        "description": "Description",
        "img": vanity
    }
]



export default function MyWork() {

    function ProjectCard({ title, description, img }) {
        return (
            <div className="max-w-[404px]">
                <img src={img} alt="" />
                <div className="flex justify-between mt-6">
                    <div>
                        <h3 className="font-semibold text-xl">{title}</h3>
                        <p className="text-project-gray text-[17px]">{description}</p>
                    </div>
                    <button className="px-[10px] py-[5px] font-semibold text-white bg-project-green">Case Study</button>
                </div>
            </div>

        )
    }

    const renderedProjects = projects.map(project => <ProjectCard {...project} />)


    return (
        <section className="mt-[42px]">
            <h2 className="text-project-green font-semibold text-[2.5rem]">My Work</h2>
            <div className="grid grid-cols-3 gap-6 mt-[42px]">
                {renderedProjects}
            </div>
        </section>
    )
}