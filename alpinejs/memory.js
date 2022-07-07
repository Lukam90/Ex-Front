function flash(message) {
    window.dispatchEvent(new CustomEvent("flash", {
        detail: { message }
    }));
}

function game() {
    return {
        cards: [
            { color: 'green', flipped: false, cleared: false },
            { color: 'red', flipped: false, cleared: false },
            { color: 'blue', flipped: false, cleared: false },
            { color: 'yellow', flipped: false, cleared: false },
            { color: 'green', flipped: false, cleared: false },
            { color: 'red', flipped: false, cleared: false },
            { color: 'blue', flipped: false, cleared: false },
            { color: 'yellow', flipped: false, cleared: false },
        ],

        get flippedCards() {
            return this.cards.filter(card => card.flipped);
        },

        get clearedCards() {
            return this.cards.filter(card => card.cleared);
        },

        get remainingCards() {
            return this.cards.filter(card => ! card.cleared);
        },

        get points() {
            return this.clearedCards.length;
        },

        hasMatch() {
            return this.flippedCards[0]["color"] === this.flippedCards[1]["color"];
        },

        flipCard(card) {
            if (this.flippedCards.length === 2) {
                return;
            }

            card.flipped = ! card.flipped;

            if (this.flippedCards.length === 2) {
                if (this.hasMatch()) {
                    flash("You found a match !");

                    this.flippedCards.forEach(card => card.cleared = true);

                    if (! this.remainingCards.length) {
                        alert("You win !");
                    }
                }

                this.flippedCards.forEach(card => card.flipped = false);
            }
        }
    }
}