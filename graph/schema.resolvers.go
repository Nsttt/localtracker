package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"localtracker/graph/generated"
	"localtracker/graph/model"
)

func (r *animeResolver) Title(ctx context.Context, obj *model.Anime) (*model.AnimeTitle, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Synonyms(ctx context.Context, obj *model.Anime) ([]*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Description(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) StartDate(ctx context.Context, obj *model.Anime) (*model.FuzzyDate, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) EndDate(ctx context.Context, obj *model.Anime) (*model.FuzzyDate, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Season(ctx context.Context, obj *model.Anime) (*model.AnimeSeason, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) SeasonYear(ctx context.Context, obj *model.Anime) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Type(ctx context.Context, obj *model.Anime) (*model.MediaType, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Format(ctx context.Context, obj *model.Anime) (*model.AnimeFormat, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Status(ctx context.Context, obj *model.Anime) (*model.MediaStatus, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Episodes(ctx context.Context, obj *model.Anime) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Duration(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) IsAdult(ctx context.Context, obj *model.Anime) (*bool, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Genre(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Tag(ctx context.Context, obj *model.Anime) ([]*model.MediaTag, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) OnList(ctx context.Context, obj *model.Anime) (*bool, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) IsLicensed(ctx context.Context, obj *model.Anime) (*bool, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) LicensedBy(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) AverageScore(ctx context.Context, obj *model.Anime) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Popularity(ctx context.Context, obj *model.Anime) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Source(ctx context.Context, obj *model.Anime) (*model.MediaSource, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) CountryOfOrigin(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Hashtag(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Trailer(ctx context.Context, obj *model.Anime) (*model.MediaTrailer, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) UpdatedAt(ctx context.Context, obj *model.Anime) (*int, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) CoverImage(ctx context.Context, obj *model.Anime) (*model.MediaCoverImage, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) BannerImage(ctx context.Context, obj *model.Anime) (*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Characters(ctx context.Context, obj *model.Anime) ([]*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Staff(ctx context.Context, obj *model.Anime) ([]*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) Studios(ctx context.Context, obj *model.Anime) ([]*string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) NextAiringEpisode(ctx context.Context, obj *model.Anime) ([]*model.AiringSchedule, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *animeResolver) ExternalLinks(ctx context.Context, obj *model.Anime) ([]*model.MediaExternalLink, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) CreateAnime(ctx context.Context, input model.AnimeInput) (*model.Anime, error) {
	anime, err := r.AnimeRepository.CreateAnime(&input)
	animeCreated := &model.Anime{
		ID:    anime.ID,
		Title: anime.Title,
	}
	if err != nil {
		return nil, err
	}
	return animeCreated, nil
}

func (r *mutationResolver) UpdateAnime(ctx context.Context, id int, input model.AnimeInput) (string, error) {
	err := r.AnimeRepository.UpdateAnime(&input, id)
	if err != nil {
		return "nil", err
	}
	successMessage := "successfully updated"

	return successMessage, nil
}

func (r *mutationResolver) DeleteAnime(ctx context.Context, id int) (string, error) {
	err := r.AnimeRepository.DeleteAnime(id)
	if err != nil {
		return "", err
	}
	successMessage := "successfully deleted"
	return successMessage, nil
}

func (r *queryResolver) GetAllAnimes(ctx context.Context) ([]*model.Anime, error) {
	books, err := r.AnimeRepository.GetAllAnimes()
	if err != nil {
		return nil, err
	}
	return books, nil
}

func (r *queryResolver) GetOneAnime(ctx context.Context, id int) (*model.Anime, error) {
	anime, err := r.AnimeRepository.GetOneAnime(id)
	selectedAnime := &model.Anime{
		ID:    anime.ID,
		Title: anime.Title,
	}
	if err != nil {
		return nil, err
	}
	return selectedAnime, nil
}

// Anime returns generated.AnimeResolver implementation.
func (r *Resolver) Anime() generated.AnimeResolver { return &animeResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type animeResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
