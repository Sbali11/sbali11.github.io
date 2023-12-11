import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Experiences from "./Component.js";
import { Parallax } from "react-parallax";
import img from "./img/profile.jpg";
import bg from "./img/bg-img.jpg";
import { positions, projects, extracurricular, research } from "./projects/list.js";

export default function Home() {
    const icons = {
        "Human Computer Interaction": 0,
        "Machine Learning": 1,
        "Education/mentoring": 3,
        "Socially Relevant Work": 4,
        "Opinionat-ing/Talks": 5,
    };

    const [isClicked, setIsClicked] = useState([false, false, false, false, false, false]);
    const [allTags, setAllTags] = useState([
        "Human Computer Interaction",
        "Machine Learning",
        "Education/mentoring",
        "Socially Relevant Work",
        "Opinionat-ing/Talks",
    ]);

    const [count, setCount] = useState([0, 0, 0, 0, 0]);
    const [interested, setInterested] = useState(new Set());

    function toggleElem(item_key, name) {
        var x = document.getElementById(name);
        if (x.style.background === "rgb(211, 211, 211)") {
            x.style.background = "#f8d776";
        } else {
            x.style.background = "rgb(211, 211, 211)";
        }

        const newList = isClicked.map((data, key) => {
            if (key === item_key) return !isClicked[key];
            else return isClicked[key];
        });

        const newCount = count.map((data, key) => {
            if (key === item_key && !isClicked[key]) return count[key] + 1;
            else return count[key];
        });

        setIsClicked(newList);
        setCount(newCount);
    }

    return (
        <>
            <header id="home" className="header">
                {/* Your header content */}
            </header>

            <section
                className="intro text-center section-padding color-bg"
                id="about"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <h1 style={{ "font-size": "50px" }}>
                        Shreya Bali
                    </h1>
                    <div className="align-self-center">

                        <Button
                            style={{ background: "#6512b2" }}
                            className="btn btn-social-icon btn-github m-1"
                            href="https://github.com/Sbali11"
                        >
                            <i className="fa fa-github" />
                        </Button>
                        <Button
                            style={{ background: "#6512b2" }}
                            className="btn btn-social-icon btn-twitter m-1"
                            href="https://twitter.com/ShreyaBali3"
                        >
                            <i className="fa fa-twitter" />
                        </Button>
                        <Button
                            style={{ background: "#6512b2" }}
                            className="btn btn-social-icon btn-linkedin m-1"
                            href="https://linkedin.com/in/shreya-bali-089478107"
                        >
                            <i className="fa fa-linkedin" />
                        </Button>
                        <br />
                        <br />
                        <br />
                        <Container>

                            <br />
                            <br />
                        </Container>


                    </div>
                    <h1 className="arrow" style={{ color: "gray" }}>
                        <span>$</span>whoami
                    </h1>
                    <Row>
                        <Col md={6}>

                            <section>
                                <div
                                    className="float-left"
                                    style={{ textAlign: "left", color: "black" }}
                                >
                                    Hello! I'm currently a Software Engineer at{" "}
                                    <a href="https://www.databricks.com/">Databricks</a>. I completed my
                                    undergrad and masters from{" "}
                                    <a href="https://www.cs.cmu.edu/">Carnegie Mellon School of Computer
                                        Science</a>. During my time at CMU, I had the opportunity to work on a
                                    combination of HCI and ML problems at the{" "}
                                    <a href="https://www.cs.cmu.edu/~eheartlab/">Expertise@Scale Lab</a>, the{" "}
                                    <a href="https://www.cs.cmu.edu/~eheartlab/">eHeartlab</a> and the{" "}
                                    <a href="http://multicomp.cs.cmu.edu/people/previous-members/">MultiComp
                                        Lab</a>.
                                    <br />
                                    <br />
                                    I enjoy thinking about different ways computer science can be used to make
                                    life better. If you're interested in any of my work or just want to reach
                                    out, feel free to drop me an email at shreyabali.cs[at]gmail.com !
                                    <br />
                                    <br />
                                    <div
                                        className="float-left text-secondary"
                                        style={{ color: "white" }}
                                    >
                                        I <strong>strongly</strong> believe everything is better with music
                                        playing in the background, so here's a periodically updated list of songs
                                        I'm currently listening to for you to play while scrolling through my
                                        website!
                                        <br />
                                        <br />
                                        <div className="mt-auto p-2 bd-highlight">
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/66phfa44ZZyEQw5JDvyDGe"
                                                width={500}
                                                height={200}
                                                frameBorder={0}
                                                allowTransparency="true"
                                                allow="encrypted-media"
                                            />
                                        </div>

                                    </div>
                                    P.S Cartoon and Background image created by{" "}
                                    <a href="https://openai.com/research/dall-e">Dall-E</a>
                                </div>

                            </section>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <img
                                src={img}
                                alt="Profile"
                                style={{
                                    maxWidth: '80%',
                                    borderRadius: '30px',
                                    height: 'auto'
                                }}
                            />
                        </Col>
                    </Row>

                </Container>

            </section>

            <section className="features text-center section-padding" id="service">
                <Container>
                    <div className="container">
                        <Col md={12}>
                            <h1 className="arrow">
                                <span>$</span>history
                            </h1>
                            I've spent my time on these things
                            <br />
                            <br />
                            <div style={{ textAlign: "left" }}>
                                <Experiences name="Research Experience" list={research} isClicked={isClicked} icons={icons} />
                                <Experiences name="Industry Experience" list={positions} isClicked={isClicked} icons={icons} />
                                <Experiences name="Selected Projects/Technical Reports" list={projects} isClicked={isClicked} icons={icons} />
                                <Experiences name="When I'm (~somewhat~) away from my laptop" list={extracurricular} isClicked={isClicked} icons={icons} />
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
            {/* ==========================
        BLOG SECTION
        =========================== */}
        </>
    );
}
