// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type AiringSchedule struct {
	ID              string `json:"id"`
	AiringAt        *int   `json:"airingAt"`
	TimeUntilAiring *int   `json:"timeUntilAiring"`
	Episode         int    `json:"episode"`
}

type AiringScheduleInput struct {
	AiringAt        *int `json:"airingAt"`
	TimeUntilAiring *int `json:"timeUntilAiring"`
	Episode         int  `json:"episode"`
}

type AnimeInput struct {
	Title             *AnimeTitleInput          `json:"title"`
	Synonyms          []*string                 `json:"synonyms"`
	Description       *string                   `json:"description"`
	StartDate         *string                   `json:"startDate"`
	EndDate           *string                   `json:"endDate"`
	Season            *AnimeSeason              `json:"season"`
	SeasonYear        *int                      `json:"seasonYear"`
	Type              *MediaType                `json:"type"`
	Format            *AnimeFormat              `json:"format"`
	Status            *MediaStatus              `json:"status"`
	Episodes          *int                      `json:"episodes"`
	Duration          *string                   `json:"duration"`
	IsAdult           *bool                     `json:"isAdult"`
	Genre             *string                   `json:"genre"`
	Tag               []*MediaTagInput          `json:"tag"`
	OnList            *bool                     `json:"onList"`
	IsLicensed        *bool                     `json:"isLicensed"`
	LicensedBy        *string                   `json:"licensedBy"`
	AverageScore      *int                      `json:"averageScore"`
	Popularity        *int                      `json:"popularity"`
	Source            *MediaSource              `json:"source"`
	CountryOfOrigin   *string                   `json:"countryOfOrigin"`
	Hashtag           *string                   `json:"hashtag"`
	Trailer           *string                   `json:"trailer"`
	UpdatedAt         *int                      `json:"updatedAt"`
	CoverImage        *MediaCoverImageInput     `json:"coverImage"`
	BannerImage       *string                   `json:"bannerImage"`
	Characters        []*string                 `json:"characters"`
	Staff             []*string                 `json:"staff"`
	Studios           []*string                 `json:"studios"`
	NextAiringEpisode []*string                 `json:"nextAiringEpisode"`
	ExternalLinks     []*MediaExternalLinkInput `json:"externalLinks"`
}

type AnimeTitle struct {
	ID            string  `json:"id"`
	UserPreferred *string `json:"userPreferred"`
	Romaji        *string `json:"romaji"`
	English       *string `json:"english"`
	Native        *string `json:"native"`
}

type AnimeTitleInput struct {
	UserPreferred string  `json:"userPreferred"`
	Romaji        *string `json:"romaji"`
	English       *string `json:"english"`
	Native        *string `json:"native"`
}

type FuzzyDate struct {
	ID    string `json:"id"`
	Year  int    `json:"year"`
	Month int    `json:"month"`
	Day   int    `json:"day"`
}

type FuzzyDateInput struct {
	Year  int `json:"year"`
	Month int `json:"month"`
	Day   int `json:"day"`
}

type MediaCoverImage struct {
	ID         string  `json:"id"`
	Default    string  `json:"default"`
	ExtraLarge *string `json:"extraLarge"`
	Large      *string `json:"large"`
	Medium     *string `json:"medium"`
	Color      *string `json:"color"`
}

type MediaCoverImageInput struct {
	Default    string  `json:"default"`
	ExtraLarge *string `json:"extraLarge"`
	Large      *string `json:"large"`
	Medium     *string `json:"medium"`
	Color      *string `json:"color"`
}

type MediaExternalLink struct {
	ID   string  `json:"id"`
	URL  string  `json:"url"`
	Site *string `json:"site"`
}

type MediaExternalLinkInput struct {
	URL  string  `json:"url"`
	Site *string `json:"site"`
}

type MediaTag struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description *string `json:"description"`
	IsAdult     bool    `json:"isAdult"`
}

type MediaTagInput struct {
	Name        string  `json:"name"`
	Description *string `json:"description"`
	IsAdult     bool    `json:"isAdult"`
}

type MediaTrailer struct {
	ID        string  `json:"id"`
	Site      string  `json:"site"`
	Thumbnail *string `json:"thumbnail"`
}

type MediaTrailerInput struct {
	Site      string  `json:"site"`
	Thumbnail *string `json:"thumbnail"`
}

type AnimeFormat string

