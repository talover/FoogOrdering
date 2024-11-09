import './Description.scss';

export const Description = ({ className = '', children }) => {
  return (
    <div className={`fo-description ${className}`}>
      {children}
    </div>
  );
};