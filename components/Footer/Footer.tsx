import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css.copyright}>
          © {new Date().getFullYear()} NoteHub. All rights reserved.
        </p>
        <div className={css.wrap}>
          <p>Developer: Dmytro Levchenko</p>
          <p>
            Contact us:
            <a href="mailto:dl.qubb@gmail.com"> dl.qubb@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
