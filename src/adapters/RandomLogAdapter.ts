// adapter.ts
import IAdapter from '../interfaces/IAdapter';
  
class RandomLogAdapter implements IAdapter {
    async execute(): Promise<string> {
        const randomNumber = Math.random();
        console.log(`Random number: ${randomNumber}`);
        return `Logged random number: ${randomNumber}`;
    }
}
  
  export default RandomLogAdapter;