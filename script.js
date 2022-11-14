class Message {
    constructor(author,text,time){
        this.author = author ;
        this.text = text ;
        this.time = time ;
    }
}
class Messenger{
    constructor(author,text){
        this.author = author ;
        this.text = text ;
    }
    show_history(){
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    send(author,text){
        console.log(`${this.show_history()} ${this.author=author} : ${this.text=text}`)
    }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()
