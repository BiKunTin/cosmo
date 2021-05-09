package cosmo

import (
	"github.com/BiKunTin/cosmo/x/cosmo/keeper"
	"github.com/BiKunTin/cosmo/x/cosmo/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, *elem)
	}

	// Set vote count
	k.SetVoteCount(ctx, uint64(len(genState.VoteList)))

	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, *elem)
	}

	// Set poll count
	k.SetPollCount(ctx, uint64(len(genState.PollList)))

	// Set all the comment
	for _, elem := range genState.CommentList {
		k.SetComment(ctx, *elem)
	}

	// Set comment count
	k.SetCommentCount(ctx, uint64(len(genState.CommentList)))

	// Set all the post
	for _, elem := range genState.PostList {
		k.SetPost(ctx, *elem)
	}

	// Set post count
	k.SetPostCount(ctx, uint64(len(genState.PostList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all vote
	voteList := k.GetAllVote(ctx)
	for _, elem := range voteList {
		elem := elem
		genesis.VoteList = append(genesis.VoteList, &elem)
	}

	// Get all poll
	pollList := k.GetAllPoll(ctx)
	for _, elem := range pollList {
		elem := elem
		genesis.PollList = append(genesis.PollList, &elem)
	}

	// Get all comment
	commentList := k.GetAllComment(ctx)
	for _, elem := range commentList {
		elem := elem
		genesis.CommentList = append(genesis.CommentList, &elem)
	}

	// Get all post
	postList := k.GetAllPost(ctx)
	for _, elem := range postList {
		elem := elem
		genesis.PostList = append(genesis.PostList, &elem)
	}

	return genesis
}
