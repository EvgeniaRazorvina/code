import React from "react";
import { Button } from "react-bootstrap";
import './elementListStyles.css'; 

type ElementListProps = {
    source: string;
    name?: string;
    userTag?: string;
    department?: string;
}
const ElementList:React.FC<ElementListProps> = props => {
    
    
    return(
        <Button className="button">
            <img src={props.source} className='img'/>
            <div className="containerText">
                <div className="containerNameUserTag">
                    <p className="pName">{props.name}</p>
                    <p className="pUserTag">{props.userTag}</p>
                </div>
                <p className="pDepartment">{props.department}</p>
            </div>
            

        </Button>
    )
}

export default ElementList;