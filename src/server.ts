"use strict";
import * as vscode from "vscode";
import { Utilities } from "./utilies";
import { Options } from "./options";
const childProcess:any = require("child_process");

export class Server {
    public static Start(callback:any): void {
        const rootPath:string = vscode.workspace.rootPath;

        // tslint:disable-next-line:no-empty
        childProcess.exec(`ng serve --port ${Options.getOptions().port}`, { cwd: rootPath}, (err:any, stdout:any, stderr:any) => {});
        Utilities.webPreviewUrlOnStarted(callback);
    }
}