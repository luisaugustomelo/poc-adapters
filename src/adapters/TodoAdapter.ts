import IAdapter from '../interfaces/IAdapter';
  
class ToDoAdapter implements IAdapter {
    async execute(): Promise<string> {
        return `I have to do something`;
    }
}
  
  export default ToDoAdapter;