const (
	AnimeFormatTv      AnimeFormat = "TV"
	AnimeFormatTvShort AnimeFormat = "TV_SHORT"
	AnimeFormatSpecial AnimeFormat = "SPECIAL"
	AnimeFormatOva     AnimeFormat = "OVA"
	AnimeFormatOna     AnimeFormat = "ONA"
)

var AllAnimeFormat = []AnimeFormat{
	AnimeFormatTv,
	AnimeFormatTvShort,
	AnimeFormatSpecial,
	AnimeFormatOva,
	AnimeFormatOna,
}

func (e AnimeFormat) IsValid() bool {
	switch e {
	case AnimeFormatTv, AnimeFormatTvShort, AnimeFormatSpecial, AnimeFormatOva, AnimeFormatOna:
		return true
	}
	return false
}

func (e AnimeFormat) String() string {
	return string(e)
}

func (e *AnimeFormat) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = AnimeFormat(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid AnimeFormat", str)
	}
	return nil
}

func (e AnimeFormat) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type AnimeSeason string

const (
	AnimeSeasonWinter AnimeSeason = "WINTER"
	AnimeSeasonSpring AnimeSeason = "SPRING"
	AnimeSeasonSummer AnimeSeason = "SUMMER"
	AnimeSeasonFall   AnimeSeason = "FALL"
)

var AllAnimeSeason = []AnimeSeason{
	AnimeSeasonWinter,
	AnimeSeasonSpring,
	AnimeSeasonSummer,
	AnimeSeasonFall,
}

func (e AnimeSeason) IsValid() bool {
	switch e {
	case AnimeSeasonWinter, AnimeSeasonSpring, AnimeSeasonSummer, AnimeSeasonFall:
		return true
	}
	return false
}

func (e AnimeSeason) String() string {
	return string(e)
}

func (e *AnimeSeason) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = AnimeSeason(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid AnimeSeason", str)
	}
	return nil
}

func (e AnimeSeason) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type CountryCode string

