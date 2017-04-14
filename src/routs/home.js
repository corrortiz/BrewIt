import React, {Component} from 'react';
import Heder from '../componets/heder';

import {connect} from 'react-redux'

import {localSelector} from '../action/index';

import {home} from '../assets/traducction';


class Home extends Component {

    render(){
        return (
            <div>
                <Heder text={localSelector(this.props.local, home)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {local: state.local}
}

export default connect(mapStateToProps, {localSelector})(Home)