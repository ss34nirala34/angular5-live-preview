"use strict";
import * as vscode from "vscode";

export class Options {

    public static getOptions():IOptions {
        const configValues:any = vscode.workspace.getConfiguration("angular5WebServer");

        let portNumber:number = configValues.get("port") as number;
        let title:string  = configValues.get("title") as string;

        if (portNumber === undefined || portNumber === null) { portNumber = 4200; }
        if (title === undefined || title === null || title === "") { title = "Angular 5 - Live Preview"; }

        const result: IOptions = {
            port: portNumber,
            title: title
        };

        return result;
    }
}

interface IOptions {
    title: string;
    port: number;
}