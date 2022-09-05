package main

import (
	"github.com/gin-gonic/gin"
	"github.com/nutthanonn/opensource-happy-birthday-website/tree/main/server/pkg/handlers"
)

func main() {
	r := gin.Default()
	h := handlers.New()
	r.POST("/post", h.CreatePostRouter)
	r.GET("/post", h.GetPostRouter)

	r.Run()
}
