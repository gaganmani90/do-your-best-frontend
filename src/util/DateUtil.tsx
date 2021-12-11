export const formatDate = (today: Date) => {

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy
}

//12/12/2020 => 12122020
export const documentName = (date: String) => {
    let arr = date.split("/")
    return arr[0]+arr[1]+arr[2]
}