import Alpine from 'alpinejs';
import './src/css/tailwind.css';
import dropdown from './src/js/dropdown';
import darkMode from './src/js/darkMode';
import tabs from './src/js/tabs';




window.Alpine = Alpine

Alpine.data('dropdown', dropdown)
Alpine.data('darkMode', darkMode)
Alpine.data('tabs', tabs)


document.getElementById('app').innerHTML = `
      <header class="shadow-lg">
        <div class="container mx-auto py-4 px-10">
            <nav class="relative flex justify-between items-center">
                <!-- desktop nav -->
                <div class="hidden lg:flex items-center">
                    <div>
                        <button class="btn btn-primary">عضویت</button>
                        <button class="btn btn-secondary mr-2">ورود</button>
                    </div>
                    <div class="mr-7">
                        <ul class="flex gap-7 dark:text-white">
                            <li class="nav-item-active"><a href="#">صفحه اصلی</a></li>
                            <div x-data="dropdown">
                                <li @click="toggle" class="nav-item" :class="{ 'nav-item-active' : open }">
                                    <a href="#">
                                        محصولات
                                        <i class="fas fa-chevron-down text-[0.7rem]"></i>
                                    </a>
                                </li>
                                <div x-show="open" x-cloak
                                    class="absolute top-12 bg-white border rounded-lg py-4 px-6 dark:bg-gray-800 dark:text-white">
                                    <ul class="space-y-3">
                                        <li class="hover:text-indigo-600"> <a href="#">لورم ایپسوم</a> </li>
                                        <li class="hover:text-indigo-600"> <a href="#"> لورم ایپسوم متن </a> </li>
                                        <li class="hover:text-indigo-600"> <a href="#">لورم ایپسوم متن ساختگی</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <li class="nav-item"><a href="#">درباره ما</a></li>
                            <li class="nav-item"><a href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                </div>
                <!-- mobile nav -->
                <div class="lg:hidden" x-data="dropdown">
                    <div @click="toggle">
                        <i class="fas fa-bars text-xl dark:text-white"></i>
                    </div>
                    <div class="absolute bg-white border rounded-lg py-4 px-6 w-full dark:bg-gray-800 dark:text-white"
                        x-show="open" x-cloak x-transition:enter="transition ease-out duration-300"
                        x-transition:enter-start="opacity-0 transform scale-90"
                        x-transition:enter-end="opacity-100 transform scale-100"
                        x-transition:leave="transition ease-in duration-300"
                        x-transition:leave-start="opacity-100 transform scale-100"
                        x-transition:leave-end="opacity-0 transform scale-90">
                        <div class="absolute" @click="open = false">
                            <i class="fas fa-times text-xl"></i>
                        </div>
                        <ul class="flex flex-col gap-7 text-center">
                            <li><a href="#">صفحه اصلی</a></li>
                            <div x-data="dropdown">
                                <li @click="toggle">
                                    <a href="#">
                                        محصولات
                                        <i class="fas fa-chevron-down text-[0.7rem]"></i>
                                    </a>
                                </li>
                                <div x-show="open" x-cloak
                                    class="max-w-max mx-auto bg-white border rounded-lg py-4 px-6 dark:bg-gray-800 dark:text-white">
                                    <ul class="space-y-3">
                                        <li class="hover:text-indigo-600"> <a href="#">لورم ایپسوم</a> </li>
                                        <li class="hover:text-indigo-600"> <a href="#"> لورم ایپسوم متن </a> </li>
                                        <li class="hover:text-indigo-600"> <a href="#">لورم ایپسوم متن ساختگی</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">تماس با ما</a></li>
                        </ul>
                        <div class="flex flex-col gap-5 mt-5">
                            <button class="btn btn-primary">عضویت</button>
                            <button class="btn btn-secondary mr-2">ورود</button>
                        </div>
                    </div>
                </div>
                <!-- logo -->
                <div class="flex">
                    <div class="ml-4">
                        <button x-show="nextMode == 'dark'" x-cloak @click="toDarkMode"
                            class="btn btn-secondary leading-0">
                            <i class="fas fa-moon"></i>
                        </button>
                        <button x-show="nextMode == 'system'" x-cloak @click="toSystemMode"
                            class="btn btn-secondary leading-0">
                            <i class="fas fa-desktop"></i>
                        </button>
                        <button x-show="nextMode == 'light'" x-cloak @click="toLightMode"
                            class="btn btn-secondary leading-0">
                            <i class="fas fa-sun"></i>
                        </button>
                    </div>
                    <h2 class="text-2xl font-bold dark:text-white">Hesam.io</h2>
                </div>
            </nav>
        </div>
    </header>

    <section>
        <div class="container mx-auto py-4 px-10 lg:px-20">
            <div class="flex flex-col lg:flex-row items-center gap-x-24">
                <div data-aos="fade-up" class="mt-8 lg:mt-0">
                    <h1 class="text-2xl font-bold mb-5 dark:text-white">لورم ایپسوم <span class="text-indigo-600">متن
                            ساختگی</span></h1>
                    <p class="text-gray-700 text-justify leading-8 mb-6 dark:text-white">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <button class="btn btn-primary">لورم ایپسوم متن</button>
                    <button class="btn btn-secondary mr-4">لورم ایپسوم</button>
                </div>
                <img data-aos="fade-up" data-aos-delay="300" src="./assets/images/img_1.png" alt="">
            </div>
        </div>
    </section>

    <div style="height: 100px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path class="fill-gray-100 dark:fill-gray-800"
                d="M-37.02,164.10 C328.66,20.03 595.03,10.16 618.74,-65.81 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
    </div>
    <section class="bg-gray-100 dark:bg-gray-800">
        <div class="container lg:w-4/5 mx-auto py-4 px-10 lg:px-20">
            <div data-aos="fade-up" class="text-center mb-12">
                <h1 class="text-2xl font-bold mb-5 dark:text-white">لورم ایپسوم
                    <span class="text-indigo-600">متن ساختگی</span>
                </h1>
                <p class="text-gray-700 leading-8 mb-6 dark:text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 dark:text-white">
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-shield-alt text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-headset text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-sliders-h text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-comment text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-chart-line text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div class="flex">
                    <div>
                        <i
                            class="fas fa-box text-[2rem] p-4 rounded-full border border-1 border-indigo-600 text-indigo-600"></i>
                    </div>
                    <p class="mr-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div style="height: 100px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path class="fill-gray-100 dark:fill-gray-800"
                d="M-12.19,148.31 C145.82,120.69 576.41,-24.36 565.12,-20.42 L499.66,-2.66 L0.00,0.00 Z"></path>
        </svg>
    </div>

    <section>
        <div class="container lg:w-4/5 mx-auto py-4 px-10 lg:px-20">
            <div data-aos="fade-up" class="text-center mb-12">
                <h1 class="text-2xl font-bold mb-5 dark:text-white">لورم ایپسوم
                    <span class="text-indigo-600">متن ساختگی</span>
                </h1>
                <p class="text-gray-700 leading-8 mb-6 dark:text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row justify-between gap-8">

                <div data-aos="flip-right" data-aos-delay="700" 
                    class="border border-t-8 border-indigo-600 rounded-lg py-5 px-20 text-center dark:bg-gray-800 dark:text-white">
                    <div class="py-5">
                        <h1 class="text-2xl font-bold">استارتاپ</h1>
                        <p class="my-6"><span class="text-2xl font-bold">50,000</span> تومان</p>
                        <p class="font-bold text-gray-700 dark:text-white">ماهانه</p>
                    </div>
                    <hr>
                    <div class="py-5 space-y-4">
                        <p class="text-2xl font-bold">لورم ایپسوم</p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                    </div>
                    <div class="py-8">
                        <button class="btn btn-primary">خرید پکیج</button>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="400" 
                    class="bg-indigo-600 text-white border border-t-8 border-indigo-600 rounded-lg py-5 px-20 text-center">
                    <div class="py-5">
                        <h1 class="text-2xl font-bold">اقتصادی</h1>
                        <p class="my-6"><span class="text-2xl font-bold">150,000</span> تومان</p>
                        <p class="font-bold">ماهانه</p>
                    </div>
                    <hr>
                    <div class="py-5 space-y-4">
                        <p class="text-2xl font-bold">لورم ایپسوم</p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                    </div>
                    <div class="py-8">
                        <button class="btn btn-secondary">خرید پکیج</button>
                    </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="900" 
                    class="border border-t-8 border-indigo-600 rounded-lg py-5 px-20 text-center dark:bg-gray-800 dark:text-white">
                    <div class="py-5">
                        <h1 class="text-2xl font-bold">تجاری</h1>
                        <p class="my-6"><span class="text-2xl font-bold">250,000</span> تومان</p>
                        <p class="font-bold text-gray-700 dark:text-white">ماهانه</p>
                    </div>
                    <hr>
                    <div class="py-5 space-y-4">
                        <p class="text-2xl font-bold">لورم ایپسوم</p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                        <p>لورم ایپسوم متن</p>
                        <p>لورم ایپسوم </p>
                    </div>
                    <div class="py-8">
                        <button class="btn btn-primary">خرید پکیج</button>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <section class="mt-24">
        <div class="container lg:w-4/5 mx-auto py-4 px-10 lg:px-20">
            <div data-aos="fade-left" class="text-center mb-12">
                <h1 class="text-2xl font-bold mb-5 dark:text-white">لورم ایپسوم
                    <span class="text-indigo-600">متن ساختگی</span>
                </h1>
                <p class="text-gray-700 leading-8 mb-6 dark:text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" x-data="tabs">
                <ul class="flex justify-center">
                    <template x-for="(tab , index) in tabs" :key="index">
                        <li x-text="tab.display_category" @click="tabName = tab.category"
                            class="px-4 py-2 cursor-pointer dark:text-white"
                            :class="tabName == tab.category && 'border-b-4 border-indigo-600'"></li>
                    </template>
                </ul>
                <template x-for="(tab , index) in tabs" :key="index">
                    <div x-show="tab.category == tabName"
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                        <template x-for="(image , index) in tab.images" :key="index">
                            <div>
                                <img class="rounded-lg" :src="image" alt="">
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <section>
        <div class="container mx-auto lg:w-4/5 py-4 px-10 lg:px-20">
            <div class="flex flex-col lg:flex-row items-center gap-x-24">
                <div data-aos="fade-up" class="mt-8 lg:mt-0">
                    <h1 class="text-2xl font-bold mb-5 dark:text-white">لورم ایپسوم <span class="text-indigo-600">متن
                            ساختگی</span></h1>
                    <p class="text-gray-700 text-justify leading-8 mb-6 dark:text-white">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                    <form action="#">
                        <div>
                            <label class="form-label" for="email">ایمیل : </label>
                            <input class="form-input" id="email" type="email" placeholder="ایمیل ...">
                        </div>
                        <div class="mt-5">
                            <label class="form-label" for="text">متن پیام : </label>
                            <textarea rows="4" class="form-input" id="text" type="email"
                                placeholder="پیام ..."></textarea>
                        </div>
                        <button class="btn btn-primary mt-5">ارسال پیام</button>
                    </form>
                </div>
                <img data-aos="fade-up" data-aos-delay="300" src="./assets/images/img_2.png" alt="">
            </div>
        </div>
    </section>

    <div style="height: 100px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path class="fill-gray-100 dark:fill-gray-800"
                d="M-37.02,164.10 C328.66,20.03 595.03,10.16 618.74,-65.81 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
    </div>
    <footer class="bg-gray-100 dark:bg-gray-800">
        <div class="container mx-auto py-4 px-10 lg:px-20">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <div data-aos="fade-down" class="dark:text-white">
                    <h1 class="text-2xl font-bold">Hesam.io</h1>
                    <p class="mt-3 mb-6 text-gray-700 leading-8 dark:text-white">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                    <div class="space-x-reverse space-x-4">
                        <a href="#"><i class="fab fa-instagram text-4xl"></i></a>
                        <a href="#"><i class="fab fa-telegram-plane text-4xl"></i></a>
                        <a href="#"><i class="fab fa-facebook-square text-4xl"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in text-4xl"></i></a>
                    </div>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-0 dark:text-white">
                    <div data-aos="fade-down" data-aos-delay="400">
                        <h2 class="leading-10 font-bold border-b-2 border-indigo-600 mb-3">بخش های وبسایت</h2>
                        <ul class="space-y-3">
                            <li>صفحه اصلی</li>
                            <li>محصولات</li>
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                        </ul>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="500">
                        <h2 class="leading-10 font-bold border-b-2 border-indigo-600 mb-3">محصولات</h2>
                        <ul class="space-y-3">
                            <li>لورم ایپسوم</li>
                            <li>لورم ایپسوم متن</li>
                            <li>لورم ایپسوم</li>
                            <li>لورم ایپسوم متن</li>
                        </ul>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="600">
                        <h2 class="leading-10 font-bold border-b-2 border-indigo-600 mb-3">لورم ایپسوم</h2>
                        <ul class="space-y-3">
                            <li>لورم ایپسوم</li>
                            <li>لورم ایپسوم متن</li>
                            <li>لورم ایپسوم</li>
                            <li>لورم ایپسوم متن</li>
                        </ul>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="700">
                        <h2 class="leading-10 font-bold border-b-2 border-indigo-600 mb-3">درباره ما</h2>
                        <ul class="space-y-3">
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

`



AOS.init();
Alpine.start()
