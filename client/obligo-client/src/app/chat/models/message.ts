
export class Message{
    text: string;
    time: Date;
    isMine: boolean;

    constructor(text: string, time: Date, isMine: boolean){
        this.text = text;
        this.time = time;
        this.isMine = isMine;
    }
}

