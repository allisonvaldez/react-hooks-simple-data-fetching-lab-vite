// Accept fetchDogImage as a prop
const FetchButton = ({ fetchDogImage }) => {
    return (
        // Add an onClick event that calls fetchDogImage
        <button className="fetch-button" onClick={fetchDogImage}>
            See New Doggie!
        </button>
    )
}

// Make globally available
export default FetchButton