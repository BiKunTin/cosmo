/* eslint-disable */
import { Vote } from "../cosmo/vote";
import { Poll } from "../cosmo/poll";
import { Comment } from "../cosmo/comment";
import { Post } from "../cosmo/post";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "BiKunTin.cosmo.cosmo";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  voteList: Vote[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  pollList: Poll[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  commentList: Comment[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postList: Post[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pollList) {
      Poll.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.commentList) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    message.commentList = [];
    message.postList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pollList.push(Poll.decode(reader, reader.uint32()));
          break;
        case 2:
          message.commentList.push(Comment.decode(reader, reader.uint32()));
          break;
        case 1:
          message.postList.push(Post.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    message.commentList = [];
    message.postList = [];
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromJSON(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromJSON(e));
      }
    }
    if (object.commentList !== undefined && object.commentList !== null) {
      for (const e of object.commentList) {
        message.commentList.push(Comment.fromJSON(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.voteList) {
      obj.voteList = message.voteList.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.voteList = [];
    }
    if (message.pollList) {
      obj.pollList = message.pollList.map((e) =>
        e ? Poll.toJSON(e) : undefined
      );
    } else {
      obj.pollList = [];
    }
    if (message.commentList) {
      obj.commentList = message.commentList.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.commentList = [];
    }
    if (message.postList) {
      obj.postList = message.postList.map((e) =>
        e ? Post.toJSON(e) : undefined
      );
    } else {
      obj.postList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.voteList = [];
    message.pollList = [];
    message.commentList = [];
    message.postList = [];
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromPartial(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromPartial(e));
      }
    }
    if (object.commentList !== undefined && object.commentList !== null) {
      for (const e of object.commentList) {
        message.commentList.push(Comment.fromPartial(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromPartial(e));
      }
    }
    return message;
  },
};

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
