import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.name} <span>({ selected.premiered })</span></h2>
				<p className="rating"> Rating: {selected.rating}</p>
				<p className="summary"> Rating: {selected.summary}</p>
				<div className="rating">
					<img src={selected.image.medium} alt=""/>
					<p>{selected.genres}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup