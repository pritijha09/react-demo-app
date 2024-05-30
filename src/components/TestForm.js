import React , {useState} from 'react';

export default function TestForm(Props) {
    const handleUpClick = (e)=>{
        e.preventDefault();
        let newtext = text.toUpperCase()
        setText(newtext);
    }
    const handleLoClick = (e)=>{
        e.preventDefault();
        let newtext = text.toLowerCase()
        setText(newtext);
    }

    const handleClearClick = (e)=>{
        e.preventDefault();
        let newtext = ""
        setText(newtext);
    }

    const handleCaptClick = (e)=>{
        e.preventDefault();
        let newtext = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newtext);
    }

    const handleDownloadTest = (e)=>{
        e.preventDefault();
        const link = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "sample.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    }

    const handleCopyToClipboard = (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(text);
    }

    
    const handleOnChange =(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   
  return (
    <>
      <div className="container">
      <form>
        <div className="mb-3">
          <h1>{Props.headeing}</h1>
          <textarea
            placeholder='Enter text here...'
            className="form-control"
            id="myBox1"
            value={text}
            onChange={handleOnChange}
            rows="10"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpClick.bind(this)}
        >
          Convert to UpperCase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleLoClick.bind(this)}
        >
          Convert to LowerCase
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleCaptClick.bind(this)}
        >
          Capitalized Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleDownloadTest.bind(this)}
        >
          Download Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleCopyToClipboard.bind(this)}
        >
          Copy to clipboard
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleClearClick.bind(this)}
        >
          Clear text
        </button>
      </form>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.08 * text.split(' ').length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  
  );
}
