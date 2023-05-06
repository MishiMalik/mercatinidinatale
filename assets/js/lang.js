
// function readCookie(name) {
//     var c = document.cookie.split('; '),
//         cookies = {}, i, C;

//     for (i = c.length - 1; i >= 0; i--) {
//         C = c[i].split('=');
//         cookies[C[0]] = C[1];
//     }

//     return cookies[name];
// }

// var lang_en = document.querySelector('#lang-en');
// var lang_de = document.querySelector('#lang-de');
// var lang_it = document.querySelector('#lang-it');
// var lang_es = document.querySelector('#lang-es');
// var lang_pt = document.querySelector('#lang-pt');
// var lang_fr = document.querySelector('#lang-fr');

// var selected_lang = readCookie('googtrans') !== undefined ? readCookie('googtrans').split('/')[2] : 'en';

// if (selected_lang == 'en') {
//     lang_en.style.pointerEvents = 'none';
//     lang_en.classList.add('black-white');
// } else if (selected_lang == 'de') {
//     lang_de.style.pointerEvents = 'none';
//     lang_de.classList.add('black-white');
// } else if (selected_lang == 'it') {
//     lang_it.style.pointerEvents = 'none';
//     lang_it.classList.add('black-white');
// } else if (selected_lang == 'es') {
//     lang_es.style.pointerEvents = 'none';
//     lang_es.classList.add('black-white');
// } else if (selected_lang == 'pt') {
//     lang_pt.style.pointerEvents = 'none';
//     lang_pt.classList.add('black-white');
// } else if (selected_lang == 'ru') {
//     lang_ru.style.pointerEvents = 'none';
//     lang_ru.classList.add('black-white');
// } else if (selected_lang == 'fr') {
//     lang_fr.style.pointerEvents = 'none';
//     lang_fr.classList.add('black-white');
// }

// // document.querySelector(".gflag").addEventListener("click", function(e) {
// //     document.querySelectorAll(".gflag").forEach(function(element) {
// //         element.style.pointerEvents = '';
// //         element.classList.remove("black-white");
// //     });

// //     e.target.style.pointerEvents = 'none';
// //     e.target.classList.add("black-white")
// // })

// $('.gflag').on('click', function () {
//     $('.gflag').removeClass('black-white')
//     $('.gflag').css('pointer-events', '')
//     $(this).addClass('black-white')
//     $(this).css('pointer-events', 'none')
// })

// // lang_en.addEventListener('click', function () {
// //     lang_en.style.pointerEvents = 'none';
// //     lang_en.classList.add('black-white')
// //     lang_sv.style.pointerEvents = '';
// //     lang_sv.classList.remove('black-white')
// // })


// function googleTranslateElementInit2() {
//     new google.translate.TranslateElement({
//         pageLanguage: 'en',
//         autoDisplay: false
//     }, 'google_translate_element2');
// }

// /* <![CDATA[ */
// eval(function (p, a, c, k, e, r) {
//     e = function (c) {
//         return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
//     };
//     if (!''.replace(/^/, String)) {
//         while (c--) r[e(c)] = k[c] || e(c);
//         k = [function (e) {
//             return r[e]
//         }];
//         e = function () {
//             return '\\w+'
//         };
//         c = 1
//     }
//     while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
//     return p
// }('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))
// /* ]]> */
