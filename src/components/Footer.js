import React, { Component } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export default class ContactFormComponent extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventEmail = this.eventEmail.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
    };
  }

  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value });
  }

  eventEmail(event) {
    this.setState({ email: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem('contact_form'));

    if (localStorage.getItem('contact_form')) {
      this.setState({
        name: this.DATA.name,
        email: this.DATA.email,
      });
    } else {
      this.setState({
        name: '',
        email: '',
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contact_form', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className='footer-container'>
        <section className="footer-subscription">
          <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form onSubmit={this.onFormSubmit}>
              
                <input
                  name='name'
                  type="text"
                  placeholder='Your Name'
                  className="footer-input"
                  value={this.state.name}
                  onChange={this.eventName}
                />

                <input
                  name='email'
                  type="email"
                  className="footer-input"
                  placeholder='Your Email'
                  value={this.state.email}
                  onChange={this.eventEmail}
                />
                <Button
                  buttonStyle='btn--outline'
                  type="submit"
                >Subscribe
                </Button>
            </form>
          </div>
        </section>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                TREVit
                <i class="fab fa-typo3" />
              </Link>
            </div>
            <small class="website-rights">TREVit © 2021</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}