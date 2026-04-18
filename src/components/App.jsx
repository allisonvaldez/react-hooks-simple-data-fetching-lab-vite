// Import necessary states, effects, and components
import { useState, useEffect } from "react"
import DogDisplay from "./DogDisplay"
import FetchButton from "./FetchButton"

/*
Create main App component which is in charge of:
    1. Load a random dog image on the page when the app first loads.
    2. Users should change/fetch additional dog images with button clicks from `https://dog.ceo/api/breeds/image/random`
    3. Display a loading message for the user while waiting for API requests.
*/

function App() {
    // Start by declaring state variables for `dogImage` and `loading`
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Use `useEffect` to call a function that feteches a dog image when the component mounts
    useEffect(() => {
        fetchDogImage();
    }, []);

    /*
    Define a function that fetches additional dog images from the provided website:
        1. Start with setting loading to true.
        2. Fetch dog image from the provided website.
        3. Update the image state with the new dog image.
        4. Set loading to false once the image is loaded.
        5. Handle errors with a try-catch block.
    */
    function fetchDogImage() {
        setLoading(true);

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setDogImage(data.dogImage);
                setLoading(false);
            })
            .catch(error => console.error("Error loading image: ", error));
    }


}