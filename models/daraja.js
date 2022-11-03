const mongoose = require('mongoose')

const DarajaSchema = mongoose.Schema({
    title: String, 
    body: String, 
    photo: String,
    daraja:{
        type: String
        // enum: ["Bakalavr", "Magistr", "Doktarantura"],
    },
    oqishTuri:{
        type: String
        // enum: ["Kunduzgi", "Sirtqi"],
    },
    yili:{
        type: Number
        // enum: [2019, 2020, 2021, 2022],
    },
    Fakultet: {
        type: String
        // enum: ["Yoqilg’i va organik birikmalar kimyoviy texnologiyasi fakulteti","Noorganik moddalar kimyoviy texnologiyalar  fakulteti ",
        //        "Oziq-ovqat mahsulotlari texnologiyasi fakulteti", "Menejment va kasb ta’limi fakulteti", "Vinochilik texnologiyasi va sanoat uzumchiligi fakulteti"],
    },
    Kafedra2019: {
        type: String
        // enum: [/**Yoqilg’i va organik birikmalar kimyoviy texnologiyasi fakulteti =>*/ "Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi","Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi",
        //    "Asosiy organik sintez texnologiyasi kafedrasi",
        //   /**  Noorganik moddalar  kimyoviy texnologiyalar  fakulteti => */ "Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi", "Noorganik moddalar kimyoviy texnologiyasi kafedrasi",
        //   "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi", "Texnologik mashina va jihozlar kafedrasi",
        //   /** Oziq-ovqat mahsulotlari texnologiyasi fakulteti =>*/ "Oziq-ovqat mahsulotlari texnologiyasi kafedrasi", "Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi",
        //   "Muxandislik grafikasi va mexanika asoslari kafedrasi", "Informatika, avtomatlashtirish va boshqaruv kafedrasi",
        //   /**Menejment va kasb ta’limi fakulteti =>*/ "Sanoat iqtisodiyoti va menejmenti kafedrasi","Sifat menejmenti va mahsulotlar havfsizligi kafedrasi",
        //   /**Vinochilik texnologiyasi va sanoat uzumchiligi =>*/ "Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi","Biotexnologiya kafedrasi","Sanoat ekologiyasi kafedrasi", "None"
        // ],
    },
    Kafedra2020: {
        type: String
        // enum: [/**Yoqilg’i va organik birikmalar kimyoviy texnologiyasi fakulteti =>*/ "Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi","Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi",
        //    "Asosiy organik sintez texnologiyasi kafedrasi",
        //   /**  Noorganik moddalar  kimyoviy texnologiyalar  fakulteti => */ "Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi", "Noorganik moddalar kimyoviy texnologiyasi kafedrasi",
        //   "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi", "Texnologik mashina va jihozlar kafedrasi",
        //   /** Oziq-ovqat mahsulotlari texnologiyasi fakulteti =>*/ "Oziq-ovqat mahsulotlari texnologiyasi kafedrasi", "Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi",
        //   "Muxandislik grafikasi va mexanika asoslari kafedrasi", "Informatika, avtomatlashtirish va boshqaruv kafedrasi",
        //   /**Menejment va kasb ta’limi fakulteti =>*/ "Sanoat iqtisodiyoti va menejmenti","Sifat menejmenti va mahsulotlar havfsizligi kafedrasi",
        //   /**Vinochilik texnologiyasi va sanoat uzumchiligi =>*/ "Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi","Biotexnologiya kafedrasi","Sanoat ekologiyasi kafedrasi", "None"
        // ],
    },
    Kafedra2021: {
        type: String
        // enum: [/**Yoqilg’i va organik birikmalar kimyoviy texnologiyasi fakulteti =>*/ "Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi","Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi",
        //    "Asosiy organik sintez texnologiyasi kafedrasi",
        //   /**  Noorganik moddalar  kimyoviy texnologiyalar  fakulteti => */ "Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi", "Noorganik moddalar kimyoviy texnologiyasi kafedrasi",
        //   "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi", "Texnologik mashina va jihozlar kafedrasi",
        //   /** Oziq-ovqat mahsulotlari texnologiyasi fakulteti =>*/ "Oziq-ovqat mahsulotlari texnologiyasi kafedrasi", "Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi",
        //    "Informatika, avtomatlashtirish va boshqaruv kafedrasi",
        //   /**Menejment va kasb ta’limi fakulteti =>*/ "Sanoat iqtisodiyoti va menejmenti kafedrasi","Sifat menejmenti va mahsulotlar havfsizligi kafedrasi",
        //   /**Vinochilik texnologiyasi va sanoat uzumchiligi =>*/ "Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi","Biotexnologiya kafedrasi","Sanoat ekologiyasi kafedrasi", "None"
        // ],
    },
    Kafedra2022: {
        type: String
        // enum: [/**Yoqilg’i va organik birikmalar kimyoviy texnologiyasi fakulteti =>*/ "Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi","Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi",
        //    "Asosiy organik sintez texnologiyasi kafedrasi","Gazni qayta ishlash kimyoviy texnologiyasi kafedrasi","Fizika va elektrotexnika kafedrasi",
        //   /**  Noorganik moddalar  kimyoviy texnologiyalar  fakulteti => */ "Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi", "Noorganik moddalar kimyoviy texnologiyasi kafedrasi",
        //   "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi", "Texnologik mashina va jihozlar kafedrasi",
        //   /** Oziq-ovqat mahsulotlari texnologiyasi fakulteti =>*/ "Oziq-ovqat mahsulotlari texnologiyasi kafedrasi", "Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi",
        //    "Informatika, avtomatlashtirish va boshqaruv kafedrasi",
        //   /**Menejment va kasb ta’limi fakulteti =>*/ "Sanoat iqtisodiyoti va menejmenti kafedrasi","Sifat menejmenti va mahsulotlar havfsizligi kafedrasi","O’zbek tili va professional ta’lim kafedrasi",
        //   /**Vinochilik texnologiyasi va sanoat uzumchiligi =>*/ "Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi","Biotexnologiya kafedrasi","Sanoat ekologiyasi kafedrasi", "None"
        // ],
    },
    yonalish2019:{
        type: String
        // enum: [
        //     /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi", "5321400- Neft-gazkimyo sanoati texnologiyasi","5322200- Gazlarni chuqur qayta ishlash texnologiyasi",
        //     /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi kunduzgi*/"5320300- Texnologik mashinalar va jihozlar (sellyuloza-qog‘oz texnologiyasi)",".5314500- Yog‘ochni qayta ishlash sanoati mashinalari va jihozlari",
        //     /** Asosiy organik sintez texnologiyasi kafedrasi kunduzgi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
        //     /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi kunduzgi*/ "5320400 -Kimyoviy texnologiya (yuqori molekulali birikmalar)","5322300-Plastmassani qayta ishlash texnologiyasi", "5321800-Rezinotexnik mahsulotlari ishlab chiqarish texnologiyasi",
        //     /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
        //     /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi*/ "5320400-Kimyoviy texnologiya (qurilish materiallari)","5320400-Kimyoviy texnologiya (elektrokimyo)","5320400-Kimyoviy texnologiya (kamyob, tarqoq va nodir metallar)",
        //     /**Texnologik mashina va jihozlar kafedrasi kunduzgi*/ "5320300-Texnologik mashinalar va jihozlar (kimyo sanoati)","5314700-Oziq-ovqat sanoati mashina va jihozlari",
        //     /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi kunduzgi*/"5321000-Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (don mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (non, makaron, qandolatchilik Mahsulotlari)","5322400-Yog‘lar, efir moylari va parfyumeriya-kosmetika mahsulotlari texnologiyasi",
        //     /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi  kunduzgi*/"5321000-Oziq-ovqat texnologiyasi (gо‘sht-sut Mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)","5322700-Konservalash texnologiyasi",
        //             "5322800-Funksional ovqatlanish va bolalar mahsulotlari texnologiyasi","5610100-Xizmatlar soxasi (ovqatlanishni tashkil etish va servis)",
        //     /**Informatika, avtomatlashtirish va boshqaruv kafedrasi kunduzgi*/ "5311000-Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (kimyo, neft-kimyo va oziq-ovqat sanoati)",
        //     /**Sanoat iqtisodiyoti va menejmenti kafedrasi kunduzgi*/ "5230200-Menejment (kimyo va oziq-ovqat mahsulotlarini ishlab chiqarish)",
        //     /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi kunduzgi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
        //     /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi kunduzgi*/ "5322600-Vinochilik texnologiyasi","5322500-Bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi",
        //     /**Biotexnologiya kafedrasi kunduzgi*/ "5320500-Biotexnologiya (oziq-ovqat,ozuqa,kimyo va qishloq xо‘jaligi)","Energetika (bioenergetika)",
        //     /**Sanoat ekologiyasi kafedrasi kunduzgi*/ "5630100-Ekologiya va atrof-muhit muhofazasi (kimyo va oziq-ovqat sanoati)","5640200-Mehnat muhofazasi va texnika xavfsizligi","None"
        // ],
    },
    SirtqiYonalish2019:{
        type: String
                    // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi sirtqi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi",
                    // /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi sirtqi */ "5320300- Texnologik mashinalar va jihozlar (sellyuloza-qog‘oz texnologiyasi)",
                    // /**Asosiy organik sintez texnologiyasi kafedrasi sirtqi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
                    // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi sirtqi*/ "5320400 -Kimyoviy texnologiya (yuqori molekulali birikmalar)",
                    // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi sirtqi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
                    // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi sirtqi*/ "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi",
                    // /**Texnologik mashina va jihozlar kafedrasi sirtqi*/ "5320300-Texnologik mashinalar va jihozlar (kimyo sanoati)",
                    // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)",
                    // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi sirtqi*/ "Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi",
                    // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi sirtqi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
    },
    yonalish2020:{
        type: String
        // enum: [
        //     /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi", "5321400- Neft-gazkimyo sanoati texnologiyasi","5322200- Gazlarni chuqur qayta ishlash texnologiyasi",
        //     /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi kunduzgi*/"5320300- Texnologik mashinalar va jihozlar (mebel va yog‘ochsozlik sanoati)","5320300- Texnologik mashinalar va jihozlar (sellyuloza –qog‘oz  sanoati)",
        //     /** Asosiy organik sintez texnologiyasi kafedrasi kunduzgi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
        //     /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi kunduzgi*/ "5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
        //     /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
        //     /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi*/ "5320400-Kimyoviy texnologiya (qurilish materiallari)","5320400-Kimyoviy texnologiya (elektrokimyo)","5320400-Kimyoviy texnologiya (kamyob, tarqoq va nodir metallar)",
        //     /**Texnologik mashina va jihozlar kafedrasi kunduzgi*/ "5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
        //     /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi kunduzgi*/"Oziq-ovqat texnologiyasi (non,makaron va qandolat mahsulotlari)","Oziq-ovqat texnologiyasi (don mahsulotlari)","Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)","Yog‘lar, efir moylari va parfyumeriya-kosmetika mahsulotlari texnologiyasi",
        //     /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi  kunduzgi*/"5321000-Oziq-ovqat texnologiyasi (gо‘sht-sut mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)","5322700-Konservalash texnologiyasi",
        //             "5322800-Funksional ovqatlanish va bolalar mahsulotlari texnologiyasi",
        //     /**Informatika, avtomatlashtirish va boshqaruv kafedrasi kunduzgi*/ "5311000-Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (kimyo, neft-kimyo va oziq-ovqat sanoati)",
        //     /**Sanoat iqtisodiyoti va menejmenti kafedrasi kunduzgi*/ "5230200-Menejment (kimyo va oziq-ovqat mahsulotlarini ishlab chiqarish)",
        //     /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi kunduzgi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
        //     /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi kunduzgi*/ "5322500- Vinochilik texnologiyasi, bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi",
        //     /**Biotexnologiya kafedrasi kunduzgi*/ "5320500-Biotexnologiya (oziq-ovqat,ozuqa,kimyo va qishloq xо‘jaligi)","5310100- Energetika (bioenergetika)",
        //     /**Sanoat ekologiyasi kafedrasi kunduzgi*/ "5630100-Ekologiya va atrof-muhit muhofazasi (kimyo va oziq-ovqat sanoati)","5640200-Mehnat muhofazasi va texnika xavfsizligi","None"
        // ],
    },
    yonalishSirtqi2020:{
        type: String
            // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi sirtqi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi",
            // /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi sirtqi */ "5320300- Texnologik mashinalar va jihozlar (mebel va yog‘ochsozlik sanoati)","5320300- Texnologik mashinalar va jihozlar (sellyuloza –qog‘oz  sanoati)",
            // /** Asosiy organik sintez texnologiyasi kafedrasi sirtqi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
            // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi sirtqi*/ "5320400- Kimyoviy texnologiya (yuqori molekulali birikmalar)",
            // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi sirtqi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
            // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi sirtqi*/ "Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi",
            // /**Texnologik mashina va jihozlar kafedrasi sirtqi*/"5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
            // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)","5321000-Oziq-ovqat texnologiyasi(don mahsulotlari)",
            // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)",
            // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi sirtqi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",

    },
    yonalish2021:{
        type: String
        // enum: [
        //     /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi kunduzgi*/ "60721100- Neft  va  neft-gazni  qayta  ishlash  texnologiyasi", "60720900- Neft-gazkimyo  sanoati  texnologiyasi","60721000- Gazni  chuqur  qayta  ishlash  texnologiyasi",
        //     /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi kunduzgi*/"5320300- Texnologik mashinalar va jihozlar (mebel va yog‘ochsozlik sanoati)","5320300- Texnologik mashinalar va jihozlar (sellyuloza –qog‘oz  sanoati)",
        //     /** Asosiy organik sintez texnologiyasi kafedrasi kunduzgi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
        //     /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi kunduzgi*/ "60710100 -Kimyoviy texnologiya (yuqori molekulali birikmalar)","60710100- Kimyoviy  texnologiya (rezina- texnika  buyumlar)",
        //     /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
        //     /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi*/ "5320400-Kimyoviy texnologiya (kamyob, tarqoq va nodir metallar)","60710100 -Kimyoviy texnologiya (silikat  materiallar)",
        //     /**Texnologik mashina va jihozlar kafedrasi kunduzgi*/ "5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
        //     /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi kunduzgi*/"Oziq-ovqat texnologiyasi (non,makaron va qandolat mahsulotlari)","Oziq-ovqat texnologiyasi (don mahsulotlari)","Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)",
        //     /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi  kunduzgi*/"5321000-Oziq-ovqat texnologiyasi (gо‘sht-sut mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)","5322700-Konservalash texnologiyasi",
        //             "5322800-Funksional ovqatlanish va bolalar mahsulotlari texnologiyasi",
        //     /**Informatika, avtomatlashtirish va boshqaruv kafedrasi kunduzgi*/ "5311000-Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (kimyo, neft-kimyo va oziq-ovqat sanoati)",
        //     /**Sanoat iqtisodiyoti va menejmenti kafedrasi kunduzgi*/ "60411200- Menejment  (kimyo va  oziq-ovqat  sanoati)",
        //     /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi kunduzgi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
        //     /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi kunduzgi*/ "5322500- Vinochilik texnologiyasi, bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi",
        //     /**Biotexnologiya kafedrasi kunduzgi*/ "5320500-Biotexnologiya (oziq-ovqat,ozuqa,kimyo va qishloq xо‘jaligi)","5310100- Energetika (bioenergetika)",
        //     /**Sanoat ekologiyasi kafedrasi kunduzgi*/ "5630100-Ekologiya va atrof-muhit muhofazasi (kimyo va oziq-ovqat sanoati)","61020200- Mehnat  muhofazasi  va  texnika  xavfsizligi (kimyo va  oziq-ovqat  sanoati)",
            
        // ],
    },
    yonalishSirtqi2021:{
        type: String
            // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi sirtqi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi",
            // /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi sirtqi */ "5320300- Texnologik mashinalar va jihozlar (mebel va yog‘ochsozlik sanoati)","5320300- Texnologik mashinalar va jihozlar (sellyuloza –qog‘oz  sanoati)",
            // /** Asosiy organik sintez texnologiyasi kafedrasi sirtqi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
            // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi sirtqi*/ "60710100 -Kimyoviy texnologiya(yuqori molekulali birikmalar)",
            // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi sirtqi*/ "5320400	Kimyoviy texnologiya (organik moddalar)",
            // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi sirtqi*/ "60710100 -Kimyoviy texnologiya(qurilish materiallari)","60710100-Kimyoviy texnologiya elektrokimyoviy ishlab chiqarish",
            // /**Texnologik mashina va jihozlar kafedrasi sirtqi*/"5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
            // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (yog‘-moy mahsulotlari)","5321000-Oziq-ovqat texnologiyasi(don mahsulotlari)",
            // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)",
            // /**Biotexnologiya kafedrasi sirtqi*/ "61010200-Aholi va turistlarning ovqatlanishini tashkil etish servisi ",
            // /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi sirtqi*/"61010200-Aholi va turistlarning ovqatlanishini tashkil etish servisi ",
            // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi sirtqi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",

    },
    yonalishMagister2021:{
        type: String
            // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi magisratura kunduzgi*/"70721102- Neft  va  gazni  qayta  ishlash  va kimyoviy  texnologiyasi","70721101- Neft  va  gazni  qayta  ishlash  jarayonlari  va  apparatlari","70720901- Kimyoviy  va  neft-gazkimyoviy  texnologiyalar",
            // /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi magistratura */ " 70720705- Selyuloza-qog‘oz  ishlab  chiqarish  texnologiyasi  va   jarayonlari","70720706- Yog‘ochga  ishlov  berish  texnologiyasi  va  yog‘ochshunoslik", 
            // /** Asosiy organik sintez texnologiyasi kafedrasi magistratura*/"70710101- Kimyoviy  texnologiya  ( organik  moddalar)","70710102- Katalizatorlar  va  adsorbentlar  texnologiyasi",
            // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi magistratura*/"70710103- Yuqori  molekulali  birikmalar  kimyoviy  texnologiyasi  (polimerlar)","70710103- Yuqori  molekulali  birikmalar  kimyoviy  texnologiyasi   (rezina-texnika  buyumlari)",
            // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi magistratura*/"70710101- Kimyoviy  texnologiya  (noorganik  moddalar)","70710101- Kimyoviy  texnologiya (mineral о‘g‘itlar)",
            // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi magistratura*/ "70710101- Kimyoviy  texnologiya  (silikat  va  qiyin  suyuqlanuvchan nometall  materiallar)","70710101- Kimyoviy  texnologiya (nodir  va  kamyob  metallar)",
            // /**Texnologik mashina va jihozlar kafedrasi kunduzgi magistraura*/"70720704- Kimyoviy sanoat  va  qurilish  materiallari  korxonalarining  mashinalari  xamda  apparatlari"," 70710105- Kimyoviy  texnologiya  jarayonlari  va  apparatlari  (noorganik  va  organik  moddalar  ishlab  chiqarish)","70720710- Oziq-ovqat  sanoati  mashinalari  va  agregatlari",
            // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi magisratura*/ "70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi (yog‘-moy  mahsulotlari)","70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (don  Mahsulotlari)", 
            // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi magistratura*/"70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (konservalangan oziq-ovqat, gо‘sht,  sut  va baliq  mahsulotlari)","70720103- Oziq –ovqat   xafsizligi",
            // /**Informatika, avtomatlashtirish va boshqaruv kafedrasi magistratura*/"70711401- Texnologik  jarayonlar  va  ishlab  chiqarishni   avtomatlashtirish  (kimyo  va oziq-  ovqat  sanoati)",
            // /**Sanoat iqtisodiyoti va menejmenti kafedrasi magisratura*/ "70411201- Menejment (kimyo va  oziq-ovqat  sanoati)",
            // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi magistratura*/"70711301- Mahsulotlar xavfsizligi  va  ularning  sertifikatsiyasi (kimyo va oziq-ovqat)"," 70711302- Metrologiya,   standartlashtirish  va  mahsulot  sifatni  boshqarish (kimyo  va  oziq-ovqat)",
            // /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi magistratura*/"70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (solod,pivo  va  alkogolsiz  ichimliklar)","70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (vino  va spirt)",
            // /**Biotexnologiya kafedrasi magistratura*/"70710201- Biotexnologiya (oziq-ovqat, oziqa, kimyoviy  Mahsulotlar  va  qishloq  xо‘jaligiuchun  biopreparatlar)",
            // /**Sanoat ekologiyasi kafedrasi magistratura*/"70710401- Atrof- muxit  muxofazasi  (kimyo  va  oziq- ovqat  sanoati)","None",
    },
    yonalish2022:{
        type: String
        // enum: [
        //     /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi kunduzgi*/ "60721100- Neft  va  neft-gazni  qayta  ishlash  texnologiyasi",
        //     /**Gazni qayta ishlash kimyoviy texnologiyasi kafedrasi kunduzgi */"60720900 -Neft-gazkimyo  sanoati  texnologiyasi","60721000-Gazni  chuqur  qayta  ishlash  texnologiyasi",
        //     /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi kunduzgi*/" 60720700-Texnologik  mashinalar  va  jihozlar  ( mebel  va yog‘ochsozlik  sanoati)","60710100	-Kimyoviy  texnologiya (sellyuloza- qog‘oz ishlab chiqarish kimyoviy texnologiyasi)",
        //     /**Asosiy organik sintez texnologiyasi kafedrasi kunduzgi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
        //     /**Fizika va elektrotexnika kafedrasi kunduzgi*/"60710500 –Energetika(kimyo va oziq ovqat sanoati)",
        //     /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi kunduzgi*/ "60710100 -Kimyoviy texnologiya (yuqori molekulali birikmalar)","60710100- Kimyoviy  texnologiya (rezina- texnika  buyumlar)",
        //     /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi kunduzgi*/ "5320400	Kimyoviy texnologiya (noorganik moddalar)",
        //     /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi kunduzgi*/ "5320400-Kimyoviy texnologiya (kamyob, tarqoq va nodir metallar)","60710100 -Kimyoviy texnologiya (silikat  materiallar)",
        //     "60710100-Kimyoviy  texnologiya (qurilish  materiallari)","60710100-Kimyoviy  texnologiya   (elektrokimyoviy  ishlab  chiqarish)", 
        //     "60710100-Kimyoviy  texnologiya (qurilish  materiallari)","60710100-Kimyoviy  texnologiya   (elektrokimyoviy  ishlab  chiqarish)", 
        //     /**Texnologik mashina va jihozlar kafedrasi kunduzgi*/ "5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)","5320300- Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)",
        //     /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi kunduzgi*/"60720100-Oziq-ovqat  texnologiyasi  (oziq-ovqat Mahsulotlari texnologiyasi)","60720200	-Yog‘lar,  efir  moylari  va  parfyumeriya-kosmetika  mahsulotlari  texnologiyasi",
        //     /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi  kunduzgi*/"5321000-Oziq-ovqat texnologiyasi (gо‘sht-sut mahsulotlari)","5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)","5322700-Konservalash texnologiyasi",
        //             "5322800-Funksional ovqatlanish va bolalar mahsulotlari texnologiyasi",
        //     /**Informatika, avtomatlashtirish va boshqaruv kafedrasi kunduzgi*/ "5311000-Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (kimyo, neft-kimyo va oziq-ovqat sanoati)",
        //     /**Sanoat iqtisodiyoti va menejmenti kafedrasi kunduzgi*/ "60411200- Menejment  (kimyo va  oziq-ovqat  sanoati)",
        //     /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi kunduzgi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
        //     /**O’zbek tili va professional ta’lim kafedrasi kunduzgi*/"60112400	-Professional ta’lim:kimyoviy texnologiya",
        //     /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi kunduzgi*/ "5322500- Vinochilik texnologiyasi, bijg‘ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi","61010200-Aholi  va  turistlarning  ovqatlanishini  tashkil  yetish servisi",
        //     /**Biotexnologiya kafedrasi kunduzgi*/ "60710200 -Biotexnologiya (oziq-ovqat, oziqa, kimyoviy  Mahsulotlar  va  qishloq  xо‘jaligi)",
        //     /**Sanoat ekologiyasi kafedrasi kunduzgi*/ "5630100-Ekologiya va atrof-muhit muhofazasi (kimyo va oziq-ovqat sanoati)","61020200- Mehnat  muhofazasi  va  texnika  xavfsizligi (kimyo va  oziq-ovqat  sanoati)",
        //        ],
    },
    yonalishSirtqi2022:{
        type: String
            // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi sirtqi*/ "5321300- Neft va neft-gazni qayta ishlash texnologiyasi",
            // /**Gazni qayta ishlash kimyoviy texnologiyasi kafedrasi sirtqi */"60720900 -Neft-gazkimyo  sanoati  texnologiyasi","60721000-Gazni  chuqur  qayta  ishlash  texnologiyasi",
            // /**Asosiy organik sintez texnologiyasi kafedrasi sirtqi*/ "5320400- Kimyoviy texnologiya (organik moddalar)",
            // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi sirtqi*/ "60710100 -Kimyoviy texnologiya(yuqori molekulali birikmalar)","60710100- Kimyoviy  texnologiya (rezina- texnika  buyumlar)",
            // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi sirtqi*/ "5320400  Kimyoviy texnologiya (noorganik moddalar)",
            // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi sirtqi*/ "5320400-Kimyoviy texnologiya (kamyob, tarqoq va nodir metallar)","60710100 -Kimyoviy texnologiya (silikat  materiallar)",
            // /**Texnologik mashina va jihozlar kafedrasi sirtqi*/"5320300- Texnologik mashinalar va jihozlar (kimyo sanoati)",
            // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi sirtqi*/ "60720100	-Oziq-ovqat  texnologiyasi  (oziq-ovqat Mahsulotlari texnologiyasi)",
            // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi sirtqi*/ "5321000-Oziq-ovqat texnologiyasi (oziq-ovqat xavfsizligi)",
            // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi sirtqi*/ "5310900-Metrologiya, standartlashtirish va mahsulot sifati menejmenti (kimyo va oziq-ovqat)",
            // /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi sirtqi*/"61010200-Aholi va turistlarning ovqatlanishini tashkil etish servisi ",
            // /**O’zbek tili va professional ta’lim kafedrasi sirtqi*/"60112400 -Professional ta’lim:kimyoviy texnologiya",

    },
    yonalishMagister2022:{
        type: String
            // /**Neftni qayta ishlash kimyoviy texnologiyasi kafedrasi magisratura kunduzgi*/"70721102- Neft  va  gazni  qayta  ishlash  va kimyoviy  texnologiyasi",
            // /**Gazni qayta ishlash kimyoviy texnologiyasi kafedrasi magistratura*/"2.70721101-Neft  va  gazni  qayta  ishlash  jarayonlari  va  apparatlari","70720901-Kimyoviy  va  neft-gazkimyoviy  texnologiyalar",
            // /**Sellyuloza va yog’ochsozlik texnologiyasi kafedrasi magistratura */ " 70720705- Selyuloza-qog‘oz  ishlab  chiqarish  texnologiyasi  va   jarayonlari","70720706- Yog‘ochga  ishlov  berish  texnologiyasi  va  yog‘ochshunoslik", 
            // /**Asosiy organik sintez texnologiyasi kafedrasi magistratura*/"70710101- Kimyoviy  texnologiya  ( organik  moddalar)","70710102- Katalizatorlar  va  adsorbentlar  texnologiyasi",
            // /**Yuqori molekulali birikmalar va plastmassalar texnologiyasi kafedrasi magistratura*/"70710103- Yuqori  molekulali  birikmalar  kimyoviy  texnologiyasi  (polimerlar)","70710103- Yuqori  molekulali  birikmalar  kimyoviy  texnologiyasi   (rezina-texnika  buyumlari)",
            // /**Noorganik moddalar kimyoviy texnologiyasi kafedrasi magistratura*/"70710101- Kimyoviy  texnologiya  (noorganik  moddalar)","70710101- Kimyoviy  texnologiya (mineral о‘g‘itlar)",
            // /**Silikat materiallar va nodir, kamyob metallar texnologiyasi kafedrasi magistratura*/ "70710101- Kimyoviy  texnologiya  (silikat  va  qiyin  suyuqlanuvchan nometall  materiallar)","70710101- Kimyoviy  texnologiya (nodir  va  kamyob  metallar)",
            // /**Go’sht, sut va konserva mahsulotlar texnologiyasi kafedrasi magistratura*/"70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (konservalangan oziq-ovqat, gо‘sht,  sut  va baliq  mahsulotlari)","70720103- Oziq –ovqat   xafsizligi",
            // /**Enologiya va umumiy ovqatlanishni tashkil etish kafedrasi magistratura*/"70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (solod,pivo  va  alkogolsiz  ichimliklar)","70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (vino  va spirt)",
            // /**Sanoat ekologiyasi kafedrasi magistratura*/"70710401- Atrof- muxit  muxofazasi  (kimyo  va  oziq- ovqat  sanoati)","70720601	-Materialshunoslik va materallar texnologiyasi (tarmoqlar bо‘yicha)","None",
            // /**Biotexnologiya kafedrasi magistratura*/"70710201-Biotexnologiya (oziq-ovqat, oziqa, kimyoviy  Mahsulotlar  va  qishloq  xо‘jaligiuchun  biopreparatlar)",
            // /**Sanoat iqtisodiyoti va menejmenti kafedrasi magisratura*/ "70411201- Menejment (kimyo va  oziq-ovqat  sanoati)",
            // /**Sifat menejmenti va mahsulotlar havfsizligi kafedrasi magistratura*/"70711301- Mahsulotlar xavfsizligi  va  ularning  sertifikatsiyasi (kimyo va oziq-ovqat)"," 70711302- Metrologiya,   standartlashtirish  va  mahsulot  sifatni  boshqarish (kimyo  va  oziq-ovqat)",
            // /**O’zbek tili va professional ta’lim kafedrasi magistratura*/"70112401-Professional ta’lim nazariyasi va metodikasi (mutaxassisliklar bo’yicha)",
            // /**Informatika, avtomatlashtirish va boshqaruv kafedrasi magistratura*/"70711401- Texnologik  jarayonlar  va  ishlab  chiqarishni   avtomatlashtirish  (kimyo  va oziq-  ovqat  sanoati)",
            // /**Texnologik mashina va jihozlar kafedrasi kunduzgi magistraura*/"70720704- Kimyoviy sanoat  va  qurilish  materiallari  korxonalarining  mashinalari  xamda  apparatlari"," 70710105- Kimyoviy  texnologiya  jarayonlari  va  apparatlari  (noorganik  va  organik  moddalar  ishlab  chiqarish)","70720710- Oziq-ovqat  sanoati  mashinalari  va  agregatlari",
            // /**Oziq-ovqat mahsulotlari texnologiyasi kafedrasi magisratura*/ "70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi (yog‘-moy  mahsulotlari)","70720101- Oziq –ovqat  Mahsulotlarni  ishlab chiqarish  va qayta  ishlash  texnologiyasi  (don  Mahsulotlari)", 
    }

})



module.exports = mongoose.model('Daraja', DarajaSchema)