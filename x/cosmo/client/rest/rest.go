package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers cosmo-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/cosmo/votes/{id}", getVoteHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/cosmo/votes", listVoteHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/cosmo/polls/{id}", getPollHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/cosmo/polls", listPollHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/cosmo/comments/{id}", getCommentHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/cosmo/comments", listCommentHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/cosmo/posts/{id}", getPostHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/cosmo/posts", listPostHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/cosmo/votes", createVoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/votes/{id}", updateVoteHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/votes/{id}", deleteVoteHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/cosmo/polls", createPollHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/polls/{id}", updatePollHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/polls/{id}", deletePollHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/cosmo/comments", createCommentHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/comments/{id}", updateCommentHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/comments/{id}", deleteCommentHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/cosmo/posts", createPostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/posts/{id}", updatePostHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/cosmo/posts/{id}", deletePostHandler(clientCtx)).Methods("POST")

}