const (
	CountryCodeAf CountryCode = "AF"
	CountryCodeAl CountryCode = "AL"
	CountryCodeDz CountryCode = "DZ"
	CountryCodeAs CountryCode = "AS"
	CountryCodeAd CountryCode = "AD"
	CountryCodeAo CountryCode = "AO"
	CountryCodeAi CountryCode = "AI"
	CountryCodeAq CountryCode = "AQ"
	CountryCodeAg CountryCode = "AG"
	CountryCodeAr CountryCode = "AR"
	CountryCodeAm CountryCode = "AM"
	CountryCodeAw CountryCode = "AW"
	CountryCodeAu CountryCode = "AU"
	CountryCodeAt CountryCode = "AT"
	CountryCodeAz CountryCode = "AZ"
	CountryCodeBs CountryCode = "BS"
	CountryCodeBh CountryCode = "BH"
	CountryCodeBd CountryCode = "BD"
	CountryCodeBb CountryCode = "BB"
	CountryCodeBy CountryCode = "BY"
	CountryCodeBe CountryCode = "BE"
	CountryCodeBz CountryCode = "BZ"
	CountryCodeBj CountryCode = "BJ"
	CountryCodeBm CountryCode = "BM"
	CountryCodeBt CountryCode = "BT"
	CountryCodeBo CountryCode = "BO"
	CountryCodeBa CountryCode = "BA"
	CountryCodeBw CountryCode = "BW"
	CountryCodeBv CountryCode = "BV"
	CountryCodeBr CountryCode = "BR"
	CountryCodeIo CountryCode = "IO"
	CountryCodeBn CountryCode = "BN"
	CountryCodeBg CountryCode = "BG"
	CountryCodeBf CountryCode = "BF"
	CountryCodeBi CountryCode = "BI"
	CountryCodeKh CountryCode = "KH"
	CountryCodeCm CountryCode = "CM"
	CountryCodeCa CountryCode = "CA"
	CountryCodeCv CountryCode = "CV"
	CountryCodeKy CountryCode = "KY"
	CountryCodeCf CountryCode = "CF"
	CountryCodeTd CountryCode = "TD"
	CountryCodeCl CountryCode = "CL"
	CountryCodeCn CountryCode = "CN"
	CountryCodeCx CountryCode = "CX"
	CountryCodeCc CountryCode = "CC"
	CountryCodeCo CountryCode = "CO"
	CountryCodeKm CountryCode = "KM"
	CountryCodeCg CountryCode = "CG"
	CountryCodeCd CountryCode = "CD"
	CountryCodeCk CountryCode = "CK"
	CountryCodeCr CountryCode = "CR"
	CountryCodeCi CountryCode = "CI"
	CountryCodeHr CountryCode = "HR"
	CountryCodeCu CountryCode = "CU"
	CountryCodeCy CountryCode = "CY"
	CountryCodeCz CountryCode = "CZ"
	CountryCodeDk CountryCode = "DK"
	CountryCodeDj CountryCode = "DJ"
	CountryCodeDm CountryCode = "DM"
	CountryCodeDo CountryCode = "DO"
	CountryCodeEc CountryCode = "EC"
	CountryCodeEg CountryCode = "EG"
	CountryCodeSv CountryCode = "SV"
	CountryCodeGq CountryCode = "GQ"
	CountryCodeEr CountryCode = "ER"
	CountryCodeEe CountryCode = "EE"
	CountryCodeEt CountryCode = "ET"
	CountryCodeFk CountryCode = "FK"
	CountryCodeFo CountryCode = "FO"
	CountryCodeFj CountryCode = "FJ"
	CountryCodeFi CountryCode = "FI"
	CountryCodeFr CountryCode = "FR"
	CountryCodeGf CountryCode = "GF"
	CountryCodePf CountryCode = "PF"
	CountryCodeTf CountryCode = "TF"
	CountryCodeGa CountryCode = "GA"
	CountryCodeGm CountryCode = "GM"
	CountryCodeGe CountryCode = "GE"
	CountryCodeDe CountryCode = "DE"
	CountryCodeGh CountryCode = "GH"
	CountryCodeGi CountryCode = "GI"
	CountryCodeGr CountryCode = "GR"
	CountryCodeGl CountryCode = "GL"
	CountryCodeGd CountryCode = "GD"
	CountryCodeGp CountryCode = "GP"
	CountryCodeGu CountryCode = "GU"
	CountryCodeGt CountryCode = "GT"
	CountryCodeGg CountryCode = "GG"
	CountryCodeGn CountryCode = "GN"
	CountryCodeGw CountryCode = "GW"
	CountryCodeGy CountryCode = "GY"
	CountryCodeHt CountryCode = "HT"
	CountryCodeHm CountryCode = "HM"
	CountryCodeVa CountryCode = "VA"
	CountryCodeHn CountryCode = "HN"
	CountryCodeHk CountryCode = "HK"
	CountryCodeHu CountryCode = "HU"
	CountryCodeIs CountryCode = "IS"
	CountryCodeIn CountryCode = "IN"
	CountryCodeID CountryCode = "ID"
	CountryCodeIr CountryCode = "IR"
	CountryCodeIq CountryCode = "IQ"
	CountryCodeIe CountryCode = "IE"
	CountryCodeIm CountryCode = "IM"
	CountryCodeIl CountryCode = "IL"
	CountryCodeIt CountryCode = "IT"
	CountryCodeJm CountryCode = "JM"
	CountryCodeJp CountryCode = "JP"
	CountryCodeJe CountryCode = "JE"
	CountryCodeJo CountryCode = "JO"
	CountryCodeKz CountryCode = "KZ"
	CountryCodeKe CountryCode = "KE"
	CountryCodeKi CountryCode = "KI"
	CountryCodeKp CountryCode = "KP"
	CountryCodeKr CountryCode = "KR"
	CountryCodeKw CountryCode = "KW"
	CountryCodeKg CountryCode = "KG"
	CountryCodeLa CountryCode = "LA"
	CountryCodeLv CountryCode = "LV"
	CountryCodeLb CountryCode = "LB"
	CountryCodeLs CountryCode = "LS"
	CountryCodeLr CountryCode = "LR"
	CountryCodeLy CountryCode = "LY"
	CountryCodeLi CountryCode = "LI"
	CountryCodeLt CountryCode = "LT"
	CountryCodeLu CountryCode = "LU"
	CountryCodeMo CountryCode = "MO"
	CountryCodeMk CountryCode = "MK"
	CountryCodeMg CountryCode = "MG"
	CountryCodeMw CountryCode = "MW"
	CountryCodeMy CountryCode = "MY"
	CountryCodeMv CountryCode = "MV"
	CountryCodeMl CountryCode = "ML"
	CountryCodeMt CountryCode = "MT"
	CountryCodeMh CountryCode = "MH"
	CountryCodeMq CountryCode = "MQ"
	CountryCodeMr CountryCode = "MR"
	CountryCodeMu CountryCode = "MU"
	CountryCodeYt CountryCode = "YT"
	CountryCodeMx CountryCode = "MX"
	CountryCodeFm CountryCode = "FM"
	CountryCodeMd CountryCode = "MD"
	CountryCodeMc CountryCode = "MC"
	CountryCodeMn CountryCode = "MN"
	CountryCodeMe CountryCode = "ME"
	CountryCodeMs CountryCode = "MS"
	CountryCodeMa CountryCode = "MA"
	CountryCodeMz CountryCode = "MZ"
	CountryCodeMm CountryCode = "MM"
	CountryCodeNa CountryCode = "NA"
	CountryCodeNr CountryCode = "NR"
	CountryCodeNp CountryCode = "NP"
	CountryCodeNl CountryCode = "NL"
	CountryCodeAn CountryCode = "AN"
	CountryCodeNc CountryCode = "NC"
	CountryCodeNz CountryCode = "NZ"
	CountryCodeNi CountryCode = "NI"
	CountryCodeNe CountryCode = "NE"
	CountryCodeNg CountryCode = "NG"
	CountryCodeNu CountryCode = "NU"
	CountryCodeNf CountryCode = "NF"
	CountryCodeMp CountryCode = "MP"
	CountryCodeNo CountryCode = "NO"
	CountryCodeOm CountryCode = "OM"
	CountryCodePk CountryCode = "PK"
	CountryCodePw CountryCode = "PW"
	CountryCodePs CountryCode = "PS"
	CountryCodePa CountryCode = "PA"
	CountryCodePg CountryCode = "PG"
	CountryCodePy CountryCode = "PY"
	CountryCodePe CountryCode = "PE"
	CountryCodePh CountryCode = "PH"
	CountryCodePn CountryCode = "PN"
	CountryCodePl CountryCode = "PL"
	CountryCodePt CountryCode = "PT"
	CountryCodePr CountryCode = "PR"
	CountryCodeQa CountryCode = "QA"
	CountryCodeRe CountryCode = "RE"
	CountryCodeRo CountryCode = "RO"
	CountryCodeRu CountryCode = "RU"
	CountryCodeRw CountryCode = "RW"
	CountryCodeSh CountryCode = "SH"
	CountryCodeKn CountryCode = "KN"
	CountryCodeLc CountryCode = "LC"
	CountryCodePm CountryCode = "PM"
	CountryCodeVc CountryCode = "VC"
	CountryCodeWs CountryCode = "WS"
	CountryCodeSm CountryCode = "SM"
	CountryCodeSt CountryCode = "ST"
	CountryCodeSa CountryCode = "SA"
	CountryCodeSn CountryCode = "SN"
	CountryCodeRs CountryCode = "RS"
	CountryCodeSc CountryCode = "SC"
	CountryCodeSl CountryCode = "SL"
	CountryCodeSg CountryCode = "SG"
	CountryCodeSk CountryCode = "SK"
	CountryCodeSi CountryCode = "SI"
	CountryCodeSb CountryCode = "SB"
	CountryCodeSo CountryCode = "SO"
	CountryCodeZa CountryCode = "ZA"
	CountryCodeGs CountryCode = "GS"
	CountryCodeEs CountryCode = "ES"
	CountryCodeLk CountryCode = "LK"
	CountryCodeSd CountryCode = "SD"
	CountryCodeSr CountryCode = "SR"
	CountryCodeSj CountryCode = "SJ"
	CountryCodeSz CountryCode = "SZ"
	CountryCodeSe CountryCode = "SE"
	CountryCodeCh CountryCode = "CH"
	CountryCodeSy CountryCode = "SY"
	CountryCodeTw CountryCode = "TW"
	CountryCodeTj CountryCode = "TJ"
	CountryCodeTz CountryCode = "TZ"
	CountryCodeTh CountryCode = "TH"
	CountryCodeTl CountryCode = "TL"
	CountryCodeTg CountryCode = "TG"
	CountryCodeTk CountryCode = "TK"
	CountryCodeTo CountryCode = "TO"
	CountryCodeTt CountryCode = "TT"
	CountryCodeTn CountryCode = "TN"
	CountryCodeTr CountryCode = "TR"
	CountryCodeTm CountryCode = "TM"
	CountryCodeTc CountryCode = "TC"
	CountryCodeTv CountryCode = "TV"
	CountryCodeUg CountryCode = "UG"
	CountryCodeUa CountryCode = "UA"
	CountryCodeAe CountryCode = "AE"
	CountryCodeGb CountryCode = "GB"
	CountryCodeUs CountryCode = "US"
	CountryCodeUm CountryCode = "UM"
	CountryCodeUy CountryCode = "UY"
	CountryCodeUz CountryCode = "UZ"
	CountryCodeVu CountryCode = "VU"
	CountryCodeVe CountryCode = "VE"
	CountryCodeVn CountryCode = "VN"
	CountryCodeVg CountryCode = "VG"
	CountryCodeVi CountryCode = "VI"
	CountryCodeWf CountryCode = "WF"
	CountryCodeEh CountryCode = "EH"
	CountryCodeYe CountryCode = "YE"
	CountryCodeZm CountryCode = "ZM"
	CountryCodeZw CountryCode = "ZW"
)

