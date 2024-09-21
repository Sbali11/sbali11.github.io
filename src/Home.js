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
                        <Button style={{ background: '#575395' }} className="btn btn-social-icon btn-github m-1" href='https://scholar.google.com/citations?user=MkIlWQsAAAAJ&hl=en'><i className="fa fa-google" /></Button>
                        <Button style={{ background: '#575395' }} className="btn btn-social-icon btn-github m-1" href='https://github.com/Sbali11'><i className="fa fa-github" /></Button>
                        <Button style={{ background: '#575395' }} className="btn btn-social-icon btn-twitter m-1" href='https://twitter.com/ShreyaBali3'><i className="fa fa-twitter" /></Button>
                        <Button style={{ background: '#575395' }} className="btn btn-social-icon btn-linkedin m-1" href='https://linkedin.com/in/shreya-bali-089478107'><i className="fa fa-linkedin" /></Button>
                        <br /><br /><br />
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
                                Hello! I'm currently a First Yeah PhD Student at {" "}
                                <a href="https://hcii.cmu.edu/">CMU HCII</a>, working with <a href="http://www.mayankgoel.com/">Prof. Mayank Goel</a> at the intersection of ML, Social Computing and Sensing for Healthcare. 
                                
                                <br />
                                <br />

                                Before this, I spent some time working as a Software Engineer at <a href="https://www.databricks.com/"> Databricks</a>
                                I completed my undergrad and masters from{" "}
                                <a href="https://www.cs.cmu.edu/">CMU School of Computer
                                    Science</a>. 
                                    
                                During this time, I had the opportunity to work on a
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
                                        <center>
                                            <iframe
                                                src="https://open.spotify.com/embed/playlist/66phfa44ZZyEQw5JDvyDGe"
                                                width="70%"
                                                height={200}
                                                frameBorder={0}
                                                allowTransparency="true"
                                                allow="encrypted-media"
                                            />
                                        </center>
                                    </div>

                                </div>
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
                    <Row>
                        <Col md={6}>
                            <div>
                                <left>
                                    P.S Cartoon and Background image created by{" "}
                                    <a href="https://openai.com/research/dall-e">Dall-E</a>
                                </left>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >

            <section
                className="intro text-center section-padding color-bg"
                id="history"
            >                <Container>
                    <h1 className="arrow" style={{ color: "gray" }}>
                        <span>$</span>history
                    </h1>
                    <Col md={12}>

                        <br /><br />
                        <Tab.Container id="experience-tabs" defaultActiveKey="research">
                            <Nav variant="tabs" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="research" style={{ color: '#575395' }}><b>Research Experience</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="industry" style={{ color: '#575395' }}><b>Industry Experience</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="projects" style={{ color: '#575395' }}><b>Selected Projects/Technical Reports</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="extracurricular" style={{ color: '#575395' }}><b>Extracurricular Activities</b></Nav.Link>
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
