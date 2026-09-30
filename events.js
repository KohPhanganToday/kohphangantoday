/* ------------------------------------------------------------------
   Koh Phangan Today — the recurring week.

   EVENTS  = one entry per thing, with its own detail page (event.html?id=…)
   WEEKLY  = the rows that appear in a day's list. Several rows can point
             at the same event when it runs in stages (class, then social).

   d: weekday numbers, 0 = Sunday.   t: island time, 24h.
   img: leave empty until a real photo from the organiser arrives —
        the page renders a clean header on its own without one.
------------------------------------------------------------------- */

window.EVENTS = {

"muay-thai": {
  q: "Rittisak Muay Thai Gym Koh Phangan", img: "",
  he: { t:"שיעורי מוי תאי קבוצתיים", v:"שלוש חדרי כושר באי",
    about:[
      "שלושה מקומות באי מריצים שיעורים קבוצתיים באותן שעות בערך, שני עד שבת — בוקר וסוף אחר הצהריים. אפשר להגיע לשיעור בודד בלי להירשם מראש.",
      "השיעורים פתוחים לכל הרמות, כולל מי שלא נגע בכפפות מעולם. מביאים בגדי ספורט ובקבוק מים; כפפות בדרך כלל אפשר לשכור במקום."],
    sched:[
      "Rittisak — שני עד שבת, 08:00–10:00 ו-16:00–18:00",
      "Chaysee — שני עד שבת, 08:00–10:00 ו-16:00–18:00. ראשון: אימונים פרטיים בלבד",
      "Worawut — שני עד שבת, 08:30–10:00 ו-16:00–17:30"],
    facts:[
      ["מחיר ב-Worawut","300฿ לשיעור · 2,500฿ לעשרה · 5,000฿ לחודש"],
      ["אימון פרטי ב-Worawut","600฿ לשיעור · 5,000฿ לעשרה · בין 11:00 ל-15:00"],
      ["יצירת קשר ב-Worawut","וואטסאפ 064 923 9725 · אינסטגרם @worawutmuaythaigym"]],
    note:"המחירים של Rittisak ו-Chaysee עדיין לא אצלנו. שווה לשאול אותם ישירות." },
  en: { t:"Muay Thai group classes", v:"Three gyms on the island",
    about:[
      "Three gyms run group classes at roughly the same hours, Monday to Saturday — morning and late afternoon. You can walk into a single class without booking.",
      "Classes take all levels, including people who have never put gloves on. Bring sportswear and water; gloves can usually be rented on the spot."],
    sched:[
      "Rittisak — Monday to Saturday, 08:00–10:00 and 16:00–18:00",
      "Chaysee — Monday to Saturday, 08:00–10:00 and 16:00–18:00. Sunday: private training only",
      "Worawut — Monday to Saturday, 08:30–10:00 and 16:00–17:30"],
    facts:[
      ["Price at Worawut","300฿ per class · 2,500฿ for ten · 5,000฿ per month"],
      ["Private at Worawut","600฿ per lesson · 5,000฿ for ten · between 11:00 and 15:00"],
      ["Contact Worawut","WhatsApp 064 923 9725 · Instagram @worawutmuaythaigym"]],
    note:"We don't have prices for Rittisak and Chaysee yet. Worth asking them directly." }
},

"zipline": {
  q: "Phangan Zipline Koh Phangan", img: "",
  he: { t:"זיפליין", v:"Phangan Zipline",
    about:["מסלול זיפליין אחד ביום, בעשר בבוקר. מגיעים 10–15 דקות לפני ההתחלה."],
    sched:["כל יום, 10:00 — מושב אחד ביום"],
    facts:[["הזמנה","חובה להזמין לפחות יום מראש, והתשלום מתבצע לפני ההגעה"]],
    note:"המחיר עדיין לא אצלנו — תשאלו אותם כשאתם מזמינים." },
  en: { t:"Zipline session", v:"Phangan Zipline",
    about:["One zipline session a day, at ten in the morning. Arrive 10–15 minutes before the start."],
    sched:["Every day, 10:00 — one session per day"],
    facts:[["Booking","Must be booked at least a day ahead, and paid before you arrive"]],
    note:"We don't have the price yet — ask them when you book." }
},

"market-chaloklum": {
  q: "Chaloklum Sunday Market Koh Phangan", img: "",
  he: { t:"שוק ראשון בצ׳אלוקלום", v:"צ׳אלוקלום",
    about:["שוק שבועי בכפר הדייגים בצפון האי. דוכני אוכל, ירקות, בגדים ודברים מקומיים.",
           "מגיעים ברגל או בסקוטר. בשעות הראשונות הכי נוח, אחר כך נהיה צפוף."],
    sched:["כל יום ראשון, מ-17:00"], facts:[["כניסה","חופשית"]], note:"" },
  en: { t:"Sunday market", v:"Chaloklum",
    about:["A weekly market in the fishing village in the north of the island. Food stalls, vegetables, clothes and local things.",
           "Come on foot or by scooter. The first hours are the easiest; it gets crowded later."],
    sched:["Every Sunday, from 17:00"], facts:[["Entry","Free"]], note:"" }
},

"market-saturday": {
  q: "Thong Sala Walking Street Koh Phangan", img: "",
  he: { t:"שוק שבת בתונג סאלה", v:"תונג סאלה",
    about:["הרחוב המרכזי של תונג סאלה נסגר לתנועה ומתמלא בדוכני אוכל, פירות, בגדים ומלאכת יד. זה השוק הגדול של השבוע.",
           "בא לכאן כל האי, אז מוקדם עדיף. אוכל צמחוני וטבעוני יש בשפע."],
    sched:["כל שבת, מ-17:00"], facts:[["כניסה","חופשית"]],
    note:"השוק הזה מוכר גם בשם Walking Street וגם כשוק המקומי של תונג סאלה — למיטב ידיעתנו מדובר באותו אירוע." },
  en: { t:"Saturday market", v:"Thong Sala",
    about:["The main street of Thong Sala closes to traffic and fills with food stalls, fruit, clothes and craft. It is the big market of the week.",
           "The whole island comes, so earlier is easier. Vegetarian and vegan food is everywhere."],
    sched:["Every Saturday, from 17:00"], facts:[["Entry","Free"]],
    note:"This market is known both as Walking Street and as the Thong Sala local market — as far as we know they are the same thing." }
},

"saudade": {
  q: "SAUDADE Sunset Beach Bar Koh Phangan", img: "",
  he: { t:"סנסט עם DJ ומופע אש", v:"SAUDADE Sunset Beach Bar",
    about:["בר על החוף עם מיטות שיזוף, קוקטיילים ואוכל. בשלישי יש סט DJ לשקיעה ומופע אש.",
           "בשני יש שם גם ערב סרטים על החוף — הסרט נבחר באינסטגרם שלהם."],
    sched:["שלישי, 18:00–22:00 — סט DJ לשקיעה ומופע אש","שני — ערב סרטים על החוף"],
    facts:[], note:"השעה של ערב הסרטים בשני עדיין לא אצלנו." },
  en: { t:"Sunset DJ set and fire show", v:"SAUDADE Sunset Beach Bar",
    about:["A beach bar with sunbeds, cocktails and food. On Tuesday there is a sunset DJ set and a fire show.",
           "On Monday they also run a movie night on the beach — the film is chosen on their Instagram."],
    sched:["Tuesday, 18:00–22:00 — sunset DJ set and fire show","Monday — movie night on the beach"],
    facts:[], note:"We don't have the time for Monday's movie night yet." }
},

"drum-circle": {
  q: "Zen Beach Koh Phangan", img: "",
  he: { t:"מעגל תופים בזן ביץ׳", v:"זן ביץ׳",
    about:["מעגל תופים שבועי על החוף בשקיעה. אנשים מביאים תופים, מישהו מרקיד, ומי שבא בלי כלום פשוט יושב או רוקד.",
           "אין מארגן ואין כרטיסים — זה פשוט קורה כל שישי."],
    sched:["כל שישי, מ-18:00"], facts:[["כניסה","חופשית"]], note:"" },
  en: { t:"Drum circle", v:"Zen Beach",
    about:["A weekly drum circle on the beach at sunset. People bring drums, someone gets the rhythm going, and anyone who turns up empty-handed just sits or dances.",
           "There is no organiser and no tickets — it simply happens every Friday."],
    sched:["Every Friday, from 18:00"], facts:[["Entry","Free"]], note:"" }
},

"rasta-home": {
  q: "Rasta Home Koh Phangan", img: "",
  he: { t:"ערב מוזיקה ב-Rasta Home", v:"Rasta Home",
    about:["ערב מוזיקה שרץ עד השעות הקטנות, פעמיים בשבוע."],
    sched:["שני ושישי, 19:30 עד 02:00"], facts:[], note:"" },
  en: { t:"Night session at Rasta Home", v:"Rasta Home",
    about:["A music night that runs into the early hours, twice a week."],
    sched:["Monday and Friday, 19:30 until 02:00"], facts:[], note:"" }
},

"salsa-sunday": {
  q: "Love Space Koh Phangan", img: "",
  he: { t:"ערב סלסה", v:"Love Space (ex Sushi Love)",
    about:["ערב סלסה שבועי. מתחילים בשיעור למי שלא רקד מעולם, ואחר כך סושיאל פתוח לכולם.",
           "לא צריך להגיע עם בן או בת זוג — מחליפים בני זוג לאורך השיעור, וזה איך שלומדים."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"המחיר עדיין לא אצלנו." },
  en: { t:"Salsa night", v:"Love Space (ex Sushi Love)",
    about:["A weekly salsa night. It opens with a class for people who have never danced, then a social that is open to everyone.",
           "You don't need to bring a partner — partners rotate through the class, and that is how you learn."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"We don't have the price yet." }
},

"bachata-monday": {
  q: "Love Space Koh Phangan", img: "",
  he: { t:"ערב באצ׳טה", v:"Love Space (ex Sushi Love)",
    about:["ערב באצ׳טה שבועי — שיעור למתחילים ואחריו סושיאל.",
           "לא צריך בן או בת זוג."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"המחיר עדיין לא אצלנו." },
  en: { t:"Bachata night", v:"Love Space (ex Sushi Love)",
    about:["A weekly bachata night — a beginners class followed by a social.","You don't need to bring a partner."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"We don't have the price yet." }
},

"zouk-tuesday": {
  q: "Haad Yao Bayview Resort Koh Phangan", img: "",
  he: { t:"ערב זוק", v:"Haad Yao Bayview Resort",
    about:["ערב זוק שבועי בהאד יאו, בנוי בשלבים: שיעור למי שלא רקד זוק מעולם, ואחריו רמה ממשיכה וסושיאל.",
           "זוק הוא ריקוד זוגי ברזילאי, זורם ואיטי יותר מסלסה. לא צריך בן או בת זוג."],
    sched:["18:30 — שיעור למתחילים לגמרי","19:30 — מתקדמים וסושיאל"],
    facts:[["המקום","Haad Yao Bayview Resort, על החוף"]],
    note:"המחיר עדיין לא אצלנו." },
  en: { t:"Zouk night", v:"Haad Yao Bayview Resort",
    about:["A weekly zouk night at Haad Yao, built in stages: a class for people who have never danced zouk, then an improvers level and a social.",
           "Zouk is a Brazilian partner dance, slower and more flowing than salsa. You don't need to bring a partner."],
    sched:["18:30 — absolute beginners class","19:30 — improvers and social"],
    facts:[["Venue","Haad Yao Bayview Resort, on the beach"]],
    note:"We don't have the price yet." }
},

"kizomba-wednesday": {
  q: "Love Space Koh Phangan", img: "",
  he: { t:"ערב קיזומבה", v:"Love Space (ex Sushi Love)",
    about:["ערב קיזומבה שבועי. השיעור והסושיאל מתחילים יחד בשמונה.",
           "קיזומבה הוא ריקוד זוגי אנגולי, קרוב ואיטי. לא צריך בן או בת זוג."],
    sched:["20:00 — שיעור וסושיאל"],
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"המחיר עדיין לא אצלנו." },
  en: { t:"Kizomba night", v:"Love Space (ex Sushi Love)",
    about:["A weekly kizomba night. Class and social start together at eight.",
           "Kizomba is an Angolan partner dance, close and slow. You don't need to bring a partner."],
    sched:["20:00 — class and social"],
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"We don't have the price yet." }
},

"bachata-thursday": {
  q: "Love Space Koh Phangan", img: "",
  he: { t:"ערב באצ׳טה", v:"Love Space (ex Sushi Love)",
    about:["הערב השני של השבוע לבאצ׳טה — שיעור למתחילים ואחריו סושיאל."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"המחיר עדיין לא אצלנו." },
  en: { t:"Bachata night", v:"Love Space (ex Sushi Love)",
    about:["The week's second bachata night — a beginners class followed by a social."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"We don't have the price yet." }
}

};

/* k: the stage shown next to the title in a day's list */
window.WEEKLY = [
 {e:"muay-thai",          d:[1,2,3,4,5,6], t:"08:00", v:{he:"Rittisak · Chaysee", en:"Rittisak · Chaysee"}},
 {e:"muay-thai",          d:[1,2,3,4,5,6], t:"08:30", v:{he:"Worawut", en:"Worawut"}},
 {e:"zipline",            d:[0,1,2,3,4,5,6], t:"10:00"},
 {e:"muay-thai",          d:[1,2,3,4,5,6], t:"16:00", v:{he:"Rittisak · Chaysee · Worawut", en:"Rittisak · Chaysee · Worawut"}},
 {e:"market-chaloklum",   d:[0], t:"17:00"},
 {e:"market-saturday",    d:[6], t:"17:00"},
 {e:"saudade",            d:[2], t:"18:00"},
 {e:"drum-circle",        d:[5], t:"18:00"},
 {e:"zouk-tuesday",       d:[2], t:"18:30", k:"beg"},
 {e:"salsa-sunday",       d:[0], t:"19:00", k:"beg"},
 {e:"bachata-monday",     d:[1], t:"19:00", k:"beg"},
 {e:"bachata-thursday",   d:[4], t:"19:00", k:"beg"},
 {e:"rasta-home",         d:[1,5], t:"19:30"},
 {e:"zouk-tuesday",       d:[2], t:"19:30", k:"soc"},
 {e:"salsa-sunday",       d:[0], t:"20:00", k:"soc"},
 {e:"bachata-monday",     d:[1], t:"20:00", k:"soc"},
 {e:"kizomba-wednesday",  d:[3], t:"20:00"},
 {e:"bachata-thursday",   d:[4], t:"20:00", k:"soc"}
];

window.STAGE = {
  he:{beg:"שיעור מתחילים", soc:"מתקדמים וסושיאל"},
  en:{beg:"beginners class", soc:"improvers and social"}
};
