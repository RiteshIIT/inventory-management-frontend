import { useState } from 'react';
import React from 'react';
import './AddItemPopUp.css';
import axios from 'axios';


const AddItemPopUp = ( { closePopUp, addItemPopUp } ) => {
    
const [name,setName]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState('');
const [quantity,setQuantity]=useState('');
// const [image,setImage]=useState('');

    const [addItemImage, setAddItemImage] = useState('');

    const handleImage = (event) => {
        setAddItemImage(event.target.value);
    }; 
const handleClick=async()=>{
      // console.log(name, password);
      try {
         await axios.post('http://127.0.0.1:8000/inventory/new/', { 
            name,
            description,
            price,
            quantity,
            img:addItemImage
        },
        {
            headers: {
                "Authorization": `Token ${localStorage.getItem("auth_token")}`,  // Use "Bearer" if using JWT
                "Content-Type": "application/json",
            },}
        );
        alert("Item Added Successfully");
    }
    catch (error) {
      console.log(error);
        console.error("Couldn't Add, try again:", error.response?.data);
        alert("Couldn't Add, try again:" + JSON.stringify(error.response?.data));
    }
    // closePopUp;
}

return (
    <div> 
      {addItemPopUp && (
        <div className="add-item-overlay">
            <div className="add-item">
                <form>
                <label> Product Name : </label>  
                <input type = "text" required onChange={(e)=>{setName(e.target.value)}}/> <br/>
                <label> Product Description : </label>  
                <input type = "text" required onChange={(e)=>{setDescription(e.target.value)}}/> <br/>
                <label> Price : </label>  
                <input type = "number" required onChange={(e)=>{setPrice(e.target.value)}}/> <br/>
                <label> Quantity : </label>  
                <input type = "number" required onChange={(e)=>{setQuantity(e.target.value)}}/> <br/>
                <label id = "image"> Add image :</label>
                <input type = "text" value = {addItemImage} onChange ={handleImage}/>
                </form>
                {addItemImage && (
                     <img src = {addItemImage} alt = "Item" style = {{width: '100px', height: '100px'}} /> 
                )}
                <button id = "close-button" onClick = {closePopUp}> x </button>
                <button id = "add-item-button" onClick={handleClick}> Add item </button>
            </div>
             </div>
      )
      }

    </div>
)

};


export default AddItemPopUp;