            export interface IComponent<T extends Element> {
                get Container(): T;
                get Width(): number;
                get Height(): number;

                getContainer(): T;
                getWidth(): number;
                getHeight(): number;
            }

            export class Component<T extends Element> implements IComponent<T> {
                public get Container(): T { return this.getContainer(); }
                public get Width(): number { return this.getWidth(); }
                public get Height(): number { return this.getHeight(); }
                
                getContainer() {
                    return this._container;
                }

                getHeight(): number {
                    return this._container.clientHeight;
                }

                getWidth(): number {
                    return this._container.clientWidth;
                }

                super(base: T) {
                    this._container = base;
                }

                constructor(base: T) {
                    this.super(base);
                }

                private _container: T;
            }

            export class Factory {
                // static fromTElement<TElement extends Element, TComponent extends Component<TElement>>(element: TElement, ctor: (new (base: TElement) => TComponent)): TComponent {
                //     return new ctor(element);
                // }

                static fromElement<TComponent extends Component<Element>>(element: Element, ctor: (new (base: Element) => TComponent)): TComponent {
                    return new ctor(element);
                }

                static fromHTMLElement<TComponent extends Component<HTMLElement>>(element: HTMLElement, ctor: (new (base: HTMLElement) => TComponent)): TComponent {
                    return new ctor(element);
                }
            }
