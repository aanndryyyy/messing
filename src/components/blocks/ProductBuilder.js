import React, {Component} from 'react';

import './styles/ProductBuilder.css'

export default class ProductBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      series: 'premium',
      color: 'white',
      displayErrors: false,
      status: false
    };

    this.handleSeriesChange = this.handleSeriesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });

    let data = new FormData(event.target);
    let object = {};

    data.forEach(function(value, key) {
      object[key] = value;
    });

    let body = JSON.stringify(object);

    fetch('http://messing.pedak.me/form.php', {
      method: 'post',
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    this.setState({ status: true });
  }

  handleSeriesChange(event) {
    this.setState({series: event.target.value});
  }

  render() {
    const colorSelect = this.state.series === 'premium' 
      ? <React.Fragment>
          <label htmlFor="color">Wiring color</label>
          <select id="color" name="color" required>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
          </select>
        </React.Fragment>
      : null;

    return (
      <div className={`form-wrap ${this.state.status ? 'sent' : ''}`}>

        <form onSubmit={this.handleSubmit} className={this.state.displayErrors ? 'displayErrors' : ''} noValidate>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="series">Choose your Series</label>
          <select id="series" name="series" value={this.state.series} onChange={this.handleSeriesChange} required>
            <option value="premium">Colt Premium Series</option>
            <option value="colt">Colt Series</option>
            <option disabled value="soviet">Soviet Series</option>
          </select>

          {colorSelect}

          <input type="submit" value="Send Reservation" />
        </form>

        <p className="success">Your reservation has been sent.<br />We will get back to you with the details shortly!</p>

      </div>
    );
  }
}
