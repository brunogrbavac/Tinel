const fetchOptions = {
    method:'GET',
    headers: {'Content-Type': 'application/json'},
};

export const fetchData = async (url: string) => {
    const result = await fetch(url, fetchOptions);      
    const data = await result.json();

    return data;
};

const postOptions = (payload: object) => { 
    return ({
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
})};

export const postData = async (url: string, payload: object) => {
    const result = await fetch(url, postOptions(payload));      
    const data = await result.json();

    return data;
};