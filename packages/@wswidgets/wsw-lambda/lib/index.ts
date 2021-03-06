import {Callback} from 'aws-lambda';

export interface WsWidgetEvent {
    connectionId: string;
    messageId: string;
    payload: object;
}

export enum ResponseCode {
    Ok = 200,
    GenericError = 500
}

export function success (event: WsWidgetEvent, callback: Callback, body?: object) {
    callback(null, {
        connectionId: event.connectionId,
        messageId: event.messageId,
        status: ResponseCode.Ok,
        response: body
    })
}

export function failure (event: WsWidgetEvent, callback: Callback, err?: Error) {
    callback(null, {
        connectionId: event.connectionId,
        messageId: event.messageId,
        status: ResponseCode.GenericError,
        response: err
    })
}