var AllCountryCode = []CountryCode{
	CountryCodeAf,
	CountryCodeAl,
	CountryCodeDz,
	CountryCodeAs,
	CountryCodeAd,
	CountryCodeAo,
	CountryCodeAi,
	CountryCodeAq,
	CountryCodeAg,
	CountryCodeAr,
	CountryCodeAm,
	CountryCodeAw,
	CountryCodeAu,
	CountryCodeAt,
	CountryCodeAz,
	CountryCodeBs,
	CountryCodeBh,
	CountryCodeBd,
	CountryCodeBb,
	CountryCodeBy,
	CountryCodeBe,
	CountryCodeBz,
	CountryCodeBj,
	CountryCodeBm,
	CountryCodeBt,
	CountryCodeBo,
	CountryCodeBa,
	CountryCodeBw,
	CountryCodeBv,
	CountryCodeBr,
	CountryCodeIo,
	CountryCodeBn,
	CountryCodeBg,
	CountryCodeBf,
	CountryCodeBi,
	CountryCodeKh,
	CountryCodeCm,
	CountryCodeCa,
	CountryCodeCv,
	CountryCodeKy,
	CountryCodeCf,
	CountryCodeTd,
	CountryCodeCl,
	CountryCodeCn,
	CountryCodeCx,
	CountryCodeCc,
	CountryCodeCo,
	CountryCodeKm,
	CountryCodeCg,
	CountryCodeCd,
	CountryCodeCk,
	CountryCodeCr,
	CountryCodeCi,
	CountryCodeHr,
	CountryCodeCu,
	CountryCodeCy,
	CountryCodeCz,
	CountryCodeDk,
	CountryCodeDj,
	CountryCodeDm,
	CountryCodeDo,
	CountryCodeEc,
	CountryCodeEg,
	CountryCodeSv,
	CountryCodeGq,
	CountryCodeEr,
	CountryCodeEe,
	CountryCodeEt,
	CountryCodeFk,
	CountryCodeFo,
	CountryCodeFj,
	CountryCodeFi,
	CountryCodeFr,
	CountryCodeGf,
	CountryCodePf,
	CountryCodeTf,
	CountryCodeGa,
	CountryCodeGm,
	CountryCodeGe,
	CountryCodeDe,
	CountryCodeGh,
	CountryCodeGi,
	CountryCodeGr,
	CountryCodeGl,
	CountryCodeGd,
	CountryCodeGp,
	CountryCodeGu,
	CountryCodeGt,
	CountryCodeGg,
	CountryCodeGn,
	CountryCodeGw,
	CountryCodeGy,
	CountryCodeHt,
	CountryCodeHm,
	CountryCodeVa,
	CountryCodeHn,
	CountryCodeHk,
	CountryCodeHu,
	CountryCodeIs,
	CountryCodeIn,
	CountryCodeID,
	CountryCodeIr,
	CountryCodeIq,
	CountryCodeIe,
	CountryCodeIm,
	CountryCodeIl,
	CountryCodeIt,
	CountryCodeJm,
	CountryCodeJp,
	CountryCodeJe,
	CountryCodeJo,
	CountryCodeKz,
	CountryCodeKe,
	CountryCodeKi,
	CountryCodeKp,
	CountryCodeKr,
	CountryCodeKw,
	CountryCodeKg,
	CountryCodeLa,
	CountryCodeLv,
	CountryCodeLb,
	CountryCodeLs,
	CountryCodeLr,
	CountryCodeLy,
	CountryCodeLi,
	CountryCodeLt,
	CountryCodeLu,
	CountryCodeMo,
	CountryCodeMk,
	CountryCodeMg,
	CountryCodeMw,
	CountryCodeMy,
	CountryCodeMv,
	CountryCodeMl,
	CountryCodeMt,
	CountryCodeMh,
	CountryCodeMq,
	CountryCodeMr,
	CountryCodeMu,
	CountryCodeYt,
	CountryCodeMx,
	CountryCodeFm,
	CountryCodeMd,
	CountryCodeMc,
	CountryCodeMn,
	CountryCodeMe,
	CountryCodeMs,
	CountryCodeMa,
	CountryCodeMz,
	CountryCodeMm,
	CountryCodeNa,
	CountryCodeNr,
	CountryCodeNp,
	CountryCodeNl,
	CountryCodeAn,
	CountryCodeNc,
	CountryCodeNz,
	CountryCodeNi,
	CountryCodeNe,
	CountryCodeNg,
	CountryCodeNu,
	CountryCodeNf,
	CountryCodeMp,
	CountryCodeNo,
	CountryCodeOm,
	CountryCodePk,
	CountryCodePw,
	CountryCodePs,
	CountryCodePa,
	CountryCodePg,
	CountryCodePy,
	CountryCodePe,
	CountryCodePh,
	CountryCodePn,
	CountryCodePl,
	CountryCodePt,
	CountryCodePr,
	CountryCodeQa,
	CountryCodeRe,
	CountryCodeRo,
	CountryCodeRu,
	CountryCodeRw,
	CountryCodeSh,
	CountryCodeKn,
	CountryCodeLc,
	CountryCodePm,
	CountryCodeVc,
	CountryCodeWs,
	CountryCodeSm,
	CountryCodeSt,
	CountryCodeSa,
	CountryCodeSn,
	CountryCodeRs,
	CountryCodeSc,
	CountryCodeSl,
	CountryCodeSg,
	CountryCodeSk,
	CountryCodeSi,
	CountryCodeSb,
	CountryCodeSo,
	CountryCodeZa,
	CountryCodeGs,
	CountryCodeEs,
	CountryCodeLk,
	CountryCodeSd,
	CountryCodeSr,
	CountryCodeSj,
	CountryCodeSz,
	CountryCodeSe,
	CountryCodeCh,
	CountryCodeSy,
	CountryCodeTw,
	CountryCodeTj,
	CountryCodeTz,
	CountryCodeTh,
	CountryCodeTl,
	CountryCodeTg,
	CountryCodeTk,
	CountryCodeTo,
	CountryCodeTt,
	CountryCodeTn,
	CountryCodeTr,
	CountryCodeTm,
	CountryCodeTc,
	CountryCodeTv,
	CountryCodeUg,
	CountryCodeUa,
	CountryCodeAe,
	CountryCodeGb,
	CountryCodeUs,
	CountryCodeUm,
	CountryCodeUy,
	CountryCodeUz,
	CountryCodeVu,
	CountryCodeVe,
	CountryCodeVn,
	CountryCodeVg,
	CountryCodeVi,
	CountryCodeWf,
	CountryCodeEh,
	CountryCodeYe,
	CountryCodeZm,
	CountryCodeZw,
}

