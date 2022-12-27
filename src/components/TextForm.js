import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnClick1 = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }

  const handleOnClick2 = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleOnClear = ()=>{
    setText("");
    props.showAlert("Cleared", "success");
  }

  const handleCopy = ()=>{
    var t = document.getElementById("exampleFormControlTextarea1");
    t.select();
    navigator.clipboard.writeText(t.value);
  }

  // const convertMode = ()=>{
  //   if(btnName === "Dark Mode"){
  //     document.body.style.backgroundColor = '#05051b';
  //     setStyle({
  //       color : 'white',
  //       backgroundColor :'#1c1c28',
  //     })
  //     setBtnName("Light Mode");
  //   }
  //   else{
  //     document.body.style.backgroundColor = 'white';
  //     setStyle({
  //       color : 'black',
  //       backgroundColor :'white',
  //       border : 'none'
  //     })
  //     setBtnName("Dark Mode");
  //   }
  // }

  const [text, setText] = useState('Enter Text Here');

  const [myStyle, setStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  });

  const [btnName, setBtnName] = useState("Dark Mode");
  
  return (
    <>
    <div style={myStyle} className={`bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
       <div className={`mb-3 bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} style={myStyle}>
        <h2>{props.heading}</h2>
        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onClick={handleOnClick1}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleOnClick2}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleOnClear}>clear</button>       
       <button className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
       {/* <button className="btn btn-primary m" onClick={convertMode}>{btnName}</button>        */}
    </div>

    <div className={`mt-5 px-5 py-2 bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} style={myStyle}>
      <h2>Your Text Summary</h2>
      <p>No.of Words : {text.split(" ").length}  <br/> No. of Characters : {text.length}</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
