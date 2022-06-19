import { Cypress } from 'cypress';
import { Dropdown } from './dropdown';
import { Table } from './table';

export * from './component';
export * from './factory';
export * from './dropdown';
export * from './table';

Cypress.Commands.add<'dropdown', 'optional'>(
    'dropdown',
    { prevSubject: 'optional' },
    (subject?:JQuery<HTMLElement>, locator = '', options?) => {
        if(subject) {
            const x = new Dropdown(subject.get()[0]);
            return cy.wrap(x);
        } 

        return cy.get(locator).dropdown();
    }
  )

Cypress.Commands.add<'table', 'optional'>(
    'table',
    { prevSubject: 'optional' },
    (subject?:JQuery<HTMLElement>, locator = '', options?) => {
        if(subject) {
            const x = new Table(subject.get()[0]);
            return cy.wrap(x);
        } 

        return cy.get(locator).table();
    }
  )
  
