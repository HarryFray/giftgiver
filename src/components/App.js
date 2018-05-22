import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifts: []
    }
  }

  addGift = () => {
    const { gifts } = this.state;

    const max = gifts.reduce((acc, cur) => {
      if (cur.id > acc.id) {
        return cur;
      }
      return acc;
    }, { id: 0 })

    gifts.push({ id: max.id + 1 })
    this.setState({ gifts })
  }

  removeGift = (id) => {
    this.setState({
      gifts: this.state.gifts.filter(gift => gift.id !== id)
    })
  }


  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list' >
          {this.state.gifts.map(gift => {
            return <Gift
              key={gift.id}
              gift={gift}
              removeGift={this.removeGift.bind(this)}>
            </Gift>
          })}
        </div>
        <Button
          className='btn-add'
          onClick={this.addGift}>
          Add Gift</Button>
      </div>
    )
  }
}

export default App;