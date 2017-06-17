import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calcPlayerPositions} from './../imports/api/players';
import App from './../imports/ui/app';

Meteor.startup(function () {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort:{ score: -1 }}).fetch();
        let title = 'Score Board';
        let playerPosition = calcPlayerPositions(players);
        ReactDOM.render(<App title={title} players={playerPosition}/>, document.querySelector('#app'));
    });
});


