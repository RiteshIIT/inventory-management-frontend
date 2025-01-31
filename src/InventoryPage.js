import './InventoryPage.css'
import { useState,useEffect } from 'react';
const InventoryPage = () => {
    var itemslist=[
        {
           name:"Chips",
           img:"https://i5.walmartimages.com/asr/8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg",
           quantity:9,
           id:1
       },
       {
           name:"maggi",
           img:"https://apnafoodmarket.com/wp-content/uploads/2020/06/maggi-2-minutes-noodles.jpg",
           quantity:3,
           id:2
       },
       {
           name:"kitkat",
           img:"https://th.bing.com/th/id/R.9938362deb42f652c3d5726aa22fa946?rik=POGgyHH9HOe%2f6A&riu=http%3a%2f%2fcdn2.bigcommerce.com%2fserver5100%2fh711h5%2fproducts%2f982%2fimages%2f1757%2fkit_kat__91519.1485997572.1280.1280.png%3fc%3d2&ehk=vu6A%2bSKyZ5uKEl8qcmo7vWqMYRC8CAIUIbqGAx2MDBI%3d&risl=&pid=ImgRaw&r=0",
           quantity:5,
           id:3
       }
       ,
       {
           name:"munch",
           img:"https://th.bing.com/th/id/OIP.6EkKVolHoB8TK3b1fJbogAHaJ4?rs=1&pid=ImgDetMain",
           quantity:7,
           id:4
       }
       ,
       {
           name:"bourbon",
           img:"https://th.bing.com/th/id/OIP.IKRjrHxKXakkRZmR2GxrJwHaHa?rs=1&pid=ImgDetMain",
           quantity:2,
           id:5
       }
       ,
       {
           name:"pen",
           img:"https://images-na.ssl-images-amazon.com/images/I/71iryf9Hz3L._SL1500_.jpg",
           quantity:4,
           id:6
       }
       ,
       {
           name:"lays Indian Masala",
           img:"https://www.urbangroc.com/wp-content/uploads/2021/05/Lays-Chips-Indias-Magic-Masala-01.jpg",
           quantity:5,
           id:7
       }
       ,
       {
           name:"Hide&Seek",
           img:"https://cdn.shopify.com/s/files/1/0253/1331/2864/products/Parle-Hide-seek_7c34205a-0202-4777-83d3-5041c2884dfb_580x@2x.png?v=1593166639",
           quantity:8,
           id:8
       }
    ];
    // let link=fetch('http://localhost:5000/');
    // link.then((itemslist)=>{
    //     return itemslist.json();
    // }).then((items)=>{
    //     itemslist=items;
    // }) 
    function colorcheck(no){
       if(no>=5){
        return "#8DEA65";
       }
       else return "#FF6F6F";
    }

    const[itemNo,SetItemNo]=useState('Item No :')
    const[Quantity,SetQuantity]=useState('Quantity :')
    // let items=document.querySelectorAll('.item');
     
    // items.forEach((item,index)=>{
    //     item.addEventListener('click',()=>{
    //            SetItemNo(`Item No: ${index+1}`);
    //            SetQuantity(`Quantity: ${itemslist[index].quantity}`);
    //            console.log("hello")
    //     })
    // })   

    
    return (  
     <div id="inventoryPage">
                <div id="headbar">
            <div id="itemno">
            {itemNo}
            </div>
            <div id="quantity">
            {Quantity}
            </div>
           </div>
           <div id="itemlist">
            {
                itemslist.map((item,index)=>{
                   return <div className="item" onClick={()=>{
                    SetItemNo(`Item No : ${index+1}`);
                    SetQuantity(`Quantity : `+item.quantity)
                   }}>
                        <div className="itemquant" style={{backgroundColor:colorcheck(item.quantity)}}>{item.quantity}</div>
                        <img className="itemimg" src={item.img}></img>
                        <div className="itemname">{item.name}</div>
                    </div>
                })
            }
           </div>
           <button id="stop" onClick={()=>{SetItemNo(`Item No : `);SetQuantity(`Quantity : `)}}>stop</button>
     </div>
    );
    
}
 
export default InventoryPage;