import React from 'react'
import TextTransition, { presets } from "react-text-transition";
import Box from "@mui/material/Box";
import { flexbox } from '@mui/system';

const texts = [
    "Innovación",
    "Tecnología",
    "Talento",
  ];
const SignInMovement = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
            <h1>
                <Box xs={12} md={8} lg={6} sx={{width:1,mt: 20, ml:33}} flexDirection="column" alignItems="stretch"  >
                 {/* <h2 style={{color: "#f5f5f5"}} >Somos</h2>  */}
            <TextTransition
        text={ texts[index % texts.length] }
        style={{color: "#f5f5f5"}}
        springConfig={ presets.wobbly }
        /* style={{width:5,mt: 274}}  */
        /* style={{ display:"flexbox", position:"fixed" }} */
      />
            </Box>
            </h1>

        
    )
}

export default SignInMovement
