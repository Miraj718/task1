import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Form() {

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [select, setSelect] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const nagigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const formdate = {
            name: name,
            text: text,
            select: select,
            checkbox: checkbox
        };
        fetch("http://localhost:3000/productname", {
            method: "POST",
            body: JSON.stringify(formdate)
        })
        .then(res => {
            alert("data submit successfully");
            nagigate('/listdata');
          })

    };

    return (
        <div className="container">
            <div>
                <h1>Product List Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="companyName">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            placeholder="Product Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectCar">Select Car</label>
                        <select
                            className="form-control"
                            id="selectCar"
                            value={select}
                            onChange={(event) => setSelect(event.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Kia">Kia</option>
                            <option value="Audi">Audi</option>
                            <option value="XUV700">XUV 700</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="skuNo">SKU NO</label>
                        <input
                            type="text"
                            className="form-control"
                            id="skuNo"
                            placeholder="Enter SKU NO"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="displayCheckbox"
                            checked={checkbox}
                            onChange={(event) => setCheckbox(event.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="displayCheckbox">
                            Display
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </button>
                </form>
            </div>



           
        </div>
    );
}



