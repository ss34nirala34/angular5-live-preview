"use strict";
import * as vscode from "vscode";
import { setInterval, clearInterval } from "timers";
import { Options } from "./options";
const request:any = require("request");

export class Utilities {
    private static _statusBarItem: vscode.StatusBarItem;

    public static getWebServerUrl():string {
        return `http://localhost:${Options.getOptions().port}`;
    }

    public static getWebServerUri():vscode.Uri {
        return vscode.Uri.parse(this.getWebServerUrl());
    }

    public static webPreviewUrlOnStarted(callback:any): void {
        const url:string = this.getWebServerUrl();

        const timer:any = setInterval(() => {
            request({
                url: url,
                method: "GET",
                timeout: 0,
            }, (error: any, response:any, body:any) => {
                if(!error && response.statusCode === 200) {
                    clearInterval(timer);
                    callback();
                }
            });
        }, 1250);
    }

    public static writeToStatusBar(text:string, needClose:boolean, closeTimeout?:number): void {
        if (!this._statusBarItem) {
            this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        }

        this._statusBarItem.text = text;
        this._statusBarItem.show();

        if (needClose) {
            closeTimeout = closeTimeout === null ? 1500 : closeTimeout;
            setTimeout(() => {
                this._statusBarItem.hide();
            }, closeTimeout);
        }
    }
}