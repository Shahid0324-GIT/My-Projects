import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onBananaClick = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onMangoClick = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state
    return (
      <div className="container">
        <div className="cardContainer">
          <h1 className="head">
            Bob ate <span className="mango">{mangoCount}</span> mangoes and
            <span className="banana"> {bananaCount}</span> bananas!
          </h1>
          <div className="countContainer">
            <div className="imageButton">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onMangoClick}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="imageButton">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onBananaClick}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
