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
