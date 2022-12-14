<template>
    <div class="container">
        <div class="row">
            <div v-for="(book, index) in books" :key="index" class="col-4 card book-card">
                <h5 class="card-title"> {{ book.fields.title }} </h5>
                <div class="card-body">
                    <font-awesome-icon :icon="['fas', 'check']" />
                    <p class="card-text"> {{ book.fields.synopsis }} </p>
                    <hr />
                    <ul>
                        <li class="item">
                            <div> Author </div>
                            <div> {{ book.fields.author }} </div>
                        </li>
                        <li class="item">
                            <div> First published </div>
                            <div> {{ book.fields.yearPublished }} </div>
                        </li>
                        <li class="item">
                            <div> Category </div>
                            <div> {{ book.fields.category }} </div>
                        </li>
                        <li class="item">
                            <div> Goodreads rating </div>
                            <div> {{ book.fields.goodreadsRating }} / 5 </div>
                        </li>
                        <li class="item">
                            <div> My rating </div>
                            <div> {{ book.fields.myRating }} / 5 </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getShows, getBooks } from "@/api-client/api";

    export default {
        name: 'HelloWorld',
        data () {
            return {
                books: []
            }
        },
        mounted () {
            getShows().then(shows => {
                console.log(shows.items)
            })
            getBooks().then(books => {
                this.books = books.items;
            })
        }
    }
</script>


<style scoped lang="scss">
    .book-card {
        border-radius: 20px;
    }
    .card-title {
        background-color: #24292F;
        color: white;
        padding: 40px 20px;
        font-weight: 700;
        font-size: 35px;
        border-radius: 20px 20px 0 0;
        margin-bottom: 0;
    }
    .card-text {
        font-size: 18px;
    }
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    div[class*='col-4'] {
        padding: 0;
    }
    ul {
        padding: 0;
        li {
            border-bottom: 1px solid #2c3e50;
        }
    }
</style>
