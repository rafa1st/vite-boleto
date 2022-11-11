
import "../login/Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-frame">
        <section className="right-side">
          <p>right</p>
          <div className="logo">logo</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            corporis voluptatem.
          </p>
        </section>

        <div className="center-line" />

        <section className="left-side">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Insira seu nome"/>
                <input type="password" name="password" id="password" placeholder="Insira sua senha"/>
                <button>Login</button>
            </form>
            

        </section>
      </div>
    </div>
  );
}
