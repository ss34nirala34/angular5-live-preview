"use strict";
import * as vscode from "vscode";
import { BrowserContentProvider } from "./browserContentProvider";
import { Utilities } from "./utilies";
import { Server } from "./server";
import { Options } from "./options";

export function activate(context: vscode.ExtensionContext):void {
    const registration:any = vscode.workspace.registerTextDocumentContentProvider("http", new BrowserContentProvider());

    let disposable:any = vscode.commands.registerCommand("extension.preview", () => {
        let viewColumn: vscode.ViewColumn = 1;

        if (vscode.window.activeTextEditor !== undefined) {
            viewColumn = vscode.window.activeTextEditor.viewColumn;
            viewColumn = viewColumn < 3 ? viewColumn + 1 : 1;
        }

        Options.getOptions();

        Utilities.writeToStatusBar("The live preview window is loading...", false);
        Server.Start(() => {
            Utilities.writeToStatusBar("The live preview window has been loaded.", true, 3000);

            vscode.commands.executeCommand("vscode.previewHtml", Utilities.getWebServerUri(), viewColumn, Options.getOptions().title)
                .then(null, (reason) => {
                    vscode.window.showErrorMessage(reason);
            });
        });
    });

    let disposable2:any = vscode.commands.registerCommand("extension.launch", () => {
        Utilities.writeToStatusBar("The live preview window is launching...", false);
        Server.Start(() => {
            Utilities.writeToStatusBar("The live preview window has been launched.", true, 3000);
            vscode.commands.executeCommand("vscode.open", Utilities.getWebServerUri());
        });
    });

    context.subscriptions.push(disposable, disposable2, registration);
}

// tslint:disable-next-line:no-empty
export function deactivate():void { }