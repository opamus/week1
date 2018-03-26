'use strict';
const picArray = [
    {
        "id": 12,
        "time": "2017-03-02 22:55",
        "category": "Wife",
        "title": "Title 1",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
        "coordinates": { "lat": 60.2196781, "lng": 24.8079786 },
        "thumbnail": "http://placekitten.com/320/300",
        "image": "http://placekitten.com/768/720",
        "original": "http://placekitten.com/2048/1920"
    },
    {
        "id": 15,
        "time": "2017-03-01 19:23",
        "category": "Wife",
        "title": "Title 2",
        "details": "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
        "coordinates": { "lat": 60.3196781, "lng": 24.9079786 },
        "thumbnail": "http://placekitten.com/321/300",
        "image": "http://placekitten.com/770/720",
        "original": "http://placekitten.com/2041/1920"
    },
    {
        "id": 34,
        "time": "2017-12-04 09:45",
        "category": "Girlfriend",
        "title": "Title 3",
        "details": "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
        "coordinates": { "lat": 60.3196781, "lng": 24.9079786 },
        "thumbnail": "http://placekitten.com/319/300",
        "image": "http://placekitten.com/769/720",
        "original": "http://placekitten.com/2039/1920"
    }
];

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const test = document.getElementById("button1");
const test2 = document.getElementById("button2");
const test3 = document.getElementById("button3");

const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");

const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close2")[0];
const span3 = document.getElementsByClassName("close3")[0];

const category = document.getElementById("wife");
const category2 = document.getElementById("girlfriend");
const category3 = document.getElementById("showall");

/* const word1 = "title";
const dates = picArray.filter(word => word.startsWith(word1));
console.log(dates); */


category.addEventListener('click', (evt)=>{
    image1.style.display="none";
    image2.style.display="inline-block";
    image3.style.display="inline-block";
    category.removeEventListener(evt);
});

category2.addEventListener('click', (evt)=>{
    image1.style.display="inline-block";
    image2.style.display="none";
    image3.style.display="none";
    category2.removeEventListener(evt);

});

category3.addEventListener('click', (evt)=>{
    image1.style.display="inline-block";
    image2.style.display="inline-block";
    image3.style.display="inline-block";
});

/* category2.addEventListener('click', (evt)=>{
    image2.style.display ="none";
    image3.style.display ="none";
    image3.style.display ="inline-block";
}); */

/*category.onclick = function () {
    image1.style.display = "none";
}; */

test.addEventListener('click', (evt)=>{
    modal.style.display = "block";
});

test2.addEventListener('click', (evt)=>{
    modal2.style.display = "block";
});

test3.addEventListener('click', (evt)=>{
    modal3.style.display = "block";
});

span.addEventListener('click', (evt)=>{
    modal.style.display = "none";
});

span2.addEventListener('click', (evt)=>{
    modal2.style.display = "none";
});

span3.addEventListener('click', (evt)=>{
    modal3.style.display = "none";
});



