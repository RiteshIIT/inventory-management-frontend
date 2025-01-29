import { useState } from "react";
import './Summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
    // const [data, setData] = useState(null);

    return (
        <div className="summary">
            <div className="nav">
                <div className="box">
                    <h2>Summary</h2>
                </div>
                <div className="buttoncontainer">
                    <button class="continue">Continue</button>
                </div>
            </div>
            <div className="table">
                <div className="backbox">
                    <button class="back">
                    <FontAwesomeIcon icon={faLessThan} /> Back
                    </button>
                </div> 

                <table>
                    <tr>
                        <th>S No.</th>
                        <th>Item no.</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>40</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>42</td>
                        <td>2</td>
                    </tr>
                </table>
                <div className="total">
                    <p>Total</p>
                </div>

            </div>

        </div>
    );
}

export default Summary;