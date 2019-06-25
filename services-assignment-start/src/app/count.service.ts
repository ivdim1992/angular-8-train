export class CountService {
     count:number = 0;

     incrementCount() {
         this.count++;
         console.log(`Total count is: ${this.count}`)
     }
}