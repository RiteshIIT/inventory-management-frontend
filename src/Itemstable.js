const ItemsPage = ({productlist}) => {
    return ( 
        productlist.map((item,index)=>{
             
           return <tr>
            <td>{index+1}</td>
            <td>
                <img src={item.img} alt="" />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price*item.quantity}</td>
            </tr>;
        })
     );
}
 
export default ItemsPage;