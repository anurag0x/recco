import React from 'react'
import { Link } from 'react-router-dom'
// import'./Nav.css'
const NavBar = () => {

  return <><div style={{display:"flex",justifyContent:"space-between",margin:"auto",backgroundColor:"green",color:"white"}}>
  <div style={{display:"flex",gap:"0px 50px",alignItems:"center",marginLeft:"80px"}} >
    <h1>Reeco</h1>
    <div style={{display:"flex",gap:"0px 10px",marginTop:"5px",fontSize:"20px"}}>
        <Link style={{color:"white",underline:"none",textDecoration:"none"}}>Store</Link>
        <Link style={{color:"white",underline:"none",textDecoration:"none"}}>Order</Link>
        <Link style={{color:"white",underline:"none",textDecoration:"none"}}>Analytics</Link>
    </div>
   
  </div>
  <div style={{display:"flex",gap:"50px",alignItems:"center",marginRight:"80px",color:'white'}}>
        <img style={{cursor:"pointer",width:"15%",borderRadius:"10%",transform: "scaleX(-1)"}} src="https://img.icons8.com/?size=80&id=EWIPV54KJjqk&format=png" alt="" />
        <p style={{fontSize:"20px"}}>Hello,<span> </span>James▽</p>
    </div>
  </div>
  <div style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"}}>
    <p style={{marginLeft:"80px",fontSize:"20px"}}>Orders  {'> '}  <u>Order 32457ABC</u></p>
    <div style={{display:"flex",justifyContent:"space-between", margin:"0px 80px",alignItems:"center"}}>
      <h1>Order 32457ABC</h1>
       
       <div style={{display:'flex',gap:"20px",marginRight:"38px"}}>
        <button style={{padding:"15px",border:"1px solid green",borderRadius:"25px", backgroundColor:"white",color:"green",fontSize:"15px",cursor:'pointer'}}><b>Back</b></button>
        <button style={{padding:"15px",border:"1px solid green",borderRadius:"25px", backgroundColor:"green",color:"white",fontSize:"15px",cursor:'pointer'}}><b>Approve Order</b></button>
       </div>
    </div>
  </div>
 
  </>
}
export default NavBar