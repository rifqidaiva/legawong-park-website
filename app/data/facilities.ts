export type FacilitySection = {
  title: string
  paragraphs: string[]
  points?: string[]
  note?: string
}

export type FacilityProfile = {
  slug: string
  name: string
  badge: string
  summary: string
  heroImage: string
  gallery: string[]
  facts: Array<{
    label: string
    value: string
  }>
  sections: FacilitySection[]
}

export const facilities: FacilityProfile[] = [
  {
    slug: "pendopo-wirasapa",
    name: "Pendopo Wirasapa",
    badge: "Pendopo Utama",
    summary:
      "Pendopo Wirasapa adalah ruang teduh di Taman Legawong yang dirancang untuk pertemuan santai, obrolan komunitas, dan kegiatan bersama keluarga dengan suasana yang lebih tenang.",
    heroImage: "/contents/pendopo_1.jpg",
    gallery: ["/contents/pendopo_2.jpg", "/contents/pendopo_3.jpg"],
    facts: [
      { label: "Suasana", value: "Teduh, lapang, dan cocok untuk jeda kegiatan." },
      { label: "Fungsi", value: "Pertemuan kecil, kumpul warga, dan ruang istirahat." },
      { label: "Akses", value: "Mudah dijangkau dari jalur utama taman." },
    ],
    sections: [
      {
        title: "Karakter ruang",
        paragraphs: [
          "Pendopo ini menjadi titik singgah yang nyaman saat pengunjung ingin beristirahat tanpa meninggalkan nuansa terbuka khas taman.",
          "Susunan ruangnya sederhana, sehingga mudah dipakai untuk berbincang santai maupun acara kecil yang tidak membutuhkan tata letak rumit.",
        ],
        points: [
          "Area teduh dengan sirkulasi udara yang nyaman.",
          "Cocok untuk pertemuan keluarga atau komunitas kecil.",
          "Bisa menjadi titik berkumpul sebelum menjelajah area taman lain.",
        ],
      },
      {
        title: "Apa yang terasa saat berada di sini",
        paragraphs: [
          "Pendopo Wirasapa memberi pengalaman yang lebih tenang dibanding ruang terbuka taman. Tempat ini pas untuk bercakap tanpa terganggu hiruk pikuk, membaca sebentar, atau menunggu rombongan berkumpul.",
        ],
        note: "Gunakan sebagai ruang jeda yang nyaman, bukan sekadar tempat lewat.",
      },
    ],
  },
  {
    slug: "panggung-angkringan-kandhang-sapi",
    name: "Panggung Angkringan Kandhang Sapi",
    badge: "Panggung Acara",
    summary:
      "Panggung Angkringan Kandhang Sapi adalah ruang ekspresi yang lebih hidup, dirancang untuk pertunjukan, aktivitas komunitas, dan suasana kumpul yang terasa akrab.",
    heroImage: "/contents/panggung_1.jpg",
    gallery: ["/contents/panggung_2.jpg", "/contents/panggung_3.jpg"],
    facts: [
      { label: "Nuansa", value: "Meriah, santai, dan cocok untuk pertunjukan." },
      { label: "Aktivitas", value: "Pentas kecil, komunitas, dan acara tematik." },
      { label: "Karakter", value: "Lebih terbuka dan terasa dekat dengan pengunjung." },
    ],
    sections: [
      {
        title: "Ruang yang terasa hidup",
        paragraphs: [
          "Panggung ini membawa karakter ruang publik yang hangat. Pengunjung dapat membayangkan panggung sebagai titik fokus kegiatan, sementara area sekitarnya menjadi tempat berkumpul yang cair dan ramah.",
          "Kehadiran unsur angkringan dan suasana kandhang sapi memberi identitas lokal yang lebih kuat, sehingga tempat ini tidak hanya fungsional tetapi juga berkesan.",
        ],
        points: [
          "Cocok untuk acara komunitas dan tampil sederhana.",
          "Memberi titik fokus visual bagi pengunjung.",
          "Identitas lokalnya kuat dan mudah dikenali.",
        ],
      },
      {
        title: "Rasa ruangnya",
        paragraphs: [
          "Tempat ini paling menarik ketika diisi aktivitas. Saat ada pertunjukan kecil, diskusi santai, atau sekadar pertemuan warga, suasananya terasa lebih hangat dan akrab daripada ruang formal.",
        ],
        note: "Panggung ini cocok untuk konten yang ingin tampil dinamis dan dekat dengan kehidupan taman.",
      },
    ],
  },
  {
    slug: "angkringan-kandhang-sapi",
    name: "Angkringan Kandhang Sapi",
    badge: "Warung Kuliner",
    summary:
      "Angkringan Kandhang Sapi adalah tempat kuliner tradisional yang terletak tepat di sebelah panggung, menyajikan aneka makanan dan minuman khas dengan suasana yang akrab dan merakyat.",
    heroImage: "/contents/angkringan_1.jpg",
    gallery: ["/contents/angkringan_2.jpg"],
    facts: [
      { label: "Sajian", value: "Nasi kucing, sate-satean, gorengan, dan wedangan." },
      { label: "Lokasi", value: "Berdampingan langsung dengan area Panggung Utama." },
      { label: "Suasana", value: "Santai, hangat, dan kental dengan obrolan warga." },
    ],
    sections: [
      {
        title: "Pusat Rasa dan Kebersamaan",
        paragraphs: [
          "Berada persis di sebelah panggung, angkringan ini bukan sekadar tempat mengisi perut, melainkan titik temu yang mempertemukan penonton, pengisi acara, dan pengunjung taman dalam satu meja.",
          "Sajian yang dihadirkan mengedepankan cita rasa lokal yang merakyat, menjadikannya pelengkap sempurna saat menikmati sore atau menyaksikan pertunjukan di panggung.",
        ],
        points: [
          "Menyediakan berbagai macam makanan ringan hingga hidangan khas angkringan.",
          "Sangat strategis untuk menikmati camilan sambil menonton acara di panggung.",
          "Sistem penyajian yang santai memicu obrolan yang lebih mengalir.",
        ],
      },
      {
        title: "Pengalaman Kuliner yang Guyub",
        paragraphs: [
          "Suasana yang dihadirkan di Angkringan Kandhang Sapi membawa kembali memori ruang sosial tradisional. Bau aroma wedangan hangat dan pendar lampu kuning menciptakan kenyamanan tersendiri bagi siapa saja yang singgah.",
        ],
        note: "Sangat direkomendasikan untuk menyantap hidangan di sini saat menjelang malam atau ketika panggung sedang aktif.",
      },
    ],
  },
]

export function getFacilityBySlug(slug: string) {
  return facilities.find((facility) => facility.slug === slug)
}
