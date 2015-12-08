"use strict";

/*
 * Module dependenciee
 */

import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';

export default class PokeApp extends React.Component {
  constructor ( props ) {
    super ( props );
    this.state    = { messages: [] };
    this.onGrowl  = this.onGrowl.bind( this );
    this.pokemons = [
      { number: 1, name: 'Bulbasaur' },
      { number: 2, name: 'Ivysaur' },
      { number: 3, name: 'Venusaur' }
    ];
  }
  onGrowl ( name ) {
    let text      = `${name}, ${name}`;
    let uid       = uid( );
    this.state.messages.push( { id: uid, text: text } );
    let messages  = this.state.messages;
    this.setState ( { messages: messages } );
  }
  render () {
    return <div className="pokeapp">
      <PokeTable pokemons={ this.pokemons } onGrowl={ this.onGrowl } />
      <PokeChat messages={ this.state.messages } />
    </div>
  }
}