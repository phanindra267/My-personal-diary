import { useState } from 'react';

const DiaryForm = ({ onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    onAddEntry(newEntry);
    setTitle('');
    setContent('');
  };

  return (
    <form className="diary-form" onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        required
      />
      <button type="submit">Save Entry</button>
    </form>
  );
};

export default DiaryForm;