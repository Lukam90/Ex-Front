const { html } = require("common-tags");

function Card({ title, link, linkText, raised }) {
    return html`
        <div className="card__container">
            <h2 className="card__title">${title}</h2>

            <a href="card__link" href="${link}">${linkText}</a>
        </div>
    `;
}

module.exports = Card;