import React from 'react';
import {Link} from 'react-router';

import { localSelector } from '../action/index';
import {shop, home, account, cart} from '../assets/traducction';

export default ({local}) => {
    return (
        <div className="demo-drawer mdl-layout__drawer mdl-color--blue-400 mdl-color-text--grey-100">
            <header className="demo-drawer-header">
                <h3>Akari</h3>
            </header>

            <nav className="demo-navigation mdl-navigation mdl-color--light-green-100">
                <Link className="mdl-navigation__link" to="/">
                    <i className="mdl-color-text--grey-400 material-icons" role="presentation">home</i>
                    {localSelector(local, home)}
                </Link>
                <Link className="mdl-navigation__link" to='shop'>
                    <i className="mdl-color-text--grey-400 material-icons" role="presentation">shop_two</i>
                    {localSelector(local, shop)}
                </Link>
                <Link className="mdl-navigation__link" to="account">
                    <i className="mdl-color-text--grey-400 material-icons" role="presentation">account_box</i>
                    {localSelector(local, account)}
                </Link>
                <Link className="mdl-navigation__link" to="cart">
                    <i className="mdl-color-text--grey-400 material-icons" role="presentation">shopping_cart</i>
                    {localSelector(local, cart)}
                </Link>
                <div className="mdl-layout-spacer"></div>
                <a className="mdl-navigation__link">
                    <i className="mdl-color-text--blue-grey-100 material-icons" role="presentation">help_outline</i>
                    <span className="visuallyhidden">Help</span>
                </a>
            </nav>
        </div>
    );
}