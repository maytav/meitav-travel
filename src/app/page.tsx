import Image from 'next/image'

const companies = [
    {
        name: 'PassportCard',
        description:
            'כרטיס תשלום רפואי נטען המאפשר לשלם ישירות עבור הוצאות רפואיות בחו"ל ללא הגשת תביעה. הכסף נטען לכרטיס דרך האפליקציה בעת קבלת טיפול רפואי.',
        link: 'https://buy.passportcard.co.il/existing?AffiliateId=9sCy4Fmb8d7faRqj8E2F8w%3D%3D',
    },
    {
        name: 'הראל',
        description:
            'ביטוח נסיעות עם ניהול תביעות דרך אפליקציית Harel First, מוקד רפואי בינלאומי וכיסויים רפואיים רחבים למצבי חירום.',
        link: 'https://digital.harel-group.co.il/travel-policy?guid=bee1d408-c6a7-410e-b4ee-ac690224bdd3&an=021945',
    },
    {
        name: 'הפניקס Smart',
        description:
            'פוליסת ביטוח נסיעות הכוללת אפשרויות הרחבה למצבים רפואיים קיימים, ספורט אתגרי וכיסויים נוספים בהתאם ליעד ולסוג הנסיעה.',
        link: 'https://travel.agentsfnx.co.il/travel/landing.html?fnx_ANum=TCIqlTMYYFg%3d&referrer=meitav-ins.co.il#',
    },
    {
        name: 'מגדל',
        description:
            'ביטוח נסיעות לחו״ל הכולל כיסויים רפואיים, אפשרויות הרחבה לספורט אתגרי, ביטול נסיעה והתאמה לסוגי נסיעות שונים.',
        link: '#',
    },
    {
        name: 'כלל ביטוח',
        description:
            'פוליסות ביטוח נסיעות עם מגוון מסלולים ליחידים ולמשפחות, שירותי מוקד רפואי בינלאומי וכיסויים רפואיים מקיפים.',
        link: 'https://www.clalbit.co.il/travelingisurance/claltravel/?txtCompID=1&txtItemID=941a1c04-3115-4b31-87df-7eeb20e034ae',
    },
    {
        name: 'מנורה מבטחים',
        description:
            'ביטוח נסיעות לחו״ל עם כיסויים רפואיים ואפשרות להוספת הרחבות בהתאם לסוג הנסיעה ולצרכי המבוטח.',
        link: 'https://ds.menoramivt.co.il/tiny-url/t/e/params?t=3UkMtdMo',
    },
];
const features = [
    'כיסוי מלא לכבודה ומזוודות',
    'טיפול רפואי חירום 24/7',
    'ביטול וקיצור נסיעה',
]

