<template>

 <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
    <div class="container ">
        <router-link to="/" class="navbar-brand d-flex justify-content-between align-items-center order-lg-0" >
            <img style="width:100px" src="../assets/logo.png" alt="site icon">
            <span class="text-uppercase fw-lighter ms-2">404KEY</span>
        </router-link>

        <div class="order-lg-2 nav-btns">
            <button type="button" class="btn position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa fa-shopping-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
            </button>
        </div>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul class="navbar-nav ">

                <li class="nav-item px-2 py-2">
                    <router-link to="/" class="nav-link text-uppercase text-dark">TRANG CHỦ</router-link>
                </li>

                <li class="nav-item px-2 py-2 border-0">
                    <a class="nav-link text-uppercase text-dark">VỀ CHÚNG TÔI</a>
                </li>

             

                <li class="nav-item dropdown px-2 py-2">
                    <a class="nav-link dropdown-toggle text-uppercase text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     TÀI KHOẢN
                    </a>
                    <ul class="dropdown-menu">
                      <li> <router-link :to="{ name: 'login_client'}" class="dropdown-item text-uppercase text-dark" >ĐĂNG NHẬP</router-link></li>
                      <li> <router-link :to="{ name: 'register_client'}" class="dropdown-item text-uppercase text-dark" >ĐĂNG KÝ</router-link></li>

                    </ul>
                  </li>
            </ul>
        </div>
    </div>
</nav>

 <!--model thêm-->
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <div class="row">
                <div class="col-xl-4">1</div>
                <div class="col-xl-4">1</div>
                <div class="col-xl-4">1</div>

              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button  class="btn btn-secondary">Thêm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default
{
 
}
</script>








