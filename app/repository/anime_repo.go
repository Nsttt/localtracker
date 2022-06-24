package repository

import (
	"localtracker/app/models"
	"localtracker/graph/model"

	"gorm.io/gorm"
)

type AnimeRepository interface {
	CreateAnime(animeInput *model.AnimeInput) (*models.Anime, error)
	UpdateAnime(animeInput *model.AnimeInput, id int) error
	DeleteAnime(id int) error
	GetOneAnime(id int) (*models.Anime, error)
	GetAllAnimes() ([]*model.Anime, error)
}

type AnimeService struct {
	Db *gorm.DB
}

var _ AnimeRepository = &AnimeService{}

func NewAnimeService(db *gorm.DB) *AnimeService {
	return &AnimeService{Db: db}
}

func (b *AnimeService) CreateAnime(animeInput *model.AnimeInput) (*models.Anime, error) {
	anime := &models.Anime{
		Title: animeInput.Title.UserPreferred,
	}
	err := b.Db.Create(&anime).Error

	return anime, err
}

func (b *AnimeService) UpdateAnime(animeInput *model.AnimeInput, id int) error {
	anime := models.Anime{
		ID:    id,
		Title: animeInput.Title.UserPreferred,
	}
	err := b.Db.Model(&anime).Where("id = ?", id).Updates(anime).Error

	return err
}

func (b *AnimeService) DeleteAnime(id int) error {
	anime := &models.Anime{}
	err := b.Db.Delete(anime, id).Error

	return err
}

func (b *AnimeService) GetOneAnime(id int) (*models.Anime, error) {
	anime := &models.Anime{}
	err := b.Db.Where("id = ?", id).First(anime).Error

	return anime, err
}

func (b *AnimeService) GetAllAnimes() ([]*model.Anime, error) {
	animes := []*model.Anime{}
	err := b.Db.Find(&animes).Error

	return animes, err
}
