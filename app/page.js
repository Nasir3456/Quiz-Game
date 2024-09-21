"use client"
import React from 'react'
import { useState } from "react";

const page = () => {
  const [Num, setNum] = useState(0)
  const [score, setscore] = useState(0)
  const [ans, setans] = useState("")
  const [quiz, setquiz] = useState([
    {
      question : "which is the largest state of india ?",
      options : {
        a:["Gujarat",false],
        b:["Maharashtra",false],
        c:["Rajasthan",true],
        d:["Madhya Pradesh",false]
      },
    },
    {
      question : "which is the most populate city of india ?",
      options : {
        a:["Mumbai",true],
        b:["Hydrabad",false],
        c:["Kolkata",false],
        d:["Unja",false]
      },
    },
    {
      question : "which is the capital state of india ?",
      options : {
        a:["Jammu",false],
        b:["New Delhi",true],
        c:["Chennai",false],
        d:["Utrakhand",false]
      },
    },
    {
      question : "which is the largest city of gujarat ?",
      options : {
        a:["Rajkot",false],
        b:["Vadodra",false],
        c:["Ahemdabad",true],
        d:["Gandhinagar",false]
      },
    },
    {
      question : "which is the largest state of india ?",
      options : {
        a:["Cricket",false],
        b:["Table Tenis",false],
        c:["Vollyboll",false],
        d:["Hockey",true]
      },
    },
  ]);

  const lastOperation = () =>{
    if(Num < 4){
      setNum(Num+1)
    }else{
      alert(`Your Score is ${score}`)
      setscore(0)
      setNum(0)
    }
  }

  const handleSubmit = () =>{
    
    Object.entries(quiz[Num].options).map(([key, value]) => {
      if(ans == key && value[1] == true){
        setscore(1 + score)
      }
    })

    lastOperation();
  }

  return (
    <div className="quiz">
      <h3>{quiz[Num].question}</h3>

      <ul>
        {
          Object.entries(quiz[Num].options).map(([key, value]) => {
            return (
              <li key={key}>
                <input onChange={(e)=>{
                  setans(e.target.value)
                }} type="radio" name="btn" value={key} />
                <p >{value[0]}</p>
              </li>
            )
          })
        }
      </ul>

      <button onClick={()=>{
        handleSubmit()
      }}>Submit</button>
    </div>
  )
}

export default page