// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    Heads: 0,
    Tails: 0,
    Total: 0,
    HeadsOrTails: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  updateTails = () => {
    /* eslint-disable no-unused-vars */
    const {HeadsOrTails, Tails} = this.state
    /* eslint-disable no-unused-vars */
    this.setState(prevState => ({
      Tails: prevState.Tails + 1,
      HeadsOrTails: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    }))
  }

  updateHeads = () => {
    const {Heads} = this.state
    this.setState(prevState => ({Heads: prevState.Heads + 1}))
  }

  onClickButton = () => {
    const {Total} = this.state
    this.setState(prevState => ({Total: prevState.Total + 1}))
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult !== 0) {
      this.updateTails()
    }
    this.updateHeads()
  }

  render() {
    const {Heads, Tails, HeadsOrTails, Total} = this.state

    return (
      <div className="cointoss-page">
        <div className="inner-division">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={HeadsOrTails} alt="toss result" className="image" />
          <br />
          <button
            type="button"
            onClick={this.onClickButton}
            className="buttonEle"
          >
            Toss Coin
          </button>
          <br />
          <br />
          <div className="results">
            <p className="parag">Total:{Total}</p>
            <p className="parag">heads:{Heads}</p>
            <p className="parag">Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