func (e CountryCode) IsValid() bool {
	switch e {
	case CountryCodeAf, CountryCodeAl, CountryCodeDz, CountryCodeAs, CountryCodeAd, CountryCodeAo, CountryCodeAi, CountryCodeAq, CountryCodeAg, CountryCodeAr, CountryCodeAm, CountryCodeAw, CountryCodeAu, CountryCodeAt, CountryCodeAz, CountryCodeBs, CountryCodeBh, CountryCodeBd, CountryCodeBb, CountryCodeBy, CountryCodeBe, CountryCodeBz, CountryCodeBj, CountryCodeBm, CountryCodeBt, CountryCodeBo, CountryCodeBa, CountryCodeBw, CountryCodeBv, CountryCodeBr, CountryCodeIo, CountryCodeBn, CountryCodeBg, CountryCodeBf, CountryCodeBi, CountryCodeKh, CountryCodeCm, CountryCodeCa, CountryCodeCv, CountryCodeKy, CountryCodeCf, CountryCodeTd, CountryCodeCl, CountryCodeCn, CountryCodeCx, CountryCodeCc, CountryCodeCo, CountryCodeKm, CountryCodeCg, CountryCodeCd, CountryCodeCk, CountryCodeCr, CountryCodeCi, CountryCodeHr, CountryCodeCu, CountryCodeCy, CountryCodeCz, CountryCodeDk, CountryCodeDj, CountryCodeDm, CountryCodeDo, CountryCodeEc, CountryCodeEg, CountryCodeSv, CountryCodeGq, CountryCodeEr, CountryCodeEe, CountryCodeEt, CountryCodeFk, CountryCodeFo, CountryCodeFj, CountryCodeFi, CountryCodeFr, CountryCodeGf, CountryCodePf, CountryCodeTf, CountryCodeGa, CountryCodeGm, CountryCodeGe, CountryCodeDe, CountryCodeGh, CountryCodeGi, CountryCodeGr, CountryCodeGl, CountryCodeGd, CountryCodeGp, CountryCodeGu, CountryCodeGt, CountryCodeGg, CountryCodeGn, CountryCodeGw, CountryCodeGy, CountryCodeHt, CountryCodeHm, CountryCodeVa, CountryCodeHn, CountryCodeHk, CountryCodeHu, CountryCodeIs, CountryCodeIn, CountryCodeID, CountryCodeIr, CountryCodeIq, CountryCodeIe, CountryCodeIm, CountryCodeIl, CountryCodeIt, CountryCodeJm, CountryCodeJp, CountryCodeJe, CountryCodeJo, CountryCodeKz, CountryCodeKe, CountryCodeKi, CountryCodeKp, CountryCodeKr, CountryCodeKw, CountryCodeKg, CountryCodeLa, CountryCodeLv, CountryCodeLb, CountryCodeLs, CountryCodeLr, CountryCodeLy, CountryCodeLi, CountryCodeLt, CountryCodeLu, CountryCodeMo, CountryCodeMk, CountryCodeMg, CountryCodeMw, CountryCodeMy, CountryCodeMv, CountryCodeMl, CountryCodeMt, CountryCodeMh, CountryCodeMq, CountryCodeMr, CountryCodeMu, CountryCodeYt, CountryCodeMx, CountryCodeFm, CountryCodeMd, CountryCodeMc, CountryCodeMn, CountryCodeMe, CountryCodeMs, CountryCodeMa, CountryCodeMz, CountryCodeMm, CountryCodeNa, CountryCodeNr, CountryCodeNp, CountryCodeNl, CountryCodeAn, CountryCodeNc, CountryCodeNz, CountryCodeNi, CountryCodeNe, CountryCodeNg, CountryCodeNu, CountryCodeNf, CountryCodeMp, CountryCodeNo, CountryCodeOm, CountryCodePk, CountryCodePw, CountryCodePs, CountryCodePa, CountryCodePg, CountryCodePy, CountryCodePe, CountryCodePh, CountryCodePn, CountryCodePl, CountryCodePt, CountryCodePr, CountryCodeQa, CountryCodeRe, CountryCodeRo, CountryCodeRu, CountryCodeRw, CountryCodeSh, CountryCodeKn, CountryCodeLc, CountryCodePm, CountryCodeVc, CountryCodeWs, CountryCodeSm, CountryCodeSt, CountryCodeSa, CountryCodeSn, CountryCodeRs, CountryCodeSc, CountryCodeSl, CountryCodeSg, CountryCodeSk, CountryCodeSi, CountryCodeSb, CountryCodeSo, CountryCodeZa, CountryCodeGs, CountryCodeEs, CountryCodeLk, CountryCodeSd, CountryCodeSr, CountryCodeSj, CountryCodeSz, CountryCodeSe, CountryCodeCh, CountryCodeSy, CountryCodeTw, CountryCodeTj, CountryCodeTz, CountryCodeTh, CountryCodeTl, CountryCodeTg, CountryCodeTk, CountryCodeTo, CountryCodeTt, CountryCodeTn, CountryCodeTr, CountryCodeTm, CountryCodeTc, CountryCodeTv, CountryCodeUg, CountryCodeUa, CountryCodeAe, CountryCodeGb, CountryCodeUs, CountryCodeUm, CountryCodeUy, CountryCodeUz, CountryCodeVu, CountryCodeVe, CountryCodeVn, CountryCodeVg, CountryCodeVi, CountryCodeWf, CountryCodeEh, CountryCodeYe, CountryCodeZm, CountryCodeZw:
		return true
	}
	return false
}

