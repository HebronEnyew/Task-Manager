const IconButton = ({ icon, onClick, color = 'indigo', size = 'md' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full bg-${color}-100 text-${color}-600 hover:bg-${color}-200 transition-colors`}
    >
      {React.cloneElement(icon, { className: sizes[size] })}
    </button>
  );
};

export default IconButton;