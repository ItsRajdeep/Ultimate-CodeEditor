import React,{useContext} from 'react'
import Editor from './Editor'
import { DataContext } from '../Context/Dataprovider';

const Code = () => {
    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return (
        <>
            <div className="bg-black p-1 sm:flex">
                <Editor
                    heading="HTML"
                    icon="/"
                    color="red"
                   value={html}
                   onChange={setHtml}
                />
                <Editor
                    heading="CSS"
                    icon="*"
                    color="skyblue"
                   value={css}
                   onChange={setCss}
                />
                <Editor
                    heading="JavaScript"
                    icon="{}"
                    color="yellow"
                   value={js}
                   onChange={setJs}
                />
            </div>
        </>
    )
}

export default Code