import React, {Component} from 'react';

import {Players} from './../api/players';

class AddPlayer extends Component {
    handleSubmit(e){
    let playerName = e.target.playerName.value;

    e.preventDefault();
    
    if (playerName) {
        Players.insert(
            {
                name: playerName,
                score: this.props.score,
            }
        );
        e.target.playerName.value = '';
    }
    }
    render() {
        return (
            <div className="item">
                {/*FLEX CONTAINER*/}
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    {/*FLEX ITEM*/}
                    <input className="form__input" type="text" name="playerName" placeholder="Player name..."/>
                    {/*FLEX ITEM*/}
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    };
};

export default AddPlayer;


