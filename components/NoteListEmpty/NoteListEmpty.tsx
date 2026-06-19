import css from './NoteListEmpty.module.css';

const NoteListEmpty = () => {
  return (
    <>
      <h2 className={css.title}>
        We&#39;re sorry, but we couldn&#39;t find any notes.
      </h2>
    </>
  );
};

export default NoteListEmpty;
