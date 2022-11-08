import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const search = require('../images/searchIcon.png');
const sortIcon = require('../images/sortIcon.png');

type InputGroupElementProps = {
    onChange: (event: any) => void;
    value: string;
}

const InputGroupElement: React.FC<InputGroupElementProps> = props => {
    return (
        <InputGroup className="inputGroup">
            <img className="search" src={search} />
            <Form.Control
                className="formControl"
                placeholder="Ведите имя, тег, почту..."
                onChange={props.onChange}
                value={props.value}
            />
            <Button className="buttonSort">
                <img className="sortIcon" src={sortIcon} />
            </Button>
        </InputGroup>
    );
}

export default InputGroupElement;