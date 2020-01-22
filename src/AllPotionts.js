import React, { Component } from 'react';
import { connect } from 'react-redux';

import Potion from './Potion';
import EditPotion from './editPotion';

class AllPotionts extends Component {
    
    render() { 
        return (
            <div className="potion-container">
                <h5 className="all-potion-heading">Svi napitci</h5>
                {/* {
                    this.props.potions.map((potion) => <Potion key={potion.id} potion={potion} />)
                } */}
                {   this.props.potions.map((potion) => (
                    <div key={potion.id}>
                        {   potion.editing ? <EditPotion potion={potion} key={potion.id} />:
                            <Potion key={potion.id} potion={potion}/>
                        }
                    </div>
                ))

                }
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        potions: state
    }
}
 
export default connect(mapStateToProps)(AllPotionts);