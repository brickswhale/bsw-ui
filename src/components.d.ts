/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BswButton {
        "class": string;
    }
    interface BswContainer {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLBswButtonElement extends Components.BswButton, HTMLStencilElement {
    }
    var HTMLBswButtonElement: {
        prototype: HTMLBswButtonElement;
        new (): HTMLBswButtonElement;
    };
    interface HTMLBswContainerElement extends Components.BswContainer, HTMLStencilElement {
    }
    var HTMLBswContainerElement: {
        prototype: HTMLBswContainerElement;
        new (): HTMLBswContainerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "bsw-button": HTMLBswButtonElement;
        "bsw-container": HTMLBswContainerElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface BswButton {
        "class"?: string;
    }
    interface BswContainer {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "bsw-button": BswButton;
        "bsw-container": BswContainer;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bsw-button": LocalJSX.BswButton & JSXBase.HTMLAttributes<HTMLBswButtonElement>;
            "bsw-container": LocalJSX.BswContainer & JSXBase.HTMLAttributes<HTMLBswContainerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
