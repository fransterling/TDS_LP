import styles from './ComparisonTable.module.css';

const comparisonData = [
  {
    category: 'Resolution Strategy',
    tds: 'Tailored to what you actually qualify for',
    oldWay: 'Pushes one-size-fits-all programs',
  },
  {
    category: 'Offer in Compromise Use',
    tds: 'Only recommended when it truly makes sense',
    oldWay: 'Often sold upfront regardless of eligibility',
  },
  {
    category: 'Fees & Payments',
    tds: 'Affordable monthly payments without financing',
    oldWay: 'Adds debt through financing or large upfront fees',
  },
  {
    category: 'Client Investigation',
    tds: 'Robust, transparent compliance review you can keep',
    oldWay: 'Minimal investigation tied to a sales commitment',
  },
  {
    category: 'Pressure to Enroll',
    tds: 'No pressure, no obligation',
    oldWay: 'High-pressure sales tactics',
  },
  {
    category: 'Transparency & Education',
    tds: 'Clear explanations so you can make informed decisions',
    oldWay: 'Limited clarity until after you sign',
  },
  {
    category: 'Integrity & Trust',
    tds: 'Integrity-first approach backed by real reviews',
    oldWay: 'Focused on volume over long-term outcomes',
  },
];

export default function ComparisonTable() {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Tax Debt Services vs. The Old Way
        </h2>

        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.headerCategory}>Comparison Category</th>
                <th className={styles.headerTds}>Tax Debt Services</th>
                <th className={styles.headerOldWay}>The Old Way</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.categoryCell}>{row.category}</td>
                  <td className={styles.tdsCell}>
                    <span className={styles.checkmark}>✓</span>
                    <span>{row.tds}</span>
                  </td>
                  <td className={styles.oldWayCell}>
                    <span className={styles.crossmark}>✗</span>
                    <span>{row.oldWay}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="#contact" className={styles.ctaButton}>
            Apply To See If You Qualify
          </a>
          <p className={styles.ctaSubtext}>100% Complimentary. No Commitments.</p>
        </div>
      </div>
    </section>
  );
}
