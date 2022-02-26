var json = {
    "MovieDatabase": {
        "movie": [
            {
                "name": "The Change-Up",
                "genre": "comedy",
                "director": "David Dobkin",
                "Facebook_like": 252
            },
            {
                "name": "Rise of the Planet of the Apes",
                "genre": "SciFi",
                "director": "Rupert Wyatt",
                "Facebook_like": 472
            },
            {
                "name": "30 Minutes or Less",
                "genre": "adventure",
                "director": "Ruben Fleischer",
                "Facebook_like": 114
            },
            {
                "name": "Final Destination 5",
                "genre": "Horror",
                "director": "Steven Quale",
                "Facebook_like": 241
            }
        ]
    }
};


function getValueofPath(jsonData, path) {

    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    console.log(path) // changing string to "MovieDatabase.movie.0.name"

    var path_arr = path.split('.');

    for (var i = 0; i < path_arr.length; ++i) {

        var key = path_arr[i];

        if (key in jsonData) {

            if (jsonData[key] !== null) {

                jsonData = jsonData[key];

            } else {

                return null;

            }

        } else {

            return key;

        }

    }

    return jsonData;
}

console.log(getValueofPath(json, "MovieDatabase.movie[0].name"))