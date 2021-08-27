package main

import (
	"os"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	result := api.Build(api.BuildOptions{
		EntryPoints:       []string{"saluto.js"},
		Bundle:            true,
		MinifyWhitespace:  true,
		MinifyIdentifiers: true,
		MinifySyntax:      true,
		Outdir:            "build",
		Write:             true,
	})
	if len(result.Errors) > 0 {
		os.Exit(1)
	}
}
