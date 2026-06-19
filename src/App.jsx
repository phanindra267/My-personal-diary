import { useState, useEffect } from 'react';
import DiaryForm from './components/DiaryForm.jsx';
import DiaryList from './components/DiaryList.jsx';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const addEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(newEntries));
  };

  const deleteEntry = (id) => {
    const newEntries = entries.filter(entry => entry.id !== id);
    setEntries(newEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(newEntries));
  };

  return (
    <div className="container">
      <header>
        <h1>My Personal Diary</h1>
        <p>Write your thoughts, memories, and experiences</p>
      </header>
      <DiaryForm onAddEntry={addEntry} />
      <DiaryList entries={entries} onDeleteEntry={deleteEntry} />
    </div>
  );
}

export default App;