import * as _comp from './components'

declare namespace Automation {
    namespace Components {
        type Component = _comp.Component<HTMLElement>;
        type Dropdown = _comp.Dropdown; 
        type Table = _comp.Table;
        type Factory = _comp.Factory;

        type DropdownOptions = _comp.DropdownOptions;
        type TableOptions = _comp.TableOptions;

        interface IFactory {
            fromHTMLElement<TComponent extends _comp.Component<HTMLElement>>(element: HTMLElement, ctor: (new (base: HTMLElement) => TComponent)): TComponent; 
            fromJQuery<TComponent extends _comp.Component<HTMLElement>>(jquery: JQuery<HTMLElement>, ctor: (new (base: HTMLElement) => TComponent)): void;
        }
    }
}

export = Automation;