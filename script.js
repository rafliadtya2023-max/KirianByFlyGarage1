const databaseRacikan = {
  scoopy_k2f: {
    harian: {
      "Roller": "10 gram (rata)",
      "Per CVT": "1000 rpm",
      "Per Centri": "1000 rpm",
      "Pully Set": "14,3°",
      "Kampas Ganda": "OEM Honda",
      "Mangkok": "Mangkok Kartel",
      "V-Belt": "OEM / Bando / Daytona",
      "Karakter": "Bawah isi, tanjakan kuat"
    }
  },
beat_k2f: {
    harian: {
      "Roller": "9 gram dan 10 gram (silang)",
      "Per CVT": "1000 rpm",
      "Per Centri": "1000 rpm",
      "Pully Set": "14,3°",
      "Kampas Ganda": "OEM Honda",
      "Mangkok": "OEM Honda",
      "V-Belt": "OEM / Bando / Daytona",
      "Karakter": "Responsif bawah, lebih enteng dari Scoopy"
  }
},
vario_led_new_125_gen2: {
  harian: {
    "Roller": "11 gram (rata)",
    "Per CVT": "1500 rpm",
    "Per Centri": "1000 rpm",
    "Pully Set": "13,5° & kerok jalur",
    "Kampas Ganda": "Kampas carbon",
    "Mangkok": "Mangkok Kartel",
    "V-Belt": "OEM / Bando / Daytona",
    "Karakter": "Akselerasi atau tarikan bawah enak dan ringan"
  }
},
 vario150_led_new_old: {
  harian: {
    "Roller": "12 gram (rata)",
    "Per CVT": "1500 rpm",
    "Per Centri": "1000 rpm",
    "Pully Set": "13,8° & kerok jalur",
    "Kampas Ganda": "Kampas carbon",
    "Mangkok": "Mangkok Kartel",
    "V-Belt": "OEM / Bando / Daytona",
    "Karakter": "Akselerasi / Tarikan bawah lebih responsif dan nendang"
   }
  },
beat_scoopy_esp_k44: {
  harian: {
    "Roller": "9 gram & 11 gram (silang)",
    "Per CVT": "1500 rpm",
    "Per Centri": "1000 rpm",
    "Pully Set": "14° & kerok jalur & papas sirip",
    "Kampas Ganda": "Kampas carbon",
    "Mangkok": "Mangkok Kartel kasar",
    "V-Belt": "OEM / Bando / Daytona",
    "Karakter": "Akselerasi / Tarikan bawah lebih kerasa dan tenaga ga kebuang sia sia"
   }
  },
  VARIO_160: {
  harian: {
    "Roller": "13 gram (rata)",
    "Per CVT": "1200 rpm",
    "Per Centri": "1000 rpm",
    "Pully Set": "14° & kerok jalur",
    "Kampas Ganda": "Kampas carbon",
    "Mangkok": "Mangkok Kartel",
    "V-Belt": "OEM / Bando / Daytona",
    "Karakter": "Lebih cepat naik rpm dan lebih responsif"
   }
  },
};
  
function gasRacikan() {
  const btn = document.querySelector("button");
  const motor = document.getElementById("motor").value;
  const kebutuhan = document.getElementById("kebutuhan").value;

  if (!motor || !kebutuhan) {
    alert("Pilih motor & kebutuhan dulu");
    return;
  }

  btn.disabled = true;
  btn.innerText = "Memuat racikan...";

  setTimeout(() => {
    const racikan = databaseRacikan[motor][kebutuhan];
    const hasil = document.getElementById("hasil");

    let html = "<h3>HASIL RACIKAN</h3>";
    for (let key in racikan) {
      html += `
        <div class="item">
          <div class="label">${key}</div>
          <div><b>${racikan[key]}</b></div>
        </div>
      `;
    }

    hasil.innerHTML = html;
    hasil.classList.add("show");

    btn.disabled = false;
    btn.innerText = "GAS RACIKAN";
  }, 300);
}