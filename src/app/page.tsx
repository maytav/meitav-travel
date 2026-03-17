import Image from 'next/image';
import {companies} from '@/data/companies';
import {CompanyCard} from '@/components/CompanyCard';

const features = [
    'כיסוי מלא לכבודה ומזוודות',
    'טיפול רפואי חירום 24/7',
    'ביטול וקיצור נסיעה',
];

const advantages = [
    {
        icon: '🛡',
        title: 'מקצועיות ללא פשרות',
        text: 'מומחיות בניהול סיכונים ובניית מעטפת ביטחון אישית לכל לקוח.',
    },
    {
        icon: '⚖',
        title: 'אובייקטיביות מלאה',
        text: 'עבודה מול כל החברות לצורך התאמת הפוליסה המתאימה ביותר.',
    },
    {
        icon: '📱',
        title: 'זמינות וליווי אישי',
        text: 'ליווי גם ברגע האמת מול חברת הביטוח.',
    },
];

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-50 text-[#1E3644]">

            {/* Header */}
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
                            <h1 className="text-2xl font-black sm:text-3xl md:text-4xl">
                                מיטב ביטוח ופיננסים
                            </h1>
                            <p className="mt-2 text-base font-bold text-[#FF9800] md:text-lg">
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
                            className="text-3xl font-black text-[#FF9800] md:text-2xl"
                        >
                            053-300-8302
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 text-center">

                    <h2 className="mb-6 text-4xl font-black md:text-6xl">
                        ביטוח נסיעות לחו"ל
                    </h2>

                    <p className="mx-auto mb-12 max-w-3xl text-xl text-slate-600 md:text-2xl">
                        השוואת ביטוח נסיעות לחו"ל מכל חברות הביטוח במקום אחד.
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

            {/* Companies */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4">

                    <h3 className="mb-16 text-center text-3xl font-black underline decoration-[#FF9800] decoration-4 underline-offset-8">
                        בחרו את חברת הביטוח
                    </h3>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {companies.map((company) => (
                            <CompanyCard key={company.name} {...company} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="bg-[#1E3644] py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center">

                    <h3 className="mb-16 text-4xl font-black">
                        למה לרכוש דרך מיטב ביטוח ופיננסים
                    </h3>

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

            {/* Footer */}
            <footer className="border-t bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 text-center">

                    <div className="mb-12 flex flex-col items-center">
                        <div
                            className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border-4 border-[#FF9800] bg-[#1E3644]">
                            <Image
                                src="/logo.png"
                                alt="מיטב ביטוח ופיננסים"
                                width={120}
                                height={120}
                                className="object-contain"
                                unoptimized
                            />
                        </div>

                        <h4 className="mb-4 text-3xl font-black">
                            צריכים עזרה בבחירה
                        </h4>
                        <p className="text-xl text-slate-600">
                            השאירו פרטים ונחזור אליכם להתאמה מדויקת
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-6 md:flex-row">
                        <a
                            href="https://wa.me/972533008302"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-full bg-green-600 px-10 py-5 text-xl font-black text-white hover:bg-green-700"
                        >
                            דברו איתנו בוואטסאפ
                        </a>

                        <a
                            href="mailto:info@meitav-ins.co.il?subject=פנייה מהאתר"
                            className="flex items-center justify-center rounded-full bg-[#1E3644] px-10 py-5 text-xl font-black text-white hover:bg-[#1976D2]"
                        >
                            פנו אלינו במייל
                        </a>
                    </div>

                    <div className="mt-20 border-t pt-10 opacity-60">
                        <p>מיטב ביטוח ופיננסים © 2026</p>
                    </div>
                </div>
            </footer>

        </main>
    );
}
