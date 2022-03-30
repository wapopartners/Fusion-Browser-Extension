import { ExclamationTriangleFill } from 'react-bootstrap-icons';

const styles = {
  icon: {
    color: '#ffc107',
    fontSize: 70,
    marginBottom: 20,
  },
  header: {
    color: 'black',
  },
  text: {
    'text-align': 'left',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
};

const Invalid = () => (
  <div>
    <ExclamationTriangleFill style={styles.icon} />
    <h3 style={styles.header}>No data available</h3>
    <p style={styles.text}>
      The current page is not compatible with the Fusion Browser Extension.
      The extension requires a Fusion Engine version of 3.3.0 or greater.
    </p>
  </div>
);

export default Invalid;
