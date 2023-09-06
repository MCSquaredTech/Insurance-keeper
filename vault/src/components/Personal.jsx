import { useState } from "react";

const Personal = ({ data, setData, OnEdit }) => {
    const { first, last, phone, email } = data;

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }))
        console.log(data);
    }

    return (
        <>
            <div className="formBox formOutline" style={{width: "200px"}}>
                <form>
                    <input
                        type="text"
                        className="inlineBlock"
                        name="first"
                        value={first}
                        onChange={handleOnChange} />
                    <input
                        type="text"
                        className="inlineBlock"
                        name="last"
                        value={last}
                        onChange={handleOnChange} />
                    <input
                        type="phone"
                        className="inlineBlock"
                        name=" phone"
                        value={phone}
                        onChange={handleOnChange} />
                    <input
                        type="email"
                        className="inlineBlock"
                        name="email"
                        value={email}
                        onChange={handleOnChange} />
                </form>
            </div>
        </>
    )
}

export default Personal;