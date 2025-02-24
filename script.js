// (Most comments will just be for my own self reference)

//Creating a variable "photos" for all images, with different images using different types to differentiate them.

const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];

console.log('hello');

//Creating a variable for the Section element
const sectGallery = document.getElementById('gallery');
//Using "let" since it's going to be a changing value
//This variable will be used to keep track of how many images can be loaded later on
let spotIn_array = 0;

//Displaying all photos as default screen
displayMore();
//OLDER METHOD BELOW
// function defaultPage() {
//     const groupLoaded = photos.slice(spotIn_array, spotIn_array+6);

//     groupLoaded.forEach(photos => {
//         const imgDisplay = document.createElement('img');
//         imgDisplay.src = photos.url;

//         sectGallery.appendChild(imgDisplay);
//     })
//     spotIn_array += 6;
// };
// window.onload = defaultPage();

//Function to display all images inside of the Section element
//Also sets up the "Load More" button for when you click on the "All" tab, without it the button won't work despite the first 6 images being the only ones loaded up
function displayAll_button() {
    sectGallery.innerHTML = ' ';

    const groupLoaded = photos.slice(spotIn_array, spotIn_array+6);

    groupLoaded.forEach(photos => {
        const imgDisplay = document.createElement('img');
        imgDisplay.src = photos.url;

        sectGallery.appendChild(imgDisplay);
    })

    spotIn_array += 6;
};

//Function for the "Load More" button to work both on the "All" tab and the default page when loaded up
function displayMore() {
    const groupLoaded = photos.slice(spotIn_array, spotIn_array+6);

    groupLoaded.forEach(photos => {
        const imgDisplay = document.createElement('img');
        imgDisplay.src = photos.url;

        sectGallery.appendChild(imgDisplay);
    })

    spotIn_array += 6;
}

//Function to display only nature pics
function displayNature_button() {
    //Removes all images already displayed before hand
    sectGallery.innerHTML = ' ';

    //Sorting through what images fall under 'nature'
    const naturePics = photos.filter(photo => photo.type === 'nature');

    //Arrow function used for simplicity, even if it's a little cryptic still-
    naturePics.forEach(photos => {
        const imgDisplay = document.createElement('img');
        imgDisplay.src = photos.url;

        sectGallery.appendChild(imgDisplay);
    })
};

//Function to display only city pics
function displayCity_button() {
    sectGallery.innerHTML = ' ';

    //Sorting through what images fall under 'city'
    const cityPics = photos.filter(photo => photo.type === 'city');

    cityPics.forEach(photos => {
        const imgDisplay = document.createElement('img');
        imgDisplay.src = photos.url;

        sectGallery.appendChild(imgDisplay);
    })
};

//Function to display only animal pics
function displayAnimals_button() {
    sectGallery.innerHTML = ' ';

    //Sorting through what images fall under 'city'
    const animalPics = photos.filter(photo => photo.type === 'animals');

    animalPics.forEach(photos => {
        const imgDisplay = document.createElement('img');
        imgDisplay.src = photos.url;

        sectGallery.appendChild(imgDisplay);
    })
};

//Creating variables for the Buttons
const buttonAll = document.getElementById('all');
const buttonNature = document.getElementById('nature');
const buttonCity = document.getElementById('city');
const buttonAnimal = document.getElementById('animals');

//Events for when buttons get clicked on
document.getElementById('all').addEventListener('click', displayAll_button);
document.getElementById('nature').addEventListener('click', displayNature_button);
document.getElementById('city').addEventListener('click', displayCity_button);
document.getElementById('animals').addEventListener('click', displayAnimals_button);
//Event for loading more images
document.getElementById('loadMore').addEventListener('click', displayMore);