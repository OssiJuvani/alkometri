import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(89)
  const [bottles, setBottles] = useState(3)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  
  function calculate(e) {
    e.preventDefault();
    let grams = ((bottles * 0.33) * 8 * 4.5)
    let gramsLeft = grams - ((weight / 10)  * time)
    let tulosM = gramsLeft / (weight * 0.7)
    let tulosF = gramsLeft / (weight * 0.6)
    let tulos = 0
    
  
    if (gender === 'male'){
      tulos = tulosM
    } else {
      tulos = tulosF
    }
    setResult(tulos)
  }

    if (result < 0) {
      setResult(0);
    }
      
  


return (

<>
<h3>Calculating alcohol blood level</h3>

<form onSubmit={calculate}>

  <div>
    <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
  </div>

  <div>
    <label>Bottles</label>
    <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  </div>

  <div>
    <label>Time</label>
    <select name="time"  value={time} onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>

  <div>
    <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked  onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
  </div>

  <div>
    <output>{result.toFixed(2)}</output>
  </div>

  <button>Calculate</button>

</form>






</>
  );
}

export default App;
