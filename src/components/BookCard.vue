<template>
    <div class="card book-card">
        <h5 class="card-title"> {{ book.title }} </h5>
        <div class="card-body" :class="{ 'body-padding-left' : book.isFavorite || book.readMultipleTimes }">
            <div v-if="book.isFavorite" class="info-badge heart-icon" data-toggle="tooltip" title="Favorite book">
                <font-awesome-icon :icon="['fas', 'heart']" />
            </div>
            <div v-if="book.readMultipleTimes" class="info-badge book-icon" data-toggle="tooltip" title="Read more than once">
                <font-awesome-icon :icon="['fas', 'book-open']" />
            </div>
            <p class="card-text"> {{ book.synopsis }} </p>
            <hr />
            <ul>
                <li>
                    <div> Author </div>
                    <div> {{ book.author }} </div>
                </li>
                <li>
                    <div> First published </div>
                    <div> {{ book.yearPublished }} </div>
                </li>
                <li>
                    <div> Category </div>
                    <div> {{ book.category }} </div>
                </li>
                <li>
                    <div> Goodreads rating </div>
                    <div> {{ book.goodreadsRating }} / 5 </div>
                </li>
                <li>
                    <div> My rating </div>
                    <div> {{ book.myRating }} / 5 </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        book: Object
    }
}
</script>


<style scoped lang="scss">
    .book-card {
        border-radius: 20px;
        .card-body {
            position: relative;
            .heart-icon {
                left: -33px;
                color: #ffd43b;
            }
            .book-icon {
                top: 90px;
                left: -33px;
                color: #fd675d;
            }
        }
    }
    div[class*='col-4'] {
        padding: 0;
    }
    .body-padding-left {
        padding-left: 25px;
    }
</style>
