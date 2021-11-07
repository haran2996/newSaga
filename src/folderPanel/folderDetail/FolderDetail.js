export const FolderDetail = ({ id, label, count }) => {
  return (
    <>
      <img
        className="folder-label-icon"
        alt={id}
        src={`/assets/icons/${id}.png`}
      />
      <span className="folder-label">{label}</span>
      {count && count !== 0 && (
        <span className="folder-label-number">{count}</span>
      )}
    </>
  );
};
