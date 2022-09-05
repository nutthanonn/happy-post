package models

import (
	"time"
)

type Post struct {
	Id        string    `json:"id"`
	Title     string    `json:"title"`
	Detail    string    `json:"detail"`
	Create_at time.Time `json:"create_at"`
}
