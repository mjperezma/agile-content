import {useState} from 'react';
import ResultImage from '../../components/resultImage';

import './results.scss';

const Results = ({results, getSearchValue}) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const dontExist = results.length === 0 ? (
        <section className="empty">
            <h2> No found results for: <span className="empty__bold">{getSearchValue}</span>.</h2>
            <span>Try looking for: <span className="empty__bold">insect, fish, horse, crocodilia, bear, cetacean, cow, rabbit, cat, snake, dog, bird.</span></span>
        </section> ) 
        : ('');

        const handleClick = ({item}) => {
            setImage(item.image);
            setUrl(item.url);
            setTitle(item.title);
            setDescription(item.description);

        }
    
    return (
        <>
            {dontExist}
            <section className="results__content">
                <ul className='results' >
                    {results.map((item) => (
                    <li  className="results__container" key={item.id} onClick={() => handleClick({item})}>
                        <span className="results__url">{item.url}</span>
                        <h3 className="results__title">{item.title}</h3>
                        <p className="results__description">{item.description}</p>
                    </li>
                    ))}
                </ul>
                <div className="results__image">
                    <ResultImage url={url} title={title} image={image} description={description} />
                </div>
            </section>
     
        </>
    )
}

export default Results;