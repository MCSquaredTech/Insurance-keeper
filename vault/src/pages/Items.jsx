import ItemsList from "../components/ItemsList"


function Items(data, setData, policyHolder, onClick, onSave, onEdit, onDelete) {
    const { first, last, policy, phone, email } = policyHolder

    return (
        <div>
        <div>
            <div>Policy Holder: {first} {last} </div>
            <div>Policy Number: {policy} </div>
            <div>Phone: {phone}  Email: {email} </div>
            <hr />
        </div>
        <div>
            <ItemsList data={data}
                    onClick={onClick} /> 
        </div>
        </div>
    )
}

export default Items;
