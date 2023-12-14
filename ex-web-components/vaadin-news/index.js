import "./news-article.js";

import { topHeadlinesUrl } from "./newsApi";

window.addEventListener("load", () => {
    fetchNews();
    registerSW();
});

async function fetchNews() {
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    const main = document.querySelector("main");

    json.articles.forEach(article => {
        const el = document.createElement("news-articles");
        el.article = article;
        main.appendChild(el);
    });
}

async function registerSW() {
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("./serviceWorker.js");
        } catch (e) {
            console.log("Service Worker registration failed");
        }
    }
}