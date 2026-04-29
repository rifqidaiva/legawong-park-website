export type UmkmProduct = {
  name: string
  price: number
  description?: string
  images: string[]
}

export type Umkm = {
  slug: string
  name: string
  category: "Kuliner" | "Jasa" | "Kerajinan" | "Ritel"
  owner: string
  address: string
  description: string
  images: string[]
  products: UmkmProduct[]
  hours: string
  contact: string
  highlight: string
  locationNote: string
  googleMapsUrl: string
}

export const umkmList: Umkm[] = [
  {
    slug: "sari-rasa-pandeyan",
    name: "Sari Rasa Pandeyan",
    category: "Kuliner",
    owner: "Ibu Sari",
    address: "Jl. Pandeyan Utara No. 12, Pandeyan",
    description:
      "Usaha rumahan yang menyiapkan aneka lauk harian, snack, dan nasi kotak untuk warga sekitar serta pesanan acara kecil.",
    images: [
      "https://picsum.photos/640/640?random=1",
      "https://picsum.photos/640/640?random=2",
      "https://picsum.photos/640/640?random=3",
    ],
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d403.6451081008387!2d110.39235382717764!3d-7.825155239128972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDknMzAuMyJTIDExMMKwMjMnMzIuOSJF!5e0!3m2!1sen!2sid!4v1777478713701!5m2!1sen!2sid",
    products: [
      {
        name: "Nasi kotak",
        price: 15000,
        description:
          "Paket nasi lengkap dengan lauk rumahan, cocok untuk rapat kecil dan acara keluarga.",
        images: [
          "https://picsum.photos/640/640?random=4",
          "https://picsum.photos/640/640?random=5",
        ],
      },
      {
        name: "Snack box",
        price: 10000,
        description:
          "Isi 3-4 jenis snack tradisional dan modern, bisa request varian sesuai kebutuhan acara.",
        images: ["https://picsum.photos/640/640?random=6"],
      },
      {
        name: "Lauk harian",
        price: 12000,
        description:
          "Lauk siap saji dengan menu berganti setiap hari, praktis untuk makan siang keluarga. Pesanan harian bisa diantar langsung ke rumah.Lauk siap saji dengan menu berganti setiap hari, praktis untuk makan siang keluarga. Pesanan harian bisa diantar langsung ke rumah.Lauk siap saji dengan menu berganti setiap hari, praktis untuk makan siang keluarga. Pesanan harian bisa diantar langsung ke rumah.Lauk siap saji dengan menu berganti setiap hari, praktis untuk makan siang keluarga. Pesanan harian bisa diantar langsung ke rumah.Lauk siap saji dengan menu berganti setiap hari, praktis untuk makan siang keluarga. Pesanan harian bisa diantar langsung ke rumah.",
        images: ["https://picsum.photos/640/640?random=7"],
      },
      {
        name: "Kue tradisional",
        price: 8000,
        images: ["https://picsum.photos/640/640?random=8"],
      },
    ],
    hours: "06.00 - 19.00",
    contact: "+62 812-3456-7890",
    highlight: "Menerima pesanan harian dan acara keluarga.",
    locationNote: "Dekat area permukiman warga dan mudah dijangkau dari jalan utama.",
  },
  {
    slug: "pandeyan-print",
    name: "Pandeyan Print",
    category: "Jasa",
    owner: "Mas Arif",
    address: "Jl. Imogiri Timur Km 5,5, Pandeyan",
    description:
      "Melayani cetak dokumen, banner, stiker, dan kebutuhan desain sederhana untuk pelajar, warga, dan UMKM lain.",
    images: ["https://picsum.photos/640/640?random=9", "https://picsum.photos/640/640?random=10"],
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d403.6451081008387!2d110.39235382717764!3d-7.825155239128972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDknMzAuMyJTIDExMMKwMjMnMzIuOSJF!5e0!3m2!1sen!2sid!4v1777478713701!5m2!1sen!2sid",
    products: [
      {
        name: "Print dokumen",
        price: 500,
        description:
          "Layanan print hitam putih dan warna untuk tugas sekolah, dokumen kantor, dan formulir.",
        images: ["https://picsum.photos/640/640?random=11"],
      },
      {
        name: "Banner",
        price: 25000,
        description:
          "Cetak banner dengan bahan standar outdoor, tersedia pilihan ukuran sesuai kebutuhan promosi.",
        images: ["https://picsum.photos/640/640?random=12"],
      },
      {
        name: "Stiker label",
        price: 3000,
        images: ["https://picsum.photos/640/640?random=13"],
      },
      {
        name: "Desain sederhana",
        price: 20000,
        images: ["https://picsum.photos/640/640?random=14"],
      },
    ],
    hours: "08.00 - 21.00",
    contact: "+62 813-2222-4444",
    highlight: "Cocok untuk kebutuhan cepat dan pesanan satuan.",
    locationNote: "Akses langsung dari jalur ramai dengan layanan antar-jemput file.",
  },
  {
    slug: "batik-tulis-lestari",
    name: "Batik Tulis Lestari",
    category: "Kerajinan",
    owner: "Ibu Lestari",
    address: "RT 04 RW 02, Kelurahan Pandeyan",
    description:
      "Membuat batik tulis dan produk turunan seperti scarf, tote bag, serta souvenir untuk acara desa atau sekolah.",
    images: [
      "https://picsum.photos/640/640?random=15",
      "https://picsum.photos/640/640?random=16",
      "https://picsum.photos/640/640?random=17",
    ],
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d403.6451081008387!2d110.39235382717764!3d-7.825155239128972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDknMzAuMyJTIDExMMKwMjMnMzIuOSJF!5e0!3m2!1sen!2sid!4v1777478713701!5m2!1sen!2sid",
    products: [
      {
        name: "Batik tulis",
        price: 150000,
        description:
          "Kain batik tulis motif lokal dengan pewarnaan rapi, cocok untuk koleksi maupun hadiah.",
        images: [
          "https://picsum.photos/640/640?random=18",
          "https://picsum.photos/640/640?random=19",
        ],
      },
      {
        name: "Scarf",
        price: 80000,
        description:
          "Scarf batik ringan dengan motif elegan, nyaman dipakai untuk aktivitas harian.",
        images: ["https://picsum.photos/640/640?random=20"],
      },
      {
        name: "Tote bag",
        price: 60000,
        images: ["https://picsum.photos/640/640?random=21"],
      },
      {
        name: "Souvenir custom",
        price: 30000,
        images: ["https://picsum.photos/640/640?random=22"],
      },
    ],
    hours: "09.00 - 17.00",
    contact: "+62 821-9087-6543",
    highlight: "Bisa custom motif untuk kebutuhan komunitas.",
    locationNote: "Berbasis rumah produksi dengan kunjungan by appointment.",
  },
  {
    slug: "toko-sembako-mak-mur",
    name: "Toko Sembako Mak Mur",
    category: "Ritel",
    owner: "Bu Mur",
    address: "Jl. Pandeyan Selatan No. 8, Pandeyan",
    description:
      "Toko kelontong yang menyediakan kebutuhan pokok harian, pulsa, gas, dan perlengkapan rumah tangga ringan.",
    images: ["https://picsum.photos/640/640?random=23", "https://picsum.photos/640/640?random=24"],
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d403.6451081008387!2d110.39235382717764!3d-7.825155239128972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDknMzAuMyJTIDExMMKwMjMnMzIuOSJF!5e0!3m2!1sen!2sid!4v1777478713701!5m2!1sen!2sid",
    products: [
      {
        name: "Beras",
        price: 9000,
        description: "Beras harian kualitas medium dengan stok rutin untuk kebutuhan keluarga.",
        images: ["https://picsum.photos/640/640?random=25"],
      },
      {
        name: "Minyak",
        price: 11000,
        description: "Minyak goreng kemasan praktis untuk kebutuhan dapur rumahan dan usaha kecil.",
        images: ["https://picsum.photos/640/640?random=26"],
      },
      {
        name: "Gas elpiji",
        price: 15000,
        images: ["https://picsum.photos/640/640?random=27"],
      },
      {
        name: "Pulsa & token",
        price: 5000,
        images: ["https://picsum.photos/640/640?random=28"],
      },
    ],
    hours: "06.30 - 22.00",
    contact: "+62 857-1111-2233",
    highlight: "Stok kebutuhan harian untuk warga sekitar.",
    locationNote: "Lokasi strategis di lingkungan padat penduduk.",
  },
]

export function getUmkmBySlug(slug: string) {
  return umkmList.find((item) => item.slug === slug)
}

export function getUmkmCategories() {
  return [...new Set(umkmList.map((item) => item.category))]
}
