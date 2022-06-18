export class Table {
    constructor(private element?: HTMLElement) {

    }

    get Text(): string | undefined { return this.element?.innerText; }
    get Container(): HTMLElement | undefined { return this.element; }
}

export interface TableOptions {
    locator?: string
}