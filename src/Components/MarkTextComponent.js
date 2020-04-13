import React, {Component} from 'react';

class MarkText extends Component{

    render(){

        return(
            
            <div className="purple-gradient wow fadeIn mt-4">
                <marquee>
                    <strong className="white-text">
                                This is not official website.
                                We are providing data directly fetched from Ministry of Health and Family Welfare.
                                More Updates are comming soon.
                    </strong>
                </marquee>
            </div>
       


        );
    }

}

export default MarkText;