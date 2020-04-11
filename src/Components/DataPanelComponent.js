import React, {Component} from 'react';
// import {  MDBContainer } from "mdbreact";
// import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

class DataPanel extends Component{

    render(){
        return(

            <section>
            <div  className=" track-list mt-5">

                  <ul className="list-inline text-center">
                  <li className="list-inline-item  z-depth-1 px-3">
                            <img src="assets/img/icon-infected.png"  className="mt-1" />
                           <h5 className="blue-text mt-2" id="textsize"><strong>Total Case</strong></h5>
                                 <h5 className="pink-text  pb-4  " id="textsize"><i className="fas fa-walking"></i> &nbsp;fdsa</h5>
    
                      </li>
                        <li className="list-inline-item z-depth-1 px-3">
                                 <img src="assets/img/icon-infected.png"  className="mt-1" />
                           <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                 <h5 className="pink-text  pb-4 " id="textsize"><i className="fas fa-walking"></i> &nbsp;edfd</h5>
    
                      </li>
                      <li className="list-inline-item z-depth-1 px-3">
                                 <img src="assets/img/icon-infected.png"  className="mt-1" />
                           <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                 <h5 className="pink-text  pb-4 " id="textsize"><i className="fas fa-walking"></i> &nbsp;edfd</h5>
    
                      </li>
                      <li className="list-inline-item z-depth-1 ">
                                 <img src="assets/img/icon-infected.png"  className="mt-1" />
                           <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                 <h5 className="pink-text  pb-4 " id="textsize"><i className="fas fa-walking"></i> &nbsp;edfd</h5>
    
                      </li>
                      <li className="list-inline-item z-depth-1 ">
                                 <img src="assets/img/icon-infected.png"  className="mt-1" />
                           <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                 <h5 className="pink-text  pb-4 " id="textsize"><i className="fas fa-walking"></i> &nbsp;edfd</h5>
    
                      </li>
                </ul>
            </div>
    
        </section>
    
        );
    }
}

export default DataPanel;