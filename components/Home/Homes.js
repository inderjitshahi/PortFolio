import React from 'react';
import Classes from './Home.module.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';

//Using React reveal is so easy
// import Zoom from 'react-reveal/Zoom';

function Homes(props) {
    return (
        // <Zoom>
        <div  id={'home'} className={Classes['home-container']}>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
        // </Zoom>
    );
}

export default Homes;