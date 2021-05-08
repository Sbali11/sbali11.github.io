import { positions, projects } from "./projects/list.js";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";


export default function Experiences(props) {
    const filtered = props.list.filter(function (val) {
        var tags = Object.keys(val.tags);
        for (var i = 0; i < tags.length; i++) {
            if (props.isClicked[props.icons[tags[i]]]) return true
        }
        return false;
    });
    const res =  filtered.map(function (data, key) {
        var tags = Object.keys(data.tags);
        return (

            <Card className="m-2" style={{ width: '30rem', height: '25rem', overflow: "scroll", background: 'rgb(87, 83, 149)', color: 'white' }}>


                <Card.Header>

                    <br />
                    {data.position &&
                        <Card.Title style={{ color: "#f8d776" }}>{data.position},  {data.org} </Card.Title>
                    }
                    <h4> {data.name}</h4>
                    {data.year}

                </Card.Header>

                <Card.Body style={{ overflow: "scroll", background: 'white' }}>
                    <div class="float-right">
                        {

                            tags.map(function (tag) {

                                return <Badge className="mr-1" variant="dark" style={{ overflow: "scroll", background: '#f8d776', color: 'black' }}>{tag} </Badge>
                            })
                        }
                    </div>
                    <br />

                    <Card.Text className="text-secondary" style={{ "text-align": "left" }}>
                        <div class="float-right text-secondary">
                            <b>{data.desc}</b>
                        </div>
                    </Card.Text>
                    <br />

                    {data.link && <Card.Link variant="primary" href={data.link}>Tell Me more</Card.Link>}
                </Card.Body>
            </Card>
        );
    }); 
    return (

        <>
            {filtered.length>0  && 
                <div >
                <h2 className="arrow" color="white" > {props.name} </h2>
                
                </div>
                }
            <div className="row justify-content-center" >
            {
                res
            }
            </div>
        </>
    );


}