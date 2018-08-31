/**
 * Created by John on 8/30/2018.
 */
import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const GREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients : {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        };
    }

    updatePurchaseSate = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
               return ingredients[igKey]
            })
            .reduce((sum, el) => {
                sum += el;
                return sum;
            }, 0);
        this.setState({purchaseable: sum > 0});

    }

    addIngredientHandler = (type) => {
        this.updateGredients(type, 1);
    }

    removeIngredientHandler = (type) => {
        this.updateGredients(type, -1);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    updateGredients = (type, factor) => {
        let newCount = this.state.ingredients[type] + factor*1;
        newCount = newCount > 0 ? newCount:0;
        //update state in immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice + factor*GREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseSate(updatedIngredients);
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxs>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Auxs>
        );
    }
}

export default BurgerBuilder;