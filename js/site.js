/* Partes comuns: cabeçalho, rodapé, WhatsApp e pop-up */
(function () {
  const C = window.M3;
  const WA_ICON = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1 2.1 3.2 5.1 4.5c1.9.8 2.6.9 3.6.7.6-.1 1.9-.8 2.1-1.5s.3-1.3.2-1.5-.2-.2-.5-.3z"/></svg>';
  window.M3_ICONS = { WA_ICON };

  window.waLink = function (msg) {
    return 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(msg || 'Olá, Estampas DTF Express! Vim pelo site e quero fazer um orçamento.');
  };
  window.brl = function (v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); };

  const page = document.body.dataset.page || '';
  const link = (href, label, key) => `<a href="${href}" class="${page === key ? 'active' : ''}">${label}</a>`;

  const header = document.getElementById('site-header');
  if (header) {
    header.outerHTML = `
      <div class="topbar">🚀 Enviamos para <b>todo o Brasil</b> · Sem taxa de montagem de arte · Envios todos os dias</div>
      <header class="site">
        <div class="container nav">
          <a class="brand" href="index.html" aria-label="Estampas DTF Express — início"><img src="assets/logo.png" alt="Estampas DTF Express"></a>
          <button class="burger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="menu">
            ${link('index.html', 'Home', 'home')}
            ${link('index.html#como-funciona', 'Como montar', '')}
            ${link('index.html#aplicacao', 'Aplicação', '')}
            ${link('index.html#tour', 'Nossa loja', '')}
            ${link('index.html#faq', 'Dúvidas', '')}
            <a class="btn btn-primary btn-sm" href="montador.html">Criar DTF</a>
          </nav>
        </div>
      </header>`;
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', () => {
      const o = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', o);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.outerHTML = `
      <footer class="site">
        <div class="container foot">
          <div>
            <div class="logo-box"><img src="assets/logo.png" alt="Estampas DTF Express"></div>
            <p>Especializados em impressão e distribuição de estampas digitais DTF em alta definição industrial.</p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a href="index.html">Home</a>
            <a href="montador.html">Montar DTF online</a>
            <a href="index.html#aplicacao">Como aplicar</a>
            <a href="index.html#faq">Dúvidas frequentes</a>
          </div>
          <div>
            <h4>Atendimento</h4>
            <a href="${waLink()}" target="_blank" rel="noopener">WhatsApp ${C.whatsappExibicao}</a>
            <a href="${C.instagram}" target="_blank" rel="noopener">Instagram ${C.instagramUser}</a>
          </div>
          <div>
            <h4>Envios</h4>
            <p>Produção rápida e envios todos os dias para todo o Brasil.</p>
            <a href="index.html#tour">Conheça a nossa loja →</a>
          </div>
        </div>
        <div class="container copy">
          <span>© ${new Date().getFullYear()} Estampas DTF Express — Todos os direitos reservados.</span>
          <a class="dev" href="https://infinityview360.com.br" target="_blank" rel="noopener">Desenvolvido por <img src="assets/infinityview.png" alt="Infinity View" width="88" height="17"> infinityview360.com.br</a>
        </div>
      </footer>
      <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${WA_ICON}</a>`;
  }

  document.querySelectorAll('[data-wa]').forEach(a => {
    a.href = waLink(a.dataset.wa || undefined);
    a.target = '_blank'; a.rel = 'noopener';
  });

  /* ---------- pop-up de boas-vindas ---------- */
  (function popup() {
    if (page === 'montador') return;
    const KEY = 'dtfexpress-popup-visto';
    try { if (Date.now() - (+localStorage.getItem(KEY) || 0) < 24 * 36e5) return; } catch (e) {}
    const el = document.createElement('div');
    el.className = 'promo';
    el.innerHTML = `
      <div class="promo-box" role="dialog" aria-modal="true" aria-labelledby="promo-t">
        <button class="promo-x" aria-label="Fechar">×</button>
        <div class="promo-top">
          <img src="assets/icone.png" alt="Estampas DTF Express">
          <span class="tag"><i></i> Novidade</span>
        </div>
        <h3 id="promo-t">Monte seu DTF online em minutos</h3>
        <p>Envie suas artes, escolha tamanho e quantidade e veja o preço na hora. O arquivo sai pronto para impressão em <b>300 DPI</b>, <b>sem taxa de montagem</b>.</p>
        <ul>
          <li>✔ DTF Têxtil 58 cm por <b>${brl(C.impressoes.textil.precoMetro)}/m</b></li>
          <li>✔ DTF UV 29 cm por <b>${brl(C.impressoes.uv.precoMetro)}/m</b></li>
          <li>✔ Envios todos os dias para todo o Brasil</li>
        </ul>
        <div class="promo-acts">
          <a class="btn btn-primary btn-block" href="montador.html">Montar meu DTF agora →</a>
          <a class="btn btn-wa btn-block" href="${waLink('Olá, Estampas DTF Express! Vim pelo site e quero um orçamento.')}" target="_blank" rel="noopener">${WA_ICON} Falar no WhatsApp</a>
        </div>
        <button class="promo-later">Agora não</button>
      </div>`;
    let last;
    function open() {
      last = document.activeElement;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      el.querySelector('.promo-acts a').focus({ preventScroll: true });
      document.addEventListener('keydown', onKey);
      try { localStorage.setItem(KEY, Date.now()); } catch (e) {}
    }
    function close() {
      el.classList.remove('open');
      setTimeout(() => el.remove(), 250);
      document.removeEventListener('keydown', onKey);
      if (last && last.focus) last.focus({ preventScroll: true });
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') { // mantém o foco dentro do pop-up
        const f = [...el.querySelectorAll('a,button')]; const i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    }
    el.addEventListener('click', e => { if (e.target === el || e.target.closest('.promo-x,.promo-later')) close(); });
    setTimeout(open, 5000);
  })();
})();
