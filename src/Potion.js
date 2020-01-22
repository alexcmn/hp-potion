import React, { Component } from 'react';
import { connect } from 'react-redux';

class Potion extends Component {
    
    render() { 
        return (
            <div className="potion">
                <h2 className="potion-title">{this.props.potion.title}</h2>
                <p className="potion-description">{this.props.potion.description}</p>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({type: 'EDIT_POTION', id: this.props.potion.id})}>
                        Uredi
                    </button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({type: 'DELETE_POTION', id: this.props.potion.id})}>
                            Izbriši
                    </button>
                </div>
            </div>
        );
    }
}
 
export default connect()(Potion);