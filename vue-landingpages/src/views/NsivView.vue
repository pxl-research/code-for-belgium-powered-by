<template>
  <div class="page-container">
    <div class="fixed-viewport">

        <header>
          <h1>Zoek vrije plaatsen</h1>
          <p>Selecteer de steden/gemeenten waar je je kind(eren) graag naar school laat gaan</p>
        </header>
        <main>
          <div class="main-layout">
            <div class="main-image">
              <img src="/nsiv.png" alt="Naar School in Vlaanderen logo" />
            </div>
            <section class="main-content">
              <h2>Ontdek in welke scholen nog vrije plaatsen beschikbaar zijn</h2>
              <ol>
                <li>Selecteer aan de linkerkant de <strong>steden/gemeenten</strong> waar je je kind(eren) graag naar school laat gaan</li>
                <li>Selecteer het <strong>schooljaar</strong></li>
                <li>Selecteer het <strong>onderwijsniveau</strong>: kleuter, lager of secundair</li>
                <li>Selecteer het onderwijs <strong>type</strong>: gewoon onderwijs, buitengewoon onderwijs of OKAN</li>
              </ol>
              <p>Na je keuze krijg je meteen de resultaten te zien. Deze kan je vervolgens nog verder verfijnen a.d.h.v. de filters.</p>
            </section>
          </div>
        </main>
        <footer>
          <div class="footer-content">
            <nav>
              <a href="#">Privacy Policy</a> |
              <a href="#">Cookie policy</a> |
              <a href="#">Disclaimer</a>
            </nav>
            <p>Deze applicatie is mogelijk gemaakt door Stad Sint-Truiden, Limburgse LOP's, LOP Diest en LOP Aarschot i.s.m. Onderwijskiezer en Yappa.</p>
            <div class="cfb-footer">
              <a href="https://codeforbelgium.org" target="_blank" rel="noopener" aria-label="Meer info over Code For Belgium">
                <img src="/c4b-V.png" alt="" class="cfb-logo-small" />
                <span>Powered by <strong>Code For Belgium</strong></span>
              </a>
            </div>
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
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #222;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.fixed-viewport header {
  background: #003366;
  color: #fff;
  padding: 1em;
  text-align: center;
}

.fixed-viewport main {
  padding: 2em;
  flex: 1;
}

.main-layout {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2em;
}

.main-image, .main-content {
  flex: 1;
  width: 50%;
}

.main-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.main-content {
  background: #fff;
  border-radius: 8px;
  padding: 1.5em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.fixed-viewport footer {
  background: #003366;
  color: #fff;
  padding: 1.5em;
  text-align: center;
}

.fixed-viewport footer nav a {
  color: #fff;
  text-decoration: underline;
  margin: 0 0.5em;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.cfb-footer {
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px solid rgba(255,255,255,0.2);
  width: 100%;
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

@media (max-width: 800px) {
  .main-layout {
    flex-direction: column;
    align-items: center;
  }
  
  .main-image, .main-content {
    width: 100%;
  }
  
  .main-image {
    margin-bottom: 1em;
  }
  
  .main-image img {
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .fixed-viewport main {
    padding: 1em;
  }
  
  .main-content {
    padding: 1em;
  }
  
  .cfb-footer {
    font-size: 0.9em;
  }
}
</style>
