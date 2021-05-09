/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Vote } from "../cosmo/vote";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Poll } from "../cosmo/poll";
import { Comment } from "../cosmo/comment";
import { Post } from "../cosmo/post";

export const protobufPackage = "BiKunTin.cosmo.cosmo";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetVoteRequest {
  id: number;
}

export interface QueryGetVoteResponse {
  Vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  Vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPollRequest {
  id: number;
}

export interface QueryGetPollResponse {
  Poll: Poll | undefined;
}

export interface QueryAllPollRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPollResponse {
  Poll: Poll[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentRequest {
  id: number;
}

export interface QueryGetCommentResponse {
  Comment: Comment | undefined;
}

export interface QueryAllCommentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommentResponse {
  Comment: Comment[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPostRequest {
  id: number;
}

export interface QueryGetPostResponse {
  Post: Post | undefined;
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPostResponse {
  Post: Post[];
  pagination: PageResponse | undefined;
}

const baseQueryGetVoteRequest: object = { id: 0 };

export const QueryGetVoteRequest = {
  encode(
    message: QueryGetVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetVoteResponse: object = {};

export const QueryGetVoteResponse = {
  encode(
    message: QueryGetVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Vote !== undefined) {
      Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.Vote !== undefined && object.Vote !== null) {
      message.Vote = Vote.fromJSON(object.Vote);
    } else {
      message.Vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.Vote !== undefined &&
      (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.Vote !== undefined && object.Vote !== null) {
      message.Vote = Vote.fromPartial(object.Vote);
    } else {
      message.Vote = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteRequest: object = {};

export const QueryAllVoteRequest = {
  encode(
    message: QueryAllVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteResponse: object = {};

export const QueryAllVoteResponse = {
  encode(
    message: QueryAllVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Vote.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.Vote) {
      obj.Vote = message.Vote.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.Vote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.Vote = [];
    if (object.Vote !== undefined && object.Vote !== null) {
      for (const e of object.Vote) {
        message.Vote.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPollRequest: object = { id: 0 };

export const QueryGetPollRequest = {
  encode(
    message: QueryGetPollRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPollRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollRequest {
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPollRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPollRequest>): QueryGetPollRequest {
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPollResponse: object = {};

export const QueryGetPollResponse = {
  encode(
    message: QueryGetPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Poll !== undefined) {
      Poll.encode(message.Poll, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Poll = Poll.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollResponse {
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    if (object.Poll !== undefined && object.Poll !== null) {
      message.Poll = Poll.fromJSON(object.Poll);
    } else {
      message.Poll = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPollResponse): unknown {
    const obj: any = {};
    message.Poll !== undefined &&
      (obj.Poll = message.Poll ? Poll.toJSON(message.Poll) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPollResponse>): QueryGetPollResponse {
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    if (object.Poll !== undefined && object.Poll !== null) {
      message.Poll = Poll.fromPartial(object.Poll);
    } else {
      message.Poll = undefined;
    }
    return message;
  },
};

const baseQueryAllPollRequest: object = {};

export const QueryAllPollRequest = {
  encode(
    message: QueryAllPollRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPollRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPollRequest {
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPollRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPollRequest>): QueryAllPollRequest {
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPollResponse: object = {};

export const QueryAllPollResponse = {
  encode(
    message: QueryAllPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Poll) {
      Poll.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.Poll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Poll.push(Poll.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPollResponse {
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.Poll = [];
    if (object.Poll !== undefined && object.Poll !== null) {
      for (const e of object.Poll) {
        message.Poll.push(Poll.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPollResponse): unknown {
    const obj: any = {};
    if (message.Poll) {
      obj.Poll = message.Poll.map((e) => (e ? Poll.toJSON(e) : undefined));
    } else {
      obj.Poll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPollResponse>): QueryAllPollResponse {
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.Poll = [];
    if (object.Poll !== undefined && object.Poll !== null) {
      for (const e of object.Poll) {
        message.Poll.push(Poll.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentRequest: object = { id: 0 };

export const QueryGetCommentRequest = {
  encode(
    message: QueryGetCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentRequest>
  ): QueryGetCommentRequest {
    const message = { ...baseQueryGetCommentRequest } as QueryGetCommentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCommentResponse: object = {};

export const QueryGetCommentResponse = {
  encode(
    message: QueryGetCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromJSON(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined &&
      (obj.Comment = message.Comment
        ? Comment.toJSON(message.Comment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentResponse>
  ): QueryGetCommentResponse {
    const message = {
      ...baseQueryGetCommentResponse,
    } as QueryGetCommentResponse;
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromPartial(object.Comment);
    } else {
      message.Comment = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentRequest: object = {};

export const QueryAllCommentRequest = {
  encode(
    message: QueryAllCommentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentRequest>
  ): QueryAllCommentRequest {
    const message = { ...baseQueryAllCommentRequest } as QueryAllCommentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommentResponse: object = {};

export const QueryAllCommentResponse = {
  encode(
    message: QueryAllCommentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCommentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommentResponse): unknown {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.Comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommentResponse>
  ): QueryAllCommentResponse {
    const message = {
      ...baseQueryAllCommentResponse,
    } as QueryAllCommentResponse;
    message.Comment = [];
    if (object.Comment !== undefined && object.Comment !== null) {
      for (const e of object.Comment) {
        message.Comment.push(Comment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPostRequest: object = { id: 0 };

export const QueryGetPostRequest = {
  encode(
    message: QueryGetPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPostResponse: object = {};

export const QueryGetPostResponse = {
  encode(
    message: QueryGetPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromJSON(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.Post !== undefined &&
      (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromPartial(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },
};

const baseQueryAllPostRequest: object = {};

export const QueryAllPostRequest = {
  encode(
    message: QueryAllPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPostResponse: object = {};

export const QueryAllPostResponse = {
  encode(
    message: QueryAllPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
  CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "Vote",
      data
    );
    return promise.then((data) =>
      QueryGetVoteResponse.decode(new Reader(data))
    );
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "VoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoteResponse.decode(new Reader(data))
    );
  }

  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse> {
    const data = QueryGetPollRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "Poll",
      data
    );
    return promise.then((data) =>
      QueryGetPollResponse.decode(new Reader(data))
    );
  }

  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse> {
    const data = QueryAllPollRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "PollAll",
      data
    );
    return promise.then((data) =>
      QueryAllPollResponse.decode(new Reader(data))
    );
  }

  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse> {
    const data = QueryGetCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "Comment",
      data
    );
    return promise.then((data) =>
      QueryGetCommentResponse.decode(new Reader(data))
    );
  }

  CommentAll(
    request: QueryAllCommentRequest
  ): Promise<QueryAllCommentResponse> {
    const data = QueryAllCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "CommentAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommentResponse.decode(new Reader(data))
    );
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "Post",
      data
    );
    return promise.then((data) =>
      QueryGetPostResponse.decode(new Reader(data))
    );
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "BiKunTin.cosmo.cosmo.Query",
      "PostAll",
      data
    );
    return promise.then((data) =>
      QueryAllPostResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
