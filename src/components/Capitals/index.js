import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {isCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({isCapital: event.target.value})
  }

  getCountry = isCapital => {
    const result = countryAndCapitalsList.find(
      eachObj => eachObj.id === isCapital,
    )

    return result.country
  }

  render() {
    const {isCapital} = this.state
    const country = this.getCountry(isCapital)

    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1>Countries And Capitals</h1>
          <div className="dropDown">
            <select onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachCapitial => (
                <option value={eachCapitial.id} key={eachCapitial.id}>
                  {eachCapitial.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>

          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
