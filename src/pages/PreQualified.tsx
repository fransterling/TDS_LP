import styles from './PreQualified.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SuccessStories from '../components/SuccessStories';

export default function PreQualified() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              Good News! You're Pre Qualified for a <span className={styles.highlight}>Complimentary Consultation</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Your request has been received and reviewed.
            </p>
            <p className={styles.heroText}>
              There's just one quick step required before we place the call.
            </p>
          </div>
        </section>

        <section className={styles.sectionWhite}>
          <div className={styles.container}>
            <div className={styles.smsBox}>
              <p className={styles.smsText}>
                You have received a SMS from <strong>%NUMBER%</strong>...
              </p>
              <p className={styles.smsCallout}>
                Reply "YES" to that text now to confirm your slot.
              </p>
            </div>

            <p className={styles.warningText}>
              To keep consultations available for taxpayers who need them, unconfirmed time slots are automatically released and the call is not placed.
            </p>
            <p className={styles.bodyText}>
              …meaning you will remain in the same uncertain position guessing what the IRS can do to you, without clarity on your options or next steps.
            </p>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              You're now one step closer to clarity, protection, and a real plan forward.
            </h2>
            <p className={styles.bodyText}>
              This consultation is designed to determine what you actually qualify for under IRS rules and whether we can help you move forward.
            </p>

            <div className={styles.checklistBox}>
              <h3 className={styles.checklistTitle}>What this means:</h3>
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>First, you meet the initial criteria for professional tax relief</span>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>Second, you're no longer guessing about your options</span>
                </li>
                <li>
                  <span className={styles.checkmark}>✓</span>
                  <span>Finally, you're one call away from understanding what the IRS legally allows—and how to use it</span>
                </li>
              </ul>
            </div>

            <p className={styles.bodyText}>
              And the best part? You don't have to face the IRS alone.
            </p>
            <p className={styles.bodyText}>
              In this short consultation, we're going to pull back the curtain on what you actually qualify for (according to real IRS rules)… so you can protect your income, get clarity on your next steps, and put an end to the constant stress.
            </p>
          </div>
        </section>

        <section className={styles.sectionWhite}>
          <div className={styles.container}>
            <div className={styles.trustBox}>
              <h3 className={styles.trustTitle}>Trusted by Taxpayers Since 2014</h3>
              <div className={styles.trustStats}>
                <div className={styles.trustStat}>
                  <p className={styles.trustNumber}>130+</p>
                  <p className={styles.trustLabel}>5 Star Reviews</p>
                </div>
                <div className={styles.trustStat}>
                  <p className={styles.trustNumber}>$50m+</p>
                  <p className={styles.trustLabel}>in tax debt saved for our clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionLight}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What We'll Cover on Your Consultation:</h2>
            <p className={styles.bodyText}>During the consultation, we'll:</p>

            <ul className={styles.consultationList}>
              <li>Review your IRS or state tax situation</li>
              <li>Explain which programs you qualify for (and which you don't)</li>
              <li>Outline realistic outcomes and timelines</li>
              <li>Answer your questions clearly in plain English</li>
            </ul>

            <p className={styles.bodyText}>
              If it makes sense to move forward, we'll explain next steps. If it doesn't, you'll still leave with clarity and a clear understanding of your position.
            </p>
          </div>
        </section>

        <SuccessStories />

        <section className={styles.sectionWhite}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Where We're Based (Serving Clients Nationwide)</h2>
            <div className={styles.mapBox}>
              <p className={styles.bodyText}>
                While our office is based in California, we work with taxpayers across the U.S. through secure phone and digital consultations.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.727455234094!2d-117.13041042387923!3d33.560456873346276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9553ed88a2949%3A0xa0484ea177df1609!2sTax%20Debt%20Services!5e0!3m2!1sen!2sus!4v1767401987318!5m2!1sen!2sus"
                width="600"
                height="450"
                className={styles.mapEmbed}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
