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

    public get Element(): T { return this.getElement(); }
    public get Width(): number { return this.getWidth(); }
    public get Height(): number { return this.getHeight(); }
    public get Text(): string | undefined { return this.getText(); }
    
    getElement() {
        return this.element;
    }

    getHeight(): number {
        return this.element.clientHeight;
    }

    getWidth(): number {
        return this.element.clientWidth;
    }    

    getText(): string {
        return this.element.textContent ?? '';
    }
}
