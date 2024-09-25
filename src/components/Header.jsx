export default function Header() {
    return (
        <header className="relative z-20 px-8 py-4 shadow-[0px_0.3px_#75687E] bg-white/10 backdrop-opacity-50">
            <nav className="flex justify-between items-center max-w-[1260px] mx-auto">
                <div>
                    <a className="flex items-center" href="">
                        <div className="mr-[14px] size-[66px] bg-project-green rounded-full"></div>
                        <h1 className="text-[36px] font-semibold">Logo</h1>
                    </a>
                </div>
                <ul className="flex">
                    <a className="mr-[30px] text-xl font-bold" href="">
                        <li>Home</li>
                    </a>
                    <a className="mr-[30px] text-xl text-project-gray" href="">
                        <li>Services</li>
                    </a>
                    <a className="mr-[30px] text-xl text-project-gray" href="">
                        <li>Portfolio</li>
                    </a>
                    <a className="text-project-gray text-xl" href="">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}