/**
 * Created by John on 8/30/2018.
 */
import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients : {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        };
    }

    render() {
        return (
            <Auxs>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls />
            </Auxs>
        );
    }
}

export default BurgerBuilder;