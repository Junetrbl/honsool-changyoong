import React from 'react';
import honsoolCom from '../static/images/honsool_community.png';

const Header = () => {
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

export default Header;