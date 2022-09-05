package handlers

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/nutthanonn/opensource-happy-birthday-website/tree/main/server/pkg/db"
	"github.com/nutthanonn/opensource-happy-birthday-website/tree/main/server/pkg/models"
)

func (h *handlers) CreatePostRouter(c *gin.Context) {
	db := db.Init()
	defer db.Close()
	var post_data models.Post

	if err := c.BindJSON(&post_data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": err})
		return
	}

	if len(post_data.Detail) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Error no detail data"})
		return
	}

	if len(post_data.Title) == 0 {
		post_data.Title = "unnamed"
	}

	sqlStatement := `
        INSERT INTO Post (title, detail)
        VALUES ($1, $2)
        RETURNING id
    `
	var id string
	post_data.Create_at = time.Now()
	err := db.QueryRow(sqlStatement, post_data.Title, post_data.Detail).Scan(&id)

	if err != nil {
		log.Fatal(err)
	}
	post_data.Id = id

	c.JSON(http.StatusOK, gin.H{"message": "success", "data": post_data})
}
