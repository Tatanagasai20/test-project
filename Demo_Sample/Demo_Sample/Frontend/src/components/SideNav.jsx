import { FaComments, FaUserTie, FaTruck, FaBoxes } from 'react-icons/fa';
 
export default function SideNav() {
  return (
    <aside style={styles.sideNav}>
      <h3 style={styles.heading}>Channels</h3>
      <ul style={styles.list}>
        <li style={styles.item}><FaComments style={styles.icon} /> General</li>
        <li style={styles.item}><FaUserTie style={styles.icon} /> HR</li>
        <li style={styles.item}><FaTruck style={styles.icon} /> Procurement</li>
        <li style={styles.item}><FaBoxes style={styles.icon} /> Inventory</li>
      </ul>
    </aside>
  );
}
 
const styles = {
  sideNav: {
    width: '220px',
    backgroundColor: '#fffde9',
    padding: '2rem 1rem',
    borderRight: '1px solid #ddd',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '16px',
    fontWeight: '600',
    color: '#444',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 0',
    cursor: 'pointer',
    color: '#333',
    fontSize: '14px',
  },
  icon: {
    fontSize: '18px',
    color: '#555',
  },
};
