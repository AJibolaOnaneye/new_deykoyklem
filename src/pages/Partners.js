import React from 'react'
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import Staffs from '../components/Staffs';

const Partners = () => {
    return (
        <div>
              <motion.main
			variants={pageAnimation}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
            <Hero
				variant="partners"
				title="Our Staffs"
			/>
            <Staffs />
            </motion.main>
        </div>
    )
}

export default Partners
