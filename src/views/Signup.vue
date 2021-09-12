<template>
  <div class="signup">
      <div class="wrapper">
        <div class="content">
          <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 mb-4">
              <div class="user-signin">
                <form action="">
                  <div class="form-group mb-4">
                    <h4 class="mb-4">USER SIGN-UP</h4>
                    <label for="" class="mb-2">
                      First Name
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Last Name
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Email
                    </label>
                    <input type="email" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Password
                    </label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="d-flex justify-content-end">
                    <button>Signup</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12">
              <div class="business-signin">
                <form action="">
                  <div class="form-group mb-4">
                    <h4 class="mb-4">BUSINESS SIGN-UP</h4>
                    <label for="" class="mb-2">
                      Business Name
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Category
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Email
                    </label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group mb-4">
                    <label for="" class="mb-2">
                      Password
                    </label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="d-flex justify-content-end">
                    <button>Signup</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .user-signin,
    .business-signin{
      background: #f3f3f3;
      padding: 1rem 2rem;
      border-radius: 1rem;
      width: 30rem
    }
    button{
        font-size: 16px;
        background: #e3952f;
        border: none;
        padding: .5rem 1rem;
        border-radius: .5rem;
    }
    
    .user-signup a{
        text-decoration:none
    }
</style>
