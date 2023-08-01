import React,{useContext,useState,useEffect} from 'react';
import {Box,styled} from "@mui/material";
import {DataContext} from "../Context/Dataprovider";
const MobRes = () => {
    const {html,css,js}=useContext(DataContext);
    const [src, setSrc] = useState('');
    useEffect(() => {
      const timeout= setTimeout(() => {
        setSrc(srcCode)
      }, 100);
    
      return () => clearTimeout(timeout);
    }, [html,css,js])
    const Result=styled(Box)`
    height: 100vh;
    `
    const srcCode=`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    `
  return (
    <Result>
      
        <iframe 
            srcDoc={src}
            title="Output"
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
        />
    </Result>
  )
}

export default MobRes