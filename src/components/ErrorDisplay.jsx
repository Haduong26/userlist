import '../styles/ErrorDisplay.css'

export default function ErrorDisplay({setError}) {

    return (
        <div className='error-content'>
            <span>We are sorry that we are unable to get the information for you right now.</span><br />
            <span>Please go back to try again!</span><br />

            <button onClick={() => setError(false)}>Go Back</button>
        </div>
    )
}