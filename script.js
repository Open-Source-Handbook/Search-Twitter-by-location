ymaps = window.ymaps;
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [35.00, 1.00],
        zoom: 4
    }, {
        searchControlProvider: 'yandex#search'
    });
myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
		document.getElementById("latitude").value = [coords[0].toPrecision(9)];
		document.getElementById("longitude").value = [coords[1].toPrecision(9)];
            myMap.balloon.open(coords, {
                contentHeader:'Coordinates:',
                contentBody:'<p>' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });

}

function buttonOpen(buttonValue) {

    latitude = document.getElementById("latitude").value;
    longitude = document.getElementById("longitude").value;
    const links = [];
        links["Twitter"] = "https://twitter.com/search?q=near%3A"+latitude+"%2C"+longitude+"&src=typed_query&f=live";

 

    window.open(links[buttonValue]);

}
