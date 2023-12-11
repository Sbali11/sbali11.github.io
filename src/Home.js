import { useState } from "react";
import { Button, Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import Experiences from "./Component.js";
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
        x.style.background = x.style.background === "rgb(211, 211, 211)" ? "#f8d776" : "rgb(211, 211, 211)";

        setIsClicked(isClicked.map((data, key) => key === item_key ? !isClicked[key] : isClicked[key]));
        setCount(count.map((data, key) => key === item_key && !isClicked[key] ? count[key] + 1 : count[key]));
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
                    <h1 style={{ fontSize: "70px" }}>
                        Shreya Bali
                    </h1>
                    <div className="align-self-center">
                        {/* Social Media Buttons */}
                    </div>
                    <h1 className="arrow" style={{ color: "gray" }}>
                        <span>$</span>whoami
                    </h1>
                    <Row>
                        <Col md={6}>
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
            </section >

            <section className="features text-center section-padding" id="service">
                <Container>
                    <Col md={12}>
                        <h1 className="arrow" style={{ color: "gray" }}>
                            <span>$</span>history
                        </h1>
                        I have spent my time on these things
                        <br /><br />
                        <Tab.Container id="experience-tabs" defaultActiveKey="research">
                            <Nav variant="tabs" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="research">Research Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="industry">Industry Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="projects">Selected Projects/Technical Reports</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="extracurricular">Extracurricular Activities</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="research">
                                    <Experiences name="Research Experience" list={research} isClicked={isClicked} icons={icons} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="industry">
                                    <Experiences name="Industry Experience" list={positions} isClicked={isClicked} icons={icons} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="projects">
                                    <Experiences name="Selected Projects/Technical Reports" list={projects} isClicked={isClicked} icons={icons} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="extracurricular">
                                    <Experiences name="Extracurricular Activities" list={extracurricular} isClicked={isClicked} icons={icons} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Container>
            </section>

            {/* Additional sections if any */}
        </>
    );
}
