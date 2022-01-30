import {Node} from '../index'

test('Create a Node with number data', (): void => {
    const node: Node = new Node(1);
    expect(node.next).toBe(null);
    expect(node.data).toBe(1);
});

test('Create a Node with string data', (): void => {
    const text  = "This is a string";
    const node: Node = new Node(text);
    expect(node.next).toBe(null);
    expect(node.data).toBe(text);
});

test('Create a Node with object data', (): void => {
    interface Person {
        name: string;
        age: number;
    }
    const data: Person = {
        'name': 'Test',
        'age': 100,
    };
    const node: Node = new Node(data);
    expect(node.next).toBe(null);
    expect(node.data).toBe(data);
});

test('Create two Nodes and set the first Node next to the second Node', (): void => {
    const data: number = 1;
    const firstNode: Node = new Node(data);
    expect(firstNode.next).toBe(null);
    expect(firstNode.data).toBe(data);
    const secondData: number = 2;
    const secondNode: Node = new Node(secondData);
    firstNode.next = secondNode;
    expect(firstNode.next).toBe(secondNode);
});