<template>
  <div class="template-container">
    <v-row class="mb-6" justify="center">
      <v-col xs="11" sm="10" md="9" lg="8">
        <h2 class="mb-10">Restful Vue API with Vuetify library</h2>

        <v-row class="mb-6" justify="center">
          <v-card dark class="mb-10">
            <div>
              <v-card-title class="headline">Brief Introduction</v-card-title>
              <v-card-subtitle class="text-left"
                >My Portfolio/Work</v-card-subtitle
              >

              <v-card-text>
                If you haven't already, go check out my portfolio! I've done a
                lot of these in sprints, and it ranges from backend to frontend
                fundamentals and core concepts for each language/stack they're
                in. It's nothing production worthy, reach out to my past boss
                from demandjump for my experience and work there. I have his
                number in my portfolio, just scroll through my projects. I'm
                freelancing inbetween job searching, and would love to work in a
                javascript oriented back or front end environment. I'd work my
                butt off for an employer especially when the times are rough
                like they are now. If you wanna contact me scroll to the bottom
                of my portfolio to email or get in touch via linkedin, I'd love
                an opportunity
              </v-card-text>

              <a href="https://roninmo.github.io/myPortfolio/#home">
                <v-btn text color="blue accent-4" class="mb-4">
                  My Portfolio
                </v-btn>
              </a>
            </div>
          </v-card>

          <v-card dark class="mb-10">
            <div>
              <v-card-title class="headline">Area of work</v-card-title>
              <v-card-subtitle class="text-left"
                >Full Stack dev/freelance</v-card-subtitle
              >

              <v-card-text>
                I really don't mind doing front or backend work, I really like
                creating MVC's and routing though so I'm more of a back end dev.
                When I build in front end I'll use whatever library or theme
                pack the project or client demands. Whether that's building
                unique design or augmenting some stuff that's already put
                together I enjoy building whatever component/design is
                requested. From connecting to restful api's or backend, building
                each component based on given design or user stories, or
                building authentication, I've got a solid understanding and I'm
                happy to help with whatever task is thrown my way.
              </v-card-text>
            </div>
          </v-card>

          <v-card dark class="mb-10">
            <div>
              <v-card-title class="headline">About this project</v-card-title>
              <v-card-subtitle class="text-left"
                >So I heard you need employees that'll work their butts off
                off</v-card-subtitle
              >

              <v-card-text>
                Right now I'm just doing freelancing work right now actively
                searching for a job, and have a lot of experience in Javascript
                frameworks such as Angular and React. I had some user stories
                and work to finish last week for a freelancing project, and
                thought I'd get up to speed. This goes through crud
                functionality, vue's directives, routing, emit handler
                functions, and overall understanding of Vue's structure along
                with responsive design. I used axios to daisy chain promise
                functions from api calls, and I really like the flow of Vue. The
                way it handles props and state remind me a lot of React, and
                it's got a similar structure to Angular, but it's really robust
                and intuitive. It's got a nice design with restful api
                functionality across multiple different api's. I was already
                familiar with them, and was just building for fun. It wouldn't
                be hard to connect it to one of my back ends and create
                authentication and everything along with it! You have full crud
                functionality on the jsonplaceholder api, search functionality
                on the rick and morty api, and studio ghibli was just for fun (I
                love studio ghibli!). I understand how to create the sql queries
                on the back end to create these searches via routing myself, I
                just thought this would be nice to put together for you.
              </v-card-text>
            </div>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
a {
  text-decoration: none;
}

h2 {
  font-weight: 300;
  font-size: 2rem;
}
</style>
