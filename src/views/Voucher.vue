<template>
    <div class="home">
        <div class="wrapper">
            <div class="content">
                <img src="../images/sale.jpg" class="img-fluid" alt="">
                <div class="bottom-content">
                    <div>Business Name</div>
                    <div>Product/Service Summary</div>
                    <div class="d-flex justify-content-between">
                        <div> Price/Rating</div>
                        <div>
                            <button>Quick Buy</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>

<style>
   
  
    .home .wrapper .content{
        background: #f3f3ff;
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
</style>
