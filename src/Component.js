import { positions, projects } from "./projects/list.js";
import { useState } from "react";
import { Badge, Button, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Experiences(props) {

  const total_num = props.isClicked.filter(Boolean).length
  const filtered = props.list.filter(function (val) {
    if (total_num == 0) return true;
    var tags = Object.keys(val.tags);
    for (var i = 0; i < tags.length; i++) {
      if (props.isClicked[props.icons[tags[i]]]) return true
    }
    return false;
  });
  const res = filtered.map(function (data, key) {
    var tags = Object.keys(data.tags);
    return (
      <Card className="mb-3 mt-3" style={{ borderRadius: "15px", width: '100%' }} >
        <Card.Header style={{ borderRadius: "15px", padding: "20px", background: '#f9f9f9', textAlign: "left" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "20px" }}>
            <div>
              <Card.Title style={{ margin: 0, fontWeight: "bold", fontSize: "18px" }}>
                {data.name}
              </Card.Title>
              {data.org && (
                <div style={{ color: 'gray', fontSize: "14px", marginTop: "5px" }}>

                  {data.position ? <>{data.position}, {data.org} </> : <>{data.org}</>}
                </div>
              )}
            </div>
            <div style={{ fontSize: "14px" }}>
              {data.year}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <div style={{ fontSize: "14px" }}>
              {data.thesis && <a href={data.thesis} style={{ marginRight: "10px", color: "#6512b2" }}>MS Thesis</a>}
              {data.paper && <a href={data.paper} style={{ marginRight: "10px", color: "#6512b2" }}>Paper</a>}
              {data.report && <a href={data.report} style={{ marginRight: "10px", color: "#6512b2" }}>Report</a>}
              {data.poster && <a href={data.poster} style={{ marginRight: "10px", color: "#6512b2" }}>Poster</a>}
              {data.video && <a href={data.video} style={{ marginRight: "10px", color: "#6512b2" }}>Video</a>}
              {data.code && <a href={data.code} style={{ marginRight: "10px", color: "#6512b2" }}>Code</a>}
              {data.website && <a href={data.website} style={{ marginRight: "10px", color: "#6512b2" }}>Website</a>}
              {data.article && <a href={data.article} style={{ marginRight: "10px", color: "#6512b2" }}>News Article</a>}
            </div>

          </div>

          <div style={{ textAlign: 'right' }}>

            <Accordion.Toggle as={Button} eventKey={key + 1} style={{ fontSize: "14px", background: 'none', border: 'none', padding: 0, color: 'grey' }}>
              <i className="fas fa-chevron-down"></i>  </Accordion.Toggle>
          </div>

        </Card.Header>
        <Accordion.Collapse eventKey={key + 1}>
          <Card.Body style={{ padding: "20px" }}>
            <div style={{ textAlign: "left", color: "text-secondary", fontSize: "14px" }}>
              {data.desc}
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
                  if (props.isClicked[props.icons[tag]]) {
                    return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: '#f8d776', color: 'black' }}>{tag} </Badge>
                  }
                  else {
                    return <Badge className="mr-1" variant="dark" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', background: 'black', color: 'black' }}>{tag} </Badge>

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

                <Button style={{ color: "#6512b2", "margin-top": "10px", "margin-bottom": "10px", "margin-right": "10px", }} variant="outline"> <a href={data.paper} style={{ color: "#6512b2" }} >Paper</a></Button>
              }
              {data.video &&
                <Button style={{ color: "#6512b2", "margin-top": "10px", "margin-bottom": "10px", "margin-right": "10px", }} variant="outline"> <a href={data.video} style={{ color: "#6512b2" }}>Video</a> </Button>
              }
              {data.code &&
                <Button style={{ color: "#6512b2", "margin-top": "10px", "margin-bottom": "10px", "margin-right": "10px", }} variant="outline"> <a href={data.code} style={{ color: "#6512b2" }}>Code</a> </Button>
              }
              {data.website &&
                <Button style={{ color: "#6512b2", "margin-top": "10px", "margin-bottom": "10px", "margin-right": "10px", }} variant="outline"><a href={data.website} style={{ color: "#6512b2" }}>Website</a> </Button>
              }
              {data.article &&
                <Button style={{ color: "#6512b2", "margin-top": "10px", "margin-bottom": "10px", "margin-right": "10px", }} variant="outline"><a href={data.article} style={{ color: "#6512b2" }}>Article</a> </Button>
              }

            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    );
  });
  return (

    <>


      <center>
        <div className="justify-content-center" style={{ width: '100%' }} >
          {filtered.length > 0 &&

            <div class="float-left" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', textAlign: "left" }}>
              <br />
              <br />
              <br />
            </div>

          }

          <center>
            <Accordion className="justify-content-centerm-2">
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