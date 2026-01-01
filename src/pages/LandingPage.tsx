import { useState, useEffect, useCallback } from 'react';
import styles from './LandingPage.module.css';

// Image URLs
const IMAGES = {
  logo: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmstJbNPhcYA5KZCWdugMRDEPm3VrOypoLjnea',
  headerCenter: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmrddCYEA0iKQfCPA7gOHImoX1LYTUSjGvhaNF',
  testimonial159k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmuRBweNTqEfkda2LnZQ7zCG3cYI156OWg9XxD',
  testimonial9976: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4Am3jTOl2zshnwOWGmPbL2VRdZNuF8BKvjxkISJ',
  testimonial9900: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmTDh7mufeGTv1hAgHoyLJKdcnia4FrYkujD2e',
  googleReview38k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4Amqh0dGJCnzyY0ThbLSQ9fwpUtI6B4asHuAPjq',
  googleReview2: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmRQqBHfwoMnP2TZOuEWzx4f3Hy50dgC9vDRYw',
  googleReview3: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmxfeueNZe4Amh62RnP0BfE5MV8zruQvFHtOIy',
  googleReview37k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmSIKbj2vH6fchTLPYVXuoBOQ5j8eg4b3FApiD',
  googleReviewOIC: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmD3lnQcxiUOYlh5VJ1ZsLPmQF2a6gwj9Ac0uI',
  googleReview6: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmizOi9pKQQzftqmOyWIgrYF9TMlHVs5S6ha32',
};

// Data
const services = [
  {
    step: 1,
    title: 'Complimentary Consultation - Find Out Where You Stand',
    description: 'We start with a no-obligation consultation to understand your tax debt, income, assets, and IRS situation. This allows us to determine whether an Offer in Compromise or another IRS program may be a fit, before any commitments are made.',
  },
  {
    step: 2,
    title: 'Investigation - We Dig Into the Numbers That Matter',
    description: 'Our team conducts a full review of your tax records, IRS transcripts, filing history, and financial details. This step is critical to identify eligibility, uncover issues that could cause denial, and build a strategy based on IRS guidelines.',
  },
  {
    step: 3,
    title: 'Protection From Collections - Stop IRS Pressure While We Work',
    description: 'Once we begin representation, we communicate directly with the IRS on your behalf. In many cases, collections such as garnishments, levies, and aggressive notices are paused while your case is under review.',
  },
  {
    step: 4,
    title: 'Financial Analysis - Determine If an Offer in Compromise Makes Sense',
    description: 'We analyze your disposable income, allowable expenses, and asset equity using IRS formulas. This determines whether you qualify for an Offer in Compromise, and if so, what a reasonable settlement amount may look like under IRS rules.',
  },
  {
    step: 5,
    title: 'Resolution - Negotiate and Secure the Best Outcome',
    description: 'If an Offer in Compromise is the right solution, we prepare, submit, and negotiate your case with the IRS. If another resolution is better, we guide you toward the most effective alternative, always focused on long-term relief and compliance.',
  },
];

const benefitImages = [
  'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmjYGOWe4Csc6OIeX8B2wbHaVmyDRMQW9gdP0N',
  'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmhjzFETyH60REYoGmnkCyvctf5bArgTXO2FLM',
  'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmqRkXU4CnzyY0ThbLSQ9fwpUtI6B4asHuAPjq',
  'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4Am8mkW6SrITUeLuoskdY0KDa5148lABy26ZHO7',
];

