export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return  undefined;
        }
        return JSON.parse(serializedState)
    } catch(err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        console.log(JSON.stringify(state))
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        return undefined
    }
}