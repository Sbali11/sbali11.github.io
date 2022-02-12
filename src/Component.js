import { positions, projects } from "./projects/list.js";
import { useState } from "react";
import { Badge, Button, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Experiences(props) {

    const total_num = props.isClicked.filter(Boolean).length 
    const filtered = props.list.filter(function (val) {
        if(total_num==0) return true;
        var tags = Object.keys(val.tags);
        for (var i = 0; i < tags.length; i++) {
            if (props.isClicked[props.icons[tags[i]]]) return true
        }
        return false;
    });
    const res = filtered.map(function (data, key) {
        var tags = Object.keys(data.tags);
        return (

            <Card className="m-2" >
                <Card.Header style={{ width: '100%'}}>
                    
                
                    <Accordion.Toggle style={{ width: '100%', "color": "#6512b2",  whiteSpace: 'pre-wrap', overflowWrap: 'break-word',textAlign: "left" }} as={Button}
                        variant="link" eventKey={key + 1}>
                        <div class="float-left">
                            <Card.Title >
                                
                                <div class="float-left" >
                                    {data.name}

                                </div>
                                
                            </Card.Title>
                            <br />
                            {data.position && 
                            (
                            <div class="float-left" >
                                 
                                    <div >
                                        {data.position},  {data.org} <br />

                                    </div>
                                    <br/>
                            </div>
                            )}
                            <br/>
                        
                        <div class="float-left" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', textAlign: "left"}} >
                            {

                                tags.map(function (tag) {
                                    if(props.isClicked[props.icons[tag]]){
                                    return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: '#f8d776', color: 'black' }}>{tag} </Badge>
                                    }
                                    else{
                                        return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: 'rgb(211, 211, 211)', color: 'black' }}>{tag} </Badge>

                                    }
                                })
                            }
                            <br />
                            </div>
                            

                        
                        </div>
                        <div class="float-right">
                                {data.year}
                            </div>
                    </Accordion.Toggle>
                    
                </Card.Header>
                <Accordion.Collapse eventKey={key + 1}>
                    <Card.Body >



                        <div class="float-left text-secondary" style={{ "text-align": "left" }}>
                            {data.desc}
                        </div>
                        <br />
                        <div class="float-left">



                            {data.paper &&
                                
                                    <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.paper} style={{ color: "#6512b2" }} >Paper</a></Button>
                                }
                            {data.report &&
                                
                                <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.report} style={{ color: "#6512b2" }} >Report</a></Button>
                            }
                            {data.video &&
                                    <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.video} style={{ color: "#6512b2" }}>Video</a> </Button>
                                }
                            {data.code && 
                                <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.code} style={{ color: "#6512b2" }}>Code</a> </Button>
                            }
                            {data.website && 
                                <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"><a href={data.website} style={{ color: "#6512b2" }}>Website</a> </Button>
                            }

                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        );
    });

    const all_res = props.list.map(function (data, key) {
        var tags = Object.keys(data.tags);
        return (

            <Card className="m-2" style={{ width: '100%' }}>
                <Card.Header>
                    <Accordion.Toggle style={{ width: '100%', "color": "#6512b2" }} as={Button}
                        variant="link" eventKey={key + 1}>
                        <div class="float-left">
                            <Card.Title >
                                <div class="float-left">
                                    {data.name}

                                </div>
                            </Card.Title>
                            <br />
                            <div class="float-left">
                                {data.position &&
                                    <div >
                                        {data.position},  {data.org} <br />

                                    </div>
                                }
                            </div>

                        </div>
                        <div class="float-right">
                            {

                                tags.map(function (tag) {
                                    if(props.isClicked[props.icons[tag]]){
                                    return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: '#f8d776', color: 'black' }}>{tag} </Badge>
                                    }
                                    else{
                                        return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: 'rgb(211, 211, 211)', color: 'black' }}>{tag} </Badge>

                                    }
                                })
                            }
                            <br />
                            <div class="float-right">
                                {data.year}
                            </div>

                        </div>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={key + 1}>
                    <Card.Body>



                        <div class="float-left text-secondary" style={{ "text-align": "left" }}>
                            {data.desc}
                        </div>
                        <br />
                        <div class="float-left">



                            {data.paper &&
                                
                                    <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.paper} style={{ color: "#6512b2" }} >Paper</a></Button>
                                }
                            {data.video &&
                                    <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.video} style={{ color: "#6512b2" }}>Video</a> </Button>
                                }
                            {data.code && 
                                <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"> <a href={data.code} style={{ color: "#6512b2" }}>Code</a> </Button>
                            }
                            {data.website && 
                                <Button style={{ color: "#6512b2", "margin-top": "10px" , "margin-bottom": "10px", "margin-right": "10px",}} variant="outline"><a href={data.website} style={{ color: "#6512b2" }}>Website</a> </Button>
                            }

                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        );
    });
    return (

        <>

            <br />
            <center>
                <div className="justify-content-center" style={{ width: '80%' }}>
                    {filtered.length > 0 &&
                        <div class="float-left">

                            <h4 className="arrow" style={{ color: 'grey' }}> {props.name} </h4>
                        </div>

                    }
                    <br />
                    <br />
                    <center>
                        <Accordion className="justify-content-centerm-2" >
                            {
                                res
                            }
                        </Accordion>
                    </center>

                </div>
            </center>
        </>

    );


}