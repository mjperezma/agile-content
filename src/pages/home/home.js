import Search from '../../components/search';

const Home = ({onChange, getResults, getSearchValue}) => {

    return (
        <>
            <Search onChange={onChange} results={getResults} searchValue={getSearchValue}/>
        </>
    )
}

export default Home;