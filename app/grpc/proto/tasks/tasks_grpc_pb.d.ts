// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tasks_pb from "./tasks_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITaskServiceService_ICreate;
    update: ITaskServiceService_IUpdate;
    complete: ITaskServiceService_IComplete;
    incomplete: ITaskServiceService_IIncomplete;
    delete: ITaskServiceService_IDelete;
    get: ITaskServiceService_IGet;
}

interface ITaskServiceService_ICreate extends grpc.MethodDefinition<tasks_pb.TaskCreateRequest, tasks_pb.Task> {
    path: string; // "/tasks.TaskService/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskCreateRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskCreateRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IUpdate extends grpc.MethodDefinition<tasks_pb.TaskUpdateRequest, tasks_pb.Task> {
    path: string; // "/tasks.TaskService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskUpdateRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskUpdateRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IComplete extends grpc.MethodDefinition<tasks_pb.TaskFetchRequest, tasks_pb.Task> {
    path: string; // "/tasks.TaskService/Complete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskFetchRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskFetchRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IIncomplete extends grpc.MethodDefinition<tasks_pb.TaskFetchRequest, tasks_pb.Task> {
    path: string; // "/tasks.TaskService/Incomplete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskFetchRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskFetchRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IDelete extends grpc.MethodDefinition<tasks_pb.TaskFetchRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/tasks.TaskService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskFetchRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskFetchRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITaskServiceService_IGet extends grpc.MethodDefinition<tasks_pb.TaskFetchRequest, tasks_pb.Task> {
    path: string; // "/tasks.TaskService/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tasks_pb.TaskFetchRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskFetchRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer {
    create: grpc.handleUnaryCall<tasks_pb.TaskCreateRequest, tasks_pb.Task>;
    update: grpc.handleUnaryCall<tasks_pb.TaskUpdateRequest, tasks_pb.Task>;
    complete: grpc.handleUnaryCall<tasks_pb.TaskFetchRequest, tasks_pb.Task>;
    incomplete: grpc.handleUnaryCall<tasks_pb.TaskFetchRequest, tasks_pb.Task>;
    delete: grpc.handleUnaryCall<tasks_pb.TaskFetchRequest, google_protobuf_empty_pb.Empty>;
    get: grpc.handleUnaryCall<tasks_pb.TaskFetchRequest, tasks_pb.Task>;
}

export interface ITaskServiceClient {
    create(request: tasks_pb.TaskCreateRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    create(request: tasks_pb.TaskCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    create(request: tasks_pb.TaskCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.TaskUpdateRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.TaskUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.TaskUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    complete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    complete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    complete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    incomplete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    incomplete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    incomplete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    get(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    get(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    get(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: tasks_pb.TaskCreateRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public create(request: tasks_pb.TaskCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public create(request: tasks_pb.TaskCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.TaskUpdateRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.TaskUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.TaskUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public complete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public complete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public complete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public incomplete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public incomplete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public incomplete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public get(request: tasks_pb.TaskFetchRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public get(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public get(request: tasks_pb.TaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
}
