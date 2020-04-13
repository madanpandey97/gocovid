import React , {Component} from 'react';

import {  MDBContainer } from "mdbreact";
import Header from './HeaderComponent';
import MarkText from './MarkTextComponent';
import DataPanel from './DataPanelComponent';
import BlinkingText from './BlinkingTextComponent';
import TableComp from './TableComponent';
import MapComp from './MapComponent';
class Main extends Component{

    
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      dataState:[]
    };
  }

  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.statewise[0],
            dataState:result.statewise
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
        
        const newData = this.state.dataState.slice(1,this.state.dataState.length);
        
        return(
            <main class="mt-2 pt-5">
                    <Header />
                    <MarkText />
                    <DataPanel  items={this.state.data} />
                    <BlinkingText />
                    <br></br>
                    <MDBContainer>             
                        <div class="row">
                                <div class="col-sm-6 col-md-8  mb-3 mb-md-0">
                                    <TableComp items={newData} />
                                </div>
                                <div class="col-sm-8 col-md-4">
                                    <MapComp />
                                </div>
                            </div>
                    </MDBContainer> 
            </main>
             
        );
    
    }

}

export default Main;