import NavBar from "../components/NavBar.jsx";

export default function Home() {
  return (
    <>
      <section id="title">
        {/* Hero-specific navbar overlay */}
        <NavBar />

        <div className="container-grid">
          <div className="hello">hello, world!</div>
          <div className="iam">I am</div>
          <div className="nina">Nina Vo</div>
        </div>

        <div className="ani">
          <video
            className="ani-img"
            src="/final-imgs/animate.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
            <div className="divider"></div>


      {/* Web Dev / Programmer */}
      {/* <section className="mid">
        <div className="a-box programmer">
          <p className="tit">SOFTWARE ENGINEER</p>
          <a href="/web"><button type="button">My Software Projects</button></a>
        </div>
        <img src="/final-imgs/code.png" className="back" />
        <div className="opacity"></div>
      </section> */}

      <div className="divider"></div>

      {/* Animator */}
      <section className="mid">
        <div className="a-box">
          <p className="tit">ANIMATOR</p>
          <a href="/animation"><button type="button">My Animations</button></a>
        </div>
        <video
          src="/final-imgs/Demo Reel.mp4"
          className="back"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="opacity"></div>
      </section>

      <div className="divider"></div>

      {/* Illustrator */}
      <section className="mid">
        <div className="a-box">
          <p className="tit">ILLUSTRATOR</p>
          <a href="/illustration"><button type="button">My Illustrations</button></a>
        </div>
        <img src="/final-imgs/Feminimity.JPG" className="back" />
        <div className="opacity"></div>
      </section>

      <div className="divider"></div>

      {/* 3D Modeler */}
      <section className="mid">
        <div className="a-box">
          <p className="tit">3D MODELER</p>
          <a href="/model"><button type="button">My 3D Models</button></a>
        </div>
        <img src="/final-imgs/robot.png" className="back" />
        <div className="opacity"></div>
      </section>

      <div className="divider"></div>

      {/* About (anchor #about) */}
      <section id="about" className="flex-container">
        <div className="text">
          <p className="tit">Who's Nina?</p>
          <p className="para">
            Nina Vo is an animator known for her distinct painterly style, creating her films from concept to completion. Her practice spans 2D and 3D animation, as well as mixed media approaches that incorporate fiber art. Her films have been screened at the UMass Animation Festival and The Screen at SAB at the University of Massachusetts Amherst. In 2025, her work received the Best in Mixed Media award at the UMass Animation Festival.
            <br />
            <br />
            Studying both animation and computer science at UMass Amherst, Nina explores the intersection of art and technology. Her love of knitting and crocheting also informs her practice, bringing tactile textures and handmade elements into her animations.
          </p>
        </div>
        <div className="but">
          <a href="/final-imgs/Nina Vo - Art Resume.pdf" target="_blank" rel="noreferrer">
            <button type="button">Art Resume</button>
          </a>
          <br />
          <a href="mailto:baongocvo2007@gmail.com">
            <button type="button">Contact Me</button>
          </a>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}
