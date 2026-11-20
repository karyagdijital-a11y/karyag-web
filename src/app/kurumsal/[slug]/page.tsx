import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  BookOpen,
  Compass,
  Clock,
  Award,
  Factory,
  FileCheck2,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Quote,
} from "lucide-react";
import OliveDropIcon from "@/components/ui/OliveDropIcon";
import CertificateGallery, {
  type CertificateItem,
} from "@/components/corporate/CertificateGallery";

type CorporateSlug =
  | "hakkimizda"
  | "misyon-vizyon"
  | "tarihce"
  | "kalite-politikamiz"
  | "tesisimiz"
  | "belgelerimiz"
  | "cevre-ve-surdurulebilirlik";

const sidebarLinks: {
  slug: CorporateSlug;
  label: string;
  icon: React.ElementType;
}[] = [
  { slug: "hakkimizda", label: "Hakkımızda", icon: BookOpen },
  { slug: "misyon-vizyon", label: "Misyon & Vizyon", icon: Compass },
  { slug: "tarihce", label: "Tarihçe", icon: Clock },
  { slug: "kalite-politikamiz", label: "Kalite Politikamız", icon: Award },
  { slug: "tesisimiz", label: "Tesisimiz", icon: Factory },
  { slug: "belgelerimiz", label: "Belgelerimiz", icon: FileCheck2 },
  {
    slug: "cevre-ve-surdurulebilirlik",
    label: "Çevre & Sürdürülebilirlik",
    icon: Leaf,
  },
];

type StoryChapter = {
  heading: string;
  body: string[];
};

type PageContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  lead: string;
  bannerImage: string;
  bannerAlt: string;
  quote: string;
  quoteCaption: string;
  chapters: StoryChapter[];
  pillars: { title: string; desc: string }[];
  timeline?: { year: string; title: string; desc: string }[];
  certificates?: CertificateItem[];
};