const whyChooseUs = [
  {
    title: 'Offer in Compromise Specialists',
    description: 'We focus specifically on IRS resolution programs and understand when an Offer in Compromise works and when it doesn\'t. That clarity helps avoid unnecessary denials, delays, and wasted time.',
  },
  {
    title: 'Hundreds of Taxpayers Helped',
    description: 'We\'ve represented individuals and business owners across a wide range of tax situations, from straightforward cases to complex, high-balance matters.',
  },
  {
    title: 'Direct IRS Representation',
    description: 'Once representation begins, we communicate with the IRS on your behalf, handling notices, paperwork, and negotiations so you don\'t risk saying the wrong thing.',
  },
  {
    title: 'All IRS Resolution Options Considered',
    description: 'An Offer in Compromise is not always the best solution. We evaluate all available IRS programs and recommend the option that aligns with your financial reality.',
  },
  {
    title: 'Clear, Straightforward Guidance',
    description: 'We explain your options in plain language, set realistic expectations, and never push programs you don\'t qualify for.',
  },
  {
    title: 'A Process Built for Resolution, Not Pressure',
    description: 'Our approach is designed to reduce stress, restore control, and move your case toward a clear, compliant outcome.',
  },
];

const eligibilityCriteria = [
  'Owe $10,000 or more in total IRS or state tax debt',
  'Are not currently in an active bankruptcy',
  'Are not working with another tax relief provider',
  'Are 21 years of age or older',
];

const faqs = [
  {
    question: 'What options does the IRS offer for taxpayers who owe money?',
    answer: 'The IRS provides several resolution programs depending on your financial situation. These can range from structured payment plans to programs that allow qualified taxpayers to settle for less than the full balance owed. Because each option has strict requirements, our role is to evaluate your situation and identify which IRS solutions you actually qualify for, saving you time, stress, and costly mistakes.',
  },
  {
    question: 'How long does it usually take to resolve tax debt with the IRS?',
    answer: 'Timelines vary based on the complexity of your case, filing status, and the resolution strategy used. In many cases, the process takes between 2 and 8 months. Once we complete our review and determine the best course of action, we\'ll be able to give you a clearer, case-specific timeline.',
  },
  {
    question: 'Why would the IRS agree to settle for less than I owe?',
    answer: 'From the IRS\'s perspective, collecting something is often better than collecting nothing. If a taxpayer cannot reasonably pay their full balance before the collection period expires, the IRS may agree to accept a reduced amount. This allows the IRS to recover funds efficiently, while taxpayers avoid years of ongoing payments, penalties, and interest.',
  },
  {
    question: 'How do I get started?',
    answer: 'It begins with a free, no-obligation consultation. We\'ll review your tax situation, explain your available options, and determine whether we can represent you. If we move forward, we handle the IRS communication and guide your case from start to resolution.',
  },
  {
    question: 'Do I need to keep paying the IRS while my Offer in Compromise is being reviewed?',
    answer: 'In many situations, once we begin representation and submit the appropriate filings, IRS collection activity, including payment requirements, can be paused while your case is under review. We\'ll explain exactly what applies to your situation during your consultation so there are no surprises.',
  },
  {
    question: 'How can I afford professional tax representation?',
    answer: 'During the resolution process, existing IRS payment plans are often suspended, meaning you\'re not making payments directly to the IRS. Our fees are typically spread out over time, and in many cases, the monthly cost is less than what clients were previously paying the IRS, providing immediate financial relief.',
  },
  {
    question: 'What if I stay on my current IRS payment plan? I don\'t want to cause problems.',
    answer: 'Applying for an IRS resolution program will not create issues with the IRS, these programs were created by the IRS itself. However, staying on a long-term payment plan often means paying for 7 years or more, plus ongoing interest and penalties. We frequently see taxpayers who have paid for years and still owe nearly the same balance they started with.',
  },
  {
    question: 'Can you stop wage or Social Security garnishments?',
    answer: 'In many cases, wage garnishments can be stopped within a few days once representation begins. Social Security garnishments may take longer, but are often resolved within several weeks. Timing depends on your specific case and where you are in the IRS collection process.',
  },
  {
    question: 'Will I be able to receive tax refunds again?',
    answer: 'While tax debt is active, the IRS may apply refunds toward your balance. Once your tax debt is resolved through an IRS-approved program, you can typically begin receiving refunds again, as long as you remain current with future filings.',
  },
  {
    question: 'Are there risks to applying for an Offer in Compromise? What if it\'s denied?',
    answer: 'We carefully evaluate cases before moving forward to reduce the risk of denial. In most situations, we can identify whether an Offer in Compromise is realistic before applying. If an offer is not accepted and an appeal is not available, the IRS generally reinstates the previous payment arrangement. If an offer is accepted, there are no negative consequences, you simply pay the agreed amount and remain compliant with filings for the next five years.',
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <a href="#hero">
        <img src={IMAGES.logo} alt="Tax Debt Services" className={styles.logo} />
      </a>
      <img src={IMAGES.headerCenter} alt="Center banner" className={styles.headerCenterImage} />
      <a href="#contact" className={styles.headerCta}>
        Get Started
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroAttention}>
          Attention: Taxpayers & Business Owners With{' '}
          <span className={styles.heroHeadlineHighlight}>$10,000+ In IRS Debt</span>
        </p>
        <h1 className={styles.heroHeadline}>
          One Call Shows You How Clients Eliminated $9,976, $38,000, Even $159,000 In Tax Debt And Whether You Qualify For A Settlement
        </h1>
        <a href="#contact" className={styles.heroCta}>
          Apply to See If You Qualify
        </a>
        <p className={styles.heroCtaSubtext}>100% Complimentary Consultation. No Commitments.</p>

        <div className={styles.mediaFeatures}>
          <div className="trustindex-widget" data-widget-id="a6914775428f54863e0686a7eef"></div>
        </div>

        <div className={styles.heroPlaceholders}>
          <div className={styles.heroPlaceholderFrame}>
            <p className={styles.placeholderText}>Image Placeholder 1</p>
          </div>
          <div className={styles.heroPlaceholderFrame}>
            <p className={styles.placeholderText}>Image Placeholder 2</p>
          </div>
          <div className={styles.heroPlaceholderFrame}>
            <p className={styles.placeholderText}>Image Placeholder 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
          Trusted by 130+ ⭐⭐⭐⭐⭐ Google Reviews: Our 5-Step Process to Tax Debt Resolution
        </h2>
        <p className={styles.sectionSubtitle}>
          A clear, structured approach designed to move your case toward resolution
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article key={service.step} className={styles.serviceCard}>
              <span className={styles.serviceStep}>{service.step}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className={styles.ctaButton}>
            Start Your Free Consultation
          </a>
          <p className={styles.ctaSubtext}>100% Complimentary. No Commitments.</p>
        </div>
      </div>
    </section>
  );
}

