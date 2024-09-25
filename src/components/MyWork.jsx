import nike from "../assets/nike.png"
export default function MyWork() {
    return (
        <section className="mt-[42px]">
            <h2 className="text-project-green font-semibold text-[2.5rem]">My Work</h2>
            <div className="mt-[42px]">
                <div className="max-w-[404px]">
                    <img src={nike} alt="" />
                    <div className="flex justify-between mt-6">
                        <div>
                            <h3 className="font-semibold text-xl">Project Name</h3>
                            <p className="text-project-gray text-[17px]">Description (i.e Nike Photoshoot)</p>
                        </div>
                        <button className="px-[10px] py-[5px] font-semibold text-white bg-project-green">Case Study</button>
                    </div>
                </div>
            </div>
        </section>
    )
}