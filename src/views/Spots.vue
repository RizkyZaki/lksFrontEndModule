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
            <a class="nav-link" href="#">Marsito Kusmawati</a>
          </li>
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
      <div class="container">
        <h1 class="display-4">First Vaccination</h1>
      </div>
    </header>
    <!-- E: Header -->
  </main>
</template>
<script>
export default {
  data() {
    return {
      spots: [],
    };
  },
  created() {
    this.nama = localStorage.getItem("nama");
    this.token = localStorage.getItem("token");
  },
};
</script>