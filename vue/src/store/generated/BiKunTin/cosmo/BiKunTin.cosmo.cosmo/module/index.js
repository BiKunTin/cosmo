// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateComment } from "./types/cosmo/tx";
import { MsgCreatePost } from "./types/cosmo/tx";
import { MsgDeletePost } from "./types/cosmo/tx";
import { MsgUpdatePost } from "./types/cosmo/tx";
import { MsgDeletePoll } from "./types/cosmo/tx";
import { MsgUpdatePoll } from "./types/cosmo/tx";
import { MsgDeleteVote } from "./types/cosmo/tx";
import { MsgCreatePoll } from "./types/cosmo/tx";
import { MsgCreateComment } from "./types/cosmo/tx";
import { MsgUpdateVote } from "./types/cosmo/tx";
import { MsgDeleteComment } from "./types/cosmo/tx";
import { MsgCreateVote } from "./types/cosmo/tx";
const types = [
    ["/BiKunTin.cosmo.cosmo.MsgUpdateComment", MsgUpdateComment],
    ["/BiKunTin.cosmo.cosmo.MsgCreatePost", MsgCreatePost],
    ["/BiKunTin.cosmo.cosmo.MsgDeletePost", MsgDeletePost],
    ["/BiKunTin.cosmo.cosmo.MsgUpdatePost", MsgUpdatePost],
    ["/BiKunTin.cosmo.cosmo.MsgDeletePoll", MsgDeletePoll],
    ["/BiKunTin.cosmo.cosmo.MsgUpdatePoll", MsgUpdatePoll],
    ["/BiKunTin.cosmo.cosmo.MsgDeleteVote", MsgDeleteVote],
    ["/BiKunTin.cosmo.cosmo.MsgCreatePoll", MsgCreatePoll],
    ["/BiKunTin.cosmo.cosmo.MsgCreateComment", MsgCreateComment],
    ["/BiKunTin.cosmo.cosmo.MsgUpdateVote", MsgUpdateVote],
    ["/BiKunTin.cosmo.cosmo.MsgDeleteComment", MsgDeleteComment],
    ["/BiKunTin.cosmo.cosmo.MsgCreateVote", MsgCreateVote],
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
        msgUpdateComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateComment", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePost", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePoll", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePoll", value: data }),
        msgDeleteVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteVote", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePoll", value: data }),
        msgCreateComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateComment", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateVote", value: data }),
        msgDeleteComment: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteComment", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateVote", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
