import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class AddressAutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: this.props.address || 'home address..'
    }

    const myStyles = {
      input: {
        padding: '0',
        height: this.props.height
       },
    }

    return (
      <PlacesAutocomplete inputProps={inputProps} styles={myStyles}/>
    )
  }
}

export default AddressAutoComplete;
