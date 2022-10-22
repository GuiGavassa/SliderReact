import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import image1 from '../src/img/foto 1.png';
import image2 from '../src/img/foto 2.png';
import image3 from '../src/img/foto 3.png';
import image4 from '../src/img/foto 4.png';
import image5 from '../src/img/foto 5.png';



const images = [image1, image2, image3, image4, image5]


function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)




  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className='fundo'>
      <div className='App'>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="Text alt" />

              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
