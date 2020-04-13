import React, {Component} from 'react';
import {  MDBContainer } from "mdbreact";
// import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

class TestingData extends Component{

      constructor(props) {
            super(props);
            this.state = {
              error: null,
              isLoaded: false,
              items: []
            };
          }
      
          componentDidMount() {
            fetch("https://api.covid19india.org/data.json")
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    items: result.data['tested']
                  });
                },
                
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
          }     

    render(){

      const covid = this.state.items;
      const latestTestData = Object.keys(covid)[Object.keys(covid).length-1];
        return(

            <div className="row">
            <div className="col-6 col-sm-6 col-md-6  " id="dateid">
            <p className="pink-text "><strong>All Reports from ICMR-<br />Government Data (link) </strong></p>
            </div>
            <div className="col-6 col-sm-6 col-md-6 float-right" id="dateid">
            <p className="pink-text  float-right" ><strong>last updated -<br /><span id="datesmallid">11 April 2020  12:40 PM</span></strong></p>
         
            </div>

      </div>

      <div  className=" track-list mt-1">

            <ul className="list-inline text-center">
                <li className="list-inline-item text-center z-depth-1 px-3">
                  <img src="assets/img/icon-infected.png"  alt ="virus" className="mt-1" />
                   <h5 className="blue-text mt-2" id="textsize"><strong>Sample Tested</strong></h5>
                  <h5 className="pink-text  pb-2 " id="textsize"><i className="fas fa-walking"></i> &nbsp;{latestTestData.totalsamplestested}</h5>
                </li>

                <li className="list-inline-item text-center z-depth-1 px-3">
                  <img src="assets/img/icon-infected.png"  alt ="virus" className="mt-1" />
                   <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                  <h5 className="pink-text  pb-2 " id="textsize"><i className="fas fa-walking"></i> &nbsp;{covid.discharged}</h5>
                </li>
                <li className="list-inline-item text-center z-depth-1 px-3">
                  <img src="assets/img/icon-infected.png"  alt ="virus" className="mt-1" />
                   <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                  <h5 className="pink-text  pb-2 " id="textsize"><i className="fas fa-walking"></i> &nbsp;{covid.discharged}</h5>
                </li>

            </ul>   
        </div>

          
        );
    }
}

export default TestingData;