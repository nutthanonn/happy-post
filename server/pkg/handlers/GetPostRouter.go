package handlers

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/nutthanonn/opensource-happy-birthday-website/tree/main/server/pkg/db"
	"github.com/nutthanonn/opensource-happy-birthday-website/tree/main/server/pkg/models"
)

func (h *handlers) GetPostRouter(c *gin.Context) {
	db := db.Init()
	defer db.Close()

	sqlStatement := `
        select * from post
		order by create_at desc
    `

	post := models.Post{}
	res := []models.Post{}
	data, err := db.Query(sqlStatement)
	if err != nil {
		log.Fatal(err)
	}

	for data.Next() {
		var id, title, detail string
		var create_at time.Time
		if err = data.Scan(&id, &title, &detail, &create_at); err != nil {
			log.Fatal(err.Error())
		}
		post.Id = id
		post.Title = title
		post.Detail = detail
		post.Create_at = create_at

		res = append(res, post)
	}
	c.JSON(http.StatusOK, gin.H{"data": res})
}
