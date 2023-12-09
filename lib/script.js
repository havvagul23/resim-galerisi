// Add your code here
// galeri divini seçelim
const galeri = document.querySelector('.galeri');

// resimlerin sütun ve satır sayısı
const columnCount = 3;
const rowCount = 5;

// sütun ve satır numaralarını hesapla
const totalPhotos = columnCount * rowCount;
let photoIndex = 1;

// fotoğraf etiketlerini oluştur
for (let row = 0; row < rowCount; row++) {
  for (let column = 0; column < columnCount; column++) {
    //resmin alternatif metni:resim yüklenemediğinde görüntülenir
    img.alt = `Photo ${photoIndex}`;

    //her img öğesini 'galeri' adlı HTML öğesine ekler
    //Bu öğe galerinin ana bileşenidir
    gallery.appendChild(img);

    //her resim için benzersiz bir fotoğraf indexi oluşturur
    //her bir döngüde 1 artırılır
    photoIndex++;
  }
}

// sayfa yüklendiğinde fotoğrafları ekle
addPhotos();
