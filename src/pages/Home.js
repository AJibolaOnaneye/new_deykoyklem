import React from 'react'
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';
import Spacer from '../components/Spacer';
import HomeHero from '../components/HomeHero';
import Services from '../components/Services'
import About from '../components/About';

const Home = (props) => {
    return (
        <motion.main
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        {/* <Hero
            variant="home"
            title="Great coffee made simple."
            description="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
              coffees from our best roasters delivered directly to your door, at your schedule."
        >
            <Spacer size={40} desktopAndUp={58} />
            <Button onClick={() => props.history.push('/plan')}>
                Create your plan
            </Button>
        </Hero> */}
        
        <HomeHero />
        <Spacer size={120} tabletAndUp={144} desktopAndUp={136} />
        <Services />
        <Spacer size={120} tabletAndUp={144} desktopAndUp={200} />
        <About />
        <Spacer size={120} tabletAndUp={144} desktopAndUp={200} />
        {/* <HowItWorks variant="home">
            <Spacer size={79} tabletAndUp={44} desktopAndUp={64} />
            <Button onClick={() => props.history.push('/plan')}>
                Create your plan
            </Button>
        </HowItWorks> */}
        {/* <Spacer size={120} tabletAndUp={144} desktopAndUp={200} /> */}
    </motion.main>
    )
}

export default Home
