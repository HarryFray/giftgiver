import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifts: []
    }
  }

  addGift = () => {
    const { gifts } = this.state;

    const max_id = gifts.reduce((acc, cur) => {
      if (cur < acc) {
        return acc;
      }
    }, 0)

    gifts.push({ id: max_id + 1 })
    this.setState({ gifts })
  }

  createList = () => {
    return this.state.gifts.map(gift => {
      return <li>{gift.id}</li>
    })
  }


  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <ul className='gift-list' >
          {this.state.gifts.map(gift => {
            return <li key={gift.id}></li>
          })}
        </ul>
        <Button
          className='btn-add'
          onClick={this.addGift}>
          Add Gift</Button>
      </div>
    )
  }
}

export default App;