// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tasks_pb = require('./tasks_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Task(arg) {
  if (!(arg instanceof tasks_pb.Task)) {
    throw new Error('Expected argument of type tasks.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_Task(buffer_arg) {
  return tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskCreateRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskCreateRequest)) {
    throw new Error('Expected argument of type tasks.TaskCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskCreateRequest(buffer_arg) {
  return tasks_pb.TaskCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskFetchRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskFetchRequest)) {
    throw new Error('Expected argument of type tasks.TaskFetchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskFetchRequest(buffer_arg) {
  return tasks_pb.TaskFetchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskUpdateRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskUpdateRequest)) {
    throw new Error('Expected argument of type tasks.TaskUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskUpdateRequest(buffer_arg) {
  return tasks_pb.TaskUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  create: {
    path: '/tasks.TaskService/Create',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskCreateRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskCreateRequest,
    requestDeserialize: deserialize_tasks_TaskCreateRequest,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  update: {
    path: '/tasks.TaskService/Update',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskUpdateRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskUpdateRequest,
    requestDeserialize: deserialize_tasks_TaskUpdateRequest,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  complete: {
    path: '/tasks.TaskService/Complete',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskFetchRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskFetchRequest,
    requestDeserialize: deserialize_tasks_TaskFetchRequest,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  incomplete: {
    path: '/tasks.TaskService/Incomplete',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskFetchRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskFetchRequest,
    requestDeserialize: deserialize_tasks_TaskFetchRequest,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  delete: {
    path: '/tasks.TaskService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskFetchRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_tasks_TaskFetchRequest,
    requestDeserialize: deserialize_tasks_TaskFetchRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  get: {
    path: '/tasks.TaskService/Get',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskFetchRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskFetchRequest,
    requestDeserialize: deserialize_tasks_TaskFetchRequest,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
