import './index.css';



function ResultsPage({imagesList}) {
  return (
    <div className="results-page">
        {imagesList.map((image, index) => (
            <div key={index} className="result-image-container">
                <img src={image} alt={`Result ${index + 1}`} className="result-image" />
            </div>
        ))}
    </div>
  )
}

export default ResultsPage