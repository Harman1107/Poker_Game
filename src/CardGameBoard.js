import React, { Component } from 'react'
import { createDeckAndDraw } from './api';

import ButtonsTab from './ButtonsTab';

function onButtonClick() {
    console.log('button was clicked')
}

export default class CardGameBoard extends Component {
    state = {
        cardImageUrl: null,
        cardValue: null,
        deckId: null
    }

    async componentDidMount() {
        const { deckId, value, image } = await createDeckAndDraw();
        this.setState({
            deckId,
            cardValue: value,
            cardImageUrl: image
        })
    }

    onButtonClick = async (event) => {
        const {name : bet} = event.target;
        const {deckId, value:previousValue} = this.state

        await drawCardfromDeck(deckId)
    }

    render() {
        return (
            <div>
                <img src={this.state.cardImageUrl} alt="This is the first card" />
                <ButtonsTab onButtonClick={this.onButtonClick} />
            </div>
        )
    }
}

