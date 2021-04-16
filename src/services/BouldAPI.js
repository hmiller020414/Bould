const baseUrl = 'https://parseapi.back4app.com/classes/Bould';

const memberUrl = id => `${baseUrl}/${id}`;

const authHeaders = {
    'X-Parse-Application-Id': process.env.REACT_APP_PARSE_APPLICATION_ID,
    'X-Parse-Javascript-Key': process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
}

const reformatResponseData = response => {

    const reformatClimb = (climb) => {
        const {objectId, color, rating, location, image} = climb;
        return {id: objectId, color, rating, location, image};
    }

    let data = response.data;
    if (data.results && Array.isArray(data.results))
        data = data.results.map( c => reformatClimb(c) );
    else
        data.reformatClimb(data);

    return {data};
}

const show = id => {
    return fetch(memberUrl(id), { headers: authHeaders } )
        .then(reformatResponseData);
}

const BouldAPI = {
    show,
}

export default BouldAPI;

