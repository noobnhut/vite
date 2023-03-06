<template>
    <!-- <div id="app">
      <div id="sidebar" class='active'>
        <div class="sidebar-wrapper active">
  
          <div class="sidebar-header">
            <div class="navbar-brand">404KEY</div>
          </div>
  
          <div class="sidebar-menu">
            <ul class="menu">
              <li class='sidebar-title'>Main Menu</li>
              <li class="sidebar-item active ">
  
                <router-link :to="{ name: 'admin'}" class='sidebar-link'>
                  <i data-feather="home" width="20"></i>
                  <span>Trang chủ</span>
                </router-link>
              </li>
  
              <li class='sidebar-title'>Hệ thống quản lý</li>
  
              <li class="sidebar-item ">
                <router-link :to="{ name: 'user'}"  class='sidebar-link'>
                  <i data-feather="file-plus" width="20"></i>
                  <span>Quản lý người dùng</span>
                </router-link>
              </li>
  
              <li class="sidebar-item ">
                <router-link :to="{ name: 'category'}"  class='sidebar-link'>
                  <i data-feather="file-plus" width="20"></i>
                  <span>Quản lý danh mục sản phẩm</span>
                </router-link>
              </li>
  
              <li class="sidebar-item ">
                <router-link :to="{ name: 'product'}"  class='sidebar-link'>
                  <i data-feather="file-plus" width="20"></i>
                  <span>Quản lý sản phẩm</span>
                </router-link>
              </li>
  
              <li class="sidebar-item ">
                <router-link :to="{ name: 'bill'}"  class='sidebar-link'>
                  <i data-feather="file-plus" width="20"></i>
                  <span>Quản lý hóa đơn</span>
                </router-link>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
      <div id="main">
        <div class="main-content container-fluid">
          <router-view />
        </div>
      </div>
    </div> -->
        
    <div class="dashboard-pg text-grey-blue">
      <nav class="navigation-bar d-flex align-items-center">
          <div class="container">
              <div class="row align-items-center">
                  <div class="navigation-bar-left col-6 d-flex align-items-center">
                      <button type="button" class="navbar-open-btn text-grey-blue me-3">
                          <i class="fas fa-bars"></i>
                      </button>
                      <div class="navbar-logo">
                          <img src="../assets/logo.png" alt="site logo">
                      </div>
                  </div>

                  <div class="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
                      <a href="#" class="profile-btn bg-blue text-white btn-circle me-3">
                          <i class="fas fa-user"></i>
                      </a>
                      <button type="button" class="notification-btn text-grey-blue">
                          <i class="fa-regular fa-bell"></i>
                      </button>
                  </div>
              </div>
          </div>
      </nav>

      <div class="navigation-overlay position-fixed"></div>

      <div class="navigation-sidebar bg-light-grey">
          <div class="navbar-sb-head d-flex justify-content-between align-items-center px-4">
              
              <button class="navbar-close-btn text-grey-blue">
                  <i class='fas fa-arrow-left'></i>
              </button>
          </div>

          <div class="navbar-sb-list p-4">
              <div class="navbar-sb-item mb-5">
                  <h5 class="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">Chức năng quản lý</h5>
                  <ul class="navbar-sb-links p-0 list-unstyled">

                      <li class="navbar-sb-link my-3">
                        <router-link  :to="{ name: 'user'}" class="text-decoration-none d-flex align-items-center justify-content-between">
                              <div class="text-light-blue d-flex align-items-center">
                                  <span class="navbar-sb-icon me-3">
                                      <i class="fas fa-award"></i>
                                  </span>
                                  <span class="navbar-sb-text fs-14 fw-5 text-capitalize">QUẢN LÝ KHÁCH HÀNG</span>
                              </div>
                             
                        </router-link>
                      </li>
                     
                      <li class="navbar-sb-link my-3">
                        <router-link  :to="{ name: 'category'}"  class="text-decoration-none d-flex align-items-center justify-content-between">
                              <div class="text-light-blue d-flex align-items-center">
                                  <span class="navbar-sb-icon me-3">
                                      <i class="fas fa-award"></i>
                                  </span>
                                  <span class="navbar-sb-text fs-14 fw-5 text-capitalize">QUẢN LÝ DANH MỤC</span>
                              </div>
                             
                        </router-link>
                      </li>

                      <li class="navbar-sb-link my-3">
                        <router-link  :to="{ name: 'product'}" class="text-decoration-none d-flex align-items-center justify-content-between">
                              <div class="text-light-blue d-flex align-items-center">
                                  <span class="navbar-sb-icon me-3">
                                      <i class="fas fa-award"></i>
                                  </span>
                                  <span class="navbar-sb-text fs-14 fw-5 text-capitalize">QUẢN LÝ SẢN PHẨM</span>
                              </div>
                             
                          </router-link>
                      </li>

                      <li class="navbar-sb-link my-3">
                        <router-link :to="{ name: 'bill'}" class="text-decoration-none d-flex align-items-center justify-content-between">
                              <div class="text-light-blue d-flex align-items-center">
                                  <span class="navbar-sb-icon me-3">
                                      <i class="fas fa-award"></i>
                                  </span>
                                  <span class="navbar-sb-text fs-14 fw-5 text-capitalize">QUẢN LÝ HÓA ĐƠN</span>
                              </div>
                             
                          </router-link>
                      </li>
                  </ul>
              </div>

             

              <div class="navbar-sb-item mb-5">
               
                  <ul class="navbar-sb-links p-0 list-unstyled">
                      <li class="navbar-sb-link my-3">
                          <a href="#" class="text-decoration-none d-flex align-items-center justify-content-between">
                              <div class="text-light-blue d-flex align-items-center">
                                  <span class="navbar-sb-icon me-3">
                                      <i class="fas fa-lock"></i>
                                  </span>
                                  <span class="navbar-sb-text fs-14 fw-5 text-capitalize">Đăng xuất</span>
                              </div>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <div class="dashboard-main">
          <div class="container">
              <!--content center-->
              <router-view></router-view>
          </div>
      </div>
  </div>
  </template>
  <script>
  import '../assets/admin.js'
  </script>

