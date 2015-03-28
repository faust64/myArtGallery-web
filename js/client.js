/* * backbone * */
CORE_URL = 'http://localhost:8080';
RESULTS_PER_PAGE = 20;

if (CORE_URL != false) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
	    options.url = CORE_URL + options.url + '/';
	});
}

function htmlEncode(str) {
    return $('<div/>').text(str).html();
}

function htmlDecode(str) {
    return $('<div/>').html(str).text();
}

function asName(str) {
    return str.replace(/-/g, ' ');
}

function asDname(str) {
    return str.replace(/ /g, '-').toLowerCase();
}

function capitalize(str) {
    return str.replace(/\w\S*/g, function (txt) {
	    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
	if (o[this.name] !== undefined) {
	    if (!o[this.name].push) {
		o[this.name] = [o[this.name]];
	    }
	    o[this.name].push(this.value || '');
	} else {
	    o[this.name] = this.value || '';
	}
    });

    return o;
};

var ArtistSearch = Backbone.Model.extend({
	urlRoot: function() {
		return '/search/artists' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var ArtworkSearch = Backbone.Model.extend({
	urlRoot: function() {
		return '/search/artworks' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var ArtistTop = Backbone.Model.extend({
	urlRoot: function() {
		return '/top/artists' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var ArtworkTop = Backbone.Model.extend({
	urlRoot: function() {
		return '/top/artworks' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var Artists = Backbone.Collection.extend({
	url: function() {
		return '/artists' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var Artworks = Backbone.Collection.extend({
	url: function() {
		return '/artworks' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var Artist = Backbone.Model.extend({
	urlRoot: function() {
		return '/artists' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });
var Artwork = Backbone.Model.extend({
	urlRoot: function() {
		return '/artworks' + (this.page > 0
					? '/+' + (this.page * RESULTS_PER_PAGE)
					: '') + '/';
	    },
	    page: 0
    });

var SearchArtistView = Backbone.View.extend({
	el: '.artistsearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = "<label class='search'>Artist:&nbsp;&nbsp;&nbsp;"
			    + "<input type='text' id='searchartist_input' />"
			    + "<input type='button' id='searchartist_button' "
			    + "value='?' class='btn-search'></label>";
		this.$el.html(content);
	    },
	events: {
		"click input[type=button]": "doSearch",
		"keyup :input": "doSearch"
	    },
	doSearch: function(event) {
		router.navigate('#search/artists/'
				+ $("#searchartist_input").val() + '/',
				{ trigger: true });
	    }
    });

var SearchArtworkView = Backbone.View.extend({
	el: '.artworksearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = "<label class='search'>Artwork:&nbsp;&nbsp;&nbsp;"
			    + "<input type='text' id='searchartwork_input' />"
			    + "<input type='button' id='searchartwork_button' "
			    + "value='?' class='btn-search'></label>";
		this.$el.html(content);
	    },
	events: {
		"click input[type=button]": "doSearch",
		"keyup :input": "doSearch"
	    },
	doSearch: function(event) {
		router.navigate('#search/artworks/'
				+ $("#searchartwork_input").val() + '/',
				{ trigger: true });
	    }
    });

var ArtistList = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    if (id && id.dname) {
		that.artists = new ArtistSearch({ id: asDname(id.dname) });
		if (id.page) {
		    that.artists.page = id.page;
		}
		that.artists.fetch({
		    success: function (artist) {
			    content = "<div id='srch'><div id='leftsrch'>";
			    if (id.page && id.page > 0) {
				prev = Math.floor(id.page) - 1;
				content += "<a href=\"#search/artists/"
					+ id.dname + "/+" + prev + "\"><img "
					+ "src='./img/prev.png' "
					+ "alt='previous'/></a>";
			    }
			    content += "</div><div id='midsrch'><h1>Artists "
				    + "Search<h1/></div><div id='rightsrch'>"
			    if (artist['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
				content += "<a href=\"#search/artists/"
					+ id.dname + "/+" + next + "\"><img "
					+ "src='./img/next.png' alt='next'/>"
					+ "</a>";
			    }
			    content += "</div></div><p>";
			    for (var idx = 0; artist['attributes'][idx] &&
				idx < RESULTS_PER_PAGE; idx++) {
				dname = artist['attributes'][idx]['dname'];
				content += "<a href=\"#artists/" + dname
					+ "/\">" + capitalize(asName(dname))
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    } else if (id && id.topartist) {
		that.artists = new ArtistTop();
		if (id.page) {
		    that.artists.page = id.page;
		}
		that.artists.fetch({
		    success: function (artist) {
			    content = "<div id='srch'><div id='leftsrch'>";
			    if (id.page && id.page > 0) {
				prev = Math.floor(id.page) - 1;
				content += "<a href=\"#top/artists/+" + prev
					+ "\"><img src='./img/prev.png' "
					+ "alt='previous'/></a>";
			    }
			    content += "</div><div id='midsrch'><h1>Top "
				    + "Artists<h1/></div><div id='rightsrch'>"
			    if (artist['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
				content += "<a href=\"#top/artists/+" + next
					+ "\"><img src='./img/next.png' "
					+ "alt='next'/></a>";
			    }
			    content += "</div></div><p>";
			    for (var idx = 0; artist['attributes'][idx] &&
				idx < RESULTS_PER_PAGE; idx++) {
				who = artist['attributes'][idx];
				if (! who['lastname']) { continue; }
				content += "<a href=\"#artists/"
					+ who['id'] + "/\">";
				if (who['firstname']) {
				    content +=
					capitalize(asName(who['firstname']))
					+ ' ';
				}
				content += asName(who['lastname']).toUpperCase()
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    } else {
		artists = new Artists();
		artists.fetch({
		    success: function (artists) {
			    content = "<h1>Artists List<h1/><p>";
			    for (var idx = 0; idx < artists.models.length
				&& idx < RESULTS_PER_PAGE; idx++) {
				dname =
				    artists.models[idx]['attributes']['dname'];
				content += "<a href=\"#artists/" + dname
					+ "/\">" + capitalize(asName(dname))
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    }
	}
    });

var ArtworkList = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    if (id && id.dname) {
		that.artworks = new ArtworkSearch({ id: asDname(id.dname) });
		if (id.page) {
		    that.artworks.page = id.page;
		}
		that.artworks.fetch({
		    success: function (artwork) {
			    content = "<div id='srch'><div id='leftsrch'>";
			    if (id.page && id.page > 0) {
				prev = Math.floor(id.page) - 1;
				content += "<a href=\"#search/artworks/"
					+ id.dname + "/+" + prev + "\"><img "
					+ "src='./img/prev.png' "
					+ "alt='previous'/></a>";
			    }
			    content += "</div><div id='midsrch'><h1>Artworks "
				    + "Search<h1/></div><div id='rightsrch'>"
			    if (artwork['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
				content += "<a href=\"#search/artworks/"
					+ id.dname + "/+" + next + "\"><img "
					+ "src='./img/next.png' alt='next'/>"
					+ "</a>";
			    }
			    content += "</div></div><p>";
			    for (var idx = 0; artwork['attributes'][idx] &&
				idx < RESULTS_PER_PAGE; idx++) {
				dname = artwork['attributes'][idx]['dname'];
				content += "<a href=\"#artworks/" + dname
					+ "/\">" + capitalize(asName(dname))
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    } else if (id && id.topartwork) {
		that.artworks = new ArtworkTop();
		if (id.page) {
		    that.artworks.page = id.page;
		}
		that.artworks.fetch({
		    success: function (artwork) {
			    content = "<div id='srch'><div id='leftsrch'>";
			    if (id.page && id.page > 0) {
				prev = Math.floor(id.page) - 1;
				content += "<a href=\"#top/artworks/+" + prev
					+ "\"><img src='./img/prev.png' "
					+ "alt='previous'/></a>";
			    }
			    content += "</div><div id='midsrch'><h1>Top "
				    + "Artworks<h1/></div><div id='rightsrch'>"
			    if (artwork['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
				content += "<a href=\"#top/artworks/+" + next
					+ "\"><img src='./img/next.png' "
					+ "alt='next'/></a>";
			    }
			    content += "</div></div><p>";
			    for (var idx = 0; artwork['attributes'][idx] &&
				idx < RESULTS_PER_PAGE; idx++) {
				what = artwork['attributes'][idx];
				if (! what['title']) { continue; }
				content += "<a href=\"#artworks/"
					+ what['id'] + "/\">";
				content += capitalize(asName(what['title']))
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    } else {
		artworks = new Artworks();
		artworks.fetch({
		    success: function (artworks) {
			    content = "<h1>Artworks List<h1/><p>";
			    for (var idx = 0; idx < artworks.models.length
				&& idx < RESULTS_PER_PAGE; idx++) {
				dname =
				    artworks.models[idx]['attributes']['dname'];
				content += "<a href=\"#artworks/" + dname
					+ "/\">" + capitalize(asName(dname))
					+ "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    }
	}
    });

var ArtistView = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    that.artists = new Artist({id: id.dname});
	    that.artists.fetch({
		success: function (artist) {
			content = "<h1>";
			if (artist['attributes']['dname'] == "unknown artist") {
			    content += artist['attributes']['dname']
				    + "</h1></br>";
			} else {
			    attrs = artist['attributes']['0'];
console.log(attrs);
			    if (attrs['firstname']) {
				content += attrs['firstname'] + ' ';
			    }
			    content += attrs['lastname'];
			    if (attrs['dstart']) {
				content += " (" + attrs['dstart'] + " - "
					+ attrs['dstop'] + ")";
			    }
			    content += "</h1></br>";
			    if (attrs['bestcountry']) {
				content += "Mainly sold in "
					+ attrs['bestcountry'];
				if (attrs['bestamount']) {
				    content += " (ratio: "
					    + attrs['bestamount'] + ")";
				}
				content += "</br>";
			    }
			    if (attrs && attrs['priceidx']) {
				if (attrs['priceidx'] == 'growing' ||
				    attrs['priceidx'] == 'decreasing') {
				    content += "Prices globally "
					    + attrs['priceidx'] + "<br/>";
				} else {
				    content += "Mostly sold "
					    + attrs['priceidx'] + "<br/>";
				}
			    }
			    if (attrs && attrs['rank']) {
				content += "Rank: " + attrs['rank'] + "<br/>";
			    }
			}
			that.$el.html(content);
		    }
		});
	    }
    });

var ArtworkView = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    that.artworks = new Artwork({id: id.dname});
	    that.artworks.fetch({
		success: function (artwork) {
			that.$el.html("FIXME");
		    }
		});
	    }
    });

var Router = Backbone.Router.extend({
	routes: {
	  '': 'home',
	  'artists/:dname/': 'artistshow',
	  'search/artists/:lookup/': 'artistlookup',
	  'search/artists/:lookup/+:increment': 'artistlookup',
	  'top/artists/': 'artisttop',
	  'top/artists/+:increment': 'artisttop',
	  'count/artists/': 'artistscount',
	  'artworks/:dname/': 'artworkshow',
	  'search/artworks/:lookup/': 'artworklookup',
	  'search/artworks/:lookup/+:increment': 'artworklookup',
	  'top/artworks/': 'artworktop',
	  'top/artworks/+:increment': 'artworktop',
	  'count/artworks/': 'artworkcount'
	}
    });

var router = new Router();
var artistLookup = new ArtistList();
var artworkLookup = new ArtworkList();
var artistView = new ArtistView();
var artworkView = new ArtworkView();
var searchArtistView = new SearchArtistView();
var searchArtworkView = new SearchArtworkView();

router.on('route:home', function() {
	artistLookup.render();
    });

router.on('route:artistshow', function(dname) {
	artistView.render({ dname: dname });
    });
router.on('route:artistlookup', function(lookup, increment) {
	if (increment) {
	    artistLookup.render({ dname: lookup, page: increment });
	} else {
	    artistLookup.render({ dname: lookup });
	}
    });
router.on('route:artisttop', function(increment) {
	if (increment) {
	    artistLookup.render({ topartist: true, page: increment });
	} else {
	    artistLookup.render({ topartist: true });
	}
    });
router.on('route:artistcount', function() {
	console.log('route count artists');
    });

router.on('route:artworkshow', function(dname) {
	artworkView.render({ dname: dname });
    });
router.on('route:artworklookup', function(lookup, increment) {
	if (increment) {
	    artworkLookup.render({ dname: lookup, page: increment });
	} else {
	    artworkLookup.render({ dname: lookup });
	}
    });
router.on('route:artworktop', function(increment) {
	if (increment) {
	    artworkLookup.render({ topartwork: true, page: increment });
	} else {
	    artworkLookup.render({ topartwork: true });
	}
    });
router.on('route:artworkcount', function() {
	console.log('route count artworks');
    });

Backbone.history.start();
/* * backbone * */
