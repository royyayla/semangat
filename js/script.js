let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "ayla cantikk";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/royyshf/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai sayang',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalo belum jangan lupa makan yaa kan ga puasa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau kamu lagi marah banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Aku minta maaf banget yang`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Terus sama aku yaa :)').then((result) => {
                  Swal.fire(
                    'Gaboleh ditinggalin!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Gaboleh pisah!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Aku bakal terus ada buat kamu').then((result) => {
                        Swal.fire({
                          title: 'Oiya aku mau nanya',
                          text: 'Ada sesuatu yang lagi kamu pengen ga?',
                          showDenyButton: true,
                          confirmButtonText: `Ada yang`,
                          denyButtonText: `Ga ada kok`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?gaboleh mau ninggalin',
                              input: 'text',
                              inputPlaceholder: 'ex: gacoan, boba, jank jank or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dong yang'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey ayang', 'Nanti yaa lanjut wa', 'success').then((result) => {
                                Swal.fire("See youuu! Aku kangen").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('yaudaa kalo ga ada').then((result) => {
                              Swal.fire("See youuu! Aku kangen").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
