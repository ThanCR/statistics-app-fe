const API_URL = 'http://localhost:8080/api/interaction/'
const interactionData = {
    type: "Click",
    date: new Date().toLocaleString()
}

//API calls

const fetchAllInteractionsPromise = async () => {
    const fetchReponse = await fetch(API_URL, {
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
    })

    if (!fetchReponse.ok)
        throw new Error('API response was not ok')
    else {
        return await fetchReponse.json()
    }

}

export const getAllInteractions = async () => {
    try {
        const data = await fetchAllInteractionsPromise();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getInteractionCount = async () =>{
    try {
        const data = await fetchAllInteractionsPromise();
        return data.length
    } catch (error) {
        console.log(error)
    }
}

export const postInteraction = () => {
    fetch(API_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(interactionData), // body data type must match "Content-Type" header
    })
        .then((response) => response.json())
        .then(data => data)
}

//TODO: PENDING TO CREATE GET BY ID CALL