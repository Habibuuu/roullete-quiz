function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let q1 = shuffle([1890, 2250, 2610]);
  // let q2 = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  // let q3 = shuffle([1818, 2178, 2538]);
  // let q4 = shuffle([1782, 2142, 2502]);
  // let q5 = shuffle([1748, 2108, 2468]);
  // let q6 = shuffle([1710, 2080, 2430]);
  // let q7 = shuffle([1670, 2040, 2390]);
  // let q8 = shuffle([1635, 1995, 2355]);
  // let q9 = shuffle([1600, 1960, 2320]);
  // let q10 = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    q1[0],
    // q2[0],
    // q3[0],
    // q4[0],
    // q5[0],
    // q6[0],
    // q7[0],
    // q8[0],
    // q9[0],
    // q10[0],
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (q1.includes(Hasil[0])) SelectedItem = "1";
  // if (q2.includes(Hasil[0])) SelectedItem = "2";
  // if (q3.includes(Hasil[0])) SelectedItem = "3";
  // if (q4.includes(Hasil[0])) SelectedItem = "4";
  // if (q5.includes(Hasil[0])) SelectedItem = "5";
  // if (q6.includes(Hasil[0])) SelectedItem = "6";
  // if (q7.includes(Hasil[0])) SelectedItem = "7";
  // if (q8.includes(Hasil[0])) SelectedItem = "8";
  // if (q9.includes(Hasil[0])) SelectedItem = "9";
  // if (q10.includes(Hasil[0])) SelectedItem = "10";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    notif.play();
    swal({
      title: "Kamu memilih soal nomor : " + "" + SelectedItem,
      text: "Klik CONTINUE untuk menjawab pertanyaan quiz",
      buttons: {
        cancel: true,
        confirm: "continue"
      }
    }).then((value) => {
      if (value) {
        location.href = '/soal/'+ SelectedItem +'/index.html';
      }
    });
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}

