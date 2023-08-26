import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
	const renderedImages = images.map((image) => {
		return (
			<div key={image.id}>
				<ImageShow image={image} />
			</div>
		);
	});

	return (
		<div className="image-list">
			<div>{renderedImages}</div>
		</div>
	);
}

export default ImageList;
