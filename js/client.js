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

_.templateSettings.variable = "rc";
var template = _.template( $( "script.template" ).html());

var SearchArtistView = Backbone.View.extend({
	el: '.artistsearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = _.template($('#srch-tplate').html(),
				{ title: 'Artists search:', base: 'artist' });
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
		var content = _.template($('#srch-tplate').html(),
				{ title: 'Artworks search:', base: 'artwork' });
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
			    if (artist['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
			    } else { next = false; }
			    var hdata = { title: 'Search Artists',
					  baseurl: 'search/artists',
					  dname: id.dname,
					  page: ( id.page ? id.page : false ),
					  next: next };
			    var data  = { data: artist['attributes'],
					  baseurl: 'artists' };
			    var history = _.template($('#hstry-tplate').html(),
						hdata);
			    var content = _.template(
						$('#dnamelist-tplate').html(),
						data);
			    that.$el.html(history + content);
			}
		    });
	    } else if (id && id.topartist) {
		that.artists = new ArtistTop();
		if (id.page) {
		    that.artists.page = id.page;
		}
		that.artists.fetch({
		    success: function (artist) {
			    if (artist['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
			    } else { next = false; }
			    var hdata = { title: 'Top Artists',
					  baseurl: 'top/artists',
					  dname: false,
					  page: ( id.page ? id.page : false ),
					  next: next };
			    var data = { data: artist['attributes'] };
			    var history = _.template($('#hstry-tplate').html(),
						hdata);
			    var content = _.template(
						$('#artistlist-tplate').html(),
						data);
			    that.$el.html(history + content);
			}
		    });
	    } else {
		artists = new Artists();
		artists.fetch({
		    success: function (artists) {
			    var hdata = { title: 'Artists List',
					  page: 0, next: 0 }
			    var data  = { data: artists.models,
					  baseurl: 'artists' };
			    var history = _.template($('#hstry-tplate').html(),
						hdata);
			    var content = _.template(
						$('#dnamelist-tplate').html(),
						data);
			    that.$el.html(history + content);
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
			    if (artwork['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
			    } else { next = false; }
			    var hdata = { title: 'Search Artworks',
					  baseurl: 'search/artworks',
					  dname: id.dname,
					  page: ( id.page ? id.page : false ),
					  next: next };
			    var data  = { data: artwork['attributes'],
					  baseurl: 'artworks' };
			    var history = _.template($('#hstry-tplate').html(),
						     hdata);
			    var content = _.template(
						$('#dnamelist-tplate').html(),
						data);
			    that.$el.html(history + content);
			}
		    });
	    } else if (id && id.topartwork) {
		that.artworks = new ArtworkTop();
		if (id.page) {
		    that.artworks.page = id.page;
		}
		that.artworks.fetch({
		    success: function (artwork) {
			    if (artwork['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
			    } else { next = false; }
			    var hdata = { title: 'Top Artworks',
					  baseurl: 'top/artworks',
					  dname: false,
					  page: ( id.page ? id.page : false ),
					  next: next };
			    var data = { data: artwork['attributes'] };
			    var history = _.template($('#hstry-tplate').html(),
						     hdata);
			    var content = _.template(
						$('#artworklist-tplate').html(),
						     data);
			    that.$el.html(history + content);
			}
		    });
	    } else {
		artworks = new Artworks();
		artworks.fetch({
		    success: function (artworks) {
			    var hdata = { title: 'Artworks List',
					  page: 0, next: 0 }
			    var data  = { data: artworks.models,
					  baseurl: 'artworks' };
			    var history = _.template($('#hstry-tplate').html(),
						hdata);
			    var content = _.template(
						$('#dnamelist-tplate').html(),
						data);
			    that.$el.html(history + content);
			}
		    });
	    }
	}
    });

var ArtistView = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    that.artists = new Artist({ id: id.dname });
	    that.artists.fetch({
		success: function (artist) {
			    if (artist['attributes']['dname']
				== "unknown artist") {
				var data = false;
			    } else {
				var data =
				    { artist: artist['attributes']['0'] } ;
				console.log(artist['attributes']['0']);
			    }
			    var content = _.template($('#artist-tplate').html(),
						data);
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
	  '': 'artistlookup',

	  'artists/:dname/': 'artistshow',
	  'search/artists//': 'artistlookup',
	  'search/artists/:lookup/': 'artistlookup',
	  'search/artists/:lookup/+:increment': 'artistlookup',
	  'top/artists/': 'artisttop',
	  'top/artists/+:increment': 'artisttop',
	  'count/artists/': 'artistscount',

	  'artworks/:dname/': 'artworkshow',
	  'search/artworks//': 'artworklookup',
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

router.on('route:artistshow', function(dname) {
	artistView.render({ dname: dname });
    });
router.on('route:artistlookup', function(lookup, increment) {
	if (increment && lookup) {
	    artistLookup.render({ dname: lookup, page: increment });
	} else if (lookup) {
	    artistLookup.render({ dname: lookup });
	} else {
	    artistLookup.render();
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
	if (increment && lookup) {
	    artworkLookup.render({ dname: lookup, page: increment });
	} else if (lookup) {
	    artworkLookup.render({ dname: lookup });
	} else {
	    artworkLookup.render();
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