function OICExplanation() {
  return (
    <section className={`${styles.section} ${styles.oicSection}`}>
      <div className={styles.container}>
        <div className={styles.oicContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
            What's an Offer in Compromise and Why It's One of the Best Ways to Settle Tax Debt
          </h2>
          <p className={styles.oicText}>
            An Offer in Compromise (OIC) is an official IRS program that allows qualified taxpayers to settle their tax debt for less than the full amount owed. It's designed for individuals and business owners who can't realistically pay their full balance before the IRS collection period expires. In their mind, it works because the IRS may accept less than the full balance when collecting something now is better than collecting nothing later. When done correctly, it can provide a faster, more affordable path to resolution than years of payments and penalties.
          </p>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
          Benefits of an Offer in Compromise
        </h2>
        <div className={styles.benefitsGrid}>
          {benefitImages.map((imageUrl, index) => (
            <div key={index} className={styles.benefitImageCard}>
              <img
                src={imageUrl}
                alt={`Benefit ${index + 1}`}
                className={styles.benefitImage}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className={styles.ctaButton}>
            See If You Qualify
          </a>
          <p className={`${styles.ctaSubtext} ${styles.ctaSubtextLight}`}>
            100% Complimentary Consultation. No Commitments.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
          Why Taxpayers Have Chosen Us Since 2014
        </h2>
        <div className={styles.whyGrid}>
          {whyChooseUs.map((item, index) => (
            <article key={index} className={styles.whyCard}>
              <h3 className={styles.whyCardTitle}>
                <span className={styles.whyCardIcon}>◆</span>
                {item.title}
              </h3>
              <p className={styles.whyCardText}>{item.description}</p>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className={styles.ctaButton}>
            Schedule Your Free Consultation
          </a>
          <p className={styles.ctaSubtext}>100% Complimentary. No Commitments.</p>
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const googleReviews = [
    { src: IMAGES.googleReview38k, alt: 'Google review - $38k saved' },
    { src: IMAGES.googleReview37k, alt: 'Google review - $37k saved' },
    { src: IMAGES.googleReviewOIC, alt: 'Google review - Offer in Compromise success' },
    { src: IMAGES.googleReview2, alt: 'Google review' },
    { src: IMAGES.googleReview3, alt: 'Google review' },
    { src: IMAGES.googleReview6, alt: 'Google review' },
  ];

  const openModal = (index: number) => {
    setModalImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModalImageIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback(() => {
    if (modalImageIndex !== null) {
      const newIndex = modalImageIndex === 0 ? googleReviews.length - 1 : modalImageIndex - 1;
      setModalImageIndex(newIndex);
    }
  }, [modalImageIndex, googleReviews.length]);

  const goToNext = useCallback(() => {
    if (modalImageIndex !== null) {
      const newIndex = modalImageIndex === googleReviews.length - 1 ? 0 : modalImageIndex + 1;
      setModalImageIndex(newIndex);
    }
  }, [modalImageIndex, googleReviews.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (modalImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImageIndex, closeModal, goToPrevious, goToNext]);

  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <h2 className={styles.successTitle}>
          We Helped Clients Save{' '}
          <span className={styles.successHighlight}>$9,900</span>,{' '}
          <span className={styles.successHighlight}>$37,000</span> and even{' '}
          <span className={styles.successHighlight}>$159,000</span>
        </h2>
        <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>
          Real results from real clients
        </p>
        
        <div className={styles.testimonialsGrid}>
          <article className={styles.testimonialCard}>
            <img 
              src={IMAGES.testimonial159k} 
              alt="Client saved $159,000 in tax debt" 
              className={styles.testimonialImage}
            />
          </article>
          <article className={styles.testimonialCard}>
            <img 
              src={IMAGES.testimonial9976} 
              alt="Client saved $9,976 in tax debt" 
              className={styles.testimonialImage}
            />
          </article>
          <article className={styles.testimonialCard}>
            <img 
              src={IMAGES.testimonial9900} 
              alt="Client saved $9,900 in tax debt" 
              className={styles.testimonialImage}
            />
          </article>
        </div>

        <h3 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`} style={{ marginTop: '3rem', fontSize: '1.5rem' }}>
          What Our Clients Say on Google
        </h3>
        
        <div className={styles.googleReviewsGrid}>
          {googleReviews.map((review, index) => (
            <article 
              key={index}
              className={styles.googleReviewCard}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(index);
                }
              }}
            >
              <img 
                src={review.src} 
                alt={review.alt} 
                className={styles.googleReviewImage}
              />
            </article>
          ))}
        </div>

        {modalImageIndex !== null && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                className={styles.modalClose}
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <img 
                src={googleReviews[modalImageIndex].src} 
                alt={googleReviews[modalImageIndex].alt} 
                className={styles.modalImage}
              />
              <button
                className={`${styles.modalNavButton} ${styles.modalNavButtonRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next image"
              >
                ›
              </button>
              <div className={styles.modalCounter}>
                {modalImageIndex + 1} / {googleReviews.length}
              </div>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className={styles.ctaButton}>
            Join Our Success Stories
          </a>
          <p className={`${styles.ctaSubtext} ${styles.ctaSubtextLight}`}>
            100% Complimentary Consultation. No Commitments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  return (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
      <div className={styles.container}>
        <div className={styles.eligibilityContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
            Is an Offer in Compromise Actually Right for Your IRS Problem?
          </h2>
          <p className={styles.sectionSubtitle}>
            Here's How to Know Before You Apply for a Complimentary Consultation
          </p>
          <p className={styles.eligibilityDescription}>
            This is for individuals and business owners who feel stuck under the weight of tax debt and want a real, professional solution. You may be dealing with IRS notices, mounting penalties, or fear of enforcement actions, and you want someone experienced to step in, explain your options clearly, and handle the process correctly. Our clients are not looking for shortcuts or false promises. They want clarity, protection, and a legitimate path to resolution based on IRS rules.
          </p>
          
          <div className={styles.eligibilityList}>
            <h3 style={{ marginBottom: '1rem', color: '#0F3A5A', fontSize: '1.1rem' }}>
              You May Qualify If You:
            </h3>
            {eligibilityCriteria.map((criterion, index) => (
              <div key={index} className={styles.eligibilityItem}>
                <span className={styles.eligibilityCheck}>✓</span>
                <span className={styles.eligibilityText}>{criterion}</span>
              </div>
            ))}
          </div>
          
          <p className={styles.eligibilityNote}>
            Final eligibility is determined during a free consultation, where we review your full situation and confirm whether you qualify to work with us.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <a href="#contact" className={styles.ctaButton}>
              Check Your Eligibility Now
            </a>
            <p className={styles.ctaSubtext}>100% Complimentary. No Commitments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
            About Us
          </h2>
          <p className={styles.aboutText}>
            Tax Debt Services was founded in 2014 by Andrew Sallee and Dusty Wetton with a simple mission: make legitimate tax debt help accessible to people who actually need it. They recognized a major gap in the industry, where many qualified taxpayers were being priced out of professional help due to high upfront fees and one-size-fits-all solutions. By offering affordable monthly payment options and a clear, structured process, Tax Debt Services made it possible for individuals and business owners to get real representation without taking on additional financial strain. Since then, the firm has helped hundreds of clients navigate IRS and state tax issues with clarity, professionalism, and respect. Today, Tax Debt Services is trusted by clients nationwide and backed by 130+ five-star Google reviews, reflecting a consistent commitment to honest guidance, responsive communication, and real results. The focus has never been on pressure or promises, but on helping people understand their options and move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
          Frequently Asked Questions
        </h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <article key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className={styles.ctaButton}>
            Have More Questions? Let's Talk
          </a>
          <p className={styles.ctaSubtext}>100% Complimentary Consultation. No Commitments.</p>
        </div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
          Skipped to the Bottom? Here Is Everything You Need to Know in 120 Words
        </h2>
        <div className={styles.summaryContent}>
          <p className={styles.summaryText}>
            An Offer in Compromise is an official IRS program that allows qualified taxpayers to settle tax debt for less than the full amount owed. It works when the IRS determines that collecting the full balance is unlikely based on income, expenses, and assets. When structured correctly, it can stop collection activity and provide a faster and more affordable resolution than years of payments and penalties. Not everyone qualifies, which is why the first step is a free consultation. We review your situation, explain your options, and determine whether an Offer in Compromise makes sense before any commitment is made, or does it make more sense to go with one of our other options to help you with your tax debt.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
            Apply to See If You Qualify
          </h2>
          <p className={styles.sectionSubtitle}>
            100% Complimentary Consultation. No Commitments.
          </p>
          <div className={styles.contactFormPlaceholder}>
            <p className={styles.contactFormText}>
              📋 Survey Form Coming Soon
            </p>
            <p className={styles.contactFormNote}>
              GHL iframe form will be embedded here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <img src={IMAGES.logo} alt="Tax Debt Services" className={styles.footerLogo} />
      <p className={styles.footerText}>
        © {currentYear} Tax Debt Services. All rights reserved.
      </p>
      <nav className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>Privacy Policy</a>
        <a href="#" className={styles.footerLink}>Terms of Service</a>
        <a href="#contact" className={styles.footerLink}>Contact</a>
      </nav>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OICExplanation />
        <Benefits />
        <WhyChooseUs />
        <SuccessStories />
        <Eligibility />
        <AboutUs />
        <FAQ />
        <Summary />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

