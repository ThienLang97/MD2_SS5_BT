import React, {useState} from 'react'

export default function BT9() {
    const [count,setCount] = useState(0)
    const check=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>check({setCount})}>CLick here</button>
    </div>
  )
}
