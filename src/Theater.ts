export class Theater {
    constructor(
        private theaterID: number,
        private name: string,
        private location: string,
        private seat:number
    ){}
    public assignShowTime(showTime: ShowTime): void {
        this.showTimes.push(showTime);
    }
    public getShowTime():ShowTime[]{
        return this.showTime;
    }
    public getAvailad
}