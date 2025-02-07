import React, { useState } from 'react';
import './AddItemPopUp.css';

const AddItemPopUp = ( { closePopUp, addItemPopUp } ) => {
    
    const [addItemImage, setAddItemImage] = useState('');

    const handleImage = (event) => {
        setAddItemImage(event.target.value);
    }; 

return (
    <div> 
      {addItemPopUp && (
        <div className="add-item-overlay">
            <div className="add-item">
                <form>
                <label> Product Name : </label>  
                <input type = "text" required/> <br/>
                <label> Product Description : </label>  
                <input type = "text" /> <br/>
                <label> Price : </label>  
                <input type = "number" required/> <br/>
                <label> Quantity : </label>  
                <input type = "number" required/> <br/>
                <label id = "image"> Add image :</label>
                <input type = "text" value = {addItemImage} onChange = {handleImage}/>
                </form>
                {addItemImage && (
                     <img src = {addItemImage} alt = "Item" style = {{width: '100px', height: '100px'}} /> 
                )}
                <button id = "close-button" onClick = {closePopUp}> x </button>
                <button id = "add-item-button"> Add item </button>
            </div>
             </div>
      )
      }

    </div>
)

};


export default AddItemPopUp;