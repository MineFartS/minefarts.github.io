
/**
 * @typedef {Object} Link
 * @property {string} title
 * @property {string} icon
 * @property {string} user
 * @property {string} link
 */

const entry_table = document.getElementsByClassName("mt-24")[0]

/** @param {Link[]} links */
function main(links) {
    for (let l of links) {
        entry_table.insertAdjacentHTML("beforeend", `
            <div class="page-item-wrap relative">
            <div class="page-item flex-both-center absolute"></div>
            <a target="_blank" class="page-item-each py-10 flex-both-center" href="${l.link}" data-id="261652" data-type="page_item">
                <img class="link-each-image" data-src="assets/images/${l.icon}" src="assets/images/${l.icon}" alt="${l.title} @ ${l.user}"/>
                <span class="item-title text-center">${l.title} @ ${l.user}</span>
            </a>
            </div>
        `);
    }
}

fetch("./links.json")
    .then((t) => t.json())
    .then(main);

