const ResultImage = ({url, title, description, image}) => {

    return (
        <div className="image">
            <img alt={title} src={image} />
            <p>{title}</p>
            <p>{url}</p>
            <p>{description}</p>
        </div>
    )
}

export default ResultImage;