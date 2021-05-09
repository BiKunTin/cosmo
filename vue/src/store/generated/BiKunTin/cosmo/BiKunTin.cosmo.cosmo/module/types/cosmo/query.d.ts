import { Reader, Writer } from "protobufjs/minimal";
import { Vote } from "../cosmo/vote";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Poll } from "../cosmo/poll";
import { Comment } from "../cosmo/comment";
import { Post } from "../cosmo/post";
export declare const protobufPackage = "BiKunTin.cosmo.cosmo";
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
export declare const QueryGetVoteRequest: {
    encode(message: QueryGetVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest;
    fromJSON(object: any): QueryGetVoteRequest;
    toJSON(message: QueryGetVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest;
};
export declare const QueryGetVoteResponse: {
    encode(message: QueryGetVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse;
    fromJSON(object: any): QueryGetVoteResponse;
    toJSON(message: QueryGetVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse;
};
export declare const QueryAllVoteRequest: {
    encode(message: QueryAllVoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest;
    fromJSON(object: any): QueryAllVoteRequest;
    toJSON(message: QueryAllVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest;
};
export declare const QueryAllVoteResponse: {
    encode(message: QueryAllVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse;
    fromJSON(object: any): QueryAllVoteResponse;
    toJSON(message: QueryAllVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse;
};
export declare const QueryGetPollRequest: {
    encode(message: QueryGetPollRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPollRequest;
    fromJSON(object: any): QueryGetPollRequest;
    toJSON(message: QueryGetPollRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPollRequest>): QueryGetPollRequest;
};
export declare const QueryGetPollResponse: {
    encode(message: QueryGetPollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPollResponse;
    fromJSON(object: any): QueryGetPollResponse;
    toJSON(message: QueryGetPollResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPollResponse>): QueryGetPollResponse;
};
export declare const QueryAllPollRequest: {
    encode(message: QueryAllPollRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPollRequest;
    fromJSON(object: any): QueryAllPollRequest;
    toJSON(message: QueryAllPollRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPollRequest>): QueryAllPollRequest;
};
export declare const QueryAllPollResponse: {
    encode(message: QueryAllPollResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPollResponse;
    fromJSON(object: any): QueryAllPollResponse;
    toJSON(message: QueryAllPollResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPollResponse>): QueryAllPollResponse;
};
export declare const QueryGetCommentRequest: {
    encode(message: QueryGetCommentRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommentRequest;
    fromJSON(object: any): QueryGetCommentRequest;
    toJSON(message: QueryGetCommentRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCommentRequest>): QueryGetCommentRequest;
};
export declare const QueryGetCommentResponse: {
    encode(message: QueryGetCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommentResponse;
    fromJSON(object: any): QueryGetCommentResponse;
    toJSON(message: QueryGetCommentResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCommentResponse>): QueryGetCommentResponse;
};
export declare const QueryAllCommentRequest: {
    encode(message: QueryAllCommentRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommentRequest;
    fromJSON(object: any): QueryAllCommentRequest;
    toJSON(message: QueryAllCommentRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCommentRequest>): QueryAllCommentRequest;
};
export declare const QueryAllCommentResponse: {
    encode(message: QueryAllCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommentResponse;
    fromJSON(object: any): QueryAllCommentResponse;
    toJSON(message: QueryAllCommentResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCommentResponse>): QueryAllCommentResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
    VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
    Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
    PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
    Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
    CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
