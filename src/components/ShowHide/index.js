// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isActiveFirstName: false, isActiveLastName: false}

  onChangeFirstName = () => {
    this.setState(previous => ({
      isActiveFirstName: !previous.isActiveFirstName,
    }))
  }

  onChangeLastName = () => {
    this.setState(previous => ({isActiveLastName: !previous.isActiveLastName}))
  }

  render() {
    const {isActiveFirstName, isActiveLastName} = this.state
    const firstName = isActiveFirstName ? 'Joe' : ''
    const lastName = isActiveLastName ? 'Jonas' : ''

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="name-container">
            <div className="first-name-container">
              <button
                type="button"
                className="first-name"
                onClick={this.onChangeFirstName}
              >
                Show/Hide FirstName
              </button>
              {isActiveFirstName && (
                <p className="lastName-container">{firstName}</p>
              )}
            </div>
            <div className="first-name-container">
              <button
                type="button"
                className="first-name"
                onClick={this.onChangeLastName}
              >
                Show/Hide LastName
              </button>
              {isActiveLastName && (
                <p className="lastName-container">{lastName}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
