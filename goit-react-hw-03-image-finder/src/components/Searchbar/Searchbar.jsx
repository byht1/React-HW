import React, { Component } from 'react';
import { MdImageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Form, Header, Span, Input, Button } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    string: '',
  };

  findPhoto = event => {
    event.preventDefault();
    if (this.state.string === '') {
      return;
    }

    this.props.onClick(this.state.string);
    this.setState({ string: '' });
  };

  onChange = event => {
    this.setState({ string: event.target.value });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.findPhoto}>
          <Button type="submit">
            <MdImageSearch size={30} />
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.string}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
