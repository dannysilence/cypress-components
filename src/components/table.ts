import { Component, ComponentOptions } from "./component";

export class Table extends Component<HTMLElement> {
    constructor(element: HTMLElement) { 
        super(element);
    }

    public getColumnNames(): string[] {
        return Array.from(this.element.querySelectorAll('thead th')).map(e => e.textContent);
    }

    public getColumnIndex(id: number|string): number {
        const names = this.getColumnNames();

        if(typeof(id) === typeof(Number)) {
            return (id as number);
        }

        for (let index = 0; index < names.length; index++) {
            const element = names[index];
            
            if(element === id) {
                return index;
            }
        }

        return -1;
    }

    public getColumnData(id: number|string): string[] {
        const col = this.getColumnIndex(id);
        const items = Array.from(this.element.querySelectorAll(`tbody > tr > td:nth-child(${col+1})`)).map(e => e.textContent);

        return  items;
    }
}

export interface TableOptions extends ComponentOptions {
    
}