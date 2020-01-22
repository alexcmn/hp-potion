import React, { Component } from 'react';
import { connect } from 'react-redux'

class EditPotion extends Component {

    handleEdit = (e) =>{
        e.preventDefault();

        const newTitle = this.getTitle.value;
        const newDescription = this.getDescription.value;

        const data = {
            newTitle,
            newDescription
        }
        
        this.props.dispatch({type: 'UPDATE', id: this.props.potion.id, data: data})
    }

    render() { 
        return (
            <div key={this.props.potion.id} className="potion">
                <form className="form form2" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input} 
                        defaultValue={this.props.potion.title} placeholder="Unesite naslov napitka"/>
                    <br/><br/>
                    <textarea required rows="5" ref={(input) => this.getDescription = input}
                        defaultValue={this.props.potion.description} cols="28" placeholder="Unesite detalje, opis napitka"/>
                    <br/><br/>
                    <button>Uredi</button>
                </form>
            </div>
        );
    }
}
 
export default connect()(EditPotion);