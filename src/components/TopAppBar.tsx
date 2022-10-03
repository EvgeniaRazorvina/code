import React from 'react';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './topAppBarStyles.css';
const search = require('../images/searchIcon.png');
const sortIcon = require('../images/sortIcon.png');

type TopAppBarProps = {
    onChange: () => void;
}

const TopAppBar: React.FC<TopAppBarProps> = props => {
    return (
        <InputGroup className="inputGroup">
            <Button className="buttonSearch" onChange={props.onChange}>
                <img className="search" src={search} />
            </Button>
            <Form.Control
                className="formControl"
                placeholder="Ведите имя, тег, почту..."
            />
            <Button className="buttonSort" onChange={props.onChange}>
                <img className="sortIcon" src={sortIcon} />
            </Button>
        </InputGroup>
    );
};

export default TopAppBar;
