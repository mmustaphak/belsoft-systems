import terry from "../assets/terry.png"
function Hero() {
  return (
    <section>
        <div>
            <h1>Hey There <span>I&apos;m Terry</span></h1>
            <p>I craft intuitive designs that connect with users and drive results. As a multidisciplinary designer, I bring ideas to life through a perfect blend of creativity, strategy, and user-centered design.</p>
            <button>Lets talk</button>
        </div>
        <img src={terry} alt="A smiling man with a gray T-shirt with long curly hair" />
    </section>
  )
}
export default Hero