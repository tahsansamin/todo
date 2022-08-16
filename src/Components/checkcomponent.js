import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import './checkcomponent.css'
import Check from './chekcbox.svg'
import Delete from './undraw_throw_away_re_x60k.svg'

export default function checkcomponent({ task }) {
  const DelFunc = (item) =>{
    console.log(task)
    const myArr = JSON.parse(localStorage.getItem('tasks') || '[]')
    for(let i = 0;i<myArr.length;i++){
      if(myArr[i] === item){
        myArr.splice(i,1)
      }
    }
    localStorage.setItem('tasks',JSON.stringify(myArr))
    window.location.reload(false);


  }
  
  return (
    <div className="container">
      <div className='box1 p-2'>{task}</div>
      <div className='box2'><button className='personbutton' onClick={()=>{DelFunc(task)}}><img src={Delete} alt="delete" width='70px' height='70px'/></button></div>
      <div className='box3'><button className='personbutton' onClick={()=>{DelFunc(task)}}><img src={Check} alt="delete" width='50px' height='50px'/></button></div>
      
    </div>
  )
}
