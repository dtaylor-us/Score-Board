import React, {Component} from 'react';

import TitleBar from './title_bar';
import AddPlayer from './add_player';
import PlayerList from './players_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title}/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer score={0}/>
                </div>
            </div>
        );
    };
}