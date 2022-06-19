/// <reference types="cypress"/>

import { PartialObject } from 'cypress/types/lodash';
import { Component, ComponentOptions, Dropdown, DropdownOptions, Table, TableOptions } from './';

export * from './component';
export * from './factory';
export * from './dropdown';
export * from './table';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            component(locator?: string, options?: PartialObject<ComponentOptions>): Chainable<Component<HTMLElement>>;
            dropdown(locator?: string, options?: PartialObject<DropdownOptions>): Chainable<Dropdown>;
            table(locator?: string, options?: PartialObject<TableOptions>): Chainable<Table>;
        }
    }
}  