import React, { Component } from 'react';
import '../App.css';

export default class Clients extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventEmail = this.eventEmail.bind(this);
    this.eventDoc = this.eventDoc.bind(this);
    this.eventAddress = this.eventAddress.bind(this);
    this.eventNumber = this.eventNumber.bind(this);
    this.eventComplement = this.eventComplement.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      doc: '',
      address: '',
      number: '',
      complemet: '',
    };
  }

  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value });
  }

  eventEmail(event) {
    this.setState({ email: event.target.value });
  }

  eventDoc(event) {
    this.setState({ doc: event.target.value });
  }

  eventAddress(event) {
    this.setState({ address: event.target.value });
  }

  eventNumber(event) {
    this.setState({ number: event.target.value });
  }

  eventComplement(event) {
    this.setState({ complement: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem('client_form'));

    if (localStorage.getItem('client_form')) {
      this.setState({
        name: this.DATA.name,
        email: this.DATA.email,
        doc: this.DATA.doc,
        address: this.DATA.address,
        number: this.DATA.number,
        complemet: this.DATA.complemet,
      });
    } else {
      this.setState({
        name: '',
        email: '',
        doc: '',
        address: '',
        number: '',
        complemet: '',
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contact_form', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="clients">
        <h1>Clientes</h1>
        <div className="input-areas">
          <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome Completo"
              className="footer-input"
              value={this.state.name}
              onChange={this.eventName}
            />
            <input
              type="email"
              name="email"
              placeholder="meuemail@email.com.br"
              className="footer-input"
              value={this.state.email}
              onChange={this.eventEmail}
            />
            <input
              type="text"
              name="doc"
              placeholder="000.000.000-00"
              className="footer-input"
              value={this.state.doc}
              onChange={this.eventDoc}
            />
            <input
              type="text"
              name="address"
              placeholder="Endereço Completo"
              className="footer-input"
              value={this.state.address}
              onChange={this.eventAddress}
            />
            <input
              type="number"
              name="number"
              placeholder="Número"
              className="footer-input"
              value={this.state.number}
              onChange={this.eventNumber}
            />
            <input
              type="text"
              name="complement"
              placeholder="Complemento"
              className="footer-input"
              value={this.state.complement}
              onChange={this.eventComplement}
            />
          </form>
          <button type="submit" className="btnIn">
            Cadastrar
          </button>
        </div>
      </div>
    );
  }
}