func (e CountryCode) String() string {
	return string(e)
}

func (e *CountryCode) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = CountryCode(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid CountryCode", str)
	}
	return nil
}

func (e CountryCode) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MediaSource string

const (
	MediaSourceOriginal          MediaSource = "ORIGINAL"
	MediaSourceManga             MediaSource = "MANGA"
	MediaSourceAnime             MediaSource = "ANIME"
	MediaSourceLightNovel        MediaSource = "LIGHT_NOVEL"
	MediaSourceVisualNovel       MediaSource = "VISUAL_NOVEL"
	MediaSourceVideoGame         MediaSource = "VIDEO_GAME"
	MediaSourceNovel             MediaSource = "NOVEL"
	MediaSourceDoujinshi         MediaSource = "DOUJINSHI"
	MediaSourceWebNovel          MediaSource = "WEB_NOVEL"
	MediaSourceLiveAction        MediaSource = "LIVE_ACTION"
	MediaSourceGame              MediaSource = "GAME"
	MediaSourceComic             MediaSource = "COMIC"
	MediaSourceMultimediaProject MediaSource = "MULTIMEDIA_PROJECT"
	MediaSourcePictureBook       MediaSource = "PICTURE_BOOK"
)

var AllMediaSource = []MediaSource{
	MediaSourceOriginal,
	MediaSourceManga,
	MediaSourceAnime,
	MediaSourceLightNovel,
	MediaSourceVisualNovel,
	MediaSourceVideoGame,
	MediaSourceNovel,
	MediaSourceDoujinshi,
	MediaSourceWebNovel,
	MediaSourceLiveAction,
	MediaSourceGame,
	MediaSourceComic,
	MediaSourceMultimediaProject,
	MediaSourcePictureBook,
}

