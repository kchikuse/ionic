angular.module('mhuri.services', [])

.service('People', function(DB) {

	var people = DB.load();

	return {
        get: function(id) {
            return people({ id: +id }).first();
        },
		children: function(id) {
			return people({ pid: +id }).get();
		},
		search: function(q) {
			return people(function () {
				return this.name.toLowerCase().indexOf(q.toLowerCase()) > -1;
			}).get();
		}
	};
})

.service('DB', function() {
	return {
        load: function() {
            return TAFFY([
			  {
			  	id: 1,
			  	name: 'Nyamayaro',
			  	pid: 0
			  },
			  {
			  	id: 2,
			  	name: 'Dzotizeyi',
			  	pid: 1
			  },
			  {
			  	id: 3,
			  	name: 'Munhenga',
			  	pid: 2
			  },
			  {
			  	id: 4,
			  	name: 'Nyepudzai',
			  	pid: 3
			  },
			  {
			  	id: 5,
			  	name: 'Dorcas',
			  	pid: 3
			  },
			  {
			  	id: 6,
			  	name: 'Justin',
			  	pid: 3
			  },
			  {
			  	id: 7,
			  	name: 'Joromani',
			  	pid: 3
			  },
			  {
			  	id: 8,
			  	name: 'Jake Chikuse',
			  	pid: 3
			  },
			  {
			  	id: 9,
			  	name: 'Isaiah',
			  	pid: 4
			  },
			  {
			  	id: 10,
			  	name: 'Richard',
			  	pid: 4
			  },
			  {
			  	id: 11,
			  	name: 'Silas',
			  	pid: 4
			  },
			  {
			  	id: 12,
			  	name: 'Misheck',
			  	pid: 4
			  },
			  {
			  	id: 13,
			  	name: 'Takaiwana',
			  	pid: 4
			  },
			  {
			  	id: 14,
			  	name: 'Winnie',
			  	pid: 6
			  },
			  {
			  	id: 15,
			  	name: 'Gertrude',
			  	pid: 6
			  },
			  {
			  	id: 16,
			  	name: 'Batsi',
			  	pid: 6
			  },
			  {
			  	id: 17,
			  	name: 'Fanuel',
			  	pid: 6
			  },
			  {
			  	id: 18,
			  	name: 'Lucia',
			  	pid: 7
			  },
			  {
			  	id: 19,
			  	name: 'Wilson',
			  	pid: 7
			  },
			  {
			  	id: 20,
			  	name: 'John',
			  	pid: 7
			  },
			  {
			  	id: 21,
			  	name: 'Naume',
			  	pid: 8
			  },
			  {
			  	id: 22,
			  	name: 'Erina',
			  	pid: 8
			  },
			  {
			  	id: 23,
			  	name: 'Luka Chikuse',
			  	pid: 8
			  },
			  {
			  	id: 24,
			  	name: 'Jeffrey',
			  	pid: 8
			  },
			  {
			  	id: 25,
			  	name: 'Simon Chikuse',
			  	pid: 8
			  },
			  {
			  	id: 26,
			  	name: 'Silas',
			  	pid: 21
			  },
			  {
			  	id: 27,
			  	name: 'John',
			  	pid: 21
			  },
			  {
			  	id: 28,
			  	name: 'Kristine',
			  	pid: 21
			  },
			  {
			  	id: 29,
			  	name: 'Mikiri',
			  	pid: 21
			  },
			  {
			  	id: 30,
			  	name: 'Unknown',
			  	pid: 21
			  },
			  {
			  	id: 31,
			  	name: 'Unknown',
			  	pid: 21
			  },
			  {
			  	id: 32,
			  	name: 'Unknown',
			  	pid: 21
			  },
			  {
			  	id: 33,
			  	name: 'Gosha',
			  	pid: 30
			  },
			  {
			  	id: 34,
			  	name: 'Chenjerai',
			  	pid: 31
			  },
			  {
			  	id: 35,
			  	name: 'Jimmy',
			  	pid: 32
			  },
			  {
			  	id: 36,
			  	name: 'Mark',
			  	pid: 32
			  },
			  {
			  	id: 37,
			  	name: 'Julian',
			  	pid: 32
			  },
			  {
			  	id: 38,
			  	name: 'Alfred',
			  	pid: 22
			  },
			  {
			  	id: 39,
			  	name: 'Aggri',
			  	pid: 22
			  },
			  {
			  	id: 40,
			  	name: 'Arthur',
			  	pid: 22
			  },
			  {
			  	id: 41,
			  	name: 'Tongai',
			  	pid: 22
			  },
			  {
			  	id: 42,
			  	name: 'Patience',
			  	pid: 39
			  },
			  {
			  	id: 43,
			  	name: 'Silence',
			  	pid: 39
			  },
			  {
			  	id: 44,
			  	name: 'Nyasha',
			  	pid: 39
			  },
			  {
			  	id: 45,
			  	name: 'Tatenda',
			  	pid: 40
			  },
			  {
			  	id: 46,
			  	name: 'Takunda',
			  	pid: 40
			  },
			  {
			  	id: 47,
			  	name: 'Tariro',
			  	pid: 40
			  },
			  {
			  	id: 48,
			  	name: 'Simbarashe',
			  	pid: 41
			  },
			  {
			  	id: 49,
			  	name: 'Malvin',
			  	pid: 41
			  },
			  {
			  	id: 50,
			  	name: 'Kelvin',
			  	pid: 41
			  },
			  {
			  	id: 51,
			  	name: 'Shupikai',
			  	pid: 24
			  },
			  {
			  	id: 52,
			  	name: 'Goodwin',
			  	pid: 51
			  },
			  {
			  	id: 53,
			  	name: 'David',
			  	pid: 23
			  },
			  {
			  	id: 54,
			  	name: 'Esther',
			  	pid: 23
			  },
			  {
			  	id: 55,
			  	name: 'Getty',
			  	pid: 23
			  },
			  {
			  	id: 56,
			  	name: 'Violet',
			  	pid: 23
			  },
			  {
			  	id: 57,
			  	name: 'Georgina',
			  	pid: 23
			  },
			  {
			  	id: 58,
			  	name: 'Betty',
			  	pid: 23
			  },
			  {
			  	id: 59,
			  	name: 'Paradzai',
			  	pid: 23
			  },
			  {
			  	id: 60,
			  	name: 'Nyarai',
			  	pid: 23
			  },
			  {
			  	id: 61,
			  	name: 'Luke',
			  	pid: 23
			  },
			  {
			  	id: 62,
			  	name: 'Francis',
			  	pid: 23
			  },
			  {
			  	id: 63,
			  	name: 'Kudakwashe',
			  	pid: 23
			  },
			  {
			  	id: 64,
			  	name: 'Mowbray',
			  	pid: 53
			  },
			  {
			  	id: 65,
			  	name: 'Tashinga',
			  	pid: 53
			  },
			  {
			  	id: 66,
			  	name: 'Munashe',
			  	pid: 53
			  },
			  {
			  	id: 67,
			  	name: 'Kevin',
			  	pid: 54
			  },
			  {
			  	id: 68,
			  	name: 'Wendy',
			  	pid: 54
			  },
			  {
			  	id: 69,
			  	name: 'Lameck',
			  	pid: 55
			  },
			  {
			  	id: 70,
			  	name: 'Vheremu',
			  	pid: 56
			  },
			  {
			  	id: 71,
			  	name: 'Pamela',
			  	pid: 57
			  },
			  {
			  	id: 72,
			  	name: 'Aliyasa',
			  	pid: 58
			  },
			  {
			  	id: 73,
			  	name: 'Stacy',
			  	pid: 59
			  },
			  {
			  	id: 74,
			  	name: 'Gamuchirayi',
			  	pid: 60
			  },
			  {
			  	id: 75,
			  	name: 'Antoinette',
			  	pid: 62
			  },
			  {
			  	id: 76,
			  	name: 'Addie',
			  	pid: 62
			  },
			  {
			  	id: 77,
			  	name: 'Handsen',
			  	pid: 25
			  },
			  {
			  	id: 78,
			  	name: 'Erick',
			  	pid: 25
			  },
			  {
			  	id: 79,
			  	name: 'Alfa',
			  	pid: 25
			  },
			  {
			  	id: 80,
			  	name: 'Sherry',
			  	pid: 25
			  },
			  {
			  	id: 81,
			  	name: 'Lucia',
			  	pid: 25
			  },
			  {
			  	id: 82,
			  	name: 'Shepherd',
			  	pid: 25
			  },
			  {
			  	id: 83,
			  	name: 'Esna',
			  	pid: 25
			  },
			  {
			  	id: 84,
			  	name: 'Sekai',
			  	pid: 77
			  },
			  {
			  	id: 85,
			  	name: 'Shorai',
			  	pid: 77
			  },
			  {
			  	id: 86,
			  	name: 'Norest',
			  	pid: 77
			  },
			  {
			  	id: 87,
			  	name: 'Blessing',
			  	pid: 77
			  },
			  {
			  	id: 88,
			  	name: 'Tarisai',
			  	pid: 77
			  },
			  {
			  	id: 89,
			  	name: 'Future',
			  	pid: 77
			  },
			  {
			  	id: 90,
			  	name: 'Simbarashe',
			  	pid: 77
			  },
			  {
			  	id: 91,
			  	name: 'Charlton',
			  	pid: 84
			  },
			  {
			  	id: 92,
			  	name: 'Lizzy',
			  	pid: 86
			  },
			  {
			  	id: 93,
			  	name: 'Nyasha',
			  	pid: 87
			  },
			  {
			  	id: 94,
			  	name: 'Tanaka',
			  	pid: 88
			  },
			  {
			  	id: 95,
			  	name: 'Takesure',
			  	pid: 78
			  },
			  {
			  	id: 96,
			  	name: 'Otilia',
			  	pid: 78
			  },
			  {
			  	id: 97,
			  	name: 'Tinashe',
			  	pid: 78
			  },
			  {
			  	id: 98,
			  	name: 'Lorraine',
			  	pid: 78
			  },
			  {
			  	id: 99,
			  	name: 'Knowledge',
			  	pid: 78
			  },
			  {
			  	id: 100,
			  	name: 'Fungai',
			  	pid: 78
			  },
			  {
			  	id: 101,
			  	name: 'Yollanda',
			  	pid: 78
			  },
			  {
			  	id: 102,
			  	name: 'Lisa',
			  	pid: 95
			  },
			  {
			  	id: 103,
			  	name: 'Laura',
			  	pid: 95
			  },
			  {
			  	id: 104,
			  	name: 'Kelvin',
			  	pid: 95
			  },
			  {
			  	id: 105,
			  	name: 'Dennis',
			  	pid: 96
			  },
			  {
			  	id: 106,
			  	name: 'Dylan',
			  	pid: 96
			  },
			  {
			  	id: 107,
			  	name: 'Nokutenda',
			  	pid: 96
			  },
			  {
			  	id: 108,
			  	name: 'Darren',
			  	pid: 97
			  },
			  {
			  	id: 109,
			  	name: 'Kimberley',
			  	pid: 97
			  },
			  {
			  	id: 110,
			  	name: 'Jerome',
			  	pid: 98
			  },
			  {
			  	id: 111,
			  	name: 'Jayden',
			  	pid: 98
			  },
			  {
			  	id: 112,
			  	name: 'Jonathan',
			  	pid: 99
			  },
			  {
			  	id: 113,
			  	name: 'Nicole',
			  	pid: 100
			  },
			  {
			  	id: 114,
			  	name: 'Biata',
			  	pid: 79
			  },
			  {
			  	id: 115,
			  	name: 'Fortunate',
			  	pid: 79
			  },
			  {
			  	id: 116,
			  	name: 'Tellmore',
			  	pid: 79
			  },
			  {
			  	id: 117,
			  	name: 'Tatenda',
			  	pid: 79
			  },
			  {
			  	id: 118,
			  	name: 'Tanaka',
			  	pid: 114
			  },
			  {
			  	id: 119,
			  	name: 'Bridget',
			  	pid: 80
			  },
			  {
			  	id: 120,
			  	name: 'Otilia',
			  	pid: 80
			  },
			  {
			  	id: 121,
			  	name: 'Brilliant',
			  	pid: 80
			  },
			  {
			  	id: 122,
			  	name: 'Nicholas',
			  	pid: 81
			  },
			  {
			  	id: 123,
			  	name: 'Clemens',
			  	pid: 81
			  },
			  {
			  	id: 124,
			  	name: 'Walter',
			  	pid: 81
			  },
			  {
			  	id: 125,
			  	name: 'Munashe',
			  	pid: 81
			  },
			  {
			  	id: 126,
			  	name: 'Precious',
			  	pid: 82
			  },
			  {
			  	id: 127,
			  	name: 'Patron',
			  	pid: 82
			  },
			  {
			  	id: 128,
			  	name: 'Nedence',
			  	pid: 82
			  },
			  {
			  	id: 129,
			  	name: 'Collen',
			  	pid: 83
			  }
			]);
        }
	};
});