import { Component, ComponentOptions } from "./component";

export class Dropdown extends Component<HTMLElement> {
    constructor(element: HTMLElement) {
        super(element);
    }
    
    public get selectedItem(): string { return this.getSelectedItem(); }
    public set selectedItem(value: string) { this.setSelectedItem(value); }

    public getSelectedItem(): string {
        return ''; //TODO
    }

    public setSelectedItem(value: string) {
        //TODO
    }
}

export interface DropdownOptions extends ComponentOptions {
    
}