import css from './Loader.module.css';

const Loading = () => {
  return (
    <div className={css.loadingCenter}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Loading;
