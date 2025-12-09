import '../../styles/EstadoBadge.css';

const EstadoBadge = ({ label, variant = 'amarillo', className = '' }) => {
  const allowed = ['amarillo', 'azul', 'verde', 'rojo'];
  const safeVariant = allowed.includes(variant) ? variant : 'amarillo';
  return (
    <span className={`estado-badge estado-${safeVariant} ${className}`.trim()}>
      {label}
    </span>
  );
};

export default EstadoBadge;
