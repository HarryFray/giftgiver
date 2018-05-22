import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

class Gift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      person: '',
      present: ''
    }
  }

  render(props) {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              onChange={event => this.setState({ person: event.target.value })}
              className='input-person'>
            </FormControl>
            <ControlLabel>Gift</ControlLabel>
            <FormControl
              onChange={event => this.setState({ present: event.target.value })}
              className='input-present'>
            </FormControl>
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          onClick={() => this.props.removeGift(this.props.gift.id)}>
          Remove Gift</Button>
      </div>
    )
  }
}

export default Gift;