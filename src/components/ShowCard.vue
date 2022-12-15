<template>
    <div class="card show-card">
        <h5 class="card-title"> {{ show.title }} </h5>
        <div class="card-body">
            <div class="icons d-flex d-sm-block justify-content-around">
                <div class="info-badge" :class="{ 'movie-icon' : show.type === 'movie', 'serial-icon' : show.type === 'serial' }" data-toggle="tooltip" :title="show.type === 'movie' ? `${show.title} is a movie` : `${show.title} is a TV show`">
                    <font-awesome-icon :icon="['fas', show.type === 'movie' ? 'clapperboard' : 'tv']" />
                </div>
                <div v-if="show.isFavorite" class="info-badge heart-icon" data-toggle="tooltip" title="Favorite">
                    <font-awesome-icon :icon="['fas', 'heart']" />
                </div>
                <div v-if="show.watchedMultipleTimes" class="info-badge rotate-icon" data-toggle="tooltip" title="Watched more than once">
                    <font-awesome-icon :icon="['fas', 'rotate-right']" />
                </div>
                <div v-if="show.isDirectorFavorite" class="info-badge favorite-director-icon" data-toggle="tooltip" title="Favorite director">
                    <div> fd </div>
                </div>
                <div v-if="show.isWriterFavorite" class="info-badge favorite-writer-icon" data-toggle="tooltip" title="Favorite writer">
                    <div> fw </div>
                </div>
            </div>
            <p class="card-text"> {{ show.synopsis }} </p>
            <hr />
            <ul>
                <li>
                    <div> Directed by </div>
                    <div> {{ show.directedBy }} </div>
                </li>
                <li>
                    <div> Written by </div>
                    <div> {{ show.writtenBy }} </div>
                </li>
                <li>
                    <div> Genre </div>
                    <div> {{ show.genre }} </div>
                </li>
                <li>
                    <div> First released </div>
                    <div> {{ show.releaseYear }} </div>
                </li>
                <li>
                    <div> IMDB </div>
                    <div> {{ show.imdbRating }} / 10 </div>
                </li>
                <li>
                    <div> Rotten Tomatoes </div>
                    <div> {{ show.rottenTomatoesRating }}% </div>
                </li>
                <li>
                    <div> My rating </div>
                    <div> {{ show.myRating }} / 5 </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowCard',
    props: {
        show: Object
    }
}
</script>


<style scoped lang="scss">
    .show-card {
        border-radius: 20px;
        max-width: 325px;
        margin: auto;
        .card-body {
            position: relative;
            padding-left: 30px;
            @include media-breakpoint-only(xs) {
                padding-left: 16px;
            }
            .movie-icon {
                left: -33px;
                color: #ADE792;
            }
            .serial-icon {
                left: -33px;
                color: #FF9E9E;
            }
            .heart-icon {
                left: -33px;
                top: 85px;
                color: #ffd43b;
            }
            .rotate-icon {
                top: 155px;
                left: -33px;
                color: #E80F88;
            }
            .favorite-director-icon {
                top: 223px;
                left: -33px;
                color: #08D9D6;
            }
            .favorite-writer-icon {
                top: 290px;
                left: -33px;
                color: #FF7000;
            }
        }
    }
    div[class*='col-4'] {
        padding: 0;
    }
</style>
