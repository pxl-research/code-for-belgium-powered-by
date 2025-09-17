<template>
  <div class="page-container">
    <div class="fixed-viewport">

        <nav class="navbar">
          <div class="nav-left">
            <button class="menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="nav-center">
            <img
              src="/logo-sint-vincentius.png"
              alt="Sint-Vincentius Logo"
              class="logo"
            />
          </div>
          <div class="nav-right">
            <button class="login-btn">Aanmelden</button>
          </div>
        </nav>
        <main>
          <div class="welcome">
            <h1>Welkom bij de Sint-Vincentius App!</h1>
            <p>Meld je aan om gebruik te maken van de app.</p>
          </div>
        </main>
        <footer>
          <div class="cfb-footer">
            <a
              href="https://codeforbelgium.org"
              target="_blank"
              rel="noopener"
              aria-label="Meer info over Code For Belgium"
            >
              <img src="/c4b-V.png"
                alt=""
                class="cfb-logo-small"
              />
              <span>Powered by <strong>Code For Belgium</strong></span>
            </a>
          </div>
        </footer>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #e9ecef;
  padding: 2rem;
}

.fixed-viewport {
  width: 1200px;
  height: 800px;
  overflow: auto;
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  background: white;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: #fff;
  color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.nav-left, .nav-center, .nav-right {
  display: flex;
  align-items: center;
  height: 90px;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 0;
  margin: 0;
}

.menu-btn span {
  display: block;
  width: 32px;
  height: 5px;
  background: #111;
  margin: 4px 0;
  border-radius: 3px;
  transition: 0.3s;
}

.logo {
  height: 70px;
  width: 70px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.login-btn {
  background: #000;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px 28px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.login-btn:hover,
.login-btn:focus {
  background: #222;
}

.fixed-viewport main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 90px - 80px);
  width: 100%;
  flex: 1;
}

.welcome {
  text-align: center;
}

.welcome h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.welcome p {
  font-size: 1.3em;
  color: #222;
}

.fixed-viewport footer {
  background: #003366;
  color: #fff;
  padding: 1.5em 0.5em;
  text-align: center;
  margin-top: auto;
}

.cfb-footer {
  margin: 0 auto;
  padding-top: 0.5em;
  border-top: 1px solid rgba(255,255,255,0.2);
  max-width: 400px;
}

.cfb-footer a {
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0.5em;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.cfb-footer a:hover, .cfb-footer a:focus {
  background-color: rgba(255,255,255,0.1);
}

.cfb-logo-small {
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
  border-radius: 50%;
  background: #fff;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0.5em 1em;
  }
  .logo {
    height: 50px;
    width: 50px;
  }
  .login-btn {
    padding: 10px 18px;
    font-size: 1em;
  }
  .welcome h1 {
    font-size: 1.5em;
  }
  .welcome p {
    font-size: 1em;
  }
  .cfb-footer {
    font-size: 0.9em;
    max-width: 95vw;
  }
}
</style>
