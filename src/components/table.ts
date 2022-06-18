import { Component } from "./component";

export class Table extends Component<HTMLElement> {
    constructor(element: HTMLElement) { 
        super(element);
    }
}

export interface TableOptions {
    locator?: string
}