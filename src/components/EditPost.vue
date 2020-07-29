<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="warning accent-4" v-bind="attrs" v-on="on">
        Edit
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline comment-title"
          >Edit Post with and id of {{ postId }}</span
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="title"
                v-model="title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="description"
                v-model="description"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="editPost(postId)">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditPost",
  props: ["postId"],
  data: () => ({
    dialog: false,
    title: "",
    description: "",
  }),
  methods: {
    editPost(postId) {
      this.dialog = false;
      const editPostData = {
        id: postId,
        title: this.title,
        body: this.description,
      };

      this.$emit("edit-post-pass", editPostData);
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style scoped></style>
