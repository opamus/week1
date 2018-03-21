const picArray = [
    {
        "id": 12,
        "time": "2017-03-02 22:55",
        "category": "Wife",
        "title": "Title 1",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
        "coordinates": {
            "lat": 60.2196781,
            "lng": 24.8079786
        },
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
]

for (let item of picArray){
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = item.thumbnail;
    img.alt = item.title;
    li.appendChild(img);
    li.addEventListener('click', (evt) => {
        console.log(evt.target);
        // TODO
        // print the title property of selected item to console

        console.log(item.title);
    });
    document.querySelector('ul').appendChild(li);
}