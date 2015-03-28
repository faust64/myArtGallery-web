var countrylist = [
	"Albania",
	"Argentina",
	"Australia",
	"Austria",
	"Belgium",
	"France",
	"Brazil",
	"Bulgaria",
	"Canada",
	"Chile",
	"China",
	"Colombia",
	"Cuba",
	"Czech Republic",
	"Denmark",
	"Ecuador",
	"Estonia",
	"Finland",
	"Germany",
	"Greece",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Ireland (Republic)",
	"Israel",
	"Italy",
	"Japan",
	"Jordan",
	"Kuwait",
	"Lebanon",
	"Lithuania",
	"Luxembourg",
	"Mexico",
	"Monaco",
	"Morocco",
	"Netherlands",
	"New Zealand",
	"Nigeria",
	"Norway",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Portugal - São Miguel",
	"Romania",
	"Russia",
	"Serbia",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"South Africa",
	"South Korea",
	"Spain",
	"Sweden",
	"Switzerland",
	"Taiwan",
	"Thailand",
	"Tunisia",
	"Turkey",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"Uruguay",
	"USA",
	"Venezuela",
	"Armenia",
	"Bosnia and Herzegovina",
	"Latvia",
	"Liechtenstein"
    ];
var citylist = [
	"Tirana",
	"Buenos Aires",
	"Adelaide, SA",
	"Brisbane, QLD",
	"Canberra, ACT",
	"Darlinghurst, NSW",
	"Healesville, VIC",
	"Hobart, TAS",
	"Kellerberrin, WA",
	"Mackay, QLD",
	"Melbourne, VIC",
	"Perth, WA",
	"Paddington, NSW",
	"Richmond, VIC",
	"South Yarra, VIC",
	"Sydney, NSW",
	"Windsor (NSW)",
	"Baden",
	"Bregenz",
	"Dornbirn",
	"Eisenstadt",
	"Fürstenfeld",
	"Graz",
	"Grieskirchen",
	"Innsbruck",
	"Klagenfurt",
	"Klosterneuburg",
	"Krems",
	"Linz",
	"Maria -Gugging",
	"Salzburg",
	"Schwaz",
	"St. Pölten",
	"Thalheim bei Wels",
	"Vienna",
	"Aalst",
	"Antwerp",
	"Bruges",
	"Brussels",
	"Eupen",
	"Geel",
	"Genk",
	"Ghent",
	"Grand-Leez",
	"Wentworth Falls, NSW",
	"Hohenems",
	"Paris",
	"Oostende",
	"Grimbergen",
	"Hasselt",
	"Hornu",
	"La Louvière",
	"Leuven",
	"Lovenjoel",
	"Mechelen",
	"Mons",
	"Otegem",
	"Curitiba",
	"São Paulo",
	"Plovdiv",
	"Sofia",
	"Calgary, AB",
	"Edmonton, Alberta",
	"Fredericton, NB",
	"Halifax, NS",
	"Hamilton, ON",
	"Kingston, Ontario",
	"La Malbaie, QC",
	"London, ON",
	"Montreal, QC",
	"North Vancouver, BC",
	"Ottawa, ON",
	"Quebec City",
	"St. Catharines, ON",
	"Surrey, BC",
	"Toronto, ON",
	"Vancouver, BC",
	"Windsor, Ontario",
	"Winnipeg, Manitoba",
	"Santiago",
	"Beijing",
	"Shanghai",
	"Tianjin",
	"Bogota",
	"Havana",
	"Olomouc",
	"Prague",
	"Zlín",
	"Aarhus",
	"Askeby",
	"Copenhagen",
	"Esbjerg",
	"Horsens",
	"Humlebæk",
	"Ishoj",
	"Odense",
	"Roskilde",
	"Silkeborg",
	"Viborg",
	"Quito",
	"Tallinn",
	"Espoo",
	"Helsinki",
	"Mikkeli",
	"Pori",
	"Salo",
	"Tampere",
	"Turku",
	"Aix-en-Provence",
	"Alfortville",
	"Angers",
	"Bayeux",
	"Besançon",
	"Bignan",
	"Bordeaux",
	"Brest",
	"Calais",
	"Chalon sur Saône",
	"Chamarande",
	"Chateau Gontier",
	"Chatou",
	"Colmar",
	"Colomiers",
	"Dijon",
	"Dunkerque",
	"Eysines",
	"Grande-Synthe",
	"Grenoble",
	"Houilles",
	"Ibos",
	"Landerneau",
	"Lille",
	"Lyon",
	"Malakoff",
	"Marseille",
	"Metz",
	"Montpellier",
	"Montreuil",
	"Mouans Sartoux",
	"Nancy",
	"Nantes",
	"Nîmes",
	"Pontault Combault",
	"Puteaux",
	"Quimper",
	"Rennes",
	"Rochechouart",
	"Rouen",
	"Saint Germain en Laye",
	"Saint Ouen",
	"Saint-Etienne",
	"Saint-Paul",
	"Sérignan",
	"Sète",
	"Strasbourg",
	"Tourcoing",
	"Tours",
	"Vélizy-Villacoublay",
	"Villeurbanne",
	"Vitry-sur-Seine",
	"Aachen",
	"Arnsberg",
	"Aschaffenburg",
	"Augsburg",
	"Bad Zwischenahn",
	"Baden-Baden",
	"Berlin",
	"Bielefeld",
	"Bochum",
	"Bonn",
	"Bottrop",
	"Braunschweig",
	"Bremen",
	"Bremerhaven",
	"Brühl",
	"Buchen",
	"Buggenhagen",
	"Büdelsdorf",
	"Celle",
	"Coburg",
	"Coesfeld",
	"Cologne",
	"Cottbus",
	"Darmstadt",
	"Daun",
	"Delmenhorst",
	"Donaueschingen",
	"Dorsten",
	"Dortmund",
	"Dresden",
	"Duisburg",
	"Dusseldorf",
	"Eislingen",
	"Emden",
	"Erfurt",
	"Erlangen",
	"Eschweiler",
	"Essen",
	"Frankfurt/Main",
	"Frankfurt/Oder",
	"Freiburg",
	"Freising",
	"Friedberg",
	"Gießen",
	"Grafenau",
	"Göppingen",
	"Göttingen",
	"Hamburg",
	"Lethbridge, Alberta",
	"Glostrup",
	"Thisted",
	"Albi",
	"Ivry sur Seine",
	"Lannion",
	"Arnstadt",
	"Gladbeck",
	"Hannover",
	"Hattingen",
	"Heidelberg",
	"Heidenheim",
	"Heilbronn",
	"Herford",
	"Hilden",
	"Husum",
	"Ingolstadt",
	"Iserlohn",
	"Jena",
	"Jockgrim",
	"Kaiserslautern",
	"Karlsruhe",
	"Kassel",
	"Kiel",
	"Kirchheim unter Teck",
	"Knetzgau",
	"Kochel am See",
	"Konstanz",
	"Kraichtal-Unteröwisheim",
	"Krefeld",
	"Künzelsau",
	"Landau / Pfalz",
	"Langenhagen",
	"Leipzig",
	"Leonberg",
	"Leverkusen",
	"Ludwigshafen",
	"Lübeck",
	"Mainz",
	"Mannheim",
	"Marl",
	"Meinersen",
	"Munich",
	"Münster",
	"Mönchengladbach",
	"Neu-Ulm",
	"Neuenhaus",
	"Neumünster",
	"Neunkirchen",
	"Neuss",
	"Neuötting",
	"Nordhorn",
	"Nuremberg",
	"Oberhausen",
	"Oldenburg",
	"Paderborn",
	"Potsdam",
	"Rantum / Sylt",
	"Ravensburg",
	"Recklinghausen",
	"Regensburg",
	"Remagen",
	"Riegel",
	"Rotenburg",
	"Saarbrücken",
	"Sankt Augustin",
	"Schwandorf",
	"Schwäbisch Hall",
	"Siegen",
	"Sindelfingen",
	"Staufen im Breisgau",
	"Stuttgart",
	"Ulm",
	"Villingen-Schwenningen",
	"Waldenbuch",
	"Wiesbaden",
	"Wipperfürth",
	"Wolfsburg",
	"Wuppertal",
	"Würzburg",
	"Zülpich",
	"Athens",
	"Thessaloniki",
	"Hong Kong",
	"Budapest",
	"Reykjavik",
	"Bangalore",
	"Mumbai",
	"New Delhi",
	"Dublin",
	"Limerick",
	"Holon",
	"Jerusalem",
	"Petach Tikva",
	"Tel Aviv",
	"Bari",
	"Bergamo",
	"Bologna",
	"Bolzano",
	"Brescia",
	"Catania, CT",
	"Catanzaro",
	"Cremona",
	"Florence",
	"Genoa",
	"Milan",
	"Modica, RG",
	"Monteriggioni, SI",
	"Naples",
	"Nuoro",
	"Padova",
	"Pescara",
	"Piacenza, PC",
	"Rome",
	"Rovereto",
	"San Gimignano",
	"Trento",
	"Turin",
	"Venice",
	"Verona",
	"Kanagawa",
	"Karuizawa",
	"Nagoya",
	"Osaka",
	"Tokyo",
	"Tsu City",
	"Amman",
	"Kuwait City",
	"Beirut",
	"Vilnius",
	"Luxembourg",
	"Guadalajara",
	"Mexico City",
	"Oaxaca",
	"Monaco",
	"Rabat",
	"Amersfoort",
	"Amstelveen",
	"Amsterdam",
	"Arnhem",
	"Beetsterzwaag",
	"Eindhoven",
	"Haarlem",
	"Laren",
	"Maastricht",
	"Middelburg",
	"Roermond",
	"Rotterdam",
	"Sittard",
	"The Hague",
	"Tilburg",
	"Auckland",
	"Dunedin",
	"Hamilton",
	"Lagos",
	"Ålesund",
	"Bergen",
	"Høvikodden",
	"Kristiansand",
	"Lillehammer",
	"Moss",
	"Nærbø",
	"Oslo",
	"Skien",
	"Stavanger",
	"Tønsberg",
	"Tromsø",
	"Trondheim",
	"Lima",
	"Makati City",
	"Quezon City",
	"Kielce",
	"Klodzko",
	"Poznan",
	"Szczecin",
	"Warsaw",
	"Wroclaw",
	"Elvas",
	"Lisbon",
	"Porto",
	"Açores",
	"Bucharest",
	"Cluj",
	"Moscow",
	"St. Petersburg",
	"Belgrade",
	"Singapore",
	"Banská Bystrica",
	"Bratislava",
	"Liptovsky Mikulas",
	"Nitra",
	"Ljubljana",
	"Cape Town",
	"Johannesburg",
	"Busan",
	"Cheonan-si",
	"Daegu",
	"Seoul",
	"A Coruña",
	"Alicante",
	"Andratx",
	"Barcelona",
	"Bilbao",
	"Burgos",
	"Gernika-Lumo",
	"Granada",
	"Huarte",
	"Huesca",
	"Las Palmas de Gran Canaria",
	"Léon",
	"Lleida",
	"Madrid",
	"Málaga",
	"Sant Cugat del Vallès",
	"Santander",
	"Sevilla",
	"Sitges, Barcelona",
	"Valencia",
	"Valladolid",
	"Vigo",
	"Vitoria-Gasteiz",
	"Zaragoza",
	"Borås",
	"Gothenburg",
	"Halmstad",
	"Lund",
	"Malmö",
	"Skarhamn",
	"Stockholm",
	"Sundbyberg",
	"Umeå",
	"Uppsala",
	"Aarau",
	"Appenzell",
	"Bad Ragaz",
	"Basel",
	"Bern",
	"Biel/Bienne",
	"Burgdorf",
	"Chur",
	"Davos",
	"Fribourg",
	"Geneva",
	"Hauterive",
	"Langenthal",
	"Lausanne",
	"Le Locle",
	"Lens",
	"Liestal",
	"Lucerne",
	"Lugano",
	"Montreux",
	"Neuchâtel",
	"Niederwangen",
	"Oberwil",
	"Olten",
	"Pfäffikon",
	"Rapperswil",
	"Riehen",
	"Solothurn",
	"St. Gallen",
	"Stampa / Bergell",
	"Thun",
	"Warth",
	"Wichtrach/Bern",
	"Winterthur",
	"Yverdon-les-Bains",
	"Zurich",
	"Kaohsiung City",
	"Taipei",
	"Bangkok",
	"Sidi Bou Said",
	"Istanbul",
	"Kiev",
	"Dubai",
	"Sharjah",
	"Bath, Somerset",
	"Belfast, Northern Ireland",
	"Bexhill on Sea",
	"Birmingham",
	"Bradford",
	"Bristol",
	"Bruton, Somerset",
	"Chalford",
	"Chichester, West Sussex",
	"Colchester",
	"Crieff, Perthshire, Scotland",
	"Derry, Northern Ireland",
	"Eastbourne",
	"Edinburgh, Scotland",
	"Gateshead",
	"Glasgow, Scotland",
	"Grimsby",
	"Leeds",
	"Lincoln, Lincolnshire",
	"Liverpool",
	"London",
	"Manchester",
	"Middlesbrough",
	"Newcastle upon Tyne",
	"Norwich",
	"Nottingham",
	"Penzance, Cornwall",
	"Preston, Lancashire",
	"Ramsgate",
	"Salisbury",
	"Scunthorpe, North Lincolnshire",
	"Sheffield",
	"Southend-on-Sea, Essex",
	"Summertown, Oxford",
	"Tighnabruaich, Argyll, Scotland",
	"Uckfield, East Sussex",
	"Wakefield, West Yorkshire",
	"Walsall, West Midlands",
	"Montevideo",
	"Akron, OH",
	"Albany, TX",
	"Allentown, PA",
	"Andover, MA",
	"Ann Arbor, MI",
	"Asheville, NC",
	"Aspen, CO",
	"Athens, GA",
	"Atherton, CA",
	"Atlanta, GA",
	"Austin, TX",
	"Baltimore, MD",
	"Bellevue, WA",
	"Birmingham, AL",
	"Boca Raton, FL",
	"Boise, ID",
	"Boston, MA",
	"Boulder, CO",
	"Bridgehampton, NY",
	"Buffalo, NY",
	"Burlington, VT",
	"Cambridge, MA",
	"Champaign, IL",
	"Charlotte, NC",
	"Charlottesville, VA",
	"Chicago, IL",
	"Cincinnati, OH",
	"Claremont, CA",
	"Cleveland, OH",
	"Clinton, NY",
	"Colorado Springs, CO",
	"Columbia, MO",
	"Columbus, OH",
	"Culver City, CA",
	"Dallas, TX",
	"Davenport, IA",
	"Daytona Beach, FL",
	"Denton, TX",
	"Denver, CO",
	"Des Moines, IA",
	"Detroit, MI",
	"Doylestown, PA",
	"East Hampton, NY",
	"Elmhurst, IL",
	"Eugene, OR",
	"Ferndale, MI",
	"Flint, MI",
	"Fort Lauderdale, FL",
	"Fort Wayne, IN",
	"Fort Worth, TX",
	"Gainesville, FL",
	"Grand Rapids, MI",
	"Greencastle, IN",
	"Greenwich, CT",
	"Hartford, CT",
	"Healdsburg, CA",
	"Hollywood, CA",
	"Houston, TX",
	"Indianapolis, IN",
	"Jackson, WY",
	"Jenkintown, PA",
	"Kansas City, MO",
	"Kensington, MD",
	"Ketchum, ID",
	"La Jolla, CA",
	"Laguna Beach, CA",
	"Lake Worth, FL",
	"Laramie, WY",
	"Lincoln, MA",
	"Lincoln, NE",
	"Long Beach, CA",
	"Los Angeles, CA",
	"Madison, WI",
	"Malibu, CA",
	"Marfa, TX",
	"Medford, MA",
	"Memphis, TN",
	"Miami Beach, FL",
	"Miami, FL",
	"Mill Valley, CA",
	"Milwaukee, WI",
	"Minneapolis, MN",
	"Missoula, MT",
	"Montclair, NJ",
	"Monterey Park, CA",
	"Napa, CA",
	"Nashville, TN",
	"New Bedford, MA",
	"New Britain, CT",
	"New Haven, CT",
	"New Orleans, LA",
	"New Paltz, NY",
	"New York City, NY",
	"Newport Beach",
	"Norfolk, VA",
	"Northampton, MA",
	"Oakland, CA",
	"Oberlin, OH",
	"Palm Springs, CA",
	"Pasadena, CA",
	"Peekskill, NY",
	"Pensacola, FL",
	"Philadelphia, PA",
	"Pittsburg, PA",
	"Portland, OR",
	"Raleigh, NC",
	"Reno, NV",
	"Richmond, VA",
	"Ridgefield, CT",
	"Riverside, CA",
	"Rochester, NY",
	"Rockland, ME",
	"Sacramento, CA",
	"Saint Louis, MO",
	"Salem, MA",
	"Salem, OR",
	"San Antonio, TX",
	"San Diego, CA",
	"San Francisco, CA",
	"San Jose, CA",
	"Santa Ana, CA",
	"Santa Barbara, CA",
	"Santa Fe, NM",
	"Santa Monica, CA",
	"Sarasota, FL",
	"Saratoga Springs, NY",
	"Savannah, GA",
	"Schenectady, NY",
	"Scottsdale, AZ",
	"Seattle, WA",
	"Sedalia, MO",
	"Southampton, NY",
	"Stanford, CA",
	"Syracuse, NY",
	"Tacoma, WA",
	"Tampa, FL",
	"Tempe, AZ",
	"Toledo, OH",
	"Troy, NY",
	"Tucson, AZ",
	"Twentynine Palms, CA",
	"University Park, PA",
	"Venice, CA",
	"Virginia Beach, VA",
	"Waltham, MA",
	"Washington, DC",
	"Waterville, ME",
	"West Palm Beach, FL",
	"Wichita, KS",
	"Williamstown, MA",
	"Wilmington, DE",
	"Winter Park, FL",
	"Worcester, MA",
	"Yonkers, NY",
	"Maracaibo",
	"Yerevan",
	"Bendigo, VIC",
	"Collingwood, VIC",
	"Mistelbach",
	"Rosegg",
	"Saalfelden",
	"Sarajevo",
	"Kutná Hora",
	"Randers",
	"Ringsted",
	"Agrève",
	"Arras",
	"Chambord",
	"Delme",
	"Genevilliers",
	"Le Havre",
	"Louviers",
	"Sablé-sur-Sarthe Cedex",
	"Bad Homburg",
	"Bayreuth",
	"Bietigheim-Bissingen",
	"Detmold",
	"Hildesheim",
	"Kleve",
	"Oelsnitz / Erzgeb.",
	"Schallstadt",
	"Sellin",
	"Reggio Emilia",
	"Sarzana, Sp",
	"Kitakyushu",
	"Shizuoka",
	"Riga",
	"Vaduz",
	"Zapopan",
	"Braga",
	"Trnava",
	"Maribor",
	"Yongin-si",
	"Cáceres",
	"Castellon de la Plana",
	"Palma de Mallorca",
	"Kristianstad",
	"Bellinzona",
	"Rogg­wil-Kal­ten­her­berg",
	"Dunoon, Scotland",
	"St. Ives, Cornwall",
	"Abilene, TX",
	"Berkeley, CA",
	"Beverly Hills, CA",
	"Birmingham, MI",
	"Bloomfield Hills, MI",
	"Evanston, IL",
	"Irvine, CA",
	"Jersey City, NJ",
	"Kent, CT",
	"Knoxville, TN",
	"Middlebury, VT",
	"North Adams, MA",
	"Roanoke, WV",
	"Spokane, WA",
	"Stamford, CT"
    ];