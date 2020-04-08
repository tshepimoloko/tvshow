import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.show.id)}>
			<img src={result.show.image.medium} alt="" />
			<h3>{result.show.name}</h3>
		</div>
	)
}

export default Result