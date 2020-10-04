
export class Message{
    text: string;
    time: Date;
    userName: string;

    constructor(text: string, time: Date, userName: string){
        this.text = text;
        this.time = time;
        this.userName = userName;
    }
}

