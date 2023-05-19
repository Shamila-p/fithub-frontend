import React from 'react';
import NavBar from '../../../components/User/Navbar/Navbar';
import Main from '../../../components/User/Main/Main';
import ActionAreaCard from '../../../components/User/CardSection/ActionCard'
import Transform from '../../../components/User/Transform/Transform';
import DisplayVideo from '../../../components/User/Video/DisplayVideo';
import Footer from '../../../components/User/Footer/Footer';
import Testimonial from '../../../components/User/Testimonial/Testimonial';


function Landing() {
  return (
    <div>
        <NavBar/>
        <Main/>
        <ActionAreaCard/>
        <Transform/>
        <DisplayVideo/>
        {/* <Testimonial/> */}
        <Footer/>
    </div>
  )
}

export default Landing