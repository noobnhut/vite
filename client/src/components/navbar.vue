<template>

 <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
    <div class="container">
        <router-link to="/" class="navbar-brand d-flex justify-content-between align-items-center order-lg-0" >
            <img style="width:100px" src="../assets/logo.png" alt="site icon">
            <span class="text-uppercase fw-lighter ms-2">404KEY</span>
        </router-link>

        <div class="order-lg-2 nav-btns">
            <button type="button" class="btn position-relative">
                <i class="fa fa-shopping-cart"></i>
                <!-- <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">2</span> -->
            </button>
        </div>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul class="navbar-nav mx-auto text-center">

                <li class="nav-item px-2 py-2">
                    <router-link to="/" class="nav-link text-uppercase text-dark">TRANG CHỦ</router-link>
                </li>

                <li class="nav-item dropdown px-2 py-2">
                    <a class="nav-link dropdown-toggle text-uppercase text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     DANH SÁCH SẢN PHẨM
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item text-uppercase text-dark" >Something else here</a></li>
                    </ul>
                  </li>

                <li class="nav-item px-2 py-2 border-0">
                    <a class="nav-link text-uppercase text-dark">DEMO</a>
                </li>
                
                <li class="nav-item px-2 py-2 border-0">
                    <a class="nav-link text-uppercase text-dark">VỀ CHÚNG TÔI</a>
                </li>

                <li class="nav-item px-2 py-2 border-0">
                    <a class="nav-link text-uppercase text-dark">THÔNG TIN VỀ</a>
                </li>

            </ul>
        </div>
    </div>
</nav>

</template>









