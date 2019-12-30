import React, { Component } from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import classes from './Responder.module.css'
import ModalForm from '../ModalForm/Modal';
import DataTable from '../Tables/DataTable';
// import { CSVLink } from 'react-csv';

class Responder extends Component {
    state = {
        items: []
    }

getItems(){
    fetch('http://localhost:3000/responders')
        .then(response => response.json())
        .then(items => this.setState({items}))
        .catch(err => console.log(err))
}

addItemToState = (item) => {
    this.setState(prevState => ({
        items: [...prevState.items, item]
    }));
}
    
updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id);
    const newArray = [
    // destructure all items from beginning to the indexed item
        ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
        item,
    // add the rest of the items to the array from the index after the replaced item
        ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray });
}
    
deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
}
    
componentDidMount() {
    this.getItems();
}
    
    render () {
        return (
            <Container className={classes.Responder}>
                <Row>
                    <Col>
                        <h1 style={{margin: "20px 0"}}>Responders</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <CSVLink>
                            filename={"db.csv"}
                            color="primary"
                            style={{float: "left", marginRight: "10px"}}
                            className="btn btn-primary"
                            data={this.state.items}>
                            Download CSV
                        </CSVLink> */}
                        <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Responder;