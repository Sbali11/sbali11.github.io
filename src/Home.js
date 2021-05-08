import { positions, projects, extracurricular } from "./projects/list.js";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Experiences from "./Component.js"
import { Parallax } from 'react-parallax';

export default function Home() {

    const icons = {
        "coding": 0,
        "ideation": 1,
        "research": 1,
        "education/mentoring": 2,
        "social": 3,
        "Opinionat-ing": 4
    }
    const [isClicked, setIsClicked] = useState([false, false, false, false, false]);
    const [count, setCount] = useState([0, 0, 0, 0, 0]);

    const [interested, setInterested] = useState(new Set());
    function toggleElem(item_key, name) {

        var x = document.getElementById(name);

        if (x.style.color === 'rgb(87, 83, 149)') {
            x.style.color = '#f8d776';

        } else {
            x.style.color = '#575395';

        }
        const newList = isClicked.map((data, key) => {
            if (key == item_key) return !isClicked[key];
            else return isClicked[key]
        })

        const newCount = count.map((data, key) => {
            if (key == item_key && !isClicked[key]) return count[key] + 1;
            else return count[key]
        })
        setIsClicked(newList);
        setCount(newCount)



    }
    return (<>

        {/* ****************************** Preloader ************************** */}
        <div />
        {/* ==========================
  HEADER SECTION 
  =========================== */}
        <header id="home">
            {/* creative menu */}
            <div className="container-fluid">
                {/*/row*/}
            </div>
            {/*/container*/}
            {/* Header Image */}
            <section >

                <div className="parallax">
                    {/* Slider Button (don't edit!)*/}

                    {/* HEADER HEADLINE */}

                    <div className="d-flex justify-content-center">

                        <div className="align-self-center">
                            <h1 className="animated fadeInDown">
                                <span style={{ color: '#6512b2' }}>S</span>hreya<br />Bali
                            </h1>
                            <Button style={{ background: '#6512b2' }} className="btn btn-social-icon btn-github m-1" href='https://github.com/Sbali11'><i className="fa fa-github" /></Button>
                            <Button style={{ background: '#6512b2' }} className="btn btn-social-icon btn-twitter m-1" href='https://twitter.com/ShreyaBali3'><i className="fa fa-twitter" /></Button>
                            <Button style={{ background: '#6512b2' }} className="btn btn-social-icon btn-linkedin m-1" href='https://linkedin.com/in/shreya-bali-089478107'><i className="fa fa-linkedin" /></Button>
                        </div>
                    </div>

                </div>


            </section>
            {/* Header Image End */}
        </header>
        {/* ==========================
  HEADER SECTION END  
  =========================== */}
        {/* ==========================
  ABOUT SECTION  
  =========================== */}
        <section className="intro text-center section-padding color-bg" id="about">

            <div className="container">
                {/* WELCOME TEXT */}
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 className="arrow">A little <span>about</span> me</h1>{/* Headline */}
                        {/* about / welcome text */}
                        <p>
                            <b>
                                I'm currently a student at Carnegie Mellon School of Computer Science with a keen interest in Machine
                                Learning, HCI, Natural Language Processing, and education. I enjoy thinking about different ways in which
                                computer science can be used to make life better.
            </b></p>
                        <p />
                        <div class="mt-auto p-2 bd-highlight">
                            <iframe src="https://open.spotify.com/embed/playlist/66phfa44ZZyEQw5JDvyDGe" width={300} height={200} frameBorder={0} allowTransparency="true" allow="encrypted-media" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="intro text-center section-padding color-purple" id="about">
            <div>
                <a href="https://drive.google.com/file/d/1yPI_9m8-c4YRtmTSp98fT2fBYDNt6vj8/view?usp=sharing" download> My Resume </a>
            </div>
        </section>
        {/* ==========================
  SERVICE SECTION 
  =========================== */}

        <section className="features text-center section-padding" id="service">
            <div className="container">
                {/* Headline */}
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="arrow">I spend my time on these things</h1>
                    </div>
                </div>
                <p> <b>Select things you are interested in too! </b></p>
                <div className="row justify-content-center" data-toggle="Buttons">
                    <div className="col-md-12 justify-content-center">
                        <div className="services">
                            {/* Service Box 1 */}
                            <div className="col-md-4  item">

                                <div className="icon" id="coding" onClick={() => toggleElem(0, "coding")}>

                                    <i className="fa fa-bar-chart" />{/* Icon */}
                                </div>
                                <h2>Coding</h2>{/* Title */}
                                <p />{/* Description */}
                            </div>
                            {/* Service Box 2 */}
                            <div className="col-md-4  item delay-05s">
                                <div className="icon" id="ideation" onClick={() => toggleElem(1, "ideation")}>
                                    <i className="fa fa-lightbulb-o" aria-hidden="true" />
                                </div>
                                <h2>Ideation</h2>{/* Title */}
                                <p />{/* Description */}
                            </div>
                            {/* Service Box 3 */}
                            <div className="col-md-4  item delay-1s">
                                <div className="icon" id="education/mentoring" onClick={() => toggleElem(2, "education/mentoring")}>
                                    <i className="fa fa-cubes" />{/* Icon */}
                                </div>
                                <h2>Education and Mentoring</h2>{/* Title */}
                                <p />{/* Description */}
                            </div>
                            {/* Service Box 4 */}

                            <div className="col-md-6  item delay-1s">
                                <div className="icon" id="social" onClick={() => toggleElem(3, "social")}>
                                    <i className="fa fa-medkit" />{/* Icon */}
                                </div>
                                <h2>Socially Relevant Work</h2>{/* Title */}
                                <p />{/* Description */}
                            </div>
                            <div className="col-md-6   item delay-1s">
                                <div className="icon" id="Opinionat-ing" onClick={() => toggleElem(4, "Opinionat-ing")}>
                                    <i className="fa fa-pencil" />{/* Icon */}
                                </div>
                                <h2>Debating/Opinionat-ing</h2>{/* Title */}
                                <p />{/* Description */}
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        </section>
        {/* ==========================
  BLOG SECTION 
  =========================== */}
        <section className="text-center section-padding color-bg" id="blog">
            <div className="container">
                {/* Headline */}
                <div>
                    <div className="col-md-12">
                        <h1 className="arrow"> Some more details!</h1>
                    </div>



                    <Experiences name="Past Work" list={positions} isClicked={isClicked} icons={icons} />


                    <Experiences name="Personal Projects" list={projects} isClicked={isClicked} icons={icons} />


                    <Experiences name="Extracurriculars" list={extracurricular} isClicked={isClicked} icons={icons} />


                </div><br /><br />
                <div className="val">
                </div>
                {/* Blog Slider */}
            </div>
        </section>
    </>);

}
