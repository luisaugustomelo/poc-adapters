// adapter.ts
interface IAdapter {
    execute(): Promise<string>;
}

export default IAdapter;