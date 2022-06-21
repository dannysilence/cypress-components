// export interface IComponent<T extends Element> {
//     get Container(): T;
//     get Width(): number;
//     get Height(): number;

//     getContainer(): T;
//     getWidth(): number;
//     getHeight(): number;
// }

export class Component<T extends Element> {
    constructor(protected element: T) { }

    public get Color(): string { return this.getColor(); }
    public get Document(): HTMLDocument { return this.getDocument(); }
    public get Element(): T { return this.getElement(); }
    public get Enabled(): Boolean { return this.getEnabled(); }
    public get Exists(): Boolean { return this.getExists(); }
    public get Width(): number { return this.getWidth(); }
    public get Height(): number { return this.getHeight(); }
    public get Text(): string { return this.getText(); }
    public set Text(value: string) { this.setText(value); }

    public get Window(): Window | null { return this.getWindow(); }
    
    public getElement() {
        return this.element;
    }

    public click(): void {
        cy
            .wrap(this.element, {log: false})
            .click();
    } 

    public type(value: string): void {
        const el = Cypress.$(this.element);

        cy
            .wrap(el, {log: false})
            .type(value);
    }

    public getEnabled(): Boolean {
        return !(((this.element as unknown) as HTMLInputElement).disabled);
    }

    public getExists() {
        const doc = this.getDocument();

        return doc.body.contains(this.element);
    }

    public getDocument(): HTMLDocument {
        return this.element.ownerDocument;
    }

    public getHeight(): number {
        return this.element.clientHeight;
    }

    public getWidth(): number {
        return this.element.clientWidth;
    }    

    public getText(): string {
        return this.element.tagName.toUpperCase() === 'INPUT'
            ? ((this.element as unknown) as HTMLInputElement).value
            : this.element.textContent ?? '';
    }

    public setText(value: string): void {
        if(this.element.tagName.toUpperCase() === 'INPUT') {
            ((this.element as unknown) as HTMLInputElement).value = value
        } else {
            this.element.textContent = value;
        }
    }
    
    public getColor(): string {
        let win = this.getWindow();
        
        return win?.getComputedStyle( this.element ,null).getPropertyValue('background-color') ?? 'rgb(0,0,0)';
    }
    
    public getWindow(): Window | null {
        let doc = this.getDocument();
        
        return doc.defaultView;
    }
}

export interface ComponentOptions {
    locator?: string
}