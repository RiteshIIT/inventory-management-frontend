import { useState } from "react";
import './Summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Summary = () => {
    // const [data, setData] = useState(null);
    const history = useHistory();

    const handleClick = () => {
        history.push('/inventory-page');
    }

    const handleContinue = () => {
        history.push('/home');
    }

    return (
        <div className="summary">
            <div className="nav">
                <div className="heading-summary">
                    <h2>Summary</h2>
                </div>
                <button onClick={handleContinue}>Continue</button>
            </div>
            <div className="container">
                <button className="back" onClick={handleClick}>
                    <FontAwesomeIcon className="ic" icon={faLessThan} />Back
                </button>
                <div className="table">
                    <div className="headings">
                        <p>S.No</p>
                        <p>Item No.</p>
                        <p>Quantity</p>
                        <p>Amount</p>
                    </div>
                    <div className="columns">   
                            <p>
                                1
                                <br />
                                2
                            </p>
                            <p class='col2'>
                                45
                                <br />
                                46
                            </p>                       
                            <p>
                                10
                                <br />5
                            </p>                                             
                            <p>
                                120
                                <br />150
                            </p>
                    </div>
                </div>
                {/* <table>
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Item no.</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table> */}

                <div className="total">
                    <p>Total: </p>
                    <p>270</p>
                </div>

            </div>

        </div>
    );
}

export default Summary;