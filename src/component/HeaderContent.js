import React from 'react';
import honsoolCom from '../static/images/honsool_design.png';

const HeaderContent = () => {
    return (
        <div style ={{
            width : '100%',
            height : 230,
            textAlign : 'center'
            }}>
            <img 
              style={{
                height: 230,
              }}
              src={honsoolCom} alt={'honsoolCom'} />
        </div>
    );
};

export default HeaderContent;