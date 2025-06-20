    const delete_request = async (url) => {
        let URL = `http://localhost:5000/api/`+url
        let response  = await fetch(URL, {
            method: 'DELETE',
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        response = await response.json()
        return response;
    }
export default delete_request;