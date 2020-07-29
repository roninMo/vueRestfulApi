<template>
  <div class="template-container mt-5">
    <v-row class="mb-6" justify="center">
      <v-col xs="12" sm="12" md="10" lg="8">
        <v-card dark>
          <v-card-title class="c-t">Title</v-card-title>
          <v-card-subtitle class="text-left c-t">User name</v-card-subtitle>
          <v-card-text class="text-left"> Post description</v-card-text>

          <v-card-actions>
            <v-btn text color="warning accent-4">
              Edit
            </v-btn>

            <v-btn text color="red accent-4">
              Delete
            </v-btn>
          </v-card-actions>

          <v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle class="text-left com-t">Comments</v-card-subtitle>

            <!-- Comments loop -->
            <v-card class="mb-2">
              <v-card-title class="text-left comment">User 'name'</v-card-title>
              <v-card-subtitle class="text-left comment">email</v-card-subtitle>

              <v-card-text class="text-left comment"
                >Card body text heyo</v-card-text
              >
            </v-card>
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
                <v-btn color="success" @click="createComment">Send</v-btn>
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
export default {
  name: "Posts",
  props: ["posts"],
  data: () => ({
    comment: "",
  }),
  methods: {
    createComment() {
      const newComment = {
        postId: ,
        name: "Randy Butternubs",
        email: "exampleEmail@someEmail.com",
        body: this.comment,
      };
      this.$emit("create-comment", newComment);
      this.title = "";
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
</style>
