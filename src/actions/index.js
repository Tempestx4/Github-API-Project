const loading = { type: 'LOADING'};

const loadResult = repoList => ({ 
    type: 'LOAD_REPO',
    payload: repoList 
});

export const getResult = username => {
    return async dispatch => {
        dispatch(loading(username));
        try {
            const gitname = await fetchApiName(username);
            dispatch(loadResult(gitname))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};




// Helpers
const fetchApiName = async username => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await resp.json();
        if (data.status === 404) { throw Error('This user doesn\'t exist') }
        repoList = data.map(repo => repo.name)
        return repoList;
    } catch(err) {
        throw new Error(err.message)
    }
}
