<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Vaccination Platform</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <!-- S: Header -->
    <header class="jumbotron">
      <div class="container text-center">
        <h1 class="display-4">Vaccination Platform</h1>
      </div>
    </header>
    <!-- E: Header -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form class="card card-default" @submit.prevent="userLogin">
            <div class="card-header">
              <h4 class="mb-0">Login</h4>
              <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>
            </div>
            <div class="card-body">
              <div class="form-group row align-items-center">
                <div class="col-4 text-right">ID Card Number</div>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.id_card_number"
                  />
                </div>
              </div>
              <div class="form-group row align-items-center">
                <div class="col-4 text-right">Password</div>
                <div class="col-8">
                  <input
                    type="password"
                    class="form-control"
                    v-model="user.password"
                  />
                </div>
              </div>
              <div class="form-group row align-items-center mt-4">
                <div class="col-4"></div>
                <div class="col-8">
                  <button class="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        id_card_number: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    userLogin() {
      // this.$store
      //   .dispatch("login", this.user)
      //   .then((response) => {
      //     console.log(response);
      //     this.$router.push({ name: "Dashboard" });
      //   })
      //   .catch((error) => {
      //     this.errors = error.response.data.message;
      //   });
      axios
        .post(
          "https://jalatra.com/apivaccinify/14-kabupaten-purwakarta/api/v1/auth/login",
          this.user
        )
        .then((res) => {
          const token = res.data.token;
          const nama = res.data.name;
          localStorage.setItem("token", token);
          localStorage.setItem("nama", nama);
          this.$router.push("/Dashboard");
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Berhasil Login",
            showConfirmButton: false,
            width: "500px",
            timer: 3000,
            timerProgressBar: true,
          });
          // console.log(res);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
  },
};
</script>

