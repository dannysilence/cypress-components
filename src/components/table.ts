import { Component, ComponentOptions } from "./component";

export class Table extends Component<HTMLElement> {
    constructor(element: HTMLElement) { 
        super(element);
    }
}

export interface TableOptions extends ComponentOptions {
    
}