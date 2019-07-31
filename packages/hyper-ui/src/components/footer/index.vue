<template>
    <footer>
        <div class="row justify-content-center">
            <div class="col-12 py-5 text-center margin-bottom-30">
                <Button
                    status="second-info"
                    size="lg">
                    Go to Blog
                </Button>
            </div>
            <div class="col-12 col-lg-2">
                <SidebarMenu
                    subTitle="Tools"
                    mClass="margin-bottom-20">
                    <SidebarMenuItem to="/">
                        Bridge
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Mixer
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Suite
                    </SidebarMenuItem>
                </SidebarMenu>
            </div>
            <div class="col-12 col-lg-2">
                <SidebarMenu
                    subTitle="Company"
                    mClass="margin-bottom-20">
                    <SidebarMenuItem to="/">
                        Press
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Jobs
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Pricing
                    </SidebarMenuItem>
                </SidebarMenu>
            </div>
            <div class="col-12 col-lg-2">
                <SidebarMenu
                    subTitle="Inspiration & Learning"
                    mClass="margin-bottom-20">
                    <SidebarMenuItem to="/">
                        Blog
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Gallery
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Tutorials
                    </SidebarMenuItem>
                </SidebarMenu>
            </div>
            <div class="col-12 col-lg-2">
                <SidebarMenu
                    subTitle="Community & Support"
                    mClass="margin-bottom-20">
                    <SidebarMenuItem to="/">
                        Artist Community
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        Get Help
                    </SidebarMenuItem>
                    <SidebarMenuItem to="/">
                        FAQ
                    </SidebarMenuItem>
                </SidebarMenu>
            </div>
            <div class="col-12 col-lg-4">
                <div class="h5 text-uppercase text-white font-weight-bold p-0 margin-bottom-10 margin-top-10">
                    Connect
                </div>
                <div class="d-flex justify-content-between align-items-stretch mt-3 mb-4">
                    <Input placeholder="Join our mailing list" />
                    <Button
                        status="second-info"
                        size="sm"
                        class="ml-3 px-4">
                        Join
                    </Button>
                </div>
                <div class="social-list d-flex justify-content-between mt-3">
                    <SocialLink
                        size="xl"
                        icon="facebook" />
                    <SocialLink
                        size="xl"
                        icon="twitter" />
                    <SocialLink
                        size="xl"
                        icon="slack" />
                    <SocialLink
                        size="xl"
                        icon="instagram" />
                    <SocialLink
                        size="xl"
                        icon="youtube" />
                    <SocialLink
                        size="xl"
                        icon="discord" />
                    <SocialLink
                        size="xl"
                        icon="linkedin" />
                </div>
            </div>
            <div class="col-12 logos-slider">
                <Swiper
                    :options="sliderOptions"
                    class="padding-bottom-30 margin-bottom-30 padding-top-40 margin-top-50 border-top border-bottom ">
                    <SwiperSlide
                        v-for="logo in logos"
                        :key="logo">
                        <img
                            :src="logo"
                            alt=""
                            class="img-fluid image-white">
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="col-12 col-md-6">
                <ul class="list-unstyled d-flex align-items-center">
                    <li class="px-3 border-right">
                        <a
                            href="#3"
                            class="text-white">
                            Legal
                        </a>
                    </li>
                    <li class="px-3 border-right">
                        <a
                            href="#3"
                            class="text-white">
                            Privacy
                        </a>
                    </li>
                    <li class="px-3">
                        <a
                            href="#3"
                            class="text-white">
                            Cookies
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 text-right">
                <span class="text-muted">
                    2018 BlockHub. All rights reserved.
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        components: {
            'SidebarMenuItem': () => import('../../').then(m => m.SidebarMenuItem),
            'SidebarMenu': () => import('../../').then(m => m.SidebarMenu),
            'SocialLink': () => import('../../').then(m => m.SocialLink)
        },
        data() {
            return {
                sliderOptions: {
                    slidesPerView: 8,
                    spaceBetween: 40,
                    loop: true,
                    breakpoints: {
                        1920: {
                            slidesPerView: 10,
                            spaceBetween: 40
                        },
                        1440: {
                            slidesPerView: 8,
                            spaceBetween: 40
                        },
                        1368: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }
                },
                logos: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Teradata_logo_2018.png/1600px-Teradata_logo_2018.png',
                    'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Southern-Company-Logo-PNG-Transparent.png',
                    'http://arckpack.com.br/assets/images/arckpack-logo.gif',
                    'https://vignette.wikia.nocookie.net/logopedia/images/7/79/TVS_Motor_Company_Logo.png/revision/latest/scale-to-width-down/640?cb=20121212235421',
                    'http://www.s3infotech.in/images/portfolio/2000px-Fujitsu-Logo.svg.png',
                    'http://www.s3infotech.in/images/portfolio/sd-logo.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Komatsu_company_logos.svg/1280px-Komatsu_company_logos.svg.png',
                    'https://agrobiz.net/static-files/img/goods/0a/d7/prokladka-87553152-107783.png',
                    'http://skladtechnika.ru/pics/images/informations/articles/Mitsubishi_logo.gif'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logos-slider{
        .swiper-slide{
            height: auto;
            display: flex;
            align-items: center;
        }
    }
    .image-white{
        filter: brightness(0) invert(1);
    }
</style>