func (e MediaSource) IsValid() bool {
	switch e {
	case MediaSourceOriginal, MediaSourceManga, MediaSourceAnime, MediaSourceLightNovel, MediaSourceVisualNovel, MediaSourceVideoGame, MediaSourceNovel, MediaSourceDoujinshi, MediaSourceWebNovel, MediaSourceLiveAction, MediaSourceGame, MediaSourceComic, MediaSourceMultimediaProject, MediaSourcePictureBook:
		return true
	}
	return false
}

func (e MediaSource) String() string {
	return string(e)
}

func (e *MediaSource) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MediaSource(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MediaSource", str)
	}
	return nil
}

func (e MediaSource) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MediaStatus string

const (
	MediaStatusFinished       MediaStatus = "FINISHED"
	MediaStatusReleasing      MediaStatus = "RELEASING"
	MediaStatusNotYetReleased MediaStatus = "NOT_YET_RELEASED"
	MediaStatusCancelled      MediaStatus = "CANCELLED"
	MediaStatusHiatus         MediaStatus = "HIATUS"
)

var AllMediaStatus = []MediaStatus{
	MediaStatusFinished,
	MediaStatusReleasing,
	MediaStatusNotYetReleased,
	MediaStatusCancelled,
	MediaStatusHiatus,
}

