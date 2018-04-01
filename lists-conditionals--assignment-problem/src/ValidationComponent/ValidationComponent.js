import React from 'react';


const validationComponent = ( props ) => {

    let redText = {
      color: 'red'
    }

    let blueText = {
      color: 'blue'
    }

    let message = null;

    if(props.textLength < 5){
      message = <p style={redText}>Text too short</p>;
    }else{
      message = <p style={blueText}>Text long enough</p>;
    }

    return (
        <div>
            {message}
        </div>
    )
};

export default validationComponent;
