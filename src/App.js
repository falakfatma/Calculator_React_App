import { useState } from "react"

function App() {
  const number = [1,2,3,4,5,6,7,8,9,0]
  const operations = ['%','*','.','+','-']
  const extraOperations = ['C','CE','Erase']
  const [numbers,setNumbers] = useState(0)
  const [operation,setOperation] = useState(0)
  const [extraOperation,setExtraOperation] = useState(0)
  const [value,setValue] = useState(0)

  const numberFunc = (val) => {
    console.log(val)
    setValue(val)
  }

  return (
    <div className="Container">
      <div className="main">
        <input value={value}/>
        <div>
          {number.map((val,ind)=>{
            return <button className="btn" key={ind} onClick={()=>numberFunc(val)}>{val}</button>
          })}     
          {operations.map((val,ind)=>{
            return <button className="btn" key={ind}>{val}</button>
          })}     
          {extraOperations.map((val,ind)=>{
            return <button className="btn" key={ind}>{val}</button>
          })}     
        </div>
      </div>
    </div>
  )
}
export default App