import {useState} from 'react';
const useFLip = () => {
    const[state,setState] = useState(true);
    const flipState = () => {
        setState(state => !state)
    }
    return [state,flipState]
}

export default useFLip;