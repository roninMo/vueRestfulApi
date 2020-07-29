<template>
  <div class="mb-5">
    <h1 class="mb-14">A brief overview of some of Studio Ghibli's Work</h1>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="11" lg="10">
        <v-card>
          <v-card-text
            >Hey the Studio Ghibli api doesn't have any images, and a lot of the
            data isn't interconnected, but each film is like a relaxing disney
            film that's really soothing. I got accustomed to all the different
            directives, emits, binds, and conditionals while I built these out.
            This one's a little rough around the edges with formatting, but it's
            responsive and has nested api calls for all the encompassing data.
            I'd just run a single query with a complex sql query on my back end
            to make this easier on the eyes and to work on the front
            end.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>

    <Films v-bind:films="filmData" />
  </div>
</template>

<script>
import axios from "axios";

import Films from "./Films";

export default {
  name: "Ghibli",
  components: { Films },
  created() {
    //   Randomize the carousel component
    for (let i = this.randomIter.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.randomIter[i], this.randomIter[j]] = [
        this.randomIter[j],
        this.randomIter[i],
      ];
    }

    for (let i = 0; i < this.films.length; i++) {
      axios
        .get(
          `https://ghibliapi.herokuapp.com/films/?title=${this.films[i].name}`
        )
        .then((res) => {
          // Storing the data in a neat format for it's nested api calls that we're also going to pull
          let filmResData = {
            id: res.data[0].id,
            title: res.data[0].title,
            description: res.data[0].description,
            director: res.data[0].director,
            producer: res.data[0].producer,
            release_date: res.data[0].release_date,
            rating: parseFloat(res.data[0].rt_score / 20),
            img: this.films[i].url,
            people: null,
            species: null,
            locations: null,
            vehicles: null,
            peopleData: [],
            speciesData: [],
            locationsData: [],
            vehiclesData: [],
          };

          // Grab the data attached to each film if there is any
          if (
            res.data[0].people[0] != `https://ghibliapi.herokuapp.com/people/`
          ) {
            filmResData.people = res.data[0].people;
            for (let p = 0; p < filmResData.people.length; p++) {
              axios
                .get(filmResData.people[p])
                .then(
                  (resp) =>
                    (filmResData.peopleData = [
                      ...filmResData.peopleData,
                      resp.data,
                    ])
                )
                .catch((err) => console.log(`Get error people`, err));
            }
          }
          if (res.data[0].species.length != 1) {
            filmResData.species = res.data[0].species;
            for (let s = 0; s < filmResData.species.length; s++) {
              axios
                .get(filmResData.species[s])
                .then(
                  (resp) =>
                    (filmResData.speciesData = [
                      ...filmResData.speciesData,
                      resp.data,
                    ])
                )
                .catch((err) => console.log(`Get error species`, err));
            }
          }
          if (
            res.data[0].locations[0] !=
            `https://ghibliapi.herokuapp.com/locations/`
          ) {
            filmResData.locations = res.data[0].locations;
            for (let l = 0; l < filmResData.locations.length; l++) {
              axios
                .get(filmResData.locations[l])
                .then(
                  (resp) =>
                    (filmResData.locationsData = [
                      ...filmResData.locationsData,
                      resp.data,
                    ])
                )
                .catch((err) => console.log(`Get error locations`, err));
            }
          }
          if (
            res.data[0].vehicles[0] !=
            `https://ghibliapi.herokuapp.com/vehicles/`
          ) {
            filmResData.vehicles = res.data[0].vehicles;
            for (let v = 0; v < filmResData.vehicles.length; v++) {
              axios
                .get(filmResData.vehicles[v])
                .then(
                  (resp) =>
                    (filmResData.vehiclesData = [
                      ...filmResData.vehiclesData,
                      resp.data,
                    ])
                )
                .catch((err) => console.log(`Get error vehicles`, err));
            }
          }

          this.filmData = [...this.filmData, filmResData];
          if (i == this.films.length - 1)
            console.log(`Current filmData`, this.filmData);
        })
        .catch((err) => console.log(err));
    }
  },
  data: () => ({
    filmData: [],
    films: [
      {
        name: "Princess Mononoke",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/06/poster_mononoke-683x1024.jpg",
      },
      {
        name: "My Neighbor Totoro",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_my_neighbor_totoro-683x1024.jpg",
      },
      {
        name: "Spirited Away",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1055-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Castle in the Sky",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1476-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Arrietty",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/arrietty_poster-683x1024.jpg",
      },
      {
        name: "Grave of the Fireflies",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1100-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Howl's Moving Castle",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/2783-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Kiki's Delivery Service",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_kiki-683x1024.jpg",
      },
      {
        name: "My Neighbors the Yamadas",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1484-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Only Yesterday",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1479-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Pom Poko",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1482-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Ponyo",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/14815-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Porco Rosso",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_porco_rosso-683x1024.jpg",
      },
      {
        name: "Tales from Earthsea",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/5845-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "From Up on Poppy Hill",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/16933-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "The Cat Returns",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_cat_returns-683x1024.jpg",
      },
      {
        name: "The Tale of the Princess Kaguya",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/18651-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "The Wind Rises",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_wind_rises-683x1024.jpg",
      },
      {
        name: "When Marnie Was There",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/22719-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
      {
        name: "Whisper of the Heart",
        url:
          "https://www.studioghibli.com.au/wp-content/uploads/2017/07/1483-title-treatment-portrait-key-art-normal-medium-683x1024.jpg",
      },
    ],
    randomIter: [
      "../assets/posters/0.jpg",
      "../assets/posters/1.jpg",
      "../assets/posters/2.jpg",
      "../assets/posters/3.jpg",
      "../assets/posters/4.jpg",
      "../assets/posters/5.jpg",
      "../assets/posters/6.jpg",
      "../assets/posters/7.jpg",
      "../assets/posters/8.jpg",
      "../assets/posters/9.jpg",
      "../assets/posters/10.jpg",
      "../assets/posters/11.jpg",
      "../assets/posters/12.jpg",
      "../assets/posters/13.jpg",
      "../assets/posters/14.jpg",
      "../assets/posters/15.jpg",
      "../assets/posters/16.jpg",
      "../assets/posters/17.jpg",
      "../assets/posters/18.jpg",
      "../assets/posters/19.jpg",
    ],
  }),
};
</script>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 2.5rem;
}
</style>
