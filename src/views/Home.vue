<template>
    <div class="home" >
        <div class="wrapper">
            <div class="content d-flex justify-content-center">
               <div class="categories">
                   <h3>Categories</h3>
                   <transition name="fade" appear>
                        <div class="row">
                            <div class="col-md-3 col-6 col-sm-6 mb-4" 
                                v-for="icon in icons" 
                                :key="icon.id"
                                >
                                <div>
                                    <router-link :to="icon.url">
                                            <div class="item" v-bind:class="[icon.backgroundColor]">
                                                <div class="sub-item">
                                                    <div class="icon">
                                                        <span class="material-icons">{{icon.icon}}</span>
                                                    </div>
                                                    <div class="title">{{icon.title}}</div>
                                                </div>
                                            </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                   </transition>
               </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
      return{
          bgimage: "homebgs",
          selectedIndex: -1,
          methods: {
               
          },
          icons: [
              {
                  id: 1,
                  icon: "api_outlined_icon",
                  "title": "Restaurants",
                  url: "restaurants",
                  backgroundColor: "red"
              },
              {
                  id: 2,
                  icon: "event_outlined_icon",
                  "title": "Events",
                  url: "events",
                  backgroundColor: "blue"
              },
              {
                  id: 3,
                  icon: "architecture_outlined_icon",
                  "title": "Fashion",
                  url: "fashion",
                  backgroundColor: "orange"
              },
              {
                  id: 4,
                  icon: "health_and_safety_outlined_icon",
                  "title": "Health",
                  url: "health",
                  backgroundColor: "green"
              },
              {
                  id: 5,
                  icon: "home_work_outlined_icon",
                  "title": "Home living",
                  url: "home-living",
                  backgroundColor: "yellow"
              },
              {
                  id: 6,
                  icon: "bakery_dining_outlined_icon",
                  "title": "Kids",
                  url: "kids",
                  backgroundColor: "pink"
              },
              {
                  id: 7,
                  icon: "directions_car_filled_outlined_icon",
                  "title": "Travel",
                  url: "travel",
                  backgroundColor: "dark-red"
              },
              {
                  id: 8,
                  icon: "brightness_70_outlined_icon",
                  "title": "Beauty",
                  url: "beauty",
                  backgroundColor: "dark-blue"
              }
          ]
      }
  }
}
</script>

<style scoped>

    .home{
        padding: 2rem 10rem;
        background-image: url('~@/images/homebgs.jpg');
    }
    a{
        text-decoration: none;
        color: black;
    }
    .dark-red{
        background: #7ef0ef;
        border: 2px solid #13afad;
    }
    .pink{
        background: rgb(245, 132, 189);
        border: 2px solid rgb(238, 27, 125);
    }
    .dark-blue{
        background: rgb(112, 148, 247);
        border: 2px solid rgb(83, 27, 238);
    }
    .blue{
        background: rgb(185, 185, 247);
        border: 2px solid blue;
    }
    .red{
        background: rgb(255, 124, 124);
        border: 2px solid rgb(255, 40, 40);
    }
    .orange{
        background: rgb(247, 180, 56);
        border: 2px solid rgb(252, 170, 17);
    }
    .yellow{
        background: rgb(247, 247, 125);
        border: 2px solid (253, 253, 43);
    }
    .green{
        background: rgb(117, 245, 117);
        border: 2px solid rgb(9, 175, 9);
    }
    .material-icons{
        width: 40px;
        margin: 0rem 0px 1px 0px;
        font-size: 40px;
    }
    .icon{
         margin:0 auto;
        display:block;
        overflow: hidden;
    }
    .sub-item{
        text-align: center;
        padding: .5rem 0rem;
    }
    .categories{
        width: 100%;
    }
    .categories h3{
        margin: 2rem 0rem 3rem 0rem;
        text-align: center;
        font-size: 3rem;
        font-weight: bolder;
        color:white;
    }
    .categories .item{
        /* border: 2px #000 solid; */
        border-radius: 10px;
        width: 80%;
    }
    .home .wrapper .content{
        /* background: #f3f3ff; */
    }

    .home{
        font-size: 20px;
    }

     .wrapper .bottom-content{
        padding: 1rem;
    }

     .wrapper .bottom-content div{
        margin: 1rem 0rem;
    }

    .title{
        font-size: 18px;
    }

    /* .fade-enter-from{
        opacity: 0;
    }
    .fade-enter-to{
        opacity: 1;
    } */
    .fade-enter-active{
        /* transition: all 2s ease-in; */
        animation: slide-in 2s ease;

    }
    .fade-leave-to{}
    .fade-leave-active{}

    @media screen and (max-width: 480px) {
        .home {
            background-color: lightgreen;
            padding: 1rem 0rem 0rem 3rem;
        }
        .categories h3{
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }
    @keyframes slide-in{
        0% { transform: translateX(100px); opacity: 0}
        100% { transform: translateX(0px); opacity: 1;}
    }

</style>
