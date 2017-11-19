"use strict";
import * as vscode from "vscode";
import { Utilities } from "./utilies";

export class BrowserContentProvider implements vscode.TextDocumentContentProvider {
    public provideTextDocumentContent():string {
        const editor:vscode.TextEditor = vscode.window.activeTextEditor;
        const uri:string = Utilities.getWebServerUrl();

        return `<style>html, body { background-color: #fff; }</style>
                <iframe src="${uri}" frameBorder="0" width="100%" height="1200px" />`;
    }
}
