package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateVote{}, "cosmo/CreateVote", nil)
	cdc.RegisterConcrete(&MsgUpdateVote{}, "cosmo/UpdateVote", nil)
	cdc.RegisterConcrete(&MsgDeleteVote{}, "cosmo/DeleteVote", nil)

	cdc.RegisterConcrete(&MsgCreatePoll{}, "cosmo/CreatePoll", nil)
	cdc.RegisterConcrete(&MsgUpdatePoll{}, "cosmo/UpdatePoll", nil)
	cdc.RegisterConcrete(&MsgDeletePoll{}, "cosmo/DeletePoll", nil)

	cdc.RegisterConcrete(&MsgCreateComment{}, "cosmo/CreateComment", nil)
	cdc.RegisterConcrete(&MsgUpdateComment{}, "cosmo/UpdateComment", nil)
	cdc.RegisterConcrete(&MsgDeleteComment{}, "cosmo/DeleteComment", nil)

	cdc.RegisterConcrete(&MsgCreatePost{}, "cosmo/CreatePost", nil)
	cdc.RegisterConcrete(&MsgUpdatePost{}, "cosmo/UpdatePost", nil)
	cdc.RegisterConcrete(&MsgDeletePost{}, "cosmo/DeletePost", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVote{},
		&MsgUpdateVote{},
		&MsgDeleteVote{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePoll{},
		&MsgUpdatePoll{},
		&MsgDeletePoll{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateComment{},
		&MsgUpdateComment{},
		&MsgDeleteComment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
		&MsgUpdatePost{},
		&MsgDeletePost{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