func (e MediaStatus) IsValid() bool {
	switch e {
	case MediaStatusFinished, MediaStatusReleasing, MediaStatusNotYetReleased, MediaStatusCancelled, MediaStatusHiatus:
		return true
	}
	return false
}

func (e MediaStatus) String() string {
	return string(e)
}

func (e *MediaStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MediaStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MediaStatus", str)
	}
	return nil
}

func (e MediaStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MediaType string

const (
	MediaTypeAnime MediaType = "ANIME"
	MediaTypeOva   MediaType = "OVA"
	MediaTypeOna   MediaType = "ONA"
	MediaTypeManga MediaType = "MANGA"
	MediaTypeMovie MediaType = "MOVIE"
	MediaTypeShow  MediaType = "SHOW"
	MediaTypeBook  MediaType = "BOOK"
)

var AllMediaType = []MediaType{
	MediaTypeAnime,
	MediaTypeOva,
	MediaTypeOna,
	MediaTypeManga,
	MediaTypeMovie,
	MediaTypeShow,
	MediaTypeBook,
}

func (e MediaType) IsValid() bool {
	switch e {
	case MediaTypeAnime, MediaTypeOva, MediaTypeOna, MediaTypeManga, MediaTypeMovie, MediaTypeShow, MediaTypeBook:
		return true
	}
	return false
}

func (e MediaType) String() string {
	return string(e)
}

func (e *MediaType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MediaType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MediaType", str)
	}
	return nil
}

func (e MediaType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
