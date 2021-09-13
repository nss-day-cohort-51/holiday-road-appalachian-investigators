export const getParks = () => {

    return fetch("https://developer.nps.gov/api/v1/parks?&api_key=JpB5REQaYx3Bo5d4goXla9Xz0JXeSN6XiVnVxmQB")
    .then(response => response.json())
    .then(data => console.log(data))
    
    
}

