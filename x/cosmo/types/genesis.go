package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		VoteList:    []*Vote{},
		PollList:    []*Poll{},
		CommentList: []*Comment{},
		PostList:    []*Post{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in vote
	voteIdMap := make(map[uint64]bool)

	for _, elem := range gs.VoteList {
		if _, ok := voteIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for vote")
		}
		voteIdMap[elem.Id] = true
	}
	// Check for duplicated ID in poll
	pollIdMap := make(map[uint64]bool)

	for _, elem := range gs.PollList {
		if _, ok := pollIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for poll")
		}
		pollIdMap[elem.Id] = true
	}
	// Check for duplicated ID in comment
	commentIdMap := make(map[uint64]bool)

	for _, elem := range gs.CommentList {
		if _, ok := commentIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for comment")
		}
		commentIdMap[elem.Id] = true
	}
	// Check for duplicated ID in post
	postIdMap := make(map[uint64]bool)

	for _, elem := range gs.PostList {
		if _, ok := postIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for post")
		}
		postIdMap[elem.Id] = true
	}

	return nil
}
