package main

import (
	"os"

	"github.com/BiKunTin/cosmo/app"
	"github.com/BiKunTin/cosmo/cmd/cosmod/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
