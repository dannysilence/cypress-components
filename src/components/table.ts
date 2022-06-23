import { Component, ComponentOptions } from "./component";

export class Table extends Component<HTMLElement> {
    constructor(element: HTMLElement) { 
        super(element);
    }

    public getCell(row: number, column: number|string) : HTMLElement {
        const col = this.getColumnIndex(column);

        return this.element.querySelector(`tbody > tr:nth-child(${row+1}) > td:nth-child(${col+1})`) as HTMLElement;
    }

    public getCellData(row: number, column: number|string) : string {
        const cell = this.getCell(row, column);

        return cell.innerText;
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

    public getColumn(id: number|string): HTMLElement[] {
        const col = this.getColumnIndex(id);
        const items = Array.from(this.element.querySelectorAll(`tbody > tr > td:nth-child(${col+1})`)).map(i => ((i as unknown) as HTMLElement));

        return items;
    }

    public getColumnData(id: number|string): string[] {
        const items = this.getColumn(id);

        return items.map(i => i.textContent);
    }


}

export interface TableOptions extends ComponentOptions {
    
}