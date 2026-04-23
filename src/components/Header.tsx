import styles from './Header.module.css';

const IMAGES = {
  logo: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmstJbNPhcYA5KZCWdugMRDEPm3VrOypoLjnea',
  headerCenter: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmrddCYEA0iKQfCPA7gOHImoX1LYTUSjGvhaNF',
};

interface HeaderProps {
  hideCtaButton?: boolean;
  customCtaText?: string;
  customCtaPhone?: string;
}

export default function Header({ hideCtaButton = false, customCtaText, customCtaPhone }: HeaderProps) {
  const ctaText = customCtaText || 'Call now +1 (866) 999-2007';
  const ctaPhone = customCtaPhone || '+18669992007';

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={IMAGES.logo} alt="Tax Debt Services" className={styles.logo} loading="eager" />
      </a>
      <img src={IMAGES.headerCenter} alt="Center banner" className={styles.headerCenterImage} loading="eager" />
      {!hideCtaButton && (
        <a href={`tel:${ctaPhone}`} className={styles.headerCta}>
          {ctaText}
        </a>
      )}
    </header>
  );
}
