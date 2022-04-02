import "./Instance_List.scss"

function Instance_List({instance:{expansion,name,type,id}}){
    return(
        <li className="sort__instance" key={id}>
            <input className="sort__checkbox" type="checkbox" name="check__dungeon" /><label for="">{name}</label>
        </li>
    )
}

export default Instance_List;