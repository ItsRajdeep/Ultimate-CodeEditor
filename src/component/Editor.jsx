import React ,{ useState } from 'react';
// import CodeMirror from 'react-codemirror2';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
const Editor = ({ heading, icon, color, value, onChange }) => {
    function handleChange(editor, data, value) {
        onChange(value);

    }
    const [open, setOpen] = useState(true);

  return (
    <>
        <div className="text-white mr-1 my-1 sm:my-0" style={ open? {flexGrow:1} : {flexGrow:0}}>
            <div className="flex items-center justify-between">
                <div className="flex bg-gray-700 w-max p-1 ">
                    <div style={{background:color}} className="text-black px-2 mr-1 font-bold rounded">{icon}</div>
                    <div className="text-white pr-1">{heading}</div>
                </div>
                <div className="hidden sm:block mx-3" >
                    <i onClick={() => setOpen(open => !open)
                        } className="fa fa-reorder hover:text-blue-500"></i></div>
            </div>
            <ControlledEditor
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    </>
  )
}

export default Editor