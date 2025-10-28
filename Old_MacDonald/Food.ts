namespace Farm{
    export class Food {
        public type: string;
        public amount: number;

        public constructor(_type: string, _amount: number) {
            this.type = _type;
            this.amount = _amount;
        }

        public subtract(_subtracted: number): void {
            this.amount -= _subtracted;
        }
    }
}