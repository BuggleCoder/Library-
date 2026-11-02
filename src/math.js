export class calc() {
    roundToNearest(a, b) {
        return a - (a % b);
    }
    
    digits(a) {
        if (a === 0) return 1; 
        return Math.floor(Math.log10(Math.abs(a))) + 1;
    }

    toPow(a, b) {
        if (b === 0) {
            return 0;
        } else if (b === 1) {
            return a;
        }

        return Math.pow(a, b);
    }
}