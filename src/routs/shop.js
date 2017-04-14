import React, {Component} from 'react';
import Heder from '../componets/heder';

import {connect} from 'react-redux'

import {localSelector} from '../action/index';

import {shop} from '../assets/traducction';


class Shop extends Component {

    render(){
        return (
            <div>
                <Heder text={localSelector(this.props.local, shop)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {local: state.local}
}

export default connect(mapStateToProps, {localSelector})(Shop)