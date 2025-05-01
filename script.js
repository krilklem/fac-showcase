"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
    const frame = document.querySelector("#frame");
    const frame_title = document.querySelector("#frame-title");

    menu.addEventListener("click", (event) => {
        let target = event.target.id;
        switch ( target ) {
            case "about":
                frame.src = "./about.html";
                frame_title.textContent = "About me.txt";
                break;
            case "webdev":
                frame.src = "./webdev.html";
                frame_title.textContent = "Web dev.txt";
                break;
            case "links":
                frame.src = "./links.html";
                frame_title.textContent = "Links.txt";
                break;
        }
    });
});