function shuffle() {
    var array_shuffled = [
        [1890, 2250, 2610],
        [1850, 2210, 2570],
        [1818, 2178, 2538],
        [1782, 2142, 2502],
        [1748, 2108, 2468],
        [1710, 2080, 2430],
        [1670, 2040, 2390],
        [1635, 1995, 2355],
        [1600, 1960, 2320],
        [1570, 1930, 2290],
    ];

    var array =
        array_shuffled[Math.floor(Math.random() * array_shuffled.length)];

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

    let hasil = array_shuffled.indexOf(array) + 1;

    return [array, hasil];
}

function spin() {
    // Play the sound
    wheel.play();
    // Inisialisasi variabel
    const box = document.getElementById('box');
    const element = document.getElementById('mainbox');
    let SelectedItem = '';

    let q = shuffle();

    // make random number SelectedItem
    if (q[0][0]) {
        SelectedItem = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
    }

    // Proses
    box.style.setProperty('transition', 'all ease 5s');
    box.style.transform = 'rotate(' + q[0][0] + 'deg)';
    element.classList.remove('animate');
    setTimeout(function () {
        element.classList.add('animate');
    }, 5000);

    // Munculkan Alert
    setTimeout(function () {
        notif.play();
        swal({
            title: 'Kamu memilih soal nomor : ' + '' + q[1],
            text: 'Klik LANJUTKAN untuk menjawab pertanyaan quiz',
            buttons: {
                confirm: 'Lanjutkan',
            },
        }).then((value) => {
            if (value) {
                location.href = '/soal/' + SelectedItem + '/index.html';
            }
        });
    }, 5500);

    // Delay and set to normal state
    setTimeout(function () {
        box.style.setProperty('transition', 'initial');
        box.style.transform = 'rotate(90deg)';
    }, 6000);
}
