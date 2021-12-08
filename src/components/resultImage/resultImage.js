import './resultImage.scss';
const ResultImage = ({url, title, description, image}) => {

    return (
        <div  className={`${image.length > 0  ? "image" : ""}`}> 
            <img className="image__picture" alt={title} src={image} />
            <p className="image__url">{url}</p>
            <p className="image__title">{title}</p>
            <p className="image__description">{description}</p>
        </div>
    )
}

export default ResultImage;