/* Walay Design — Portfolio (Bootstrap 5 + Swiper + vanilla JS) */
(function () {
  'use strict';

  /* ---------- header: dock on scroll ---------- */
  // var header = document.querySelector('.header');
  // function onScrollDock() {
  //   if (!header) return;
  //   header.classList.toggle('docked', window.scrollY > 80);
  // }
  // window.addEventListener('scroll', onScrollDock, { passive: true });
  // onScrollDock();
  resize();
  $(window).on("resize scroll", function () {
    resize();
  });
  function resize() {
    // header
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("scrolldown");
    } else {
      $(".header").removeClass("scrolldown");
    }

    // lang
    if ($(window).width() >= 992) {
      $(".header_lang").removeClass("active");
    }
  }

  /* ---------- smooth-scroll nav + scroll-spy ---------- */
  function goTo(id) {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    var el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-nav]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); goTo(a.getAttribute('data-nav')); });
  });
  document.querySelector('.header_logo').addEventListener('click', function (e) { e.preventDefault(); goTo('top'); });

  var spyIds = ['service', 'works', 'about', 'contact'];
  var navLinks = document.querySelectorAll('.header_nav a');
  function onScrollSpy() {
    var y = window.scrollY + 140, cur = 'top';
    spyIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = id;
    });
    navLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-nav') === cur); });
  }
  window.addEventListener('scroll', onScrollSpy, { passive: true });
  onScrollSpy();

  /* ---------- language menu ---------- */
  var lang = document.querySelector('.header_lang');
  if (lang) {
    var current = lang.querySelector('[data-lang-current]');
    lang.addEventListener('mouseenter', function () { lang.classList.add('open'); });
    lang.addEventListener('mouseleave', function () { lang.classList.remove('open'); });
    lang.querySelectorAll('[data-lang]').forEach(function (li) {
      li.addEventListener('click', function () {
        var labels = { EN: 'EN', TC: '繁體中文', SC: '简体中文' };
        current.textContent = labels[li.getAttribute('data-lang')];
        lang.classList.remove('open');
      });
    });
  }

  /* inert demo links */
  document.querySelectorAll('.work, .works_more, .art, .about_links a, .footer_links a')
    .forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); }); });

  /* ---------- testimonials: Swiper carousel synced to people list ---------- */
  var people = document.querySelectorAll('.person');
  var swiperEl = document.querySelector('.testi-swiper');
  if (swiperEl && window.Swiper) {
    var testiSwiper = new Swiper(swiperEl, {
      loop: true,
      speed: 800,
      autoHeight: true,
      autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
      on: {
        slideChange: function () {
          var i = this.realIndex;
          people.forEach(function (p, k) { p.classList.toggle('on', k === i); });
        }
      }
    });
    people.forEach(function (p) {
      p.addEventListener('click', function () {
        testiSwiper.slideToLoop(parseInt(p.getAttribute('data-testi-i'), 10));
      });
    });
  }

  /* ---------- contact form: toast ---------- */
  var form = document.querySelector('[data-contact]');
  var toast = document.querySelector('[data-toast]');
  var toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var content = form.querySelector('#content').value.trim();
      if (!name || !email || !content) { showToast('Please fill the required fields *'); return; }
      showToast('Thanks! Your message is on its way ✦');
      form.reset();
    });
  }
})();


resizeHome();
$(window).on("resize scroll", function () {
  resizeHome();
});
function resizeHome() {

  let contactBottom = $("#contact").offset().top - $(window).height();
  // sidebtn
  if ($(window).scrollTop() >= contactBottom) {
    $(".sidebtn").addClass("bluebg");
  } else {
    $(".sidebtn").removeClass("bluebg");
  }
}
