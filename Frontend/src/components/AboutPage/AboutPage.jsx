import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img
            src="https://plus.unsplash.com/premium_photo-1679134540967-2a53b6113ba6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>ABOUT US</h1>
          <p>
            Flower, medikal kozmetik ürünlerin en yenilikçi ve etkili çözüm
            noktasıdır. Online alışverişin rahatlığını ve güvenliğini,
            müşterilere sunduğumuz yüksek kaliteli medikal kozmetik ürünlerle
            birleştiriyoruz.
          </p>
          <p>
            Yıllardır, dermatologlar ve güzellik uzmanları ile işbirliği içinde
            çalışarak, cilt sağlığına ve güzellik bakımına dair en son
            teknolojik yenilikleri, kişisel bakım ürünlerine entegre ediyoruz.
            Sağlıklı, güvenilir ve etkili ürünler sunarak, tüketicilerin yaşam
            kalitesini artırmayı hedefliyoruz.
          </p>
          <h2>Misyonumuz</h2>
          <p>
            Flower'ın misyonu, müşterilere seçenek, rahatlık ve güven sağlamak.
            Her biri uzman dermatologlar tarafından önerilen ve test edilen
            medikal kozmetik ürünlerle, evde profesyonel cilt bakımı deneyimini
            sunuyoruz.
          </p>
        </div>
      </section>

      <section className={styles.whyChooseUsSection}>
        <h2>NEDEN BİZİ SEÇMELİSİNİZ?</h2>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <h3>Kalite Güvencesi:</h3>
            <p>
              Her bir ürünümüz, etkili formülasyonlar ve yüksek kalite
              standartları göz önünde bulundurularak özenle seçilir ve test
              edilir.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Rahatlık:</h3>
            <p>
              Medikal kozmetik ürünleri keşfetmek ve satın almak, kullanıcı
              dostu arayüzümüz sayesinde hiç bu kadar kolay olmamıştı. Zamandan
              ve paradan tasarruf sağlamak için ihtiyaç duyduğunuz tüm bilgileri
              ve detayları sunuyoruz.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Mükemmel Müşteri Hizmeti:</h3>
            <p>
              Medikal kozmetik alanında uzmanlaşmış profesyonellerden oluşan
              ekibimiz, her adımda size rehberlik eder ve en iyi müşteri
              deneyimini yaşamanızı sağlar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