const corporateData: Record<CorporateSlug, PageContent> = {
  hakkimizda: {
    eyebrow: "KURUMSAL • HAKKIMIZDA",
    title: "Toprağın Bereketine Adanmış",
    titleHighlight: "Köklü Bir Hikâye",
    lead: "Bazı hikâyeler fabrikaların duvarları arasında değil, güneşin yüzyıllardır ısıttığı kadim toprakların sessiz sabrında başlar. KARYAĞ, Kilis’in ölümsüz zeytin ağaçlarına duyulan bir vefanın adıdır.",
    bannerImage: "/images/story/stage-1-hasat.jpg",
    bannerAlt: "Kilis zeytin ve zeytinyağı mirası",
    quote:
      "Zeytin ağacı acele etmez; yüzyılları köklerinde biriktirir, güneşi meyvesinde saklar ve kendisine saygı duyan ellere en saf altınını armağan eder.",
    quoteCaption: "KARYAĞ Üretim Felsefesi • Polateli / Kilis",
    chapters: [
      {
        heading: "Gümüş Yapraklı Bir Emanetin İzinde",
        body: [
          "Anadolu ile Mezopotamya’nın kucaklaştığı bereketli Kilis yamaçlarında, rüzgâr her estiğinde gümüş yapraklı dallardan asırlık bir fısıltı yükselir. Bu topraklarda zeytin, yalnızca mevsimlik bir hasat değil; sofraların bereketi, ailelerin hatırası ve nesilden nesile devredilen kutsal bir mirastır. KARYAĞ Gıda San. ve Tic. A.Ş., işte bu kadim mirasa kulak vererek, toprağın cömertliğini hak ettiği zarafet ve özenle geleceğe taşımak için doğdu.",
          "Polateli’nin kalbinde yükselen üretim yuvamızda, zeytini bir ham madde gibi değil, doğanın bize teslim ettiği nadide bir emanet gibi görüyoruz. Hasat sabahının serinliğinde dalından incitmeden toplanan her bir zeytin tanesi, gövdesinde güneşin sıcaklığını, toprağın mineralini ve çiftçimizin alın terini taşır. Bizim görevimiz, bu eşsiz uyumu bozmadan, doğanın kendi dengesine hürmet ederek saf bir değere dönüştürmektir.",
        ],
      },
      {
        heading: "Üç Marka, Tek Bir Yürek",
        body: [
          "Zaman içinde büyüyen yolculuğumuz, her biri kendi karakterine sahip ama aynı topraktan beslenen güçlü bir marka ailesine dönüştü. Ana çatı markamız KARYAĞ, köklü güvencemizin ve sıfır atık vizyonumuzun temsilcisi olarak bu büyük hikâyeye yön verir. KADİVA, sofralara doğallığın en ince, en seçkin ve en asil halini taşırken; KAROLİVA, ustalığına güvenen şeflerin ve seçkin mutfakların değişmeyen yol arkadaşı olarak lezzete istikrar katar.",
          "Bizim için büyüklük, yalnızca tonajlarla ya da duvarların yüksekliğiyle ölçülmez. Gerçek büyüklük; doğadan aldığımızı eksiksiz bir saygıyla yeniden doğaya kazandırabilmek, üreticimizin yüzündeki güveni koruyabilmek ve her damlada aynı dürüstlüğü sunabilmektir.",
        ],
      },
    ],
    pillars: [
      {
        title: "Kadim Coğrafyanın Ruhu",
        desc: "Kilis’in eşsiz ikliminde, binlerce yıllık zeytin geleneğiyle yoğrulmuş toprakların doğal zenginliği.",
      },
      {
        title: "Aile Sıcaklığında Marka Mimarisi",
        desc: "KARYAĞ çatısı altında sofradan profesyonel mutfağa uzanan, her biri özenle kurgulanmış üç güçlü kimlik.",
      },
      {
        title: "Toprağa Vefa ve Sıfır Atık",
        desc: "Zeytinin çekirdeğinden posasına hiçbir zerresini ziyan etmeden yeniden yaşama döndüren bütünsel bilinç.",
      },
    ],
  },

  "misyon-vizyon": {
    eyebrow: "KURUMSAL • MİSYON & VİZYON",
    title: "Bugünün Bereketiyle",
    titleHighlight: "Yarını Beslemek",
    lead: "Geleceğe bırakılabilecek en kıymetli miras; bozulmamış bir doğa, güvenle anılan bir isim ve sofralara sağlıkla ulaşan saf bir berekettir.",
    bannerImage: "/images/story/stage-2-sikim.jpg",
    bannerAlt: "Altın zeytinyağı ve gelecek vizyonu",
    quote:
      "Toprağa ne kadar incelikle yaklaşırsanız, yarınlar size o kadar cömert kapılar açar. Biz yalnızca bugünü üretmiyor, gelecek kuşakların nefes alacağı bir denge kuruyoruz.",
    quoteCaption: "Değerlerimiz ve Yol Haritamız",
    chapters: [
      {
        heading: "Varoluş Amacımız: Saflığı Korumak",
        body: [
          "Misyonumuz; doğanın milyonlarca yıllık bilgeliğiyle olgunlaştırdığı zeytin meyvesine hiçbir yapaylık katmadan, onun özündeki şifayı, kokuyu ve berraklığı en yüksek özenle korumaktır. Topraktan başlayıp sofralara ve seçkin mutfaklara uzanan bu uzun yolculukta, dürüstlükten ve şeffaflıktan asla sapmadan hareket ederiz.",
          "Her üretim sezonunda çiftçimizin emeğini baş tacı eder, modern ustalığımızı doğanın ritmine uydururuz. Çünkü biliyoruz ki insan sağlığına ve doğaya saygı duymayan hiçbir başarı kalıcı değildir.",
        ],
      },
      {
        heading: "Ufuktaki Hayalimiz: Dünyaya Açılan Bir Örnek",
        body: [
          "Vizyonumuz; Kilis’in adını ve Anadolu’nun kadim zeytin kültürünü, sıfır atık felsefesiyle birleştirerek dünyanın dört bir yanında saygıyla anılan öncü bir marka ekosistemine dönüştürmektir. Yalnızca ürün sunan bir kurum değil; doğayla barışık üretimin nasıl mümkün olabileceğini gösteren ilham verici bir örnek olmayı hedefliyoruz.",
          "Yarınlara bakarken tek bir pusulamız var: KARYAĞ, KADİVA ve KAROLİVA isimlerinin geçtiği her yerde güvenin, zarafetin ve eksiksiz bir emeğin hissedilmesi.",
        ],
      },
    ],
    pillars: [
      {
        title: "Koşulsuz Saflık Sözü",
        desc: "Doğanın sunduğu özü değiştirmeden, ilk günkü tazeliği ve dürüstlüğüyle koruyan üretim kültürü.",
      },
      {
        title: "Emeğe ve İnsana Saygı",
        desc: "Bahçedeki çiftçiden tesisimizdeki ustaya kadar bu hikâyeye dokunan herkesin değerini yücelten anlayış.",
      },
      {
        title: "Küresel Saygınlık",
        desc: "Anadolu’nun zeytin mirasını uluslararası standartlar ve estetik bir marka diliyle dünyaya tanıtmak.",
      },
    ],
  },

  tarihce: {
    eyebrow: "KURUMSAL • TARİHÇE",
    title: "Köklerimizden Geleceğe",
    titleHighlight: "Uzanan Yolculuk",
    lead: "Her büyük çınar, toprağa umutla bırakılan tek bir tohumla başlar. Bizim hikâyemiz de Kilis’in bereketine duyulan sarsılmaz bir inançla filizlendi.",
    bannerImage: "/images/story/stage-1-hasat.jpg",
    bannerAlt: "Asırlık zeytin yolculuğu ve tarihçe",
    quote:
      "Geçmişin bilgeliğini sırtında taşımayan bir yapı, geleceğin rüzgârlarına dayanamaz. Köklerimiz ne kadar derindeyse, dallarımız gökyüzüne o kadar güvenle uzanır.",
    quoteCaption: "Dünden Bugüne KARYAĞ",
    chapters: [
      {
        heading: "Toprağın Sesini Duyduğumuz İlk Günler",
        body: [
          "Her şey, bu coğrafyanın en kıymetli hazinesi olan zeytinin hak ettiği değere kavuşması hayaliyle başladı. Kilis’in asırlık zeytinliklerinde yetişen eşsiz meyvelerin, geleneksel tecrübe ile çağdaş bir üretim anlayışını hak ettiğini biliyorduk. İlk adımlarımızı atarken yanımızda büyük bir sabır, toprağa duyduğumuz derin bağlılık ve yöre insanıyla kurduğumuz sarsılmaz bir gönül bağı vardı.",
          "Yıllar geçtikçe yalnızca tesislerimiz değil, sorumluluğumuz da büyüdü. Sıkım sonrasında geriye kalan zeytin posasının ve çekirdeğinin aslında doğanın bize sunduğu ikinci bir armağan olduğunu gördüğümüzde, bütün üretim modelimizi 'hiçbir şeyi ziyan etmeyen' döngüsel bir yapıya dönüştürmeye karar verdik.",
        ],
      },
      {
        heading: "Bir Tesisin Ötesinde: Yaşayan Bir Marka Ailesi",
        body: [
          "Polateli’de hayat bulan entegre üretim yuvamızla birlikte, hasattan geri kazanıma kadar tüm halkaları tek bir uyum içinde birleştirdik. Bu birikim, zamanla yalnızca ham ve rafine üretim yapan bir sanayi gücünü değil; sofralara zarafet katan KADİVA’yı ve profesyonel mutfakların güvenilir dostu KAROLİVA’yı doğurdu.",
          "Bugün geriye dönüp baktığımızda; alın teriyle örülmüş kilometre taşları, ileriye baktığımızda ise daha yeşil, daha bereketli ve sınırları aşan yepyeni ufuklar görüyoruz.",
        ],
      },
    ],
    timeline: [
      {
        year: "I. Dönem",
        title: "Toprakla Kurulan Gönül Bağı",
        desc: "Kilis zeytin havzasının eşsiz bereketini yakından tanıma, yerel üreticilerle omuz omuza çalışma ve kalite hayalinin temellerinin atılması.",
      },
      {
        year: "II. Dönem",
        title: "Entegre Üretim & Sıfır Atık Vizyonu",
        desc: "Polateli’de zeytinin her zerresini değerlendiren, modern sıkım ve arıtma hatlarını döngüsel enerji anlayışıyla birleştiren tesis yatırımının tamamlanması.",
      },
      {
        year: "III. Dönem",
        title: "KADİVA ve KAROLİVA’nın Doğuşu",
        desc: "KARYAĞ çatı güvencesi altında gurme sofralar ve profesyonel mutfaklar için özelleşmiş marka mimarisinin hayata geçirilmesi.",
      },
      {
        year: "Gelecek",
        title: "Sınırları Aşan Bereket",
        desc: "Sürdürülebilir üretim kültürümüzü ve Kilis’in kadim zeytin mirasını uluslararası pazarlarda gururla temsil etmeye devam ediyoruz.",
      },
    ],
    pillars: [
      {
        title: "Gelenekten Gelen Sabır",
        desc: "Bölge kültürünü ve zeytinin doğasını tanıyan, köklerinden güç alan köklü bir tecrübe.",
      },
      {
        title: "Öncü Dönüşüm Ruhu",
        desc: "Her yeni dönemde daha temiz, daha hassas ve daha verimli üretim modelleri geliştirme iradesi.",
      },
      {
        title: "Kalıcı Güven Mirası",
        desc: "Yıllar boyu değişmeyen dürüstlük çizgisiyle iş ortaklarımızın ve tüketicilerimizin gönlünde kurulan yer.",
      },
    ],
  },

  "kalite-politikamiz": {
    eyebrow: "KURUMSAL • KALİTE POLİTİKAMIZ",
    title: "Saflığı ve Özeni Koruyan",
    titleHighlight: "Değişmez Sözümüz",
    lead: "Bizim için kalite, laboratuvar kâğıtlarındaki rakamlardan ibaret değildir; zeytin bahçesindeki ilk güneş ışığından sofradaki son damlaya kadar süren bir vicdan ve ustalık meselesidir.",
    bannerImage: "/images/story/stage-3-berraklik.jpg",
    bannerAlt: "Kusursuz saflık ve kalite kontrol",
    quote:
      "Doğanın kusursuzca yarattığı bir meyveye yapabileceğiniz en büyük iyilik, ona kendi saflığını koruyacak kadar saygılı ve titiz davranmaktır.",
    quoteCaption: "KARYAĞ Kalite Manifestosu",
    chapters: [
      {
        heading: "Hasattan Başlayan Sessiz Disiplin",
        body: [
          "İyi bir zeytinyağının sırrı, henüz dalındayken başlar. Zeytinin en doğru olgunluk anında toplanması, zedelenmeden ve beklemeden üretim yuvamıza ulaşması, bizim kalite anlayışımızın ilk ve en hassas adımıdır. Çünkü doğallık bir kez incinirse, hiçbir teknoloji onu eski haline getiremez.",
          "Tesisimize ulaşan her mahsul, tazeliğini, meyvemsi karakterini ve besin değerini koruyan kapalı ve hijyenik hatlarda işlenir. Hava, ışık ve sıcaklık gibi zeytinyağının en hassas düşmanlarına karşı her aşamada koruyucu bir özen gösterilir.",
        ],
      },
      {
        heading: "Her Damlada İzlenebilir Güven",
        body: [
          "Üretimimizin her evresinde uluslararası gıda güvenliği normlarını eksiksiz uygularız. Kendi bünyemizdeki titiz kontrol süreçlerimiz sayesinde, ürettiğimiz her partinin saflığı, berraklığı ve dengesi kayıt altına alınır. İster bir aile sofrasına konuk olan KADİVA şişesi olsun, ister dev bir mutfağın kalbinde çalışan KAROLİVA; her biri aynı imzayı ve aynı güven sözünü taşır.",
          "Kalite politikamızın merkezinde sürekli öğrenmek ve gelişmek vardır. Dün ulaştığımız standardı bugün daha ileriye taşımak, bize güvenen herkese karşı en temel sorumluluğumuzdur.",
        ],
      },
    ],
    pillars: [
      {
        title: "Baştan Sona İzlenebilirlik",
        desc: "Zeytinin bahçeden kabulünden ambalajlanıp yola çıkmasına kadar şeffaf ve kayıtlı takip süreci.",
      },
      {
        title: "Doğal Karaktere Saygı",
        desc: "Ürünün aromasını, berraklığını ve besleyici özünü koruyan hassas ve kontrollü işleme ilkeleri.",
      },
      {
        title: "Tavizsiz Hijyen Kültürü",
        desc: "Uluslararası gıda güvenliği kriterlerine tam uyumlu, steril ve özenle denetlenen üretim alanları.",
      },
    ],
  },

  tesisimiz: {
    eyebrow: "KURUMSAL • TESİSİMİZ",
    title: "Doğayla Uyumlu",
    titleHighlight: "Modern Üretim Yuvamız",
    lead: "Polateli’nin dingin doğası içinde konumlanan tesisimiz; soğuk bir fabrika binasından öte, toprağın bereketini modern mühendislik zarafetiyle buluşturan yaşayan bir üretim merkezidir.",
    bannerImage: "/images/story/stage-3-berraklik.jpg",
    bannerAlt: "Modern ve doğa dostu üretim tesisi",
    quote:
      "Teknoloji doğanın önüne geçmek için değil; doğanın sunduğu mucizeyi en saf, en temiz ve en zarif haliyle korumak için vardır.",
    quoteCaption: "Polateli / Kilis Entegre Üretim Üssü",
    chapters: [
      {
        heading: "Zeytin Bahçelerinin Hemen Yanı Başında",
        body: [
          "Bir zeytinyağı tesisinin en büyük şansı, bahçeye yakınlığıdır. Polateli / Kilis’te yer alan stratejik konumumuz sayesinde, sabahın erken saatlerinde toplanan zeytinler güneş yükselmeden, tazeliğini ve canlı kokusunu kaybetmeden tesisimize ulaşır. Zamanla yarışan bu hassas başlangıç, ürettiğimiz her damlanın karakterini belirler.",
          "Tesisimiz, zeytinin yıkandığı ilk andan itibaren kapalı devre, yüksek hijyenli ve doğaya dost bir akış düzeniyle çalışır. Her ünite, bir sonrakini besleyecek şekilde bütünsel bir mühendislik aklıyla birbirine bağlıdır.",
        ],
      },
      {
        heading: "Sessiz Dinlenme ve Döngüsel Yaşam",
        body: [
          "Elde edilen saf yağlar, tazeliğini ve berraklığını yıl boyunca muhafaza edebilmesi için özel korumalı paslanmaz çelik tanklarda, ideal ısı dengesinde dinlendirilir. Sıkım sonrası ortaya çıkan zeytin çekirdeği ve doğal posa ise tesisimizin geri kazanım bölümünde yeniden değerlendirilerek temiz enerjiye dönüşür.",
          "Böylece tesisimiz yalnızca üretim yapan değil; kendi döngüsünü tamamlayan, çevresine nefes aldıran ve bölgenin ekonomisine değer katan modern bir yuva olarak hizmet verir.",
        ],
      },
    ],
    pillars: [
      {
        title: "Hasada Komşu Konum",
        desc: "Zeytinin bekletilmeden, ilk saatlerin tazeliğiyle işlenmesini sağlayan Polateli / Kilis yerleşimi.",
      },
      {
        title: "Hassas ve Kapalı Sistemler",
        desc: "Hava ve ışık temasını en aza indirerek doğal özü ve taze aromayı koruyan modern üretim hatları.",
      },
      {
        title: "İdeal Dinlenme Alanları",
        desc: "Her mevsim aynı berraklığı ve tazeliği garanti eden yüksek hijyenli saklama altyapısı.",
      },
    ],
  },

  belgelerimiz: {
    eyebrow: "KURUMSAL • BELGELERİMİZ",
    title: "Uluslararası Standartlarda",
    titleHighlight: "Tescilli Güven",
    lead: "Sözümüzü yalnızca gönül bağıyla değil, dünyanın kabul ettiği bağımsız denetim ve kalite belgeleriyle de mühürlüyoruz.",
    bannerImage: "/images/story/stage-2-sikim.jpg",
    bannerAlt: "Uluslararası kalite ve güven sertifikaları",
    quote:
      "Gerçek güven, görünmeyen anlarda bile en yüksek standarda sadık kalabilmekle kazanılır. Her belgemiz, bu sadakatin resmi bir nişanesidir.",
    quoteCaption: "Kalite ve Akreditasyon Güvencemiz",
    chapters: [
      {
        heading: "Şeffaflığın ve Sorumluluğun Belgesi",
        body: [
          "Gıda üretimi, insan yaşamına doğrudan dokunan en hassas emanetlerden biridir. KARYAĞ olarak bu sorumluluğun bilinciyle, tesisimizin her noktasını ulusal ve uluslararası bağımsız kuruluşların düzenli denetimine açık tutuyoruz.",
          "Sahip olduğumuz kalite, gıda güvenliği ve çevre sertifikaları; yalnızca duvarlarımızı süsleyen belgeler değil, her sabah tesisimizin kapısından girerken yeniden verdiğimiz bir disiplin ve dürüstlük sözüdür. Yurt içinde ve uluslararası pazarlarda iş ortaklarımıza sunduğumuz her üründe, talep edilen tüm resmi analiz ve uygunluk dokümanlarını şeffaflıkla paylaşıyoruz.",
        ],
      },
    ],
    certificates: [
      {
        code: "ISO 9001",
        name: "Kalite Yönetim Sistemi",
        scope:
          "Yönetimden üretime ve müşteri memnuniyetine kadar her süreçte sürdürülebilir kalite disiplini.",
      },
      {
        code: "ISO 22000",
        name: "Gıda Güvenliği Yönetim Sistemi",
        scope:
          "Hasattan ambalaja ve sevkiyata kadar her aşamada güvenli, sağlıklı ve izlenebilir gıda zinciri.",
      },
      {
        code: "HACCP",
        name: "Tehlike Analizi ve Kritik Kontrol Noktaları",
        scope:
          "Üretimin en hassas evrelerinde riskleri oluşmadan önleyen uluslararası hijyen güvencesi.",
      },
      {
        code: "HELAL GIDA",
        name: "Helal Üretim ve Uygunluk Standardı",
        scope:
          "Tüketici hassasiyetlerine ve helal gıda kriterlerine eksiksiz uyum sağlayan temiz üretim süreci.",
      },
      {
        code: "SIFIR ATIK",
        name: "Çevre ve Döngüsel Geri Kazanım Uyumu",
        scope:
          "Doğal kaynakları koruyan, üretim yan ürünlerini yeniden ekonomiye ve enerjiye kazandıran çevre taahhüdü.",
      },
      {
        code: "IOOC UYUMU",
        name: "Uluslararası Zeytin Konseyi Standartları",
        scope:
          "Saflık, kalite ve duyusal kriterlerde küresel zeytinyağı kodeksine tam uygunluk.",
      },
    ],
    pillars: [
      {
        title: "Düzenli Bağımsız Denetim",
        desc: "Uluslararası geçerliliğe sahip akredite kurumlarca periyodik olarak doğrulanan süreçler.",
      },
      {
        title: "Küresel Pazarlara Hazır",
        desc: "İhracat ve uluslararası iş birliklerinin gerektirdiği tüm yasal ve teknik kriterlere tam uyum.",
      },
      {
        title: "Açık ve Şeffaf Paylaşım",
        desc: "İş ortaklarımızın ihtiyaç duyduğu tüm kalite ve uygunluk dokümanlarına kesintisiz erişim.",
      },
    ],
  },

  "cevre-ve-surdurulebilirlik": {
    eyebrow: "KURUMSAL • ÇEVRE & SÜRDÜRÜLEBİLİRLİK",
    title: "Sıfır Atıkla",
    titleHighlight: "Doğaya Saygı",
    lead: "Doğanın sözlüğünde 'atık' diye bir kelime yoktur; yalnızca bir formdan diğerine geçen sonsuz bir yaşam döngüsü vardır. KARYAĞ, işte bu döngünün sadık bir parçasıdır.",
    bannerImage: "/images/story/stage-4-sifir-atik.jpg",
    bannerAlt: "Sıfır atık ve doğaya saygılı sürdürülebilir üretim",
    quote:
      "Toprak bize cömertçe verirken hiçbir karşılık beklemez; bizim ona verebileceğimiz en güzel karşılık, tek bir zeytin tanesini bile ziyan etmeden yaşamı sürdürmektir.",
    quoteCaption: "Sonsuz Döngü • Sıfır Atık Felsefemiz",
    chapters: [
      {
        heading: "Logomuzdaki Sonsuzluk İşaretinin Anlamı",
        body: [
          "KARYAĞ’ın amblemindeki yeşil sonsuzluk çizgisi, yalnızca estetik bir sembol değil; toprağa verdiğimiz bir yemindir. Zeytin ağacı nasıl ki yüzyıllar boyunca yeniden filizlenip meyve veriyorsa, biz de üretimimizin her adımını doğaya geri dönen kesintisiz bir halka olarak kurguladık.",
          "Zeytinyağı sıkımı tamamlandığında hikâye bizim için bitmez; aksine ikinci ve en anlamlı bölümü başlar. Sıkım sonrasında geriye kalan doğal posa ve zeytin çekirdeği, hiçbir kimyasal kirliliğe yol açmadan özenle değerlendirilir. Çekirdeğin özündeki doğal enerji, yüksek verimli ve çevre dostu biyokütle yakıtına dönüşerek yeniden ısıya ve hayata karışır.",
        ],
      },
      {
        heading: "Yarının Çocuklarına Yeşil Bir Miras",
        body: [
          "Sürdürülebilirliği yalnızca bir trend değil, varoluşumuzun temel şartı olarak görüyoruz. Tesisimizde suyun her damlasını bilinçli kullanıyor, enerji verimliliğini artıran sistemlerle karbon ayak izimizi en aza indirmek için çalışıyoruz.",
          "İnanıyoruz ki zeytin ağaçlarının gölgesinde büyüyen bir marka, o gölgeyi sonsuza dek korumakla yükümlüdür. Bugün attığımız her çevre dostu adım, yarınların bereketli topraklarına bırakılmış sessiz bir teşekkürdür.",
        ],
      },
    ],
    pillars: [
      {
        title: "%100 Döngüsel Dönüşüm",
        desc: "Zeytinin yağından çekirdeğine ve posasına kadar her doğal parçasının değere dönüştürülmesi.",
      },
      {
        title: "Temiz ve Doğal Enerji",
        desc: "Fosil yakıtlara alternatif sunan, zeytin çekirdeği kaynaklı yenilenebilir biyokütle enerjisi.",
      },
      {
        title: "Su ve Toprak Hassasiyeti",
        desc: "Doğal kaynakları koruyan, gelecek nesillere temiz bir ekosistem bırakmayı hedefleyen sorumlu üretim.",
      },
    ],
  },
};

