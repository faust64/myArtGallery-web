/* * menu * */
function showTop() {
    var elt = document.getElementById('menutop');
    elt.innerHTML = "<div id='menuitem'>Top Artist</div>"
		  + "<div id='menuitem'>Top Artwork</div>";
}

function hideTop() {
    var elt = document.getElementById('menutop');
    elt.innerHTML = "Top";
}

function showEvent() {
    var elt = document.getElementById('menuevent');
    elt.innerHTML = "<div id='menuitem'>Expositions</div>"
		  + "<div id='menuitem'>Auctions</div>";
}

function hideEvent() {
    var elt = document.getElementById('menuevent');
    elt.innerHTML = "Events";
}

function showPerso() {
    var elt = document.getElementById('menuperso');
    elt.innerHTML = "<div id='menuitem'>Wallet</div>"
		  + "<div id='menuitem'>Evaluate Artwork</div>"
		  + "<div id='menuitem'>Social Network</div>"
		  + "<div id='menuitem'>Shares</div>";
}

function hidePerso() {
    var elt = document.getElementById('menuperso');
    elt.innerHTML = "myArtGallery";
}
/* * menu * */
/* * backbone * */
function htmlEncode(value) {
    return $('<div/>').text(value).html();
}
/* * backbone * */
