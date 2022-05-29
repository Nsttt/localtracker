package model

type Anime struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Episodes    int    `json:"episodes"`
}
