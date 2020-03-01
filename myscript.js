var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objectLocation;
var objectRestaurants;
var objectEvents;
objectLocation = [];
objectRestaurants = [];
objectEvents = [];
var thePlace = ["Vienna", "Paris", "NYC", "London"];
var imgPlaces = ["img/stephan.jpeg", "img/paris.jpg", "img/nyc.jpg", "img/London.jpg"];
var descPlace = ["vLorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis"];
var theRest = ["Yum Restaurant", "Salad Bar", "schatzi", "2020"];
var adressRest = ["Karlsplatz 1", "Rosenstreet 13b", "Brodway 324 UWS", "Bulevard Bulgaria 12"];
var zip = ["1010", "2244", "7743", "2550"];
var linkRest = ["http://www.restaurant-on.at/", "biofrische.wien", "https://www.mjam.net/", "https://www.leontine.at/"];
var numberRest = ["+43(1)5854900", "+43(1) 9529215", "+43(1) 95294343", "+43(1) 9529993"];
var imgRest = ["img/yum.jpg", "img/salad.jpg", "img/schatzi.jpg", "img/2020.jpg"];
var eventName = ["Cats- the musical", "Gypsy- the musical", "Guns ‘n Roses", "Philharmonie Conzert"];
var eventDate = ["12.3.2021", "16.9.2021", "28.6.2021", "17.1.2021"];
var eventTime = ["17:00", "19:30", "13:00", "20:00"];
var imgEvent = ["img/cats.jpg", "img/gypsy.jpg", "img/guns.jpg", "img/music.jpg"];
var linkEvent = ["http://www.Yum Restaurant.at/", "salad Bar.wien", "https://www.Schatzi.net/", "https://www.2020.at/"];
var theLocation = /** @class */ (function () {
    function theLocation(imgPlaces, thePlace, zip, descPlace) {
        this.imgPlaces = imgPlaces;
        this.thePlace = thePlace;
        this.zip = zip;
        this.descPlace = descPlace;
    }
    return theLocation;
}());
var theRestaurants = /** @class */ (function (_super) {
    __extends(theRestaurants, _super);
    function theRestaurants(imgPlaces, thePlace, zip, descPlace, theRest, adressRest, linkRest, numberRest, imgRest) {
        var _this = _super.call(this, imgPlaces, thePlace, zip, descPlace) || this;
        _this.theRest = theRest;
        _this.adressRest = adressRest;
        _this.linkRest = linkRest;
        _this.numberRest = numberRest;
        _this.imgRest = imgRest;
        return _this;
    }
    return theRestaurants;
}(theLocation));
var theEvents = /** @class */ (function (_super) {
    __extends(theEvents, _super);
    function theEvents(imgPlaces, thePlace, zip, descPlace, eventName, eventDate, eventTime, imgEvent, linkEvent) {
        var _this = _super.call(this, imgPlaces, thePlace, zip, descPlace) || this;
        _this.eventName = eventName;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.imgEvent = imgEvent;
        _this.linkEvent = linkEvent;
        return _this;
    }
    return theEvents;
}(theLocation));
function createLocation() {
    for (var i = 0; i < 4; i++) {
        var place = new theLocation(imgPlaces[i], thePlace[i], zip[i], descPlace[i]);
        objectLocation.push(place);
    }
}
function visibleLocation() {
    var visibleLoc = "";
    for (var i = 0; i < objectLocation.length; i++) {
        visibleLoc += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n     \n            <p class=\"h5 p-3\">" + objectLocation[i].thePlace + "</p>\n            <p class=\"hoverLocation\"><img src=\"" + objectLocation[i].imgPlaces + "\" class=\"imgLoc\" alt=\"img\"></p>\n        \n        <p class=\"d-none\">" + objectLocation[i].zip + "</p>\n        <p class=\"hideDesc\">" + objectLocation[i].descPlace + "</p>\n        </div>\n\n        ";
    }
    document.getElementById("inhalt").innerHTML = visibleLoc;
}
function createRestaurant() {
    for (var i = 0; i < 4; i++) {
        var restaurants = new theRestaurants(imgPlaces[i], thePlace[i], zip[i], descPlace[i], theRest[i], adressRest[i], linkRest[i], numberRest[i], imgRest[i]);
        objectRestaurants.push(restaurants);
    }
}
function visibleRestaurant() {
    var visibleRes = "";
    for (var i = 0; i < objectRestaurants.length; i++) {
        visibleRes += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n       \n        <p class=\"h5 p-3\">Restaurant in " + objectRestaurants[i].thePlace + "</p>\n            <p class=\"hoverRest\"><img src=\"" + objectRestaurants[i].imgRest + "\" class=\"imgLoc\" alt=\"img\"></p>\n            <p>" + objectRestaurants[i].theRest + "</p>\n            <div class=\"hideRest\">\n            <p>" + objectRestaurants[i].zip + "</p>\n            <p>" + objectRestaurants[i].adressRest + "</p>\n            <p><a href=\"" + objectRestaurants[i].linkRest + "\">" + objectRestaurants[i].linkRest + "</a></p>\n            <p>" + objectRestaurants[i].numberRest + "</p>\n            </div>\n        </div>\n            ";
    }
    ;
    document.getElementById("inhalt1").innerHTML = visibleRes;
}
;
function createEvent() {
    for (var i = 0; i < 4; i++) {
        var events = new theEvents(imgPlaces[i], thePlace[i], zip[i], descPlace[i], eventName[i], eventDate[i], eventTime[i], imgEvent[i], linkEvent[i]);
        objectEvents.push(events);
    }
    ;
}
;
function visibleEvent() {
    var visibleEv = "";
    for (var i = 0; i < objectEvents.length; i++) {
        visibleEv += "\n        <div class=\"card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border\">\n        \n            <p class=\"h5 p-3\">Event in " + objectEvents[i].thePlace + "</p>\n            <p class=\"hoverEvent\"><img src=\"" + objectEvents[i].imgEvent + "\" class=\"imgLoc\" alt=\"img\"></p>\n            <p>" + objectEvents[i].eventName + "</p>\n       \n            <div class=\"hideEvent\">\n            <p>" + objectEvents[i].zip + "</p>\n            <p>" + objectEvents[i].eventDate + "</p>\n            <p>" + objectEvents[i].eventTime + "</p>\n            <p><a href=\"" + objectEvents[i].linkEvent + "\">" + objectEvents[i].linkEvent + "</a></p>\n            </div>\n        </div>\n            ";
    }
    ;
    document.getElementById("inhalt2").innerHTML = visibleEv;
}
;
createLocation();
visibleLocation();
createRestaurant();
visibleRestaurant();
createEvent();
visibleEvent();
$(document).ready(function () {
    $(".hoverLocation").hover(function () {
        $(this).parent().find(".hideDesc").toggle();
    });
    $(".hoverRest").hover(function () {
        $(this).parent().find(".hideRest").toggle();
    });
    $(".hoverEvent").hover(function () {
        $(this).parent().find(".hideEvent").toggle();
    });
});
