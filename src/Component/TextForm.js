import React, { useState } from 'react';



export default function TextForm(props) {


    const [text, setText] = useState("");

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);

        // props.showalert("text has been converted to uppercase" , "success");
    }


    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const clearText = () => {
        setText("");
    };

    const handleloclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showalert("text has been converted to lowercase" , "success");
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }


    const copyText = () => {
        
        navigator.clipboard.writeText(text);

        props.showalert("Copied to clipboard" , "success");
    }


    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : '#042734' }}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#13466E' : 'white', color: props.mode === 'dark' ? 'white' : '#042734' }} id="Mybox" rows="8"></textarea>
            </div>

            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleloclick}>Convert to lowercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
            <button disabled = {text.length ===0}className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>


            <hr />
            <p>No of Characters : {text.length} and No of Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            

            <p>Time to  read : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>

            <h2>Preview of Text Yet Written</h2>
            <p>{text.length>0? text : "Nothing to preview"}</p>

            
        </div>
    );
}



// textarea has a value which is the text(state variable) which can be updates using setText


// When the user is trying to change textarea(onchange handler belongs to text area)


// onchange function will run and event.target will return the event targeting the change function and value will take it as input