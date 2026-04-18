//Accept message and loading as props
const DogDisplay = ({ message, loading }) => {
    return (
        <div className="dog-container">
            {/* If `loading` is true, display "Loading..." otherwise, display the image */}
            {loading ? <p> Loading...</p> : <img src={message} alt="A Random Dog"></img>}
        </div>
    )
}

// Make globally available
export default DogDisplay