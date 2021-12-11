export const formatDate = (today) => {

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today.toString()
}

//12/12/2020 => 12122020
export const documentName = (date) => {
    let arr = date.split("/")
    return arr[0]+arr[1]+arr[2]
}