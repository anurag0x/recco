import  axios  from "axios"

export const getdata=()=>(dispatch)=>{
    fetch("http://localhost:8080/products").then((res=>res.json())).then(data=>{
       
    dispatch({type:"GetData",payload:data})
})
    .catch(err=>console.log(err))
}

export const updateapprove = (id) => (dispatch) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: 'PATCH', // Use PATCH method for partial updates
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify({
        status: "Approved", // Add any other fields you want to update
      }),
    })
      .then((res) => {
    
        return res.json();
      })
      .then((data) => {
        // Handle the data as needed
        console.log(data);
        dispatch(getdata()); // Assuming getdata is an action to fetch updated data
      })
      .catch((err) => {
        // Handle errors
        console.error(err.message);
      });
  };
export const updatemissing = ( id) => (dispatch) => {
    fetch(`http://localhost:8080/products/${id}`, {
      method: 'PATCH', // Use PATCH method for partial updates
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify({
        status: "Missing", // Add any other fields you want to update
      }),
    })
      .then((res) => {
    
        return res.json();
      })
      .then((data) => {
        // Handle the data as needed
        console.log(data);
        dispatch(getdata()); // Assuming getdata is an action to fetch updated data
      })
      .catch((err) => {
        // Handle errors
        console.error(err.message);
      });
  };