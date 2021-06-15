import './Modal.scss'
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function ModalLogin() {
  return (
    <div className="App">
      <div>
    <header className="registration_header">
      <div className="container">
        <div className="registration_header__wrapper">
          <Link className="registration_header__link" to ="/">
            <img className="registration_header__logo" src={Logo} alt="site logo" width="109" height="51"/>
          </Link>
        </div>
      </div>
    </header>
    <main className="site_main">
    <section className="registration">
      <div className="container">
        <div className="registration__wrapper">
          <h1 className="registration__heading">Sign in</h1>
          <p className="registration__text">Sign in and start managing your candidates!</p>
          <form className="registration__wrapper_form">
            <input className="registration__wrapper_login" type="email" name="login" placeholder="Login" required/>
            <input className="registration__wrapper_psw registration__wrapper_login" type="password" name="password" placeholder="Password" required/>
            <div className="registration__wrapper_inner">
              <label className="registration__wrapper_label" for="remember">
                <input className="registration__wrapper_check" type="checkbox" id="remember"/>
                <span className="registration__wrapper_box"></span>
                Remember me
              </label>
              <a className="registration__wrapper_forgot" href="/" >Forgot password?</a>
            </div>
            <button className="registration__wrapper_btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer_bg"></footer>
  </div>
    </div>
  );
}

export default ModalLogin;
