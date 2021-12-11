const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
export const formatDate = (today: Date) => {

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy
}

//12/12/2020 => 12122020
export const documentName = (date: String) : string => {
    let arr = date.split("/")
    return arr[0]+arr[1]+arr[2]
}

//12/12/2020 => 2020/12/12 [year, month, date]
export const splitDates = (date: String): MyDate => {
    let arr = date.split("/")
    const myDate = new MyDate(arr[1], arr[0], arr[2]);
    return myDate;
}

class MyDate {
    day: number;
    month: number;
    year: number;
    constructor(day: any, month: any, year: any) {
        this.day = Number(day);
        this.month = Number(month);
        this.year = Number(year);
    }

    public monthName() {
        return monthNames[this.month-1]
    }

    public toString(): string {
        return this.year+'/'+this.month;
    }
}