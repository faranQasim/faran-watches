<template>
    <div class="container">
        <h1> Movies and TV Shows </h1>
        <div class="row gy-4">
            <div v-for="(show, index) in shows" :key="index" class="col-12 col-md-6 col-xl-4">
                <ShowCard :show="show.fields" />
            </div>
        </div>
        <h1 class="mt-5"> Books </h1>
        <div class="row gy-4">
            <div v-for="(book, index) in books" :key="index" class="col-12 col-md-6 col-xl-4">
                <BookCard :book="book.fields" />
            </div>
        </div>
    </div>
</template>

<script>
import { getShows, getBooks } from "@/api-client/api";
import BookCard from "@/components/BookCard";
import ShowCard from "@/components/ShowCard";

export default {
    name: 'HomePage',
    data () {
        return {
            books: [],
            shows: []
        }
    },
    mounted () {
        getShows().then(shows => {
            this.shows = shows.items;
        })
        getBooks().then(books => {
            this.books = books.items;
        })
    },
    components: {
        BookCard,
        ShowCard
    }
}
</script>

