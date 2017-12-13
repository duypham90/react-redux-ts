const getListNew = (offset, limit) => { 
    const URL = `http://tinanime.com/api/news?offset=${offset}&limit=${limit}`;

    return fetch(URL).then(res => res.json());
};
export default getListNew;

export const getCosplay = (page) => { 
    const options = {
        mode: 'no-cors'
    };
    const URL = `http://tinanime.com/api/genres/cosplay/news/?p=${page}`;
    
    return fetch(URL, options);
};

export const getHits = (q) => {
    const URL = `https://hn.algolia.com/api/v1/search?query=${q}`;

    return fetch(URL).then(res => res.json());
};

// getHits('redux').then(resJson => console.log(resJson)).catch(err => console.log(err));

// getCosplay(1)
// .then(resJson => console.log(resJson))
// .catch(e => console.log(e));