const facilityPhotos = [
  {
    src: "/images/story/stage-1-hasat.jpg",
    title: "Kilis Zeytin Havzası & Kabul",
  },
  {
    src: "/images/story/stage-2-sikim.jpg",
    title: "Kapalı Devre Kontinü Sıkım Hattı",
  },
  {
    src: "/images/story/stage-3-berraklik.jpg",
    title: "İleri Rafinasyon & Çelik Silolar",
  },
  {
    src: "/images/story/stage-4-sifir-atik.jpg",
    title: "Pirina Geri Kazanım & Biyokütle",
  },
];

export function generateStaticParams() {
  return sidebarLinks.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = corporateData[slug as CorporateSlug];
  if (!page) return { title: "Kurumsal" };

  return {
    title: sidebarLinks.find((s) => s.slug === slug)?.label ?? "Kurumsal",
    description: page.lead,
  };
}

export default async function CorporateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = corporateData[slug as CorporateSlug];

  if (!content) {
    notFound();
  }

  const currentLabel =
    sidebarLinks.find((s) => s.slug === slug)?.label ?? "Kurumsal";

  return (
    <div className="bg-karyag-ivory min-h-screen">
      {/* 1. FLU ARKA PLAN RESİMLİ, FERAH EDİTORYAL BANNER */}
      <section className="relative overflow-hidden border-b border-karyag-gold/30 py-20 sm:py-28 px-4 sm:px-8 bg-[#F6F3EC]">
        <img
          src={content.bannerImage}
          alt={content.bannerAlt}
          className="absolute inset-0 w-full h-full object-cover blur-[4px] scale-110 opacity-45 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFBFA]/96 via-[#FCFBFA]/84 to-[#F6F3EC]/50 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FCFBFA] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1380px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-karyag-steel-muted mb-6 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-karyag-gold/25">
            <Link href="/" className="hover:text-karyag-gold-dark transition">
              Anasayfa
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-karyag-gold" />
            <span>Kurumsal</span>
            <ChevronRight className="w-3.5 h-3.5 text-karyag-gold" />
            <span className="text-karyag-steel-dark font-semibold">
              {currentLabel}
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-karyag-gold-dark">
              <OliveDropIcon className="w-3.5 h-3.5 text-karyag-gold" />
              <span>{content.eyebrow}</span>
            </div>

            <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-[54px] text-karyag-steel-dark leading-[1.12]">
              {content.title}{" "}
              <span className="italic text-karyag-gold-dark font-medium block sm:inline">
                {content.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-karyag-steel/85 leading-relaxed max-w-2xl font-normal">
              {content.lead}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ANA İÇERİK ALANI + SOL KURUMSAL MENÜ */}
      <section className="py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sol Menü */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 space-y-5">
            <div className="bg-white rounded-2xl border border-stone-200/80 p-3 shadow-2xs">
              <div className="px-3 py-2.5 mb-1.5 border-b border-stone-100 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                  Kurumsal Sayfalar
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-karyag-green" />
              </div>
              <nav className="space-y-1">
                {sidebarLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.slug === slug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/kurumsal/${item.slug}`}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-xs sm:text-[13px] font-semibold transition-all ${
                        isActive
                          ? "bg-karyag-gold-light text-karyag-steel-dark border border-karyag-gold/45 shadow-2xs"
                          : "text-karyag-steel-muted hover:bg-karyag-ivory hover:text-karyag-steel-dark"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive
                            ? "text-karyag-green"
                            : "text-karyag-gold-dark"
                        }`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="hidden lg:block rounded-2xl bg-karyag-cream/80 border border-karyag-gold/25 p-5 space-y-2.5">
              <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-green">
                POLATELİ / KİLİS
              </div>
              <p className="font-serif italic text-sm text-karyag-steel-dark leading-relaxed">
                “Toprağın bereketine duyduğumuz saygı, her damlada yaşayan
                değişmez imzamızdır.”
              </p>
            </div>
          </aside>

          {/* Sağ Uzun Hikâye & İçerik Akışı */}
          <div className="lg:col-span-9 space-y-10">
            <article className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-stone-200/80 shadow-2xs space-y-10">
              {/* Duygusal Alıntı Bloğu */}
              <blockquote className="relative bg-karyag-ivory rounded-2xl p-6 sm:p-8 border-l-4 border-karyag-gold">
                <Quote className="w-7 h-7 text-karyag-gold/40 mb-3" />
                <p className="font-serif italic text-lg sm:text-xl text-karyag-steel-dark leading-relaxed">
                  “{content.quote}”
                </p>
                <footer className="mt-3 text-[11px] font-bold tracking-[0.18em] uppercase text-karyag-gold-dark">
                  — {content.quoteCaption}
                </footer>
              </blockquote>

              {/* Hikâye Bölümleri */}
              <div className="space-y-10">
                {content.chapters.map((chapter, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-[1.5px] bg-karyag-gold shrink-0" />
                      <h2 className="font-serif font-semibold text-2xl sm:text-[26px] text-karyag-steel-dark">
                        {chapter.heading}
                      </h2>
                    </div>
                    <div className="space-y-4 text-sm sm:text-[15.5px] text-karyag-steel/90 leading-[1.85]">
                      {chapter.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tarihçe Sayfası İçin Özel Zaman Tüneli */}
              {content.timeline && (
                <div className="pt-8 mt-8 border-t border-stone-100 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                      ZAMANIN İZİNDE
                    </span>
                    <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
                      Yolculuğumuzun Dönüm Noktaları
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.timeline.map((step) => (
                      <div
                        key={step.year}
                        className="rounded-2xl bg-karyag-ivory p-6 border border-karyag-gold/30 hover:border-karyag-gold transition-colors space-y-2.5"
                      >
                        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-karyag-gold-dark bg-white px-3 py-1 rounded-full border border-karyag-gold/35">
                          {step.year}
                        </span>
                        <h3 className="font-serif font-semibold text-xl text-karyag-steel-dark pt-1">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-karyag-steel-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Belgelerimiz Sayfası İçin Lightbox Sertifika Galerisi */}
              {content.certificates && (
                <div className="pt-8 mt-8 border-t border-stone-100 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                      RESMİ AKREDİTASYONLAR
                    </span>
                    <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
                      Kalite & Güvence Sertifikalarımız
                    </h2>
                  </div>

                  <CertificateGallery certificates={content.certificates} />
                </div>
              )}

              {/* Tesisimiz Sayfası İçin Görsel Akış Galerisi */}
              {slug === "tesisimiz" && (
                <div className="pt-8 mt-8 border-t border-stone-100 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                      ÜRETİM ALANLARIMIZDAN KARELER
                    </span>
                    <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-karyag-steel-dark">
                      Entegre Tesis Akışımız
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {facilityPhotos.map((photo) => (
                      <figure
                        key={photo.src}
                        className="group rounded-2xl overflow-hidden border border-stone-200/80 bg-karyag-ivory"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={photo.src}
                            alt={photo.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <figcaption className="px-4 py-3 text-xs font-semibold text-karyag-steel-dark bg-white border-t border-stone-100">
                          {photo.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* 3 Değer Kartı */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-karyag-gold hover:-translate-y-1 transition-all duration-300 space-y-2.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-karyag-green" />
                  <h3 className="font-serif font-semibold text-lg text-karyag-steel-dark">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-karyag-steel-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Alt Yönlendirme */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-karyag-gold/35 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-karyag-gold-dark">
                  YAKINDAN TANIŞALIM
                </span>
                <h3 className="font-serif font-semibold text-2xl text-karyag-steel-dark mt-1">
                  Hikâyemizin Bir Parçası Olun
                </h3>
                <p className="text-xs sm:text-sm text-karyag-steel-muted mt-1.5 max-w-xl">
                  Markalarımız, üretim yolculuğumuz veya iş birliği fırsatları
                  hakkında konuşmak için bizimle dilediğiniz zaman iletişime
                  geçebilirsiniz.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-karyag-green hover:bg-karyag-green-dark text-white text-xs font-semibold uppercase tracking-wider px-7 py-4 rounded-full shadow-sm transition shrink-0 group"
              >
                <span>İletişime Geç</span>
                <ArrowRight className="w-4 h-4 text-karyag-gold-light group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}