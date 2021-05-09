// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/BiKunTin.cosmo.cosmo.MsgDeletePost", MsgDeletePost],
    ["/BiKunTin.cosmo.cosmo.MsgDeleteComment", MsgDeleteComment],
    ["/BiKunTin.cosmo.cosmo.MsgUpdateComment", MsgUpdateComment],
    ["/BiKunTin.cosmo.cosmo.MsgUpdateVote", MsgUpdateVote],
    ["/BiKunTin.cosmo.cosmo.MsgDeleteVote", MsgDeleteVote],
    ["/BiKunTin.cosmo.cosmo.MsgCreatePost", MsgCreatePost],
    ["/BiKunTin.cosmo.cosmo.MsgDeletePoll", MsgDeletePoll],
    ["/BiKunTin.cosmo.cosmo.MsgCreateComment", MsgCreateComment],
    ["/BiKunTin.cosmo.cosmo.MsgCreateVote", MsgCreateVote],
    ["/BiKunTin.cosmo.cosmo.MsgCreatePoll", MsgCreatePoll],
    ["/BiKunTin.cosmo.cosmo.MsgUpdatePoll", MsgUpdatePoll],
    ["/BiKunTin.cosmo.cosmo.MsgUpdatePost", MsgUpdatePost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeletePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePost", value: data }),
        msgDeleteComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteComment", value: data }),
        msgUpdateComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateComment", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateVote", value: data }),
        msgDeleteVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteVote", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePost", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePoll", value: data }),
        msgCreateComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateComment", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateVote", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePoll", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePoll", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
