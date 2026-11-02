export class calc() {
    roundToNearest(a, b) {
        return a - (a % b);
    }
    
    digits(a) {
        if (a === 0) return 1; 
        return Math.floor(Math.log10(Math.abs(a))) + 1;
    }
}