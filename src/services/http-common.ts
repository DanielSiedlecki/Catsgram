import axios from "axios";


export async function fetchCats() {
    
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        return response.data
    }

    catch (error) {
        console.log("Wystąpił błąd ", error)
        return null
    }

}


export async function fetchOneCat(){

    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search')
        return response
    }

    catch (error) {
        console.log('Wysąpił błąd', error)
        return null 
    }
}