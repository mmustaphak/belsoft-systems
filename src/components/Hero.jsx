import terry from "../assets/terry.png"
function Hero() {
  return (
    <section className="relative -mt-24">
        <div  className="absolute top-1/4">
            <h1 className="text-[7.5rem] font-extrabold leading-none">Hey There,<br /><span className="text-project-green">I&apos;m Terry</span></h1>
            <p className="mt-3 max-w-[454px] text-xl text-project-gray">I craft intuitive designs that connect with users and drive results. As a multidisciplinary designer, I bring ideas to life through a perfect blend of creativity, strategy, and user-centered design.</p>
            <button className="text-2xl text-white py-[10px] px-[35px] bg-project-green mt-[33px]">Lets talk</button>
        </div>
        <img className="ml-auto" src={terry} alt="A smiling man with a gray T-shirt with long curly hair" />
    </section>
  )
}
export default Hero