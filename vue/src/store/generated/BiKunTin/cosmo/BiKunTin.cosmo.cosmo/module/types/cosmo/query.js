/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Vote } from "../cosmo/vote";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Poll } from "../cosmo/poll";
import { Comment } from "../cosmo/comment";
import { Post } from "../cosmo/post";
export const protobufPackage = "BiKunTin.cosmo.cosmo";
const baseQueryGetVoteRequest = { id: 0 };
export const QueryGetVoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetVoteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetVoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetVoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetVoteResponse = {};
export const QueryGetVoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Vote !== undefined) {
            Vote.encode(message.Vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetVoteResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetVoteResponse };
        if (object.Vote !== undefined && object.Vote !== null) {
            message.Vote = Vote.fromJSON(object.Vote);
        }
        else {
            message.Vote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Vote !== undefined &&
            (obj.Vote = message.Vote ? Vote.toJSON(message.Vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetVoteResponse };
        if (object.Vote !== undefined && object.Vote !== null) {
            message.Vote = Vote.fromPartial(object.Vote);
        }
        else {
            message.Vote = undefined;
        }
        return message;
    },
};
const baseQueryAllVoteRequest = {};
export const QueryAllVoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllVoteRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllVoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllVoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllVoteResponse = {};
export const QueryAllVoteResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Vote) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllVoteResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllVoteResponse };
        message.Vote = [];
        if (object.Vote !== undefined && object.Vote !== null) {
            for (const e of object.Vote) {
                message.Vote.push(Vote.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Vote) {
            obj.Vote = message.Vote.map((e) => (e ? Vote.toJSON(e) : undefined));
        }
        else {
            obj.Vote = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllVoteResponse };
        message.Vote = [];
        if (object.Vote !== undefined && object.Vote !== null) {
            for (const e of object.Vote) {
                message.Vote.push(Vote.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPollRequest = { id: 0 };
export const QueryGetPollRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPollRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPollRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPollRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPollResponse = {};
export const QueryGetPollResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Poll !== undefined) {
            Poll.encode(message.Poll, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPollResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPollResponse };
        if (object.Poll !== undefined && object.Poll !== null) {
            message.Poll = Poll.fromJSON(object.Poll);
        }
        else {
            message.Poll = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Poll !== undefined &&
            (obj.Poll = message.Poll ? Poll.toJSON(message.Poll) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPollResponse };
        if (object.Poll !== undefined && object.Poll !== null) {
            message.Poll = Poll.fromPartial(object.Poll);
        }
        else {
            message.Poll = undefined;
        }
        return message;
    },
};
const baseQueryAllPollRequest = {};
export const QueryAllPollRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPollRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPollRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPollRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPollResponse = {};
export const QueryAllPollResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Poll) {
            Poll.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPollResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPollResponse };
        message.Poll = [];
        if (object.Poll !== undefined && object.Poll !== null) {
            for (const e of object.Poll) {
                message.Poll.push(Poll.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Poll) {
            obj.Poll = message.Poll.map((e) => (e ? Poll.toJSON(e) : undefined));
        }
        else {
            obj.Poll = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPollResponse };
        message.Poll = [];
        if (object.Poll !== undefined && object.Poll !== null) {
            for (const e of object.Poll) {
                message.Poll.push(Poll.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetCommentRequest = { id: 0 };
export const QueryGetCommentRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCommentRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCommentRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCommentRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetCommentResponse = {};
export const QueryGetCommentResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Comment !== undefined) {
            Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCommentResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetCommentResponse,
        };
        if (object.Comment !== undefined && object.Comment !== null) {
            message.Comment = Comment.fromJSON(object.Comment);
        }
        else {
            message.Comment = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Comment !== undefined &&
            (obj.Comment = message.Comment
                ? Comment.toJSON(message.Comment)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCommentResponse,
        };
        if (object.Comment !== undefined && object.Comment !== null) {
            message.Comment = Comment.fromPartial(object.Comment);
        }
        else {
            message.Comment = undefined;
        }
        return message;
    },
};
const baseQueryAllCommentRequest = {};
export const QueryAllCommentRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCommentRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllCommentRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCommentRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllCommentResponse = {};
export const QueryAllCommentResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Comment) {
            Comment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllCommentResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllCommentResponse,
        };
        message.Comment = [];
        if (object.Comment !== undefined && object.Comment !== null) {
            for (const e of object.Comment) {
                message.Comment.push(Comment.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Comment) {
            obj.Comment = message.Comment.map((e) => e ? Comment.toJSON(e) : undefined);
        }
        else {
            obj.Comment = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllCommentResponse,
        };
        message.Comment = [];
        if (object.Comment !== undefined && object.Comment !== null) {
            for (const e of object.Comment) {
                message.Comment.push(Comment.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPostRequest = { id: 0 };
export const QueryGetPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPostResponse = {};
export const QueryGetPostResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Post !== undefined) {
            Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPostResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromJSON(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Post !== undefined &&
            (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPostResponse };
        if (object.Post !== undefined && object.Post !== null) {
            message.Post = Post.fromPartial(object.Post);
        }
        else {
            message.Post = undefined;
        }
        return message;
    },
};
const baseQueryAllPostRequest = {};
export const QueryAllPostRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPostResponse = {};
export const QueryAllPostResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Post) {
            Post.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPostResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Post) {
            obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
        }
        else {
            obj.Post = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPostResponse };
        message.Post = [];
        if (object.Post !== undefined && object.Post !== null) {
            for (const e of object.Post) {
                message.Post.push(Post.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Vote(request) {
        const data = QueryGetVoteRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "Vote", data);
        return promise.then((data) => QueryGetVoteResponse.decode(new Reader(data)));
    }
    VoteAll(request) {
        const data = QueryAllVoteRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "VoteAll", data);
        return promise.then((data) => QueryAllVoteResponse.decode(new Reader(data)));
    }
    Poll(request) {
        const data = QueryGetPollRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "Poll", data);
        return promise.then((data) => QueryGetPollResponse.decode(new Reader(data)));
    }
    PollAll(request) {
        const data = QueryAllPollRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "PollAll", data);
        return promise.then((data) => QueryAllPollResponse.decode(new Reader(data)));
    }
    Comment(request) {
        const data = QueryGetCommentRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "Comment", data);
        return promise.then((data) => QueryGetCommentResponse.decode(new Reader(data)));
    }
    CommentAll(request) {
        const data = QueryAllCommentRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "CommentAll", data);
        return promise.then((data) => QueryAllCommentResponse.decode(new Reader(data)));
    }
    Post(request) {
        const data = QueryGetPostRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "Post", data);
        return promise.then((data) => QueryGetPostResponse.decode(new Reader(data)));
    }
    PostAll(request) {
        const data = QueryAllPostRequest.encode(request).finish();
        const promise = this.rpc.request("BiKunTin.cosmo.cosmo.Query", "PostAll", data);
        return promise.then((data) => QueryAllPostResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
