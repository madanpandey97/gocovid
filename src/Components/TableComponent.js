import React, {Component} from 'react';
import {  MDBContainer } from "mdbreact";

class TableComp extends Component{

    render(){
        // const tableStyle = {overflow-Y : hidden};

        return(
            
            < div className="card text-center mb-3" >

            <div className="card-body">
               <div className=" "  >
               <div className="text-center">
                  <h6 className="blue-text "><strong>State wise data of Covid19</strong></h6>
                   <p className="pink-text "><strong>Last Updated On Official Website- </strong></p>
                   <p className="pink-text "><strong>Last Refreshed- </strong></p>
               </div>
               <div className="table-responsive   w-100 d-block d-md-table" >

                     <table className="table">
                        <thead>
                          <tr>
                              <th scope="col">#</th>
                            <th scope="col">State</th>
                            <th scope="col">Total Case</th>
                            <th scope="col">Discharged</th>
                              <th scope="col">Deaths</th>
                            <th scope="col">Indian</th>
                              <th scope="col">Foreign</th>
                          </tr>
                        </thead>
                        <tbody>
                        {/* {% for item in regional_data %} */}
                          <tr>
                          <th scope="row">dfddfd</th>

                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                          </tr>
                          <tr>
                          <th scope="row">dfddfd</th>

                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                          </tr>
                          <tr>
                          <th scope="row">dfddfd</th>

                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                          </tr><tr>
                          <th scope="row">dfddfd</th>

                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                          </tr><tr>
                          <th scope="row">dfddfd</th>

                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                            <td><b>ddfdfdfd</b></td>
                          </tr>
                        {/* {% endfor %} */}
                        </tbody>
                   </table>
               </div>

               </div>
          </div>
        </div>
       


        );
    }

}

export default TableComp;