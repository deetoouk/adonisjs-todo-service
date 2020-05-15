// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Task extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getCompleted(): boolean;
    setCompleted(value: boolean): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;

    getCreatedAt(): string;
    setCreatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: string,
        name: string,
        completed: boolean,
        updatedAt: string,
        createdAt: string,
    }
}

export class TaskCreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskCreateRequest): TaskCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskCreateRequest;
    static deserializeBinaryFromReader(message: TaskCreateRequest, reader: jspb.BinaryReader): TaskCreateRequest;
}

export namespace TaskCreateRequest {
    export type AsObject = {
        name: string,
    }
}

export class TaskUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskUpdateRequest): TaskUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskUpdateRequest;
    static deserializeBinaryFromReader(message: TaskUpdateRequest, reader: jspb.BinaryReader): TaskUpdateRequest;
}

export namespace TaskUpdateRequest {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class TaskFetchRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskFetchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskFetchRequest): TaskFetchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskFetchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskFetchRequest;
    static deserializeBinaryFromReader(message: TaskFetchRequest, reader: jspb.BinaryReader): TaskFetchRequest;
}

export namespace TaskFetchRequest {
    export type AsObject = {
        id: string,
    }
}
