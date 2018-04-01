import React from 'react';


const charComponent = ( props ) => {
    let style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }

    return (
        <div style={style} onClick={props.onclick}>
          {props.char}
        </div>
    )
};

export default charComponent;
