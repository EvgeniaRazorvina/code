import React, { useEffect, useState } from 'react';
import { Button, Form, FormControlProps, InputGroup, Tab, Tabs} from 'react-bootstrap';
import { User } from '../data/types';
import ElementList from './ElementList';
import InputGroupElement from './InputGroupElement';
import './topAppBarStyles.css'; 
const search = require('../images/searchIcon.png');
const sortIcon = require('../images/sortIcon.png');

/*type InputGroupElementProps = {
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
}*/

type TabTopPanelProps = {
    items: Array<User>;
    selectedIndex?: number;
    onTabChange: (index: number) => void;
    
};
const TabTopPanel: React.FC<TabTopPanelProps> = (props) => {
    const [tabIndex, setTabIndex] = useState(props.selectedIndex ?? -1);
    const currentIndex = props.selectedIndex ?? tabIndex;
    return (
        <div className='tabsContainer'>
        <Button
            className={currentIndex === -1 ? 'activeTab' : "inactiveTab"}
            onClick={() => {
                setTabIndex(-1);
                props.onTabChange(-1);
            }}
        > Все
        </Button>
        {props.items.map((item, index) => (
            <Button
                className={currentIndex === index ? 'activeTab' : "inactiveTab"} 
                key={`item${index}`}
                onClick={() => {
                    setTabIndex(index);
                    props.onTabChange(index);
                }}
            >
                {item.department}
            </Button>
        ))}
        </div>
    )
}


const arrDepartments = ['Android', 'iOS','Дизайн','Менеджмент','QA','Бэк-офис','Frontend','HR','PR','Backend', 'Техподдержка','Аналитика'];

const TopAppBar = () => {
    const [users, setUsers] = useState<Array<User>>([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [text, setText] = useState('');
    
    const load = async () => {
        try{
            const response = await fetch  ("https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all", 
            {
            method: 'GET',    
            headers: { "Content-Type": "application/json" }
            });
            const dataRes = await response.json();
            setUsers(dataRes.items);

        } catch(error) {
            console.error(error);
        }
    };
    console.log(users);

    useEffect(() => {
        load();
    }, [])
     return(
        <>
        <InputGroupElement 
            value={text} 
            onChange={(e) => {
                e.preventDefault(); // prevent the default action
                setText(e.target.value); // set name to e.target.value (event)
            }}
        />

        <TabTopPanel 
            items={users}                         
            onTabChange={index => {
                setTabIndex(index);
            }}
        />
        <div className='underline'></div>
            {users.map(((el,index) => (
                <ElementList
                    key={`el${index}`}
                    source={el.avatarUrl}
                    name={el.firstName + " " + el.lastName}
                    userTag={el.userTag}
                    department={el.department}
                />
            )))}
        </>
    )

};

export default TopAppBar;
