import './App.css';
import {useState} from "react"
import usePasswordGen from './usePasswordGenerator';

function App() {

  const [length,setLength] = useState(8);
  const [checkboxData, setCheckboxData] = useState([
    {title:"Include Uppercase Data", state:false},
    {title:"Include Lowercase Data", state:false},
    {title:"Include Numbers", state:false},
    {title:"Include Symbols", state:false},

  ]);

  const [copied,setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updateData = [...checkboxData];
    updateData[i].state = !updateData[i].state;
    setCheckboxData(updateData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password,errMsg,generatePassword } = usePasswordGen()

  return (
    <div className='container'>
      {password && ( 
        <div className='header'>
        <div className='title'> {password} </div>
        <button className='copyBtn' onClick={handleCopy}> {copied ? "Copied" : "Copy" } </button>
      </div>
      )}

      <div className='charLength'>
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input type="range" min='8' max='20'
        value={length}
        onChange={(e) => setLength(e.target.value)} 
         />
      </div>

      <div className='checkboxes'>
        {checkboxData.map(( checkbox , index) => {
          return <div key={index}>
            <input type='checkbox' onChange={() => handleCheckboxChange(index)} checked={checkbox.state} />
            <label>{checkbox.title}</label>
          </div>
        })}
      </div>

      {errMsg && <div className='errMsg'> {errMsg} </div> }

      <div>
        <button className='generateBtn' onClick={() => generatePassword( checkboxData,length )}>Generate Password</button>
      </div>


    </div>
  );
}

export default App;
