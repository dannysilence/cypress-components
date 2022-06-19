/// <reference types="cypress"/>

import { Dropdown, DropdownOptions } from './dropdown';
import { Table, TableOptions } from './table';
import { PartialObject } from 'cypress/types/lodash';

export * from './component';
export * from './factory';
export * from './dropdown';
export * from './table';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            dropdown(locator?: string, options?: PartialObject<DropdownOptions>): Chainable<Dropdown>;
            table(locator?: string, options?: PartialObject<DropdownOptions>): Chainable<Table>;
        }
    }
}  

Cypress.Commands.add<'dropdown', 'optional'>(
    'dropdown',
    { prevSubject: 'optional' },
    (subject?:JQuery<HTMLElement>, locator = '', options?: PartialObject<DropdownOptions>) => {
        if(subject) {
            const x = new Dropdown(subject.get()[0]);
            return cy.wrap(x);
        }
        
        return cy.get(locator).then($el => {
            let el = $el.get(0);
            return new Dropdown(el);
        });
    }
  )

Cypress.Commands.add<'table', 'optional'>(
    'table',
    { prevSubject: 'optional' },
    (subject?:JQuery<HTMLElement>, locator = '', options?: PartialObject<TableOptions>) => {
        if(subject) {
            const x = new Table(subject.get(0));
            return cy.wrap(x);
        } 

        return cy.get(locator).then($el => {
            let el = $el.get(0);
            return new Table(el);
        });
    }
  )
  
