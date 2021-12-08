import './results.scss';

const Results = ({results, getSearchValue}) => {
    const dontExist = results.length === 0 ? (
        <section className="empty">
            <h2> No found results for: <span className="empty__bold">{getSearchValue}</span>.</h2>
            <span>Try looking for: <span className="empty__bold">insect, fish, horse, crocodilia, bear, cetacean, cow, rabbit, cat, snake, dog, bird.</span></span>
        </section> ) 
        : ('');
    return (
        <>
            {dontExist}
            <ul className='results' >
                {results.map((item) => (
                <li  className="results__container" key={item.id}>
                    <span className="results__url">{item.url}</span>
                    <h3 className="results__title">{item.title}</h3>
                    <p>{item.description}</p>
                </li>
                ))}
            </ul>
     
        </>
    )
}

export default Results;