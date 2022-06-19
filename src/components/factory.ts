/// <reference types="cypress"/>

import { PartialObject } from 'cypress/types/lodash';
import { Component, ComponentOptions, Dropdown, DropdownOptions, Table, TableOptions } from './';

export class Factory {
    static fromElement<TComponent extends Component<Element>>(element: Element, ctor: (new (base: Element) => TComponent)): TComponent {
        return new ctor(element);
    }

    static fromHTMLElement<TComponent extends Component<HTMLElement>>(element: HTMLElement, ctor: (new (base: HTMLElement) => TComponent)): TComponent {
        return new ctor(element);
    }

    static fromJQuery<TComponent extends Component<HTMLElement>>(jquery: JQuery<HTMLElement>, ctor: (new (base: HTMLElement) => TComponent)): TComponent {
        return new ctor(jquery.get(0));
    }

    static registerCommands(): void {
        Cypress.Commands.add<'component', 'optional'>(
            'component',
            { prevSubject: 'optional' },
            (subject?:JQuery<HTMLElement>, locator = '', options?: PartialObject<ComponentOptions>) => {
                if(subject) {
                    const x = new Component<HTMLElement>(subject.get()[0]);
                    return cy.wrap(x);
                }
                
                return cy.get(locator).then($el => {
                    let el = $el.get(0);
                    return new Component<HTMLElement>(el);
                });
            }
        )

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
    }
}
