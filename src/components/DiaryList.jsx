const DiaryList = ({ entries, onDeleteEntry }) => {
  return (
    <div className="entries-list">
      {entries.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#7f8c8d' }}>
          No entries yet. Start writing your first diary entry!
        </p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} className="diary-entry">
            <div className="date">{entry.date}</div>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <button onClick={() => onDeleteEntry(entry.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default DiaryList;