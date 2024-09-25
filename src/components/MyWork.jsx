import nike from "../assets/nike.png"


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


    return (
        <section className="mt-[42px]">
            <h2 className="text-project-green font-semibold text-[2.5rem]">My Work</h2>
            <ProjectCard title="Project Name" description="Description (i.e Nike Photoshoot)" img={nike} />
        </section>
    )
}