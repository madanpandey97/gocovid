import React, {Component} from 'react';
import {  MDBContainer } from "mdbreact";

// import { ListGroup, ListGroupItem } from 'reactstrap';
import './style.css';

class DataPanel extends Component{

      // constructor(props) {
      //       super(props);  
      //     }
      
      //     componentDidMount() {
      //       fetch("https://api.covid19india.org/data.json")
      //         .then(res => res.json())
      //         .then(
      //           (result) => {
      //             this.setState({
      //               isLoaded: true,
      //               items: result.statewise[0]
      //             });
      //           },
                
      //           // Note: it's important to handle errors here
      //           // instead of a catch() block so that we don't swallow
      //           // exceptions from actual bugs in components.
      //           (error) => {
      //             this.setState({
      //               isLoaded: true,
      //               error
      //             });
      //           }
      //         )
      //     }     

    render(){

      const covid = this.props.items;
     

        return(

            <section>
                  <br></br>
                  <MDBContainer>
                  <div className="row">

                              <div class=" col-12 col-sm-6 col-md-6  mb-3 mb-md-0">
                                    
                                    
                                          <div className="row">
                                                <div className="col-6 col-sm-6 col-md-6  " id="dateid">
                                                <p className="pink-text "><strong>Covid India Tracker<br /><span id="datesmallid">A Self Initiative </span></strong></p>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 " id="dateid">
                                                <p className="pink-text  float-right" ><strong>last updated -<br /><span id="datesmallid">{covid.lastupdatedtime}</span></strong></p>
                                                </div>

                                          </div>
                                           
                                 
                                    <div  className=" track-list mt-1">

                                          <ul className="list-inline  text-center">
                                        
                                          <li className="list-inline-item text-center  z-depth-1 px-3">
                                                      <img src="assets/img/icon-infected.png"  alt ="virus" className="mt-1" />
                                                      <h5 className="blue-text mt-2" id="textsize"><strong>Total cases</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="fas fa-hospital"></i> &nbsp;{covid.confirmed}</h5>
                        
                                          </li>

                                                <li className="list-inline-item text-center  z-depth-1 px-3">
                                                      <img src="assets/img/green.png"  alt ="virus" className="mt-1" />
                                                <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="far fa-smile"></i> &nbsp;{covid.recovered}</h5>
                        
                                          </li>
                                          <li className="list-inline-item text-center  z-depth-1 px-3">
                                                      <img src="assets/img/red.png" alt ="virus" className="mt-1" />
                                                <h5 className="blue-text mt-2" id="textsize"><strong>Deaths</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="fas fa-skull-crossbones"></i> &nbsp;{covid.deaths}</h5>
                        
                                          </li>
                                        
                                    </ul>
                               </div>
    
                              </div>
                              <div class="col-12 col-sm-6 col-md-6" id="blinkid">
                                    
                                   
                                    <div className="row">
                                                <div className="col-6 col-sm-6 col-md-6  " id="dateid">
                                                <p className="pink-text "><strong>Today's Report <br /><span  id="datesmallid">Opensource COVID19-India API</span>  </strong></p>
                                                </div>
                                                <div className="col-6 col-sm-6 col-md-6 float-right" id="dateid">
                                                <p className="pink-text  float-right" ><strong>ICMR Data <br /></strong></p>
                                             
                                                </div>

                                          </div>
                                    
                                          <div  className=" track-list mt-1">

                                    <ul className="list-inline text-center">
                                    <li className="list-inline-item text-center z-depth-1 px-3">
                                                      <img src="assets/img/icon-infected.png"  alt ="virus" className="mt-1" />
                                                <h5 className="blue-text mt-2" id="textsize"><strong>New Cases</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="fas fa-hospital"></i> &nbsp;{covid.deltaconfirmed}</h5>
                        
                                          </li>
                                          <li className="list-inline-item text-center z-depth-1 px-3">
                                                      <img src="assets/img/orange.png"  alt ="virus" className="mt-1" />
                                                <h5 className="blue-text mt-2" id="textsize"><strong>Discharged</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="far fa-smile"></i> &nbsp;{covid.deltarecovered}</h5>
                        
                                          </li>
                                          <li className="list-inline-item text-center z-depth-1 px-3">
                                                      <img src="assets/img/red.png"  alt ="virus" className="mt-1" />
                                                <h5 className="blue-text mt-2" id="textsize"><strong>Deaths</strong></h5>
                                                      <h5 className="pink-text  pb-2 " id="textsize"><i class="fas fa-skull-crossbones"></i> &nbsp;{covid.deltadeaths}</h5>
                        
                                          </li>
                                    
                                    </ul>
</div>

                        </div>

                  </div>
                 
                  </MDBContainer>
        </section>
    
        );
    }
}

export default DataPanel;