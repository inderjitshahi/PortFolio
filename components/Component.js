import React from 'react';
import { TOTAL_SCREENS } from './Utilities/CommonUtilities';
import Zoom from 'react-reveal/Zoom'
function Component(props) {
    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map(screen => (
                (screen.Component ?
                    <screen.Component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} /> :
                    <div key={screen.screen_name}></div>))
            )
        )
    };

    return (
        <div className='Component'>
            <Zoom center>
                {mapAllScreens()}
            </Zoom>
        </div>
    );
}

export default Component;