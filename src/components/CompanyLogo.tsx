import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
};

export function CompanyLogo({src, alt}: Props) {
    const isSvg = src.toLowerCase().endsWith('.svg');

    if (isSvg) {
        return (
            <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full object-contain"
            />
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={64}
            height={64}
            className="max-h-full max-w-full object-contain"
            unoptimized
        />
    );
}
