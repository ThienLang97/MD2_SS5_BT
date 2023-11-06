import React, { useState } from 'react'

export default function BT10() {
    const [count,setCount] = useState(0)
    const [value3,setValue] = useState(0)
   
    const changeValue=(e)=>{
        let value = e.target.value;
        let value1 = value.split(" ")
        let valuezz = value1.join("")
        
        let value2 = valuezz.length
        setCount(value2)
    }
    const checkCount=()=>{
        setValue(count)

    }
   
  return (
    <div>
      <input type="text" onChange={changeValue}/>
      <button onClick={checkCount}>Đếm kí tự</button>
      <p>Số kí tự là: {value3} </p>
    </div>
  )
}