<style>

:root{
  --blue-color: #289adc;
  --cyan-color: #00c9ac;
  --grey-blue-color: #334962;
  --grey-color: #9ea4ac;
  --light-blue-color: #7b92ad;
  --light-grey-color: #f4f6fa;
  --white-color: #fff;
  --trans: all 300ms ease-in-out;
}
button{
  background-color: transparent;
  border: none;
  outline: none;
}
a{
  color: unset!important;
}

.bg-blue{background-color: var(--blue-color);}
.bg-grey{background-color: var(--grey-color);}
.bg-light-grey{background-color: var(--light-grey-color);}

.text-blue{color: var(--blue-color);}
.text-cyan{color: var(--cyan-color);}
.text-grey-blue{color: var(--grey-blue-color);}
.text-grey{color: var(--grey-color);}
.text-light-blue{color: var(--light-blue-color);}

.fs-8{font-size: 8px;}
.fs-12{font-size: 12px;}
.fs-13{font-size: 13px;}
.fs-14{font-size: 14px;}
.fs-15{font-size: 15px;}
.fs-18{font-size: 18px;}
.fs-20{font-size: 20px;}

.fw-2{font-weight: 200;}
.fw-3{font-weight: 300;}
.fw-4{font-weight: 400;}
.fw-5{font-weight: 500;}
.fw-6{font-weight: 600;}
.fw-7{font-weight: 700;}

/* letter spacing */
.ls-1{
  letter-spacing: 1px;
}

/* cirlce btn */
.btn-circle{
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
}
.badge{
  background-color: #dfeeff;
}

/* navigation  */
.navigation-overlay{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
  background-color: rgba(0, 0, 0, 0.01);
}

.navbar-open-btn{
  font-size: 23px;
  padding-top: 2px;
}
.navbar-logo img{
  width: 120px;
}
.navigation-bar{
  height: 80px;
  border-bottom: 1.5px solid rgba(158, 164, 172, 0.3);
}
.notification-btn{
  font-size: 19px;
}
.info-icon{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: var(--trans);
}


.navigation-sidebar{
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transform: translateX(-100%);
  transition: all 200ms ease-in-out;
  overflow-y: scroll;
}

/* js related */
.show-navigation-sidebar{
  transform: translateX(0)!important;
}
.navigation-sidebar::-webkit-scrollbar{
  width: 3.5px;
}
.navigation-sidebar::-webkit-scrollbar-track{
  background-color: transparent;
}
.navigation-sidebar::-webkit-scrollbar-thumb{
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.19);
}
.navigation-sidebar .navbar-sb-head{
  border-bottom: 1.5px solid rgba(158, 164, 172, 0.3);
  padding: 8px 0;
}
.navigation-sidebar .navbar-sb-links{
  padding-left: 5px!important;
}
.navigation-sidebar .navbar-sb-link{
  padding: 3px 0;
}
.navigation-sidebar .navbar-sb-link *{
  transition: all 300ms ease-in-out;
}
.navigation-sidebar .navbar-sb-link:hover *{
  color: var(--cyan-color);
}
.navigation-sidebar .navbar-sb-text{
  letter-spacing: 0.6px;
}
.navbar-close-btn{
  font-size: 20px;
}


.overview-section{
  border: 2px solid rgba(158, 164, 172, 0.3);
  border-radius: 6px;
}
.overview-section-list a{
  color: unset;
}
.overview-section-item{
  background-color: var(--white-color);
  border-radius: 6px;
  margin: 5px 0; 
  min-height: 170px;
  border: 2px solid var(--blue-color);
  transition: var(--trans);
}
.overview-section-item:hover{
  background-color: var(--blue-color)!important;
}
.overview-section-item:hover *{
  color: var(--white-color)!important;
}
.overview-section-item:hover .info-icon{
  background-color: var(--white-color);
}
.overview-section-item:hover .info-icon i{
  color: var(--blue-color)!important;
}
.btn-outline-sm{
  font-family: inherit;
  background-color: transparent;
  border: 2px solid var(--blue-color);
  border-radius: 2px;
  padding: 4px;
  font-weight: 500;
  transition: var(--trans);
}
.btn-outline-sm:hover{
  background-color: var(--white-color);
  color: var(--blue-color)!important;
}
.overview-section-item:hover .btn-outline-sm{
  border-color: var(--white-color);
}
</style>