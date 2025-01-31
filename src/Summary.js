import { useState } from "react";
import './Summary.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
    // const [data, setData] = useState(null);

    return (
        <div className="summary">
            <div className="nav">
                <div className="heading-summary">
                    <h2>Summary</h2>
                </div>
                <button>Continue</button>
            </div>
            <div className="table">
                <button>
                    <FontAwesomeIcon className="ic" icon={faLessThan} />Back
                </button>
                {/* <div className="table-container"> */}
                <table>
                    <thead>
                        <tr>
                            <th class="heading1">S No.</th>
                            <th class="heading2">Item no.</th>
                            <th class="heading3">Quantity</th>
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
                </table>
                {/* </div> */}

                <div className="total">
                    <p>Total</p>
                </div>

            </div>

        </div>
    );
}

export default Summary;