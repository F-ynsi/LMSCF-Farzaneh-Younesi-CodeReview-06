let objectLocation: Array<theLocation>;
let objectRestaurants:Array<theRestaurants>;
let objectEvents:Array<theEvents>;
objectLocation = [];
objectRestaurants=[];
objectEvents=[];


let thePlace: Array<string>=["Vienna","Paris","NYC", "London"];
let imgPlaces: Array<string>=["img/stephan.jpeg","img/paris.jpg","img/nyc.jpg", "img/London.jpg"];
let descPlace:Array<string>=["vLorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis?", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam provident numquam tempore iste dignissimos ea consequatur officiis incidunt porro molestias amet optio, aspernatur repellendus nam? Magnam quo sint debitis"]
let theRest:Array<string>=["Yum Restaurant","Salad Bar","Schatzi","2020"]
let adressRest: Array<string>=["Karlsplatz 1","Rosenstreet 13b","Brodway 324 UWS", "Bulevard  12"];
let zip:Array<string>=["1010","2244","7743","2550"]
let linkRest:Array<string>=["http://www.yumrestaurant.at/","Salad Bar.wien","https://www.schatzi.net/","https://www.2020.at/"];
let numberRest:Array<string>=["+43(1)5854900","+43(1) 9529215","+43(1) 95294343","+43(1) 9529993"]
let imgRest: Array<string>=["img/onrest.jpg","img/biorest.jpg","img/coronarest.jpg", "img/pizza.jpg"];
let eventName:Array<string>=["Cats- the musical", "Gypsy- the musical","Guns ‘n Roses","Philharmonie Conzert"]
let eventDate: Array<string>=["12.3.2021", "16.9.2021", "28.6.2021", "17.1.2021"];
let eventTime: Array<string>=["17:00", "19:30", "13:00", "20:00"];
let imgEvent: Array<string>=["img/cats.jpg","img/gypsy.jpg","img/guns.jpg", "img/music.jpg"];
let linkEvent:Array<string>=["http://www.restaurant-on.at/","biofrische.wien","https://www.mjam.net/","https://www.leontine.at/"];





class theLocation {   
    imgPlaces:string 
    thePlace:string;
    descPlace:string
    zip:string;
    constructor(imgPlaces,thePlace,zip,descPlace){
        this.imgPlaces=imgPlaces
        this.thePlace=thePlace;
        this.zip=zip;
        this.descPlace=descPlace

    }
}

class theRestaurants extends theLocation{
    theRest:string;
    adressRest:string;
    linkRest:string;
    numberRest:string;
    imgRest:string;

    constructor(imgPlaces,thePlace,zip,descPlace,theRest,adressRest,linkRest,numberRest,imgRest){
        super(imgPlaces,thePlace,zip,descPlace);
        this.theRest=theRest;
        this.adressRest=adressRest;
        this.linkRest=linkRest;
        this.numberRest=numberRest;
        this.imgRest=imgRest
    
    }
}

class theEvents extends theLocation{
    eventName:string;
    eventDate:string; 
    eventTime:string;
    imgEvent:string;
    linkEvent:string;
   

    constructor(imgPlaces,thePlace,zip,descPlace,eventName,eventDate,eventTime,imgEvent,linkEvent){
        super(imgPlaces,thePlace,zip,descPlace);
        this.eventName=eventName;
        this.eventDate=eventDate;
        this.eventTime=eventTime;
        this.imgEvent=imgEvent
        this.linkEvent=linkEvent
    
    }
}

function createLocation (){
        for (let i = 0; i<4; i++){
            let place = new theLocation(imgPlaces[i], thePlace[i],zip[i],descPlace[i])
            objectLocation.push(place);
        }
    }
function visibleLocation(){
    var visibleLoc = "";
    for (let i = 0; i<objectLocation.length; i++){
        visibleLoc += `
        <div class="card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border">
     
            <p class="h5 p-3">${objectLocation[i].thePlace}</p>
            <p class="hoverLocation"><img src="${objectLocation[i].imgPlaces}" class="imgLoc" alt="img"></p>
        
        <p class="d-none">${objectLocation[i].zip}</p>
        <p class="hideDesc">${objectLocation[i].descPlace}</p>
        </div>

        `
    }
    document.getElementById("inhalt").innerHTML = visibleLoc
}

  




function createRestaurant (){
        for (let i = 0; i<4; i++){
            let restaurants = new theRestaurants (imgPlaces[i], thePlace[i],zip[i],descPlace[i],theRest[i], adressRest[i],linkRest[i],numberRest[i],imgRest[i])
            objectRestaurants.push(restaurants);
        }
    }
function visibleRestaurant(){
        var visibleRes = "";
        for (let i = 0; i<objectRestaurants.length; i++){
            visibleRes += `
        <div class="card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border">
       
        <p class="h5 p-3">Restaurant in ${objectRestaurants[i].thePlace}</p>
            <p class="hoverRest"><img src="${objectRestaurants[i].imgRest}" class="imgLoc" alt="img"></p>
            <p>${objectRestaurants[i].theRest}</p>
            <div class="hideRest">
            <p>${objectRestaurants[i].zip}</p>
            <p>${objectRestaurants[i].adressRest}</p>
            <p><a href="${objectRestaurants[i].linkRest}">${objectRestaurants[i].linkRest}</a></p>
            <p>${objectRestaurants[i].numberRest}</p>
            </div>
        </div>
            `
        };
        document.getElementById("inhalt1").innerHTML = visibleRes
    };





function createEvent (){
        for (let i = 0; i<4; i++){
            let events = new theEvents (imgPlaces[i], thePlace[i],zip[i],descPlace[i],eventName[i], eventDate[i],eventTime[i],imgEvent[i],linkEvent[i])
            objectEvents.push(events);
        };
    };

function visibleEvent(){
        var visibleEv = "";
        for (let i = 0; i<objectEvents.length; i++){
            visibleEv += `
        <div class="card text-white text-center bg-transparent col-lg-3 col-md-6 col-sm-12 border">
        
            <p class="h5 p-3">Event in ${objectEvents[i].thePlace}</p>
            <p class="hoverEvent"><img src="${objectEvents[i].imgEvent}" class="imgLoc" alt="img"></p>
            <p>${objectEvents[i].eventName}</p>
       
            <div class="hideEvent">
            <p>${objectEvents[i].zip}</p>
            <p>${objectEvents[i].eventDate}</p>
            <p>${objectEvents[i].eventTime}</p>
            <p><a href="${objectEvents[i].linkEvent}">${objectEvents[i].linkEvent}</a></p>
            </div>
        </div>
            `
        };
        document.getElementById("inhalt2").innerHTML = visibleEv
    };
    createLocation ();
    visibleLocation();
    createRestaurant();
    visibleRestaurant();
    createEvent ();
    visibleEvent();

    $(document).ready(function(){
        $(".hoverLocation").hover(function(){
            $(this).parent().find(".hideDesc").toggle()

    });
   
        $(".hoverRest").hover(function(){
            $(this).parent().find(".hideRest").toggle()
           
    });
   
        $(".hoverEvent").hover(function(){
            $(this).parent().find(".hideEvent").toggle()
            
    });
    }