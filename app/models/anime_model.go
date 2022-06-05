package models

type Anime struct {
	ID    int    `gorm:"primary key;autoIncrement" json:"id"`
	Title string `json:"title"`
}
