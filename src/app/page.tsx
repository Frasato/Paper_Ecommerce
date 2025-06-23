import "@/styles/login.module.scss";

export default function Login(){
  return(
    <main>
      <div>
        <div>
          <h1>Olá, bem-vindo de volta</h1>
          <h2>A nossa papelaria</h2>
        </div>
        <form>
          <label>Email</label>
          <input type="text"/>
          <label>Senha</label>
          <input type="password"/>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}