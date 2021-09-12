import '@/assets/global.css';

<template>
    <div class="app">
      <div class="voucher-nav">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div>Logo</div>
            <div class="flex-grow-1">
              <div class="search-pad">
                <div class="search d-flex">
                  <img src="./images/search.png" class="img-fluid search-img" alt="">
                  <input type="text" />
                </div>
              </div>
            </div>
              <div class="auth d-flex justify-content-around">
                <div class="user">
                  <img src="./images/user.png" class="img-fluid" alt="">
                    <router-link to="/signin">Sign in</router-link>
                </div>
                <div class="login">
                  <router-link to="/signup">Sign up</router-link>
                  <img src="./images/cart.png" class="img-fluid" alt="">
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="voucher-nav-mobile">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="flex-grow-1">Logo</div>
              <div class="auth d-flex justify-content-around">
                <div class="user">
                  <img src="./images/user.png" class="img-fluid" alt="">
                    <router-link to="/signin">Sign in</router-link>
                </div>
                <div class="login">
                  <router-link to="/signup">Sign up</router-link>
                  <img src="./images/cart.png" class="img-fluid" alt="">
                </div>
              </div>
          </div>
          <div>
            <div class="search-pad">
              <div class="search">
                <img src="./images/search.png" class="img-fluid search-img" alt="">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="app-content">
           <router-view></router-view>
        </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12 col-xs 12">
              <div class="d-flex justify-content-center">
                <div class="social-media">
                    <h6 class="mb-4">SOCIAL MEDIA</h6>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                        <div class="d-flex">
                            <img src="./images/instagram.png" class="img-fluid" alt="">
                            <div>Instagram</div>
                        </div>
                      </router-link>
                    </div>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                        <div class="d-flex">
                            <img src="./images/facebook.png" class="img-fluid" alt="">
                            <div>Facebook</div>
                        </div>
                      </router-link>
                    </div>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                        <div class="d-flex">
                            <img src="./images/twitter.png" class="img-fluid" alt="">
                            <div>Twitter</div>
                        </div>
                      </router-link>
                    </div>
                </div>

              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs 12">
              <div class="d-flex justify-content-center">
                  <div class="social-media">
                    <h6 class="mb-4">CONTACT US</h6>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                        <div class="d-flex">
                            <img src="./images/email.png" class="img-fluid" alt="">
                            <div>Lorem, ipsum dolor. </div>
                        </div>
                      </router-link>
                    </div>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                        <div class="d-flex">
                            <img src="./images/phone.png" class="img-fluid" alt="">
                            <div> Lorem, ipsum dolor. </div>
                        </div>
                      </router-link>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 col-xs 12">
              <div class="d-flex justify-content-center">
                  <div class="social-media">
                    <h6 class="mb-4">USEFUL LINK</h6>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                            <div>Frequently Asked Questions</div>
                      </router-link>
                    </div>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                            <div> Terms And Condition </div>
                      </router-link>
                    </div>
                    <div class="mb-4">
                      <router-link to="samon" class="">
                            <div> Terms of Use </div>
                      </router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>

  .app-content{
    /* margin: 2rem 10rem; */
  }
  .voucher-nav{
    padding: 1em;
    background: #e3952f;
  }
  .voucher-nav-mobile{
    padding: 1em;
    background: #e3952f;
  }
  .search input,
  .search input:focus
  .search input:hover{
    border: 0px;
    outline: none;
    width: 100%;
    height: 2rem;
    background: none;
    padding: .5em;
    font-size: 14px;
    
  }
  .search{
    border: 2px solid #000;
    border-radius: 5px;
    width: 100%;
    height: 2.5rem;
  }
  .search-pad{
    margin: 0rem 3rem;
  }

  .auth{
    width: 250px;
  }

  .voucher-nav img, .voucher-nav-mobile img{
    height: 20px;;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .voucher-nav a, .voucher-nav-mobile a,
  footer a{
    color: white;
    text-decoration: none;
  }

  img.search-img{
    height: 20px;
    margin-top: .45rem;
  }

  footer{
    background: #000;
    color:white;
    padding: 2rem 0em;
    font-size: 16px;
  }

  footer img{
    height: 20px !important;
    margin-right: 1rem;
  }
 :root {
    --primary-color: #e3952f;
    --secondary-color: #faf0e6;
    }
    button{
        font-size: 16px;
        background: var(--primary-color);
        border: none;
        padding: .5rem 1rem;
        border-radius: .5rem;
    }
    button:hover{
        font-size: 16px;
        background: #f0b76d;
        border: none;
        padding: .5rem 1rem;
        border-radius: .5rem;
    }
        .voucher-nav-mobile {
           display: none;
        }
    @media screen and (max-width: 480px) {
        .voucher-nav {
           display: none;
        }
        .voucher-nav-mobile {
           display: block;
        }
        .search-pad{
          margin: 1rem 0rem;
        }
        .search input{
          width: auto;
        }
        img.search-img{
          margin-top: .2rem;
        }
        footer .justify-content-center{
          justify-content: left !important;
          margin-left: 2rem;
        }

        footer h6{
          font-size: 16px;
          font-weight: bolder
        }
    }
</style>
