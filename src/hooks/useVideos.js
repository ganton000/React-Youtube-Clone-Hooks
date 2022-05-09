import { useState, useEffect } from 'react';
import Youtube from '../api/Youtube';


const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = (term) => {
        Youtube.get('/search',{
            params: { q: term }
        }).then(res => res.data.items)
        .then(videos => {
            setVideos(videos)
        })
        .catch( err => JSON.stringify(err))
    };

    return [videos, search];
};


export default useVideos;
