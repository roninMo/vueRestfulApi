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

!!!!
This would be the incoming post data, and I'm going to change the cards above to be v-for elements for the posts and the 
respective comments that each has. How do I pull in the postId of each into the createComment function?

{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
"userId": 1,
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
"userId": 1,
"id": 3,
"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
"userId": 1,
"id": 4,
"title": "eum et est occaecati",
"body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
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
