class CageApi {
    constructor() {
        this.cages = ["http://i.imgur.com/MqoYwNJ.png", "http://i.imgur.com/UdaKHaU.png", "http://i.imgur.com/YBM5Rz8.png", "http://i.imgur.com/3CKxHd3.png", "http://i.imgur.com/URk7y51.png", "http://i.imgur.com/fxm35zi.png"];
        this.colors = ['purple', 'green', 'orange', 'blue', 'red', 'white', 'green']
        this.words = ["Nick Cage is Life", "Nick Cage is Love", "Nick Cage is Kind", "Nick Cage is Disney", "Cage is Princess"];
        this.i = 0;
    }

    goToNext() {
        let index = this.i++;
        return {
            cage: this.cages[index % this.cages.length],
            color: this.colors[index % this.colors.length],
            quote: this.words[index % this.words.length]
        }
    }

    onReject(data) {
        console.log('rejected' + JSON.stringify(data));
    }

    onAccept(data) {
        console.log('accepted' + JSON.stringify(data));
    }
}

export default CageApi;