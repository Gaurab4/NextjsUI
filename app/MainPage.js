'use client'

import { Box, Paper } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';


const MainPage = () => {

    const paperRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 200; // Adjust this value as per your requirement

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (

    <div>
    <Paper
    ref={paperRef}
        sx={{
          margin: '45px',
          marginTop: '0px',
          height: '85vh',
          width: '95%',
          borderRadius: '4vh',
          background: '#c6abd6',
          transition: 'background-color 0.3s', // Add transition to background-color
          backgroundColor: isScrolled ? '#f2e4f5' : '#c6abd6', // Change background color based on scroll
        }}
    >
        <Box flexDirection='row' display='flex'>
            <Box>    
                    <h3 >Ahead App</h3>
                    <h1>Master your life<br></br> by mastering <br></br> emotions</h1>

                <Box flexDirection='row' display='flex' p={2}  sx={{}}>
                
                    <Paper 
                    component='button'
                    sx={{
                        p:'2px',
                        // m:'4px',
                        alignItems:'center',
                        justifyContent:'center',
                        alignContent:'center',
                    borderRadius:'2vh',
                    width:'180px',
                    height:'55px',
                    background:'black',
                    color:'white',
                    boxShadow:'none',
                    //   marginRight:'7%'
                    }}

                    >
                        Download on the <br></br>
                        <h5>App Store</h5>
                    </Paper>
                
                
                    <Box flexDirection='column' marginLeft={4} >
                        <p>⭐️⭐️⭐️⭐️⭐️</p>
                        <p>100+ AppStore reviews</p>
                    </Box>
                </Box>
            </Box>
            <Box flexDirection='row' display='flex' >
                {/* <img src='/leaf.png' ></img> */}
                <img src='/mainPage/Phone.png' height={'100%'} width={'65%'}></img>
            </Box>
        </Box>
    </Paper>
    </div>
    
  )
}

export default MainPage;

