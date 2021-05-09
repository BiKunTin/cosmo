import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/cosmo/tx";
import { MsgDeleteComment } from "./types/cosmo/tx";
import { MsgUpdateComment } from "./types/cosmo/tx";
import { MsgUpdateVote } from "./types/cosmo/tx";
import { MsgDeleteVote } from "./types/cosmo/tx";
import { MsgCreatePost } from "./types/cosmo/tx";
import { MsgDeletePoll } from "./types/cosmo/tx";
import { MsgCreateComment } from "./types/cosmo/tx";
import { MsgCreateVote } from "./types/cosmo/tx";
import { MsgCreatePoll } from "./types/cosmo/tx";
import { MsgUpdatePoll } from "./types/cosmo/tx";
import { MsgUpdatePost } from "./types/cosmo/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgDeleteComment: (data: MsgDeleteComment) => EncodeObject;
    msgUpdateComment: (data: MsgUpdateComment) => EncodeObject;
    msgUpdateVote: (data: MsgUpdateVote) => EncodeObject;
    msgDeleteVote: (data: MsgDeleteVote) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgDeletePoll: (data: MsgDeletePoll) => EncodeObject;
    msgCreateComment: (data: MsgCreateComment) => EncodeObject;
    msgCreateVote: (data: MsgCreateVote) => EncodeObject;
    msgCreatePoll: (data: MsgCreatePoll) => EncodeObject;
    msgUpdatePoll: (data: MsgUpdatePoll) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
