export class Node {
  public next: Node | null;
  public data: number | string | object;

  constructor(data: number | string | object) {
    this.next = null;
    this.data = data;
  }
}
