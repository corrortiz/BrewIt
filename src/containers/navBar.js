import React, {Component} from "react";
import {connect} from 'react-redux';
import { setlocale, localSelector } from '../action/index';

import {brewItRant, brewItSecondRant, link} from '../assets/traducction';

import ImageFond from '../assets/Images/b1-s.jpg';
import p1 from '../assets/Images/p1.jpg';
import p2 from '../assets/Images/p2.jpg';


class NavBar extends Component{
     constructor(props) {
         super(props);
         this.state={
             local: 'English'
         };
     }

     onChange(e){
         const value = e.target.innerText;
         console.log(value);
         this.setState({local:value});
         this.props.setlocale(value);
     }

     render(){
         return (
             <div>
                 <header>

                     <div className="navbar-fixed">
                         <nav className="black">
                             <div className="container nav-content">
                                 <ul className="tabs tabs-transparent tabs-fixed-width">
                                     <li className="tab">
                                         <a className="mdl-navigation__link is-active" onClick={(e)=>this.onChange(e)}>ENGLISH</a>
                                     </li>
                                     <li className="tab">
                                         <a className="mdl-navigation__link" onClick={(e)=>this.onChange(e)}>ESPAÑOL</a>
                                     </li>
                                     <li className="tab">
                                         <a className="mdl-navigation__link" onClick={(e)=>this.onChange(e)}>FRANÇAIS</a>
                                     </li>
                                 </ul>
                             </div>
                         </nav>
                     </div>

                 </header>

                 <main className="container">

                     <div className="row">
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-title">
                                     <h1 className="center-align">BREW IT!</h1>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row">
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-image">
                                     <img className="responsive-img" src={ImageFond} />
                                 </div>
                                 <div className="card-content">
                                     <p className="flow-text">{localSelector(this.props.local, brewItRant)}</p>
                                 </div>
                                 <div className="card-action">
                                     <p className="flow-text">{localSelector(this.props.local, brewItSecondRant)}</p>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row">
                         <div className="col s12 m12 l6">
                             <div className="card large">
                                 <div className="card-image">
                                     <img className="responsive-img materialboxed" src={p1} />
                                 </div>
                                 <div className="card-content">
                                     <p className="flow-text">Veux-Tu une bière?</p>
                                     <p className="flow-text">372 De Liège Est, Montréal, QC</p>
                                     <p className="flow-text">514 871-2771 </p>
                                     <a className="flow-text" href="http://veuxtuunebiere.com" target="_blank">
                                         {localSelector(this.props.local, link)}
                                     </a>
                                 </div>
                             </div>
                         </div>

                         <div className="col s12 m12 l6">
                             <div className="card large">
                                 <div className="card-image">
                                     <img className="responsive-img materialboxed" src={p2} />
                                 </div>
                                 <div className="card-stacked">
                                     <div className="card-content">
                                         <p className="flow-text">LOCO Épicerie écologique zero déchet</p>
                                         <p className="flow-text">422 Jarry Est, Montréal, QC</p>
                                         <p className="flow-text">(438) 386-7345</p>
                                         <a className="flow-text" href="https://www.epicerieloco.ca/nous-trouver/" target="_blank">
                                             {localSelector(this.props.local, link)}
                                         </a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </main>

             </div>
         );
     }
}

function mapStateToProps(state) {
    return {local: state.local}
}

export default connect(mapStateToProps, {setlocale, localSelector} )(NavBar);