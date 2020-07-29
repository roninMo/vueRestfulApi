<template>
  <div class="template-container mt-5">
    <v-row class="mb-6" justify="center">
      <v-col
        xs="12"
        sm="12"
        md="10"
        lg="8"
        v-for="post in posts"
        v-bind:key="post.id"
      >
        <v-card dark>
          <v-card-title class="c-t">{{ post.title }}</v-card-title>
          <v-card-subtitle class="text-left c-t"
            >User {{ post.id }}</v-card-subtitle
          >
          <v-card-text class="text-left">{{ post.body }}</v-card-text>

          <v-card-actions>
            <!-- Edit post button and modal -->
            <EditPost
              v-bind:postId="post.id"
              v-on:edit-post-pass="editPostPass"
            />

            <!-- Delete post button -->
            <v-btn
              text
              color="red accent-4"
              @click="$emit('del-post', post.id)"
            >
              Delete
            </v-btn>
          </v-card-actions>

          <v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle class="text-left com-t">Comments</v-card-subtitle>

            <!-- Comments loop -->
            <div class="conditional" v-if="post.comments != null">
              <v-card
                class="mb-2 comment-card"
                v-for="comment in post.comments"
                v-bind:key="comment.id"
              >
                <v-card-title class="text-left comment comment-title"
                  >User: {{ comment.name }}</v-card-title
                >
                <v-card-subtitle class="text-left comment comment-title">{{
                  comment.email
                }}</v-card-subtitle>

                <v-card-text class="text-left comment">{{
                  comment.body
                }}</v-card-text>
              </v-card>
            </div>
          </v-card-text>

          <!-- Search  -->
          <v-form ref="form" lazy-validation>
            <v-row class="mb-6" justify="center" align="center">
              <v-col xs="6" sm="8" md="8" lg="8">
                <v-text-field
                  v-model="comment"
                  label="Comment"
                  class="ml-2"
                ></v-text-field>
              </v-col>

              <v-col xs="2" sm="2" md="2" lg="2">
                <v-btn color="success" @click="createComment(post.id)"
                  >Send</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<!-- 
Add Comments,
Edit/Delete Posts
-->

<script>
import EditPost from "./EditPost";

export default {
  name: "Posts",
  components: { EditPost },
  props: ["posts"],
  data: () => ({
    comment: "",
  }),
  methods: {
    createComment(id) {
      const newComment = {
        postId: id,
        name: "Randy Butternubs",
        email: "exampleEmail@someEmail.com",
        body: this.comment,
      };
      this.$emit("create-comment", newComment);
      this.title = "";
    },
    editPostPass(editPostData) {
      this.$emit("edit-post", editPostData);
    },
  },
};
</script>

<style scoped>
.c-t,
.comment-title {
  font-weight: 300;
}

.com-t {
  font-size: 1.2rem;
}

.comment-card {
  border: 1px solid grey;
  transition: border 340ms;
}
.comment-card:hover {
  border: 1px solid rgb(33, 150, 243);
}
</style>
