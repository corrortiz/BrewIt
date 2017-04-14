import React from 'react';

const style = {
  margin: '10px'
};

export default ({text}) => {
    return (
        <div className="mdl-grid">
            <div style={style} className="mdl-card mdl-shadow--4dp mdl-card--border mdl-cell mdl-cell--12-col">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{text}</h2>
                </div>
            </div>
        </div>
    );
}