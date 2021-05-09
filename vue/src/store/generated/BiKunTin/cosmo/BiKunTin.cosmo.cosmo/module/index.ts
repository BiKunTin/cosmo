// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePoll } from "./types/cosmo/tx";
import { MsgUpdatePoll } from "./types/cosmo/tx";
import { MsgCreateVote } from "./types/cosmo/tx";
import { MsgUpdatePost } from "./types/cosmo/tx";
import { MsgCreatePost } from "./types/cosmo/tx";
import { MsgCreateComment } from "./types/cosmo/tx";
import { MsgDeleteVote } from "./types/cosmo/tx";
import { MsgDeleteComment } from "./types/cosmo/tx";
import { MsgDeletePost } from "./types/cosmo/tx";
import { MsgDeletePoll } from "./types/cosmo/tx";
import { MsgUpdateVote } from "./types/cosmo/tx";
import { MsgUpdateComment } from "./types/cosmo/tx";


const types = [
  ["/BiKunTin.cosmo.cosmo.MsgCreatePoll", MsgCreatePoll],
  ["/BiKunTin.cosmo.cosmo.MsgUpdatePoll", MsgUpdatePoll],
  ["/BiKunTin.cosmo.cosmo.MsgCreateVote", MsgCreateVote],
  ["/BiKunTin.cosmo.cosmo.MsgUpdatePost", MsgUpdatePost],
  ["/BiKunTin.cosmo.cosmo.MsgCreatePost", MsgCreatePost],
  ["/BiKunTin.cosmo.cosmo.MsgCreateComment", MsgCreateComment],
  ["/BiKunTin.cosmo.cosmo.MsgDeleteVote", MsgDeleteVote],
  ["/BiKunTin.cosmo.cosmo.MsgDeleteComment", MsgDeleteComment],
  ["/BiKunTin.cosmo.cosmo.MsgDeletePost", MsgDeletePost],
  ["/BiKunTin.cosmo.cosmo.MsgDeletePoll", MsgDeletePoll],
  ["/BiKunTin.cosmo.cosmo.MsgUpdateVote", MsgUpdateVote],
  ["/BiKunTin.cosmo.cosmo.MsgUpdateComment", MsgUpdateComment],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgCreatePoll: (data: MsgCreatePoll): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePoll", value: data }),
    msgUpdatePoll: (data: MsgUpdatePoll): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePoll", value: data }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateVote", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdatePost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreatePost", value: data }),
    msgCreateComment: (data: MsgCreateComment): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgCreateComment", value: data }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteVote", value: data }),
    msgDeleteComment: (data: MsgDeleteComment): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeleteComment", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePost", value: data }),
    msgDeletePoll: (data: MsgDeletePoll): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgDeletePoll", value: data }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateVote", value: data }),
    msgUpdateComment: (data: MsgUpdateComment): EncodeObject => ({ typeUrl: "/BiKunTin.cosmo.cosmo.MsgUpdateComment", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
