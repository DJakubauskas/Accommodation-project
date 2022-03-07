export const getAccommodations = async () => {
    const response = await fetch ('http://localhost:5000/api/accommodations')
    const data = await response.json()
    console.log(data)

}
