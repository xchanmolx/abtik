import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends Component {
  state = {
    id: 0,
    first_name: '',
    last_name: '',
    contact: '',
    date_of_birth: '',
    email: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        contact: this.state.contact,
        date_of_birth: this.state.date_of_birth,
        email: this.state.email,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/update', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        contact: this.state.contact,
        date_of_birth: this.state.date_of_birth,
        email: this.state.email,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, first_name, last_name, contact, date_of_birth, email} = this.props.item
      this.setState({ id, first_name, last_name, contact, date_of_birth, email})
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input type="text" name="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name === null ? '' : this.state.last_name}  />
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact #</Label>
          <Input type="text" name="contact" id="contact" onChange={this.onChange} value={this.state.contact === null ? '' : this.state.contact}   placeholder="ex. 0916-360-9855" />
        </FormGroup>
        <FormGroup>
          <Label for="date_of_birth">Birth Date</Label>
          <Input type="text" name="date_of_birth" id="date_of_birth" onChange={this.onChange} value={this.state.date_of_birth === null ? '' : this.state.date_of_birth} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm;