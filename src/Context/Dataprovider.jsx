import React, {createContext,useState} from 'react'

const DataContext=createContext(); 

const Dataprovider = ({children}) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <DataContext.Provider 
     value={{
          html,
          setHtml,
          css,
          setCss,
          js,
          setJs
     }}
    >
      {children}  
    </DataContext.Provider>
  )
}

export default Dataprovider;
export {DataContext};