const advantages = [
    {
        icon: '🛡',
        title: 'מקצועיות ללא פשרות',
        text: 'מומחיות בניהול סיכונים ובניית מעטפת ביטחון אישית לכל לקוח.',
    },
    {
        icon: '⚖',
        title: 'אובייקטיביות מלאה',
        text: 'אנחנו עובדים עם כל החברות כדי להבטיח לכם את הפוליסה הטובה והמשתלמת ביותר.',
    },
    {
        icon: '📱',
        title: 'זמינות וליווי אישי',
        text: 'אנחנו איתכם לא רק ברכישה, אלא גם ברגע האמת מול חברת הביטוח.',
    },
]

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-50 text-[#1E3644]">
            <header className="bg-[#1E3644] py-6 text-white md:py-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center md:flex-row md:items-center md:justify-between md:text-right">
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <div className="flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-full border-4 border-[#FF9800] bg-[#1E3644] md:h-[120px] md:w-[120px]">
                            <Image
                                src="/logo.png"
                                alt="מיטב ביטוח ופיננסים"
                                width={120}
                                height={120}
                                className="h-full w-full object-contain p-1"
                                unoptimized
                            />
                        </div>

                        <div className="text-center md:text-right">
                            <h1 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
                                מיטב ביטוח ופיננסים
                            </h1>
                            <p className="mt-2 text-base font-bold leading-snug text-[#FF9800] md:text-lg">
                                הביטחון הכלכלי שלך בידיים מקצועיות
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="mb-1 text-sm opacity-80">מענה מהיר בוואטסאפ</p>
                        <a
                            href="https://wa.me/972533008302"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl font-black leading-none text-[#FF9800] md:text-2xl"
                        >
                            053-300-8302
                        </a>
                    </div>
                </div>
            </header>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h2 className="mb-6 text-4xl font-black md:text-6xl">ביטוח נסיעות לחו"ל</h2>

                    <p className="mx-auto mb-12 max-w-3xl text-xl text-slate-600 md:text-2xl">
                        אל תטוסו בלי כיסוי מלא. השוו מחירים ורכשו פוליסה מותאמת אישית מכל חברות הביטוח המובילות בישראל
                        ברגע אחד.
                    </p>

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 text-right md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3 rounded-xl border-r-4 border-[#FF9800] bg-slate-50 p-4"
                            >
                                <span className="text-2xl">✓</span>
                                <span className="text-lg font-bold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <h3 className="mb-16 text-center text-3xl font-black underline decoration-[#FF9800] decoration-4 underline-offset-8">
                        בחרו את חברת הביטוח המועדפת עליכם
                    </h3>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="flex h-full flex-col rounded-[1.5rem] border-t-[6px] border-[#1976D2] bg-white p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.15)]"
                            >
                                <h4 className="mb-4 text-2xl font-black">{company.name}</h4>
                                <p className="mb-8 flex-grow text-slate-600">{company.description}</p>
                                <a
                                    target="_blank"
                                    href={company.link}
                                    className="block rounded-full bg-[#1E3644] px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-[#1976D2]"
                                >
                                    הזמנה ישירה
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#1E3644] py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <h3 className="mb-16 text-4xl font-black">למה לרכוש דרך מיטב ביטוח ופיננסים?</h3>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3">
                        {advantages.map((item) => (
                            <div key={item.title}>
                                <div
                                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF9800] text-3xl">
                                    {item.icon}
                                </div>
                                <h5 className="mb-3 text-xl font-black">{item.title}</h5>
                                <p className="opacity-80">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <div className="mb-12 flex flex-col items-center">
                        <div
                            className="w-[120px] h-[120px] rounded-full border-4 border-[#FF9800] overflow-hidden bg-[#1E3644] flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="מיטב ביטוח ופיננסים"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>

                        <h4 className="mb-4 text-3xl font-black">מתקשים לבחור? אנחנו כאן לייעץ</h4>
                        <p className="text-xl text-slate-600">צרו קשר עכשיו להתאמת ביטוח הנסיעות המדויק עבורכם.</p>
                    </div>

                    <div className="flex flex-col justify-center gap-6 md:flex-row">
                        <a
                            href="https://wa.me/972533008302"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-3 rounded-full bg-green-600 px-10 py-5 text-xl font-black text-white shadow-xl transition hover:bg-green-700"
                        >
                            <span>דברו איתנו בוואטסאפ</span>
                        </a>

                        <a
                            href="mailto:info@meitav-ins.co.il?subject=פנייה מהאתר - ביטוח נסיעות"
                            className="flex items-center justify-center gap-3 rounded-full bg-[#1E3644] px-10 py-5 text-xl font-black text-white shadow-xl transition hover:bg-[#1976D2]"
                        >
                            <span>פנו אלינו במייל</span>
                        </a>
                    </div>

                    <div
                        className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-10 opacity-60 md:flex-row">
                        <p className="font-bold">מיטב ביטוח ופיננסים © 2026</p>

                        <div className="flex gap-8">
                            <span>פנסיה</span>
                            <span>ביטוח</span>
                            <span>חיסכון</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}
