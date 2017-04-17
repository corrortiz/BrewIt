import React, {Component} from "react";
import {connect} from 'react-redux';
import { setlocale, localSelector } from '../action/index';

import {brewItRant, brewItSecondRant, link, youCanFindUsAt, ourProducts, contactanos} from '../assets/traducction';

import ImageFond from '../assets/Images/b1-s.jpg';
import p1 from '../assets/Images/p1.jpg';
import p2 from '../assets/Images/p2.jpg';
import logo from '../assets/Images/logo.jpg';

import b2 from '../assets/Images/b2.jpg';
import b3 from '../assets/Images/b3.jpg';
import b4 from '../assets/Images/b4.jpg';
import b5 from '../assets/Images/b5.jpg';
import b6 from '../assets/Images/b6.jpg';
import b7 from '../assets/Images/b7.jpg';
import b8 from '../assets/Images/b8.jpg';


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
                         <div className="col s12 m12 l12 center-align">
                             <img className="circle imagePosition"  width="120" src={logo} alt="logo" />
                         </div>
                     </div>

                     <div className="row">
                         <div className="col s12 m12 l12 center-align">
                             <h1 className="titulo">BREW IT!</h1>
                         </div>
                     </div>



                     <div className="row">
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-image">
                                     <img className="responsive-img" src={ImageFond} alt="tres filtros"/>
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
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-title">
                                     <h5 className="center-align titulo">{localSelector(this.props.local, ourProducts)}</h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row center-align">
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"  src={b5} alt="logo5" />
                         </div>
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"  src={b3} alt="logo3" />
                         </div>
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"   src={b6} alt="logo6" />
                         </div>
                     </div>

                     <div className="row center-align">
                         <div className="col s12 m12 l12">
                             <img className="z-depth-4 responsive-img materialboxed"  src={b2} alt="logo2" />
                         </div>
                     </div>

                     <div className="row center-align">
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"  src={b7} alt="logo7" />
                         </div>
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"   src={b8} alt="logo8" />
                         </div>
                         <div className="col s12 m4 l4">
                             <img className="z-depth-4 responsive-img materialboxed"  src={b4} alt="logo4" />
                         </div>
                     </div>

                     <div className="row">
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-title">
                                     <h5 className="center-align titulo">{localSelector(this.props.local, youCanFindUsAt)}</h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row">
                         <div className="col s12 m12 l6">
                             <div className="card large">
                                 <div className="card-image">
                                     <img className="responsive-img materialboxed" src={p1} alt="veux logo"/>
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
                                     <img className="responsive-img materialboxed" src={p2} alt="LOCO logo"/>
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

                     <div className="row">
                         <div className="col s12 m12 l12">
                             <div className="card">
                                 <div className="card-title">
                                     <h5 className="center-align titulo">{localSelector(this.props.local, contactanos)}</h5>
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="row center-align">
                         <div className="col s12 m4 l4">
                             <a className="black-text" href="mailto:brewitfilters@gmail.com?Subject=Kiri" target="_top">
                                 <i className="material-icons large">contact_phone</i>
                             </a>
                         </div>
                         <div className="col s12 m4 l4">
                             <a className="black-text" href="http://instagram.com/brewitfilters" target="_blank">
                                 <i className="material-icons large">add_a_photo</i>
                             </a>
                         </div>
                         <div className="col s12 m4 l4">
                             <a className="black-text" href="tel:+14385028481" target="_top">
                                 <i className="material-icons large">call</i>
                             </a>
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