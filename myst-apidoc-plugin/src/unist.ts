import type { GenericNode } from "myst-common";
export function text(value: string){
        return {"type": "text", "value": value}
}
export function span(children: GenericNode[], style={}): GenericNode{
    return {"type": "span", "children": children, "style": style}
}
export function div(children: GenericNode[], style={}): GenericNode{
    return {"type": "div", "children": children, "style": style}
}
export function emphasis(children: GenericNode[]): GenericNode{
    return {"type": "emphasis", "children": children}
}
export function strong(children: GenericNode[]): GenericNode {
    return {"type": "strong", "children": children}
}
export function linebreak(){
    return {"type": "break"}
}