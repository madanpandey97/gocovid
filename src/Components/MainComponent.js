import React , {Component} from 'react';
import {  MDBContainer } from "mdbreact";
import Header from './HeaderComponent';
import MarkText from './MarkTextComponent';
import DataPanel from './DataPanelComponent';
import BlinkingText from './BlinkingTextComponent';
import TableComp from './TableComponent';
import MapComp from './MapComponent';
class Main extends Component{

    render(){
        return(
            <main class="mt-2 pt-5">
                    <Header />
                    <MarkText />
                    <DataPanel />
                    <BlinkingText />
                    <br></br>
                    <MDBContainer>             
                        <div class="row">

                                <div class="col-sm-6 col-md-8  mb-3 mb-md-0">
                                    <TableComp />
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