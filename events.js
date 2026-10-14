/* ------------------------------------------------------------------
   Koh Phangan Today — the recurring week.

   EVENTS  = one entry per thing, with its own detail page (event.html?id=…)
   WEEKLY  = the rows that appear in a day's list. Several rows can point
             at the same event when it runs in stages (class, then social).

   d: weekday numbers, 0 = Sunday.   t: island time, 24h.
   img: leave empty until a real photo from the organiser arrives —
        the page renders a clean header on its own without one.
------------------------------------------------------------------- */

/* The four Love Space nights — Sunday, Monday, Wednesday, Thursday — all run
   on the same price list, so it lives in one place and any change is made
   once. Tuesday's zouk is a different venue and is priced separately; until
   the organisers give us that number it carries no price at all.
   price = the table on the detail page.   PLINE = the one-line hint in a day's list. */
var PRICE = {
  he:[["שיעור אחד + סושיאל","400 באט"],
      ["שני שיעורים + סושיאל","600 באט"],
      ["סושיאל בלבד","200 באט"]],
  en:[["One class + social","400 THB"],
      ["Two classes + social","600 THB"],
      ["Social only","200 THB"]]
};
var PLINE = {
  he:"400–600 באט · סושיאל בלבד 200",
  en:"400–600 THB · social only 200"
};
var PRICE_ZOUK = {
  he:[["שיעור + סושיאל","400 באט"],["סושיאל בלבד","200 באט"]],
  en:[["Class + social","400 THB"],["Social only","200 THB"]]
};
var PLINE_ZOUK = {he:"400 באט · סושיאל בלבד 200", en:"400 THB · social only 200"};

window.EVENTS = {

"muay-thai": {
  q: "Rittisak Muay Thai Gym Koh Phangan", topic:"sport", img: "",
  he: { t:"שיעורי מוי תאי קבוצתיים", v:"שלוש חדרי כושר באי",
    about:["מוי תאי הוא אמנות הלחימה הלאומית של תאילנד, ובאי הזה מאמנים אותו ברצינות גם מתחילים גמורים. השיעור הקבוצתי פתוח לכולם — לא צריך ניסיון, לא צריך כושר מוקדם, וכן, גם בני 50 מתאמנים.",
           "מה קורה באימון ראשון: חימום ארוך, חבלים או ריצה, ואז טכניקה בסיסית — עמידה, ג׳אב, בעיטת רגל אחורית. לא תעלה לספארינג ביום הראשון, וכל מאמן שידחוף אותך לספארינג ביום הראשון זה סימן ללכת לחדר כושר אחר.",
           "תביא חבישות לידיים אם יש לך; אם אין, אפשר לקנות או לשכור במקום. כפפות בדרך כלל יש במקום. ותשתה הרבה יותר מים מכפי שאתה חושב — זה האי הלא נכון בשביל להתייבש.",
           "ועל הכבוד: לפני אימון מורידים נעליים, ולא דורכים על החבלים ולא עוברים מתחתיהם. זה לא פורמליות, זה המנהג המקומי, ושמירה עליו תשנה את האופן שבו מתייחסים אליך בחדר."],
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
    about:["Muay Thai is Thailand's national martial art, and on this island complete beginners are trained in it seriously. The group class is open to everyone — no experience needed, no base fitness needed, and yes, people in their fifties train too.",
           "What a first session looks like: a long warm-up, skipping or running, then basic technique — stance, jab, rear-leg kick. You will not spar on day one, and any gym that pushes a beginner into sparring on day one is a sign to go and train somewhere else.",
           "Bring hand wraps if you have them; if not, most gyms sell or lend them. Gloves are usually available on site. And drink far more water than you think you need — this is the wrong island to get dehydrated on.",
           "On respect: shoes come off before training, and you do not step on the ropes or climb under them. This is not formality, it is the local custom, and observing it changes how the room treats you."],
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
  q: "Phangan Zipline Koh Phangan", topic:"nature", img: "",
  he: { t:"זיפליין", v:"Phangan Zipline",
    about:["קו רוכסן בין עצים ביער של פנגן, עם כמה תחנות ומבט מלמעלה על חופה שלא רואים מהכביש. זה פחות אדרנלין ויותר נוף — מי שמחפש נפילה חופשית יתאכזב, ומי שמחפש חצי יום יפה ביער לא.",
           "הצוות מרכיב ומוודא את הרתמה בכל תחנה; אתה לא נוגע בציוד בעצמך. אם אתה חושש מגבהים, הסוד הוא פשוט להסתכל קדימה ולא למטה, והתחנה הראשונה תמיד הקלה ביותר.",
           "נעליים סגורות, בלי כפכפים. דברים מהכיסים נשארים למטה — טלפון שנופל מגובה הצמרות לא חוזר."],
    sched:["כל יום, 10:00 — מושב אחד ביום"],
    facts:[["הזמנה","חובה להזמין לפחות יום מראש, והתשלום מתבצע לפני ההגעה"]],
    note:"המחיר עדיין לא אצלנו — תשאלו אותם כשאתם מזמינים." },
  en: { t:"Zipline session", v:"Phangan Zipline",
    about:["A zipline strung between trees in Phangan's forest, with several stations and a view down over canopy you never see from the road. It is less adrenaline than it is scenery — anyone chasing a freefall will be disappointed, anyone wanting a good half-day in the jungle will not.",
           "The crew fits and checks your harness at every station; you never handle the gear yourself. If heights worry you, the trick is to look forward rather than down, and the first station is always the easiest.",
           "Closed shoes, no flip-flops. Empty your pockets before you go up — a phone dropped from canopy height does not come back."],
    sched:["Every day, 10:00 — one session per day"],
    facts:[["Booking","Must be booked at least a day ahead, and paid before you arrive"]],
    note:"We don't have the price yet — ask them when you book." }
},

"market-chaloklum": {
  q: "Chaloklum Sunday Market Koh Phangan", topic:"food", img: "",
  he: { t:"שוק ראשון בצ׳אלוקלום", v:"צ׳אלוקלום",
    about:["שוק הערב של צ׳אלוקלום, בכפר הדייגים בצפון האי. הוא קטן יותר מהשוק של תונג סאלה ולכן גם נעים יותר — אפשר לעבור את כולו פעמיים בלי להידחף.",
           "הדגים כאן הם הסיבה להגיע. זה כפר דייגים אמיתי, והדג נגמר לפני סוף הערב. מי שמגיע ב־17:00 בוחר; מי שמגיע ב־20:00 לוקח מה שנשאר.",
           "תביא מזומן קטן. חלק מהדוכנים לא יודעים לפרוט שטר של אלף באט ב־18:00, וזה יעלה לך סיבוב מיותר לכספומט."],
    sched:["כל יום ראשון, מ-17:00"], facts:[["כניסה","חופשית"]], note:"" },
  en: { t:"Sunday market", v:"Chaloklum",
    about:["Chaloklum's evening market, in the fishing village in the north of the island. It is smaller than the Thong Sala one and the better for it — you can walk the whole thing twice without being pushed.",
           "The fish is the reason to come. This is a working fishing village, and the good fish is gone before the evening ends. Arrive at 17:00 and you choose; arrive at 20:00 and you take what is left.",
           "Bring small notes. Plenty of stalls cannot break a thousand-baht note at six in the evening, and it will cost you a pointless trip to a cash machine."],
    sched:["Every Sunday, from 17:00"], facts:[["Entry","Free"]], note:"" }
},

"market-saturday": {
  q: "Thong Sala Walking Street Koh Phangan", topic:"food", img: "",
  he: { t:"שוק שבת בתונג סאלה", v:"תונג סאלה",
    about:["השוק הגדול של השבוע בתונג סאלה — אוכל, בגדים, פירות, קפה, ולפעמים מוזיקה חיה. זה האירוע שבו רואים את כל האי במקום אחד, גם את מי שלא יוצא מהבית כל השבוע.",
           "המנה שכדאי לחפש: רוטי. מי שעומד בתור הארוך ביותר הוא כנראה הנכון. ואם יש דוכן שמוכר רק דבר אחד — זה בדרך כלל הדוכן הטוב.",
           "תגיע רעב ובלי תוכניות. השוק עובד הכי טוב כשהולכים בו בלי מטרה."],
    sched:["כל שבת, מ-17:00"], facts:[["כניסה","חופשית"]],
    note:"השוק הזה מוכר גם בשם Walking Street וגם כשוק המקומי של תונג סאלה — למיטב ידיעתנו מדובר באותו אירוע." },
  en: { t:"Saturday market", v:"Thong Sala",
    about:["The week's big market in Thong Sala — food, clothes, fruit, coffee, and sometimes live music. This is where you see the whole island in one place, including the people who don't leave the house all week.",
           "The thing to look for is roti. Whoever has the longest queue is probably the right one. And if a stall sells only one thing, it is usually the good stall.",
           "Come hungry and without a plan. The market works best when you walk it with no particular aim."],
    sched:["Every Saturday, from 17:00"], facts:[["Entry","Free"]],
    note:"This market is known both as Walking Street and as the Thong Sala local market — as far as we know they are the same thing." }
},

"saudade": {
  q: "SAUDADE Sunset Beach Bar Koh Phangan", topic:"music", img: "",
  he: { t:"סנסט עם DJ ומופע אש", v:"SAUDADE Sunset Beach Bar",
    about:["שקיעה על החוף עם די־ג׳יי ומופע אש אחרי שהחושך יורד. זה לא מסיבה — זה הערב שלפני המסיבה, והוא לרוב הנעים יותר מהשניים.",
           "תגיע מוקדם מהשעה שכתובה. השקיעה היא העיקר, והיא לא מחכה לאף אחד. מי שמגיע בזמן מקבל די־ג׳יי טוב; מי שמגיע חצי שעה קודם מקבל גם את השמיים.",
           "מופע האש מתחיל כשחשוך מספיק, בדרך כלל שעה אחרי השקיעה. תשב רחוק מספיק כדי לא לחטוף ניצוץ — הרוח על החוף הזה משנה כיוון."],
    sched:["שלישי, 18:00–22:00 — סט DJ לשקיעה ומופע אש","שני — ערב סרטים על החוף"],
    facts:[], note:"השעה של ערב הסרטים בשני עדיין לא אצלנו." },
  en: { t:"Sunset DJ set and fire show", v:"SAUDADE Sunset Beach Bar",
    about:["Sunset on the beach with a DJ, and a fire show once it is properly dark. This is not a party — it is the evening before the party, and it is usually the nicer of the two.",
           "Arrive earlier than the listed time. The sunset is the point and it waits for nobody. Turn up on time and you get a good DJ; turn up half an hour early and you get the sky as well.",
           "The fire show starts when it is dark enough, usually an hour after sunset. Sit far enough back not to catch a spark — the wind on this beach changes its mind."],
    sched:["Tuesday, 18:00–22:00 — sunset DJ set and fire show","Monday — movie night on the beach"],
    facts:[], note:"We don't have the time for Monday's movie night yet." }
},

"drum-circle": {
  q: "Zen Beach Koh Phangan", topic:"music", img: "",
  he: { t:"מעגל תופים בזן ביץ׳", v:"זן ביץ׳",
    about:["מעגל תופים על זן ביץ׳ בשקיעה של יום שישי. אין כניסה, אין רשימה, ואין מי שמנצח — אנשים מביאים תוף, יושבים במעגל, ומתחילים.",
           "אם אין לך תוף, בוא בלי. תמיד יש כמה כלים מיותרים ומישהו ישמח להעביר לך אחד, ובכל מקרה חצי מהמעגל פשוט יושב ומקשיב.",
           "אין צורך בניסיון. תמצא דופק אחד פשוט ותישאר עליו — זה מה שמחזיק מעגל תופים, לא הסולו. מי שמנסה להרשים הוא בדרך כלל זה שמפרק את הקצב."],
    sched:["כל שישי, מ-18:00"], facts:[["כניסה","חופשית"]], note:"" },
  en: { t:"Drum circle", v:"Zen Beach",
    about:["A drum circle on Zen Beach at Friday sunset. No entry, no list, nobody conducting — people bring a drum, sit in a circle, and start.",
           "If you don't have a drum, come anyway. There are always a few spare instruments and someone glad to hand you one, and half the circle is just sitting and listening in any case.",
           "No experience needed. Find one simple pulse and stay on it — that is what holds a drum circle together, not the solos. Whoever is trying to impress is usually the one breaking the groove."],
    sched:["Every Friday, from 18:00"], facts:[["Entry","Free"]], note:"" }
},

"rasta-home": {
  q: "Rasta Home Koh Phangan", topic:"music", img: "",
  he: { t:"ערב מוזיקה ב-Rasta Home", v:"Rasta Home",
    about:["ערב מוזיקה ב־Rasta Home, פעמיים בשבוע, מ־19:30 והלאה. זה מקום קטן ולא מתוכנן מדי — לפעמים זו הופעה, לפעמים זה ג׳אם, ולפעמים זה פשוט מישהו עם גיטרה.",
           "זה אחד המקומות הבודדים באי שבהם הערב נגמר מתי שהוא נגמר ולא בשעה שרשומה. אל תתכנן אחריו משהו.",
           "אם אתה מנגן — תביא כלי. כאן זה עובד ככה."],
    sched:["שני ושישי, 19:30 עד 02:00"], facts:[], note:"" },
  en: { t:"Night session at Rasta Home", v:"Rasta Home",
    about:["A music night at Rasta Home, twice a week, from 19:30 onwards. It is a small place and not over-programmed — sometimes it is a set, sometimes a jam, and sometimes just someone with a guitar.",
           "It is one of the few places on the island where the evening ends when it ends rather than at a listed hour. Don't plan anything after it.",
           "If you play, bring your instrument. That is how it works here."],
    sched:["Monday and Friday, 19:30 until 02:00"], facts:[], note:"" }
},

"body-combat": {
  q: "Ready To Move Koh Phangan", topic:"sport", img: "",
  he: { t:"באדי קומבט", v:"Ready To Move",
    about:["באדי קומבט הוא אימון קרדיו שבנוי כולו מתנועות של אמנויות לחימה — אגרופים, בעיטות, חסימות וברכיים — מסודרות לכוריאוגרפיה על מוזיקה. חצי שיעור ריקוד, חצי אימון אגרוף.",
           "אין מגע, ואין יריב. אתה עובד מול האוויר, וזה בדיוק מה שהופך אותו לנגיש: אין ממי לפחד, אין פציעות מהתנגשות, ואף אחד לא בודק לך את הטכניקה. מי שמעולם לא התקרב לחדר לחימה נכנס לכאן בלי בעיה.",
           "זה גם אומר שלא תלמד כאן להילחם, וחשוב שתדע את זה מראש. מי שרוצה מוי תאי אמיתי — יש באי חדרי כושר בדיוק בשביל זה. באדי קומבט הוא אימון כושר בשפה של לחימה, וזה בדיוק מה שהוא מבטיח.",
           "בשיעור הראשון לא תספיק את הכוריאוגרפיה, וזה נורמלי לגמרי. תתפוס קודם את הרגליים — הידיים יגיעו אחר כך. ואל תיתן כוח מלא בכל מכה; זה מה ששורף אנשים אחרי עשר דקות ומשאיר אותם בצד.",
           "מה להביא: נעלי ספורט — לא יחפים, יש הרבה סיבובים על כרית כף הרגל והברך משלמת על זה — מים, ומגבת. בגדים שלא מגבילים את הכתפיים."],
    sched:["17:00–18:00 — שיעור"],
    price:[["שיעור","חינם"]], p:"חינם",
    facts:[["המקום","Ready To Move"]],
    note:"" },
  en: { t:"Body Combat", v:"Ready To Move",
    about:["Body Combat is a cardio workout built entirely from martial-arts movement — punches, kicks, blocks and knees — set to choreography over music. Half dance class, half boxing session.",
           "There is no contact and no opponent. You work against the air, and that is exactly what makes it approachable: nobody to be afraid of, no collision injuries, and nobody checking your technique. People who have never gone near a fight gym walk straight into this one.",
           "It also means you will not learn to fight here, and it is worth knowing that going in. If you want real Muay Thai, the island has gyms for exactly that. Body Combat is a fitness class in the language of fighting, which is precisely what it promises.",
           "You will not keep up with the choreography in your first class, and that is completely normal. Get the feet first — the arms come later. And don't put full power into every strike; that is what burns people out ten minutes in and leaves them standing at the side.",
           "What to bring: trainers — not bare feet, there is a lot of pivoting on the ball of the foot and the knee pays for it — water, and a towel. Clothes that don't restrict your shoulders."],
    sched:["17:00–18:00 — class"],
    price:[["Class","Free"]], p:"Free",
    facts:[["Venue","Ready To Move"]],
    note:"" }
},
"salsa-sunday": {
  q: "Love Space Koh Phangan", topic:"dance", img: "",
  he: { t:"ערב סלסה", v:"Love Space (ex Sushi Love)",
    about:["סלסה היא הריקוד הכי חברותי שקיים, ובערב אחד היא תלמד אותך יותר על עצמך מכל מה שציפית. היא מהירה, היא עליזה, והכי חשוב — היא סולחת. פספסת צעד? הקצב חוזר אליך אחרי שמונה ספירות ואתה שוב בפנים.",
           "בשיעור הראשון לא תלמד לסובב אף אחד באוויר. תלמד ללכת בקצב, ולהעביר משקל מרגל לרגל בזמן. זה נשמע מעט וזה הכול — כל מה שבא אחר כך נבנה על ההליכה הזאת. מי שמגיע עם ציפייה לפירוטכניקה יוצא מתוסכל, ומי שמגיע ללמוד ללכת יוצא רוקד.",
           "מחליפים בני ובנות זוג כל כמה דקות, וזה לא נימוס אלא שיטת לימוד. כל גוף מוביל ומגיב קצת אחרת, וההחלפות מכריחות אותך להקשיב במקום לשנן רצף. לכן באמת לא צריך להגיע עם מישהו — רוב האנשים בחדר הגיעו לבד.",
           "מה להביא: משהו שאפשר להזיע בו, ובקבוק מים. נעליים שמחליקות קצת על הרצפה עדיפות על נעלי ספורט שנתקעות — סנדל עם רצועה אחורית עובד מצוין. והכי חשוב, תגיע לחלק של הסושיאל גם אם אתה בטוח שאתה לא מוכן. אתה מוכן."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    price:PRICE.he, p:PLINE.he,
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"" },
  en: { t:"Salsa night", v:"Love Space (ex Sushi Love)",
    about:["Salsa is the most sociable dance there is, and one evening of it will teach you more about yourself than you expected. It is fast, it is bright, and above all it is forgiving. Missed a step? The count comes back around in eight and you are in again.",
           "In your first class you will not learn to spin anyone through the air. You will learn to walk in time, and to shift your weight from foot to foot on the beat. That sounds like very little and it is everything — all the rest is built on that walk. People who arrive expecting fireworks leave frustrated; people who arrive to learn to walk leave dancing.",
           "Partners rotate every few minutes. That is not etiquette, it is the teaching method: every body leads and answers a little differently, and rotating forces you to listen rather than memorise a sequence. It is also why you genuinely do not need to bring anyone — most of the room came alone.",
           "What to bring: something you can sweat in, and water. Shoes that slide a little beat trainers that grip and catch your knee — a sandal with a back strap works well. And stay for the social even if you are certain you are not ready. You are ready."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    price:PRICE.en, p:PLINE.en,
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"" }
},

"bachata-monday": {
  q: "Love Space Koh Phangan", topic:"dance", img: "",
  he: { t:"ערב באצ׳טה", v:"Love Space (ex Sushi Love)",
    about:["באצ׳טה היא ארבעה צעדים ושעות של הקשבה. היא איטית מסלסה וקרובה ממנה, ובדיוק בגלל זה היא מפחידה אנשים בשיעור הראשון — ואז הופכת לריקוד שהם הכי אוהבים.",
           "הצעד הבסיסי: שלושה צעדים הצידה, ובספירה הרביעית הירך עולה. זהו. באמת זהו. מה שלוקח זמן זה לא הצעדים — זה ללמוד להוריד את הכתפיים ולהפסיק לנסות לשלוט בכל תנועה.",
           "ומילה על קרבה, כי זה מה שכולם חושבים עליו ולא שואלים: המרחק בין שני רוקדים נקבע תמיד על ידי מי שמרגיש פחות בנוח. אפשר לרקוד באצ׳טה מצוינת במרחק של זרוע שלמה, אף אחד לא יסתכל עליך מוזר, ומורה טוב אומר את זה בקול בשיעור הראשון.",
           "אם רקדת סלסה — תצטרך להאט, וזה יהיה החלק הקשה. באצ׳טה לא מתגמלת מהירות. היא מתגמלת את מי שמוכן להישאר רגע אחד יותר מדי בתוך תנועה."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    price:PRICE.he, p:PLINE.he,
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"" },
  en: { t:"Bachata night", v:"Love Space (ex Sushi Love)",
    about:["Bachata is four steps and hours of listening. It is slower than salsa and closer than salsa, and that is exactly why it frightens people in their first class — and then becomes the dance they love most.",
           "The basic step: three steps to the side, and on the fourth count the hip lifts. That is it. Genuinely, that is it. What takes time is not the footwork — it is learning to drop your shoulders and stop trying to control every movement.",
           "A word about closeness, because everyone thinks about it and nobody asks: the distance between two dancers is always set by whoever is less comfortable. You can dance excellent bachata at full arm's length, nobody will look at you strangely, and a good teacher says so out loud in the first class.",
           "If you have danced salsa, you will have to slow down, and that will be the hard part. Bachata does not reward speed. It rewards staying inside a movement one beat longer than feels necessary."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    price:PRICE.en, p:PLINE.en,
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"" }
},

"zouk-tuesday": {
  q: "Haad Yao Bayview Resort Koh Phangan", topic:"dance", img: "",
  he: { t:"ערב זוק", v:"Haad Yao Bayview Resort",
    about:["זוק ברזילאי הוא ריקוד של גלים. התנועה לא נגמרת בצעד — היא ממשיכה דרך הברכיים, דרך עמוד השדרה, ולפעמים דרך השיער. זה הריקוד שאנשים עוצרים להסתכל עליו בלי לדעת מה שמם רואים.",
           "הוא איטי יותר מסלסה ומבאצ׳טה, ואל תטעה לחשוב שאיטי זה קל. בזוק אין לאן להתחבא. כל העברת משקל נראית, וזו בדיוק הסיבה שהוא מלמד אותך לרקוד טוב יותר גם בכל ריקוד אחר.",
           "בשיעור הראשון לא נוגעים בתנועות ראש. מתחילים בהליכה, בהעברת משקל ובדחיפה והמשיכה הבסיסית, כי כל התנועות הגדולות בנויות על זה. מי שמנסה לקפוץ ישר לגלים נפצע או מתייאש, ולרוב שניהם.",
           "ובאמת חשוב: תנועות הראש והצוואר בזוק נלמדות לאט, בשליטה, ואף פעם לא בכוח. אם משהו כואב — זה לא נכון. תגיד למורה, הוא יעדכן את התנועה. צוואר זה לא מקום להתעקש בו.",
           "למי שמגיע מסלסה: תצטרך להאט, ותשנא את זה שבועיים. אחר כך זה ייפתח."],
    sched:["18:30 — שיעור למתחילים לגמרי","19:30 — מתקדמים וסושיאל"],
    price:PRICE_ZOUK.he, p:PLINE_ZOUK.he,
    facts:[["המקום","Haad Yao Bayview Resort, על החוף"]],
    note:"" },
  en: { t:"Zouk night", v:"Haad Yao Bayview Resort",
    about:["Brazilian zouk is a dance of waves. The movement does not end with the step — it carries on through the knees, through the spine, and sometimes through the hair. This is the dance people stop to watch without knowing what they are looking at.",
           "It is slower than salsa and bachata, and do not mistake slow for easy. In zouk there is nowhere to hide. Every weight change is visible, which is exactly why it makes you a better dancer in every other style too.",
           "The first class does not touch head movement. It starts with walking, with weight transfer, and with the basic push and pull, because every large movement is built on those. People who try to jump straight to the waves get hurt or get discouraged, and usually both.",
           "And this matters: head and neck movement in zouk is taught slowly, under control, and never by force. If something hurts, it is wrong. Tell the teacher and they will adapt it. A neck is not a thing to be stubborn about.",
           "Coming from salsa? You will have to slow down, and you will hate it for a fortnight. Then it opens up."],
    sched:["18:30 — absolute beginners class","19:30 — improvers and social"],
    price:PRICE_ZOUK.en, p:PLINE_ZOUK.en,
    facts:[["Venue","Haad Yao Bayview Resort, on the beach"]],
    note:"" }
},

"kizomba-wednesday": {
  q: "Love Space Koh Phangan", topic:"dance", img: "",
  he: { t:"ערב קיזומבה", v:"Love Space (ex Sushi Love)",
    about:["קיזומבה היא ריקוד אנגולי, והיא כנראה האיטית והקרובה מכל מה שתמצא באי. אין בה סיבובים ראוותניים ואין בה תנועות גדולות. יש בה הליכה — והליכה אחת טובה בקיזומבה לוקחת שנים.",
           "ההובלה בקיזומבה לא מגיעה מהידיים אלא מהמרכז ומהחזה. זה אומר שני דברים: אי אפשר לזייף אותה, ואי אפשר למהר אותה. זה גם אומר שמי שחושב שהוא לא מוזיקלי מגלה בקיזומבה שהוא כן — פשוט לאט.",
           "המוזיקה עוזרת. היא כבדה, יש בה דופק נמוך וברור, והיא כמעט גוררת את הגוף לקצב גם בלי שתתכוון. תעמוד בצד חמש דקות ותקשיב לפני שאתה נכנס; זה שווה יותר מחצי שיעור.",
           "על קרבה, שוב ובמפורש: קיזומבה נרקדת קרוב, אבל המרחק נקבע תמיד על ידי מי שמרגיש פחות בנוח. אפשר ללמוד את כל הבסיס במסגרת פתוחה לגמרי. מי שמנסה לקבוע לך את המרחק — פשוט אל תרקוד איתו שוב."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    price:PRICE.he, p:PLINE.he,
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"" },
  en: { t:"Kizomba night", v:"Love Space (ex Sushi Love)",
    about:["Kizomba is an Angolan dance, and it is probably the slowest and closest thing you will find on this island. There are no show spins and no big shapes. There is walking — and one good kizomba walk takes years.",
           "The lead does not come from the hands but from the centre and the chest. That means two things: it cannot be faked, and it cannot be rushed. It also means people who are sure they are unmusical discover in kizomba that they are not — just slow.",
           "The music does a lot of the work. It is heavy, with a low clear pulse, and it pulls the body into time almost without your permission. Stand at the side for five minutes and listen before you join; it is worth more than half a class.",
           "On closeness, again and plainly: kizomba is danced close, but the distance is always set by whoever is less comfortable. You can learn the entire basis in a fully open frame. Anyone who tries to set that distance for you — simply don't dance with them again."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    price:PRICE.en, p:PLINE.en,
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"" }
},

"bachata-thursday": {
  q: "Love Space Koh Phangan", topic:"dance", img: "",
  he: { t:"ערב באצ׳טה", v:"Love Space (ex Sushi Love)",
    about:["הערב השני של השבוע לבאצ׳טה, ולרוב הוא נעים יותר למתחילים — חלק מהאנשים כבר רקדו ביום שני, האווירה פחות טרייה ויותר מגובשת.",
           "אם זו הפעם הראשונה שלך, אל תדאג שפספסת את יום שני. השיעור למתחילים מתחיל מאפס בכל פעם, ובריקודים חברתיים אין סילבוס שרודפים אחריו. נכנסים באמצע, תמיד.",
           "ואם כבר היית בשני — תבוא גם היום. שום דבר לא משפר ריקוד זוגי כמו שתי פעמים בשבוע במקום אחת. הגוף זוכר דברים בין שלישי לרביעי שהוא שוכח בין שני לשני."],
    sched:["19:00 — שיעור מתחילים","20:00 — מתקדמים וסושיאל"],
    price:PRICE.he, p:PLINE.he,
    facts:[["המקום","Love Space, לשעבר Sushi Love"],["אינסטגרם","@love_space_phangan"]],
    note:"" },
  en: { t:"Bachata night", v:"Love Space (ex Sushi Love)",
    about:["The week's second bachata night, and usually the gentler one for beginners — some of the room danced on Monday, so the atmosphere is less brand-new and more settled.",
           "If this is your first time, don't worry that you missed Monday. The beginners class starts from zero every week; social dancing has no syllabus to catch up with. You join in the middle, always.",
           "And if you were there on Monday, come again. Nothing improves a partner dance like twice a week instead of once. The body remembers things between Tuesday and Thursday that it forgets between one Monday and the next."],
    sched:["19:00 — beginners class","20:00 — improvers and social"],
    price:PRICE.en, p:PLINE.en,
    facts:[["Venue","Love Space, formerly Sushi Love"],["Instagram","@love_space_phangan"]],
    note:"" }
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
 {e:"body-combat",       d:[4], t:"17:00"},
 {e:"bachata-thursday",   d:[4], t:"19:00", k:"beg"},
 {e:"kizomba-wednesday",  d:[3], t:"19:00", k:"beg"},
 {e:"rasta-home",         d:[1,5], t:"19:30"},
 {e:"zouk-tuesday",       d:[2], t:"19:30", k:"soc"},
 {e:"salsa-sunday",       d:[0], t:"20:00", k:"soc"},
 {e:"bachata-monday",     d:[1], t:"20:00", k:"soc"},
 {e:"kizomba-wednesday",  d:[3], t:"20:00", k:"soc"},
 {e:"bachata-thursday",   d:[4], t:"20:00", k:"soc"}
];

window.STAGE = {
  he:{beg:"שיעור מתחילים", soc:"מתקדמים וסושיאל"},
  en:{beg:"beginners class", soc:"improvers and social"}
};
