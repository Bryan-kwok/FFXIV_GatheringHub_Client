import "./Instance_List.scss"

function Instance_List({instance:{expansion,name,type,id},checkValue}){

    return(
        <li className="sort__instance" key={id}>
            <input className="sort__checkbox" type="checkbox" name={`name__${name}`} onChange={checkValue}/><label for="">{name}</label>
        </li>
    )
}

export default Instance_List;