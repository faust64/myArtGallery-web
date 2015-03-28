/* * backbone * */
CORE_URL = 'http://localhost:8080';

if (CORE_URL != false) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
	    options.url = CORE_URL + options.url + '/';
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

var ArtistSearch = Backbone.Model.extend({ urlRoot: '/search/artists/' });
var ArtworkSearch = Backbone.Model.extend({ urlRoot: '/search/artworks/' });
var Artists = Backbone.Collection.extend({ url: '/artists/' });
var Artworks = Backbone.Collection.extend({ url: '/artworks/' });
var Artist = Backbone.Model.extend({ urlRoot: '/artists/' });
var Artwork = Backbone.Model.extend({ urlRoot: '/artworks/' });

var SearchArtistView = Backbone.View.extend({
	el: '.artistsearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = "<label>Artist:</label>"
			    + "<input type='text' id='searchartist_input' />"
			    + "<input type='button' id='searchartist_button' "
			    + "value='search'>";
		this.$el.html(content);
	    },
	events: {
		"click input[type=button]": "doSearch",
		"keyup :input": "doSearch"
	    },
	doSearch: function(event) {
		artistLookup.render({ dname: $("#searchartist_input").val() });
	    }
    });

var SearchArtworkView = Backbone.View.extend({
	el: '.artworksearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = "<label>Artwork:</label>"
			    + "<input type='text' id='searchartwork_input' />"
			    + "<input type='button' id='searchartwork_button' "
			    + "value='search'>";
		this.$el.html(content);
	    },
	events: {
		"click input[type=button]": "doSearch",
		"keyup :input": "doSearch"
	    },
	doSearch: function(event) {
		alert("search for " + $("#searchartwork_input").val());
	    }
    });

var ArtistList = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    if (id && id.dname) {
		that.artists = new ArtistSearch({ id: id.dname });
		that.artists.fetch({
		    success: function (artist) {
			    content = "<h1>Artists List<h1/><p>";
			    for (var idx = 0; artist['attributes'][idx];
				idx++) {
				dname = artist['attributes'][idx]['dname'];
				content += "<a href='#artists/" + dname + "/'>"
					+ dname + "</a><br/>";
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
				&& idx < 20; idx++) {
				dname =
				    artists.models[idx]['attributes']['dname'];
				content += "<a href='#artists/" + dname + "/'>"
					+ dname + "</a><br/>";
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
		that.artworks = new ArtworkSearch({ id: id.dname });
		that.artworks.fetch({
		    success: function (artwork) {
			    content = "<h1>Artworks List<h1/><p>";
			    for (var idx = 0; artwork['attributes'][idx];
				idx++) {
				dname = artwork['attributes'][idx]['dname'];
				content += "<a href='#artworks/" + dname + "/'>"
					+ dname + "</a><br/>";
			    }
			    content += "</p>";
			    that.$el.html(content);
			}
		    });
	    } else {
		artworks = new Artworks();
		artworks.fetch({
		    success: function (artworks) {
			    content = "<h1>Artists List<h1/><p>";
			    for (var idx = 0; idx < artworks.models.length
				&& idx < 20; idx++) {
				dname =
				    artworks.models[idx]['attributes']['dname'];
				content += "<a href='#artworks/" + dname + "/'>"
					+ dname + "</a><br/>";
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
			attrs   = artist['attributes']['0'];
		        content = "<h1>" + attrs['firstname'] + " <b>"
				+ attrs['lastname'] + "</b>";
			if (attrs['dstart']) {
			    content += " (" + attrs['dstart'] + " - "
				    + attrs['dstop'] + ")";
			}
			content += "</h1></br>";
			if (attrs['bestcountry']) {
			    content += "Mainly sold in " + attrs['bestcountry'];
			    if (attrs['bestamount']) {
				content += " (ratio: "
					+ attrs['bestamount'] + ")";
			    }
			    content += "</br>";
			}
			if (attrs['priceidx']) {
			    if (attrs['priceidx'] == 'growing' ||
				attrs['priceidx'] == 'decreasing') {
				content += "Prices globally "
					+ attrs['priceidx'] + "<br/>";
			    } else {
				content += "Mostly sold " + attrs['priceidx']
					+ "<br/>";
			    }
			}
			if (attrs['rank']) {
			    content += "Rank: " + attrs['rank'] + "<br/>";
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
	  'count/artists/': 'artistscount',
	  'artworks/:dname/': 'artworkshow',
	  'search/artworks/:lookup/': 'artworklookup',
	  'count/artworks/': 'artworkcount'
	}
    });

var router = new Router();
var artistList = new ArtistList();
var artworkList = new ArtworkList();
var artistLookup = new ArtistList();
var artworkLookup = new ArtworkList();
var artistView = new ArtistView();
var artworkView = new ArtworkView();
var searchArtistView = new SearchArtistView();
var searchArtworkView = new SearchArtworkView();

router.on('route:home', function() {
	artistList.render();
//	console.log('route home');
    });

router.on('route:artistshow', function(dname) {
	artistView.render({ dname: dname });
//	console.log('route show artist');
    });
router.on('route:artistlookup', function(lookup) {
	artistLookup.render({ dname: lookup });
//	console.log('route search artist');
    });
router.on('route:artistcount', function() {
	console.log('route count artists');
    });

router.on('route:artworkshow', function(dname) {
	artworkView.render({ dname: dname });
//	console.log('route show artwork');
    });
router.on('route:artworklookup', function(lookup) {
	artworkLookup.render({ dname: lookup });
//	console.log('route search artwork');
    });
router.on('route:artworkcount', function() {
	console.log('route count artworks');
    });

Backbone.history.start();
/* * backbone * */
