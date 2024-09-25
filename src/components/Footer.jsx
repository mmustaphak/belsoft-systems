import instagram from "../assets/instagram.svg"
import dribble from "../assets/dribble.svg"
import behance from "../assets/behance.svg"

export default function Footer() {
    return (
        <footer className="mt-[129px]">
            <h1 className="text-project-green font-semibold text-[2.5rem]">Reach Out</h1>
            <div className="flex justify-between mt-6">
                <div className="max-w-[598px]">
                    <p>Let&apos;s create something extraordinary together. Whether you have a project in mind or just want to chat, feel free to reach out!</p>
                    <div className="flex justify-between mt-[15px] max-w-[156px]">
                        <a href="https://www.instagram.com/animaapp/?hl=en"><img src={instagram} alt="" /></a>
                        <a href="https://dribbble.com/animaapp"><img src={dribble} alt="" /></a>
                        <a href="https://www.behance.net/Anima_design"><img src={behance} alt="" /></a>
                    </div>
                    <form className="flex flex-col mt-[10px]" action="">
                        <input className="px-6 py-4 bg-[#FAFAFA] placeholder:text-[#2D2D2D] " type="text" name="Name" placeholder="Name" />
                        <input className="mt-3 px-6 py-4 bg-[#FAFAFA] placeholder:text-[#2D2D2D] " type="text" name="email" placeholder="Email" />
                        <submit className="w-fit mt-[34px] py-[10px] px-[35px] font-medium text-2xl text-white bg-project-green">Submit</submit>
                    </form>
                </div>
                <p className="font-extrabold leading-none text-[8.75rem]">Thank <br /><span className="ml-[137px] text-project-green">You.</span></p>
            </div>
        </footer >
    )
}