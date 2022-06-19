import * as _comp from './components'

declare global {
    namespace Automation {
        namespace Components {
            type Component = _comp.Component<HTMLElement>;
            type Dropdown = _comp.Dropdown; 
            type Table = _comp.Table;
            type Factory = _comp.Factory;

            type ComponentOptions = _comp.ComponentOptions;
            type DropdownOptions = _comp.DropdownOptions;
            type TableOptions = _comp.TableOptions;
        }
    }
}

export = Automation;