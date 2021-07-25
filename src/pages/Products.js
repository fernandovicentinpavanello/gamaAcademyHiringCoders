import React, { Component } from 'react';
import '../App.css';

export default class Products extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventDescription = this.eventDescription.bind(this);
    this.eventEspecification = this.eventEspecification.bind(this);
    this.eventCategory = this.eventCategory.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      especification: '',
      category: ''
    };
  }

  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value });
  }

  eventDescription(event) {
    this.setState({ description: event.target.value });
  }

  eventEspecification(event) {
    this.setState({ especification: event.target.value });
  }

  eventCategory(event) {
    this.setState({ category: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem('product_form'));

    if (localStorage.getItem('product_form')) {
      this.setState({
        name: this.DATA.name,
        description: this.DATA.email,
        especification: this.DATA.doc,
        category: this.DATA.address,
      });
    } else {
      this.setState({
        name: '',
        description: '',
        especification: '',
        category: ''
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contact_form', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="products">
        <h1>Produtos</h1>
        <div>
          <form id="formProduct" onSubmit={this.onFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome do produto"
              value={this.state.name}
              onChange={this.eventName}
            />
            <input
              type="text"
              name="description"
              placeholder="Descrição do produto"
              required
              value={this.state.name}
              onChange={this.eventDescription}
            />
            <input
              type="text"
              name="especification"
              placeholder="Especificações técnicas"
              value={this.state.name}
              onChange={this.eventEspecification}
            />
            <input
              type="text"
              name="category"
              placeholder="Categorização"
              value={this.state.name}
              onChange={this.eventCategory}
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
