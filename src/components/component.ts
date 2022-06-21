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
    public get Width(): number { return this.getWidth(); }
    public get Height(): number { return this.getHeight(); }
    public get Text(): string { return this.getText(); }
    public get Window(): Window | null { return this.getWindow(); }
    
    public getElement() {
        return this.element;
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