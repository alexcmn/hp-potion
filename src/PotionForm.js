import React, { Component } from 'react';
import { connect } from 'react-redux';

class PotionForm extends Component {
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const description = this.getDescription.value;

        const data = {
            id: new Date(),
            title,
            description,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POTION',
            data
        })
        this.getTitle.value = '';
        this.getDescription.value = '';
    }

    render() { 
        return (
            <div className="potion-container">
                <h5 className="all-potion-heading">Unesite Vaš napitak u listu napitaka</h5>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input)=>this.getTitle = input}
                        placeholder="Unesite ime napitka"
                    />
                    <br/><br/>
                    <textarea required rows="5" cols="28" ref={(input)=>this.getDescription = input} 
                        placeholder="Unesite opis, dejstvo napitka"
                    />
                    <br/><br/>
                    <button>Dodaj</button>
                </form>
            </div>
        );
    }
}

export default connect()(PotionForm);