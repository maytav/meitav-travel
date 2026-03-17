import {CompanyLogo} from './CompanyLogo';

type Props = {
    name: string;
    logo: string;
    description: string;
    link: string;
};

export function CompanyCard({name, logo, description, link}: Props) {
    return (
        <div
            className="flex h-full flex-col rounded-[1.5rem] border-t-[6px] border-[#1976D2] bg-white p-8 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.15)]">

            <div className="mb-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow">
                    <CompanyLogo src={logo} alt={name}/>
                </div>

                <h4 className="text-2xl font-black">{name}</h4>
            </div>

            <p className="mb-8 flex-grow text-slate-600">{description}</p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-[#1E3644] px-8 py-4 text-center text-lg font-bold text-white transition hover:bg-[#1976D2]"
            >
                מעבר לרכישת ביטוח
            </a>
        </div>
    );
}
