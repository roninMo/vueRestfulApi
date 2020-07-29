<template>
  <div class="template-container">
    <v-row justify="center" align="center">
      <v-col xs="12" sm="12" md="10" lg="9">
        <h2>Post/Comments section of JSON Placeholder!</h2>
        <p>
          This is minimal design to put together a post to comments section. I'm
          just going through some simple crud functionality. Check out my
          Insurance App for an MVC that goes deep into creating routes and
          controllers for these, but for now here's something simple. My Heart
          to Art Server/Client will also goes through pulling interconnected
          data like this. It's really inefficient to run multiple http requests,
          but I can't create the sql for a foreign api, so I'm just gonna nest
          the queries in promise functions and put the data within the post
          object. Anyways here's the restful api get/post/delete/update
          functionality
        </p>
      </v-col>
    </v-row>

    <Posts
      v-bind:posts="posts"
      v-on:create-comment="addComment"
      v-on:edit-post="editPost"
      v-on:del-post="deletePost"
    />
  </div>
</template>

<script>
import axios from "axios";

import Posts from "./Posts";
export default {
  name: "Json",
  components: {
    Posts,
  },
  data: () => ({
    posts: [],
  }),
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then((res) => {
        this.posts = res.data;
        console.log(`These are the posts`, this.posts);
        for (let i = 0; i < this.posts.length; i++) {
          this.posts[i].comments = null;
          axios
            .get(
              `https://jsonplaceholder.typicode.com/post/${this.posts[i].id}/comments`
            )
            .then((resp) => (this.posts[i].comments = resp.data))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  },
  methods: {
    addComment(comment) {
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, comment)
        .then((res) => console.log(`Successfully created comment!`, res))
        .catch((err) => console.log(err));
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id == comment.postId) {
          this.posts[i].comments = [...this.posts[i].comments, comment];
          console.log(`Here's the new comments!`, this.posts[i]);
        }
      }
    },
    editPost(post) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
          title: post.title,
          body: post.body,
        })
        .then((res) => console.log(`Successfully edited post!`, res))
        .catch((err) => console.log(err));
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id == post.id) {
          this.posts[i].title = post.title;
          this.posts[i].body = post.body;
        }
      }
    },
    deletePost(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => console.log(`Successfully deleted post!`, res))
        .catch((err) => console.log(err));
      this.posts = this.posts.filter((post) => post.id != id);
    },
  },
};
</script>

<style scoped></style>
