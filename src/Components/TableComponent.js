import React, {Component} from 'react';



class TableComp extends Component{

    
  constructor(props) {
    
    super(props);

    this.state = {
      items: props.items
    };
   }

  
  renderTableData() {
    
    return this.props.items.map((data, index) => {
       const { state, confirmed, active, recovered, deaths } = data //destructuring
       return (
          <tr key={state}>
            <td><b>{state}</b></td>
             <td>{confirmed}</td>
             <td>{active}</td>
             <td>{recovered}</td>
             <td>{deaths}</td>
          </tr>
       )
    })
 }


    render(){
        // const tableStyle = {overflow-Y : hidden};
        // const tableData =this.state.items.slice(1, this.state.items.length);
       
        return(
            
            < div className="card text-center mb-3" >

            <div className="card-body">
               <div className=" "  >
               <div className="text-center">
                  {/* <h6 className="blue-text "><strong>State wise data of Covid19</strong></h6> */}
                    <p className="pink-text "><strong>State wise data of Covid19 </strong></p>
                   {/* <p className="pink-text "><strong>Last Refreshed- </strong></p> */} 
               </div>
               <div className="table-responsive   w-100 d-block d-md-table" >

                     <table className="table">
                        <thead>
                          <tr>
                              <th scope="col">State/UT</th>
                            
                            <th scope="col">Total Case</th>
                            <th scope="col">Active</th>
                            <th scope="col">Discharged</th>
                              <th scope="col">Deaths</th>
                         
                          </tr>
                        </thead>
                        <tbody>
                       {this.renderTableData()}
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