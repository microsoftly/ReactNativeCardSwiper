class ShapesApi {
    constructor() {
        this.shapes = ['pacman', 'fb', 'circle', 'triangle', 'yingYang', 'badgeRibbon'];
        this.i = 0;
    }

    goToNext() {
        let index = this.i++;
        let x = {
            shape: this.shapes[index % this.shapes.length]
        }

        console.log(x);
        return x;
    }

    onReject(data) {
        console.log('rejected' + JSON.stringify(data));
    }

    onAccept(data) {
        console.log('accepted' + JSON.stringify(data));
    }
}

export default ShapesApi;