/**
 * �˻�â ����
 */
// �˻�â ���(.search) ã��.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// �˻�â ��Ҹ� Ŭ���ϸ� ����.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// �˻�â ��� ���� ���� input ��ҿ� ��Ŀ���Ǹ� ����.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '���հ˻�')
})
// �˻�â ��� ���� ���� input ��ҿ��� ��Ŀ���� ����(��)�Ǹ� ����.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


/**
 * ������ ��ũ�ѿ� ���� ��� ����
 */
// ������ ��ũ�ѿ� ������ �޴� ��ҵ��� �˻�!
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// �������� ��ũ�� �̺�Ʈ�� �߰�!
// ��ũ���� ����ġ�� ���� �߻��ϴ� ���� ����(throttle, �Ϻη� ���ϸ� ��)
window.addEventListener('scroll', _.throttle(function () {
  // ������ ��ũ�� ��ġ�� 500px�� ������.
  if (window.scrollY > 500) {
    // Badge ��� �����!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // ������� ��ũ�� ��ư ���̱�!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // ������ ��ũ�� ��ġ�� 500px�� ���� ������.
  } else {
    // Badge ��� ���̱�!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // ������� ��ũ�� ��ư �����!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// ������� ��ũ�� ��ư�� Ŭ���ϸ�,
toTopEl.addEventListener('click', function () {
  // ������ ��ġ�� �ֻ������ �ε巴��(0.7�� ����) �̵�.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


/**
 * ������� ��Ÿ���� ���
 */
// ��Ÿ�� ��ҵ�(.fade-in) ã��.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// ��Ÿ�� ��ҵ��� �ϳ��� �ݺ��ؼ� ó��!
fadeEls.forEach(function (fadeEl, index) {
  // �� ��ҵ��� �������(delay) �������� ��!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})


/**
 * �����̵� ��� ����
 */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // ���� �����̵�
  autoplay: true, // �ڵ� ��� ����
  loop: true // �ݺ� ��� ����
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // ���� �����̵�
  autoplay: { // �ڵ� ��� ����
    delay: 5000 // 5�ʸ��� �����̵� �ٲ�
  },
  loop: true, // �ݺ� ��� ����
  slidesPerView: 3, // �� ���� ������ �����̵� ����
  spaceBetween: 10, // �����̵� ���� ����
  centeredSlides: true, // 1�� �����̵尡 ��� ���̱�
  pagination: { // ������ ��ȣ ��� ����
    el: '.promotion .swiper-pagination', // ������ ��ȣ ��� ������
    clickable: true // ������� ������ ��ȣ ��� ���� ���� ����
  },
  navigation: { // �����̵� ����/���� ��ư ��� ����
    prevEl: '.promotion .swiper-prev', // ���� ��ư ������
    nextEl: '.promotion .swiper-next' // ���� ��ư ������
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // ���� �����̵�
  autoplay: true, // �ڵ� ��� ����
  loop: true, // �ݺ� ��� ����
  spaceBetween: 30, // �����̵� ���� ����
  slidesPerView: 5, // �� ���� ������ �����̵� ����
  // slidesPerGroup: 5, // �� ���� �����̵� �� ����(��ü ������ ������� ��)
  navigation: { // �����̵� ����/���� ��ư ��� ����
    prevEl: '.awards .swiper-prev', // ���� ��ư ������
    nextEl: '.awards .swiper-next' // ���� ��ư ������
  }
})


/**
 * Promotion �����̵� ��� ���
 */
// �����̵� ���� ��� �˻�!
const promotionEl = document.querySelector('.promotion')
// �����̵� ������ ����ϴ� ��ư �˻�!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// �����̵� ���� ���� ���� �⺻��!
let isHidePromotion = false
// ��� ��ư�� Ŭ���ϸ�,
promotionToggleBtn.addEventListener('click', function () {
  // �����̵� ���� ���� ���θ� �ݴ����� �Ҵ�!
  isHidePromotion = !isHidePromotion
  // ��Ҹ� ���ܾ� �ϸ�,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // ��Ұ� ������ �ϸ�,
  } else {
    promotionEl.classList.remove('hide')
  }
})


/**
 * �����ϴ� ��� ����
 */
// ���� ���� �Լ�(�Ҽ��� 2�ڸ�����)
function random(min, max) {
  // `.toFixed()`�� ���� ��ȯ�� '���� ������'��,
  // `parseFloat()`�� ���� �Ҽ����� ������ '���� ������'�� ��ȯ
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// �����ϴ�(�� �ٴϴ�) ��Ҹ� ����� �Լ�
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // ������
    random(1.5, 2.5), // �ִϸ��̼� ���� �ð�
    {
      delay: random(0, delay), // �󸶳� �ʰ� �ִϸ��̼��� ������ ������ ���� �ð��� ����.
      y: size, // `transform: translateY(��ġ);`�� ����. �������� �󸶳� �������� ����.
      repeat: -1, // �� �� �ݺ��ϴ����� ����, `-1`�� ���� �ݺ�.
      yoyo: true, // �ѹ� ����� �ִϸ��̼��� �ٽ� �ڷ� ���.
      ease: Power1.easeInOut // Easing �Լ� ����.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/**
 * ��Ұ� ȭ�鿡 ������ ���ο� ���� ��� ����
 */
// ������ ��ҵ� �˻�!
const spyEls = document.querySelectorAll('section.scroll-spy')
// ��ҵ� �ݺ� ó��!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // ������ ���(Scene)�� �߰�
      triggerElement: spyEl, // ������ ���θ� ������ ��Ҹ� ����
      triggerHook: .8 // ȭ���� 80% �������� ������ ���� ����
    })
    .setClassToggle(spyEl, 'show') // ��Ұ� ȭ�鿡 ���̸� show Ŭ���� �߰�
    .addTo(new ScrollMagic.Controller()) // ��Ʈ�ѷ��� ����� �Ҵ�(�ʼ�!)
})


/**
 * ���ذ� �� �⵵���� ���
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()