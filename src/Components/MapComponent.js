import React, {Component} from 'react';


class MapComp extends Component{

    render(){

        return(
            
            <div className="card">
                <div className="card-body">
                    <h6 className="blue-text pb-2"><strong>Lets Fight Together and defeat Corona</strong></h6>
                    <div className="view overlay">
                        <img src="assets/img/v.png" className="card-img-top img-fluid px-5 py-5" alt="virus" />
                        {/* <a href="" target="_blank">
                                <div className="mask rgba-white-slight"></div>
                        </a> */}
                    </div>
                    </div>

              
                <div className="card-body">
                  
                        <h6 className="blue-text pb-2"><strong>Stay Home Stay Safe</strong></h6>
                        <p className="pink-text pb-2"><strong>Check all data related to corona virus</strong></p>
                        <div className="embed-responsive embed-responsive-16by9" style={{height: "600px"}}>
                            <iframe title="iframetitle" className="embed-responsive-item" src="https://maps.mapmyindia.com/corona" allowfullscreen></iframe>
                        </div>
                </div>
            </div>
            


        );
    }

}

export default MapComp;