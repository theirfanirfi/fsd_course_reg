import {useEffect} from 'react';
import { useDispatch } from 'react-redux';

const useGet = (url, storeFunction) => {
    const dispatch = useDispatch();
    useEffect(()=>{

        const fetch_data = async () => { 
        let response = await fetch("http://localhost:5000/api/"+url, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }
        )
        response = await response.json()
        dispatch(storeFunction(response.data));
    }
    

    fetch_data();

    },[url]);


    return null;
}

export default useGet;