const SubmitButton = ({ title, isLoading }) => {
  return (
    <button type="submit" disabled={isLoading} className="submit-button">
      {isLoading ? "Chargement..." : title}
    </button>
  );
};

export default SubmitButton;
