import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getdata, updateapprove, updatemissing } from '../Redux/action'
const Showdata = () => {
const dispatch=useDispatch()
const alldata=useSelector(store=>store.appreducer.data)

useEffect(()=>{
   dispatch(getdata())
  console.log(alldata)
    },[dispatch])
 
      return (
        <div style={containerStyles}>
          <div style={headerStyles}>
            <input type="search" placeholder="Search..." style={inputStyles} />
            <div style={btnWrapperStyles}>
              <button style={addItemButtonStyles}>Add item</button>
              {/* Assuming PiPrinterLight is an SVG or component */}
             <img src='https://img.icons8.com/?size=50&id=123&format=png'/>
            </div>
          </div>
          <div style={listContainerStyles}>
            <div style={listHeaderStyles}>
              <p style={productNameStyles}>Product name</p>
              <p style={brandStyles}>Brand</p>
              <p style={priceStyles}>Price</p>
              <p style={quantityStyles}>Quantity</p>
              <p style={totalStyles}>Total</p>
              <p style={statusStyles}>Status</p>
            </div>
            <div style={listContentStyles}>
             {
                alldata.length>0?alldata.map((el,i)=>{
                    return <div key={i} style={{display:"flex" }}>
                            <div style={productNameStyles}>
                                <img src={el.img}/>
                                <p>{el.title}</p>
                            </div>
                            <div style={brandStyles}>
                                <p>{el.brand}</p>  
                            </div>
                            <div style={priceStyles}> <p>{el.price}</p></div>
                            <div style={quantityStyles}> <p>{el.quantity}</p></div>
                            <div style={totalStyles}> <p>{el.total}</p></div>
                            <div style={statusStyles}>
                               <p style={{color:el.status=="Approved"?"green":el.status=="Missing"?"orange":el.status=="Missing-Urgent"?"red":null,}}>{el.status}</p> 
                            </div>
                             <div style={{display:"flex",alignItems:"flex-start",marginBottom:"-10px"}}>
                                <img style={{cursor:"pointer",marginTop:"12px"}} onClick={()=>{dispatch(updateapprove(i))}} src='https://img.icons8.com/?size=26&id=27&format=png'/>
                                <img style={{cursor:"pointer"}} onClick={()=>{dispatch(updatemissing(i))}} src='https://img.icons8.com/?size=50&id=6483&format=png'/>
                                <p style={{cursor:"pointer"}}>Edit</p>
                             </div>

                    </div>
                }):null
             }
            </div>
          </div>
        </div>
      );
    };
    
    const containerStyles = {
      backgroundColor: 'white',
      border: 'solid lightgray 1px',
      borderRadius: '10px',
      width:"92%",
      margin:"auto",
      marginTop:"20px"
    };
    
    const headerStyles = {
      width: '90%',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px auto',
      padding:"10px"
    };
    
    const inputStyles = {
      width: '400px',
      paddingLeft: '15px',
      borderRadius: '50px',
      border: 'solid lightgray 1px',
      height: '40px',
    };
    
    const btnWrapperStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: '50px',
    };
    
    const addItemButtonStyles = {
      padding: '0px 30px',
      height: '40px',
      borderRadius: '50px',
      border: 'solid #1e633f 1px',
      color: '#1e633f',
      fontWeight: 600,
    };
    
    const listContainerStyles = {
      width: '90%',
      margin: 'auto',
    };
    
    const listHeaderStyles = {
    
      display: 'flex',
      alignItems: 'center',
    //   justifyContent:"space-around",
      border: 'solid lightgray 1px',
      borderRadius: '10px 10px 0px 0px',
      height: '50px',
      color: 'gray',
      fontSize: 'larger',
    };
    
    const productNameStyles = {
      width: '350px',
      display:"flex",
      alignItems:"center"
    };
    
    const brandStyles = {
      width: '220px',
      textAlign: 'start',
    };
    
    const priceStyles = {
      width: '220px',
      textAlign: 'start',
    };
    
    const quantityStyles = {
      width: '220px',
      textAlign: 'start',
    };
    
    const totalStyles = {
      width: '220px',
      textAlign: 'start',
    };
    
    const statusStyles = {
        width:"200px",
      textAlign: 'start',
      marginLeft: '20px',
    };
    
    const listContentStyles = {};
    
 
    
export default Showdata