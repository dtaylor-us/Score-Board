import React, {Component} from 'react';

import Player from './player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add players below..</p>
                </div>
            );
        } else {
            return this
                .props
                .players
                .map(function (player) {
                    return (<Player key={player._id} player={player}/>);
                })
        };
    }
    render() {
        return (
            <FlipMove>
                {this.renderPlayers()}
            </FlipMove>
        );
    };
};