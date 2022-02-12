import { positions, projects, extracurricular, current_work } from "./projects/list.js";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Experiences from "./Component.js"
import { Parallax } from 'react-parallax';
export default function Home() {

    const icons = {
        "Machine Learning": 0,
        "Human Computer Interaction": 1,
        "Parallel/Distributed Systems": 2,
        "Research": 3,
        "Education/mentoring": 4,
        "Socially Relevant Work": 5,
        "Opinionat-ing/Talks": 6,
        

    }
    const [isClicked, setIsClicked] = useState([false, false, false, false, false, false, false]);
    const [allTags, setAllTags] = useState(["Machine Learning", "Human Computer Interaction",  "Parallel/Distributed Systems", "Research", "Education/mentoring", "Socially Relevant Work", "Opinionat-ing/Talks"]);

    const [count, setCount] = useState([0, 0, 0, 0, 0]);
    const [interested, setInterested] = useState(new Set());
    function toggleElem(item_key, name) {

        var x = document.getElementById(name);
        if (x.style.background === 'rgb(211, 211, 211)') {
            x.style.background = '#f8d776';

        } else {
            x.style.background = 'rgb(211, 211, 211)';

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
                <center>
                    <div className="col-md-8 col-md-offset-2">
                        <h1 className="arrow">A little <span>about</span> me</h1>{/* Headline */}
                        {/* about / welcome text */}
                        
                        <p>
                            <b>
                                I'm currently a Fifth Year Master's Student at Carnegie Mellon School of Computer Science with a keen interest in Machine
                                Learning and Human Computer Interaction. I enjoy thinking about different ways in which
                                computer science can be used to make life better.

                                <br />
                                <br />
                                I believe everything is a little better with music playing in the background, so here's a periodically updated list of songs I'm currently listening for you to play while scrolling through my website!
                            </b></p>
                        <p />
                        <div class="mt-auto p-2 bd-highlight">
                            <iframe src="https://open.spotify.com/embed/playlist/66phfa44ZZyEQw5JDvyDGe" width={300} height={200} frameBorder={0} allowTransparency="true" allow="encrypted-media" />
                        </div>
                    </div>
                    </center>
                </div>
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

                {

                    allTags.map(function (tag, idx) {
                        return (

                            <Badge className="m-2 p-2" id={tag} variant="dark" onClick={() => toggleElem(idx, tag)} style={{ cursor: "pointer", background: 'rgb(211, 211, 211)', color: 'black' }}> {tag} </Badge>


                        )
                    })
                }


            </div>
            <left>
            <Experiences name="Ongoing Work" list={current_work} isClicked={isClicked} icons={icons} />

            <Experiences name="Past Work" list={positions} isClicked={isClicked} icons={icons} />

            <Experiences name="Selected Projects/Technical Reports" list={projects} isClicked={isClicked} icons={icons} />

            <Experiences name="When I'm (~somewhat~) away from my Laptop" list={extracurricular} isClicked={isClicked} icons={icons} />
            </left>
        </section>
        {/* ==========================
  BLOG SECTION 
  =========================== */}

    </>);

}
