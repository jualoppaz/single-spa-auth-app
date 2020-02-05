<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <form @submit.prevent="onSubmit(user, password)">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user"
                placeholder="User"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
          </form>
        </div>
      </div>
      <div id="copyright-section" class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          Copyright © 2020
          <a href="http://www.juanmanuellopezpazos.es" target="_blank"
            >Juan Manuel López Pazos</a
          >
          <a
            href="https://github.com/jualoppaz/single-spa-login-example-with-npm-packages"
            target="_blank"
            id="github-link"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginView',
  data() {
    return {
      user: null,
      password: null,
    };
  },
  methods: {
    onSubmit(user, password) {
      if (user === 'admin' && password === '12345') {
        sessionStorage.setItem('user', JSON.stringify({ username: user }));
        sessionStorage.setItem('token', 'your auth token here');
        window.history.pushState(null, null, '/');
      } else {
        this.$toastr.e('Invalid credentials');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-page {
    height: 100vh;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;

    .container{
      .row{
        h1{
          margin-bottom: 30px;
        }

        form{
            button{
                margin-top: 30px;
            }
        }

        &#copyright-section{
          margin-top: 30px;
          line-height: 32px;
          a#github-link{
            color: #303846;
            margin-left: 10px;
            vertical-align: middle;
          }
        }
      }
    }
}
</style>
