CORE_URL = 'http://myartgallery.unetresgrossebite.com';
RESULTS_PER_PAGE = 20;

var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}
/* * common * */
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
/* * common * */
/* * jquery * */
if (CORE_URL != false) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
		if ($_GET.expo && $_GET.auction) {
		    var args = "?type=expo";
		} else if ($_GET.expo) {
		    var args = "?type=expo";
		} else if ($_GET.auction) {
		    var args = "?type=auction";
		} else { var args = ''; }
		if ($_GET.city) {
		    args += (args.length > 0 ? '&' : '?')
			 + 'city=' + $_GET.city;
		}
		if ($_GET.country) {
		    args += (args.length > 0 ? '&' : '?')
			 + 'country=' + $_GET.country;
		}
	    options.url = CORE_URL + options.url + '/' + args;
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
/* * jquery * */
/* * searchbox * */
function toggle_visibility(id) {
    var elt = document.getElementById(id);
    var btn = document.getElementById(id + 'toggle');

    if (elt.style.display == 'inline-block') {
	var display = 'none';
	btn.innerHTML = '+ Search +';
    } else {
	var display = 'inline-block';
	btn.innerHTML = '- Search -';
    }
    elt.style.display = display;
}
/* * searchbox * */
/* * backbone * */
_.templateSettings.variable = "rc";
var template = _.template( $( "script.template" ).html());
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
var EventSearch = Backbone.Model.extend({
	urlRoot: function() {
		return '/search/events' + (this.page > 0
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
var Events = Backbone.Collection.extend({
	url: function() {
		return '/events' + (this.page > 0
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
var Event = Backbone.Model.extend({
	urlRoot: function() {
		return '/events' + (this.page > 0
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
		var content = _.template($('#srch-tplate').html(),
				{ title: 'Artists search', base: 'artist' });
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
				{ title: 'Artworks search', base: 'artwork' });
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
var SearchEventView = Backbone.View.extend({
	el: '.eventsearchbox',
	initialize: function() {
		this.render();
	    },
	render: function() {
		var content = _.template($('#srch-tplate').html(),
				{ title: 'Events search', base: 'events',
				  places: citylist });
		this.$el.html(content);
	    },
	events: {
		"keyup :input": "doSearchPattern",
		"click input[type=button]": "doSearchPattern",
		"change #searchplace_input": "doSearchPlace"
	    },
	doSearchPattern: function(event) {
		var val = $("#searchevents_input").val();
		if (val != undefined) { val += '/'; } else { val = ''; }
		router.navigate('#search/events/' + val, { trigger: true });
	    },
	doSearchPlace: function(event) {
		var url     = window.location.toString();
		var where   =
		    event.originalEvent.target.selectedOptions['0'].label;
		var loc     = where.split('/');
		var country = loc[0], city = loc[1], prefix = '', target = '';

		if (url.indexOf('?')) {
		    prefix = '&';
		} else { prefix = '?'; }

		if (url.indexOf('city=') >= 0 && city && city.length) {
		    var turl = url.replace(/city=[^&#]*/,
					    "city=" + city);
		    url = turl;
		} else if (url.indexOf('city=') >= 0) {
		    var turl = url.replace(/[?&]city=[^&#]*/, '');
		    url = turl;
		} else if (url.indexOf('#') >= 0 && city && city.length) {
		    var turl  = url.replace(/#/, prefix + 'city=' + city + '#');
		    url = turl;
		    prefix = '&';
		}
		if (url.indexOf('country=') >= 0
			&& country && country.length) {
		    var turl = url.replace(/country=[^&#]*/,
					    "country=" + country);
		    url = turl;
		} else if (url.indexOf('country=') >= 0) {
		    var turl = url.replace(/[?&]country=[^&#]*/, '');
		    url = turl;
		} else if (url.indexOf('#') >= 0 && country &&
		    country.length) {
		    var turl  = url.replace(/#/, prefix
						+ 'country=' + country + '#');
		    url = turl;
		} else {
		    if (country && country.length > 0
			&& city && city.length > 0) {
			target = prefix + 'country=' + country
				+ '&city=' + city;
		    } else if (country && country.length > 0) {
			target = prefix + 'country=' + country;
		    }
		    var turl  = url + target;
		    url = turl;
		}
		window.location.assign(url);
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
				artist['attributes'].length = RESULTS_PER_PAGE;
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
				artist['attributes'].length = RESULTS_PER_PAGE;
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
			    artists.models.length = RESULTS_PER_PAGE;
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
				artwork['attributes'].length = RESULTS_PER_PAGE;
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
				artwork['attributes'].length = RESULTS_PER_PAGE;
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
			    artworks.models.length = RESULTS_PER_PAGE;
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
var EventList = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    if (id && id.dname) {
		that.evt = new EventSearch({ id: asDname(id.dname) });
		if (id.page) {
		    that.evt.page = id.page;
		}
		that.evt.fetch({
		    success: function (evt) {
			    if (evt['attributes'][RESULTS_PER_PAGE]) {
				next = id.page ? Math.floor(id.page) + 1 : 1;
				evt['attributes'].length = RESULTS_PER_PAGE;
			    } else { next = false; }
			    var hdata = { title: 'Search Events',
					  baseurl: 'search/events',
					  dname: id.dname,
					  page: ( id.page ? id.page : false ),
					  next: next };
			    var data  = { data: evt['attributes'],
					  baseurl: 'events' };
			    var history = _.template($('#hstry-tplate').html(),
						     hdata);
			    var content = _.template(
						$('#dnamelist-tplate').html(),
						data);
			    that.$el.html(history + content);
			}
		    });
	    } else {
		evt = new Events();
		evt.fetch({
		    success: function (evt) {
			    evt.models.length = RESULTS_PER_PAGE;
			    var hdata = { title: 'Events List',
					  page: 0, next: 0 }
			    var data  = { data: evt.models,
					  baseurl: 'events' };
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
//				console.log(artist['attributes']['0']);
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
			    if (artwork['attributes']['dname']
				== "unknown artwork") {
				var data = false;
			    } else {
				var data =
				    { artwork: artwork['attributes']['0'] } ;
//				console.log(artwork['attributes']['0']);
			    }
			    var content =
				_.template($('#artwork-tplate').html(), data);
			    that.$el.html(content);
		    }
		});
	    }
    });
var EventView = Backbone.View.extend({
	el: '.page',
	render: function (id) {
	    var that = this;
	    that.evt = new Event({ id: id.dname });
	    that.evt.fetch({
		success: function (evt) {
			    if (evt['attributes']['dname']
				== "unknown event") {
				var data = false;
			    } else {
				var data =
				    { evt: evt['attributes'] } ;
//				console.log(evt['attributes']);
			    }
			    var content = _.template($('#event-tplate').html(),
						data);
			    that.$el.html(content);
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
	  'count/artworks/': 'artworkcount',

	  'events/:dname/': 'eventshow',
	  'search/events/': 'eventlookup',
	  'search/events//': 'eventlookup',
	  'search/events/:lookup/': 'eventlookup',
	  'search/events/:lookup/+:increment': 'eventlookup',
	  'count/events/': 'eventcount'
	}
    });

var router = new Router();
var artistLookup = new ArtistList();
var artworkLookup = new ArtworkList();
var eventLookup = new EventList();
var artistView = new ArtistView();
var artworkView = new ArtworkView();
var eventView = new EventView();
var searchArtistView = new SearchArtistView();
var searchArtworkView = new SearchArtworkView();
var searchEventView = new SearchEventView();

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

router.on('route:eventshow', function(dname) {
	eventView.render({ dname: dname });
    });
router.on('route:eventlookup', function(lookup, increment) {
	if (increment && lookup) {
	    eventLookup.render({ dname: lookup, page: increment });
	} else if (lookup) {
	    eventLookup.render({ dname: lookup });
	} else {
	    eventLookup.render();
	}
    });
router.on('route:eventcount', function() {
	console.log('route count events');
    });

Backbone.history.start();
/* * backbone * */
