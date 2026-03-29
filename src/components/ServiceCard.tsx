import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <p className="text-[13px] text-text-secondary">{description}</p>
      </div>
    </Link>
  );
}
