(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Edytuj poniższe treści, aby dodać własne wspomnienia i wiadomości.
  const reasons = [
    ["Twój uśmiech", "Ma w sobie coś, co potrafi rozjaśnić nawet zwyczajny dzień. Lubię moment, gdy pojawia się zupełnie niespodziewanie."],
    ["Nasze rozmowy", "Lubię, że możemy rozmawiać o ważnych rzeczach i o drobiazgach. Z Tobą nawet zwykła rozmowa staje się częścią dnia, na którą czekam."],
    ["Twoja obecność", "Przy Tobie czuję bliskość, której nie trzeba ubierać w wielkie słowa. Sama świadomość, że jesteś obok, dużo dla mnie znaczy."],
    ["Twoja troska", "Doceniam te małe gesty, w których widać, że pamiętasz i zauważasz. To właśnie z takich rzeczy składa się poczucie bezpieczeństwa."],
    ["Wspólne żarty", "Nasz śmiech to jeden z tych dźwięków, które chciałbym zachować w pamięci na długo. Nawet mały żart potrafi zostać ze mną cały dzień."],
    ["To, jaka jesteś", "Lubię poznawać Twój sposób patrzenia na świat. Jest w Tobie wiele rzeczy, których wciąż chcę się dowiadywać."],
    ["Nasze małe chwile", "Nie wszystko, co ważne, musi być wielkim wydarzeniem. Cenię zwykłe momenty, które stają się wyjątkowe, bo przeżywamy je razem."],
    ["Twoją siłę", "Podziwiam, jak znajdujesz w sobie siłę, nawet gdy dzień nie układa się po Twojej myśli. Nie musisz zawsze dawać rady sama."],
    ["Zaufanie", "Dziękuję za szczerość i za przestrzeń, w której możemy mówić sobie, co czujemy. Chcę dbać o to, co razem budujemy."],
    ["Nasze plany", "Lubię myśleć o rzeczach, które możemy jeszcze przeżyć. Nie muszą być wielkie; ważne, że jest w nich miejsce dla nas."],
    ["Twoją wrażliwość", "To, że potrafisz dostrzegać emocje i małe szczegóły, jest dla mnie bardzo cenne. Dzięki Tobie sam częściej zwalniam i patrzę uważniej."],
    ["Każdy kolejny dzień", "Po tych ośmiu miesiącach nadal chcę poznawać Cię lepiej. Lubię naszą historię właśnie dlatego, że wciąż wspólnie ją tworzymy."]
  ];

  const letters = [
    { title: "Gdy jest Ci smutno", label: "Otwórz, gdy jest Ci smutno", message: "Majciu,\n\nJeśli dziś jest Ci ciężko, nie musisz udawać, że wszystko jest w porządku. Możesz czuć to, co czujesz, i dać sobie tyle czasu, ile potrzebujesz. Chciałbym móc teraz usiąść obok Ciebie, posłuchać albo po prostu pobyć w ciszy.\n\nPamiętaj, że nie jesteś dla mnie ważna tylko wtedy, kiedy się uśmiechasz. Jesteś ważna zawsze. Jeden trudniejszy dzień nie zmienia tego, ile dla mnie znaczysz. Jeśli masz ochotę, napisz do mnie. Jestem po Twojej stronie.\n\nPrzesyłam Ci tyle ciepła, ile zmieści się w tych słowach. 💙" },
    { title: "Gdy za mną tęsknisz", label: "Otwórz, gdy za mną tęsknisz", message: "Majciu,\n\nJeśli za mną tęsknisz, chcę, żebyś wiedziała, że ja też noszę Cię w myślach, nawet kiedy akurat nie możemy być obok siebie. Lubię wracać pamięcią do naszych rozmów, śmiechu i tych drobnych chwil, które są tylko nasze.\n\nOdległość między wiadomościami nie mierzy tego, jak bardzo mi zależy. Możesz wrócić do tego listu, kiedy tylko zechcesz, a potem opowiedzieć mi, za czym dziś najbardziej tęsknisz. Chętnie posłucham.\n\nDo następnej wspólnej chwili. 💙" },
    { title: "Gdy potrzebujesz siły", label: "Otwórz, gdy potrzebujesz siły", message: "Majciu,\n\nNie musisz dziś rozwiązać wszystkiego naraz. Wystarczy jeden mały krok, a potem następny. Masz w sobie więcej siły, niż czasem czujesz, ale nie musisz niczego nikomu udowadniać ani radzić sobie ze wszystkim samotnie.\n\nJestem z Ciebie dumny nie tylko za to, co Ci wychodzi. Podziwiam Cię także za próby, za odpoczynek, gdy go potrzebujesz, i za szczerość wobec siebie. Jeśli mogę Cię jakoś wesprzeć, powiedz mi. A jeśli potrzebujesz tylko przypomnienia: wierzę w Ciebie i jestem obok.\n\nPowoli też jest do przodu. 💙" },
    { title: "Gdy chcesz się uśmiechnąć", label: "Otwórz, gdy chcesz się uśmiechnąć", message: "Hej, Majciu!\n\nTo jest oficjalne przypomnienie, że masz prawo zrobić sobie przerwę. Rozluźnij ramiona, weź spokojny oddech i pomyśl o czymś, co zawsze poprawia Ci humor. A jeśli akurat nic nie przychodzi do głowy, wyobraź sobie mnie, jak bardzo poważnie próbuję napisać idealny list, a potem trzy razy poprawiam jedno zdanie.\n\nMam nadzieję, że chociaż kącik ust drgnął. Jeśli nie, przyjmuję kolejną próbę i obiecuję lepszy żart następnym razem. Lubię Twój uśmiech, ale jeszcze bardziej chcę, żebyś czuła się dobrze po swojemu.\n\nŚciskam Cię mocno. 💙" }
  ];

  const finalLetter = "Majciu,\n\nosiem miesięcy temu zaczęliśmy wspólną historię. Dziś chcę Ci przede wszystkim podziękować za to, że jesteś jej częścią. Za rozmowy, śmiech, za Twoją obecność i za wszystkie zwyczajne chwile, które dzięki Tobie mają dla mnie szczególne znaczenie.\n\nPrzez ten czas mogliśmy poznawać siebie coraz lepiej. Wiem, że każdy związek ma dni lekkie i takie, które wymagają więcej cierpliwości. Nie chcę obiecywać, że zawsze wszystko będzie idealne. Chcę za to pamiętać, jak ważne są dla nas szacunek, szczerość, uważne słuchanie i starania, nawet kiedy nie wszystko przychodzi łatwo.\n\nDziękuję, że mogę dzielić z Tobą małe radości, plany i codzienność. Lubię to, co już razem przeżyliśmy, i z ciekawością myślę o kolejnych rozdziałach. Chcę nadal poznawać Cię, wspierać i budować z Tobą relację, w której oboje możemy być sobą.\n\nDziękuję Ci za te 8 miesięcy, Majciu. 💙 Nasza historia nadal się pisze";

  const secretMessages = [
    { title: "Mała wiadomość", message: "Wśród wszystkich gwiazd i tak najchętniej odnajduję Ciebie. 💙" },
    { title: "Trochę nieba dla Ciebie", message: "Pomyśl życzenie. A potem pamiętaj, że niektóre najpiękniejsze rzeczy tworzymy razem, małymi krokami." },
    { title: "Nasza historia", message: "Jesteś ważną częścią mojej historii 💙", burst: true },
    { title: "List ukryty w gwiazdach", message: "Gdyby każda ważna chwila z Tobą była gwiazdą, nasze niebo rozświetlałoby znacznie więcej niż tylko tę noc. Dziękuję, że jesteś obok i tworzysz ze mną coś, do czego chce się wracać.", burst: true },
    { title: "Jeszcze jeden sekret", message: "To małe przypomnienie na później: jesteś doceniana, ważna i bardzo lubiana. Nie tylko od święta." }
  ];

  const monthlyStories = [
    { key: "2026-02", period: "26–28 LUTEGO 2026", title: "Luty — nasz początek", marker: "♥", prompt: "Od 26 lutego zaczyna się nasz wspólny rozdział. Dopisz tu swoje wspomnienie z pierwszych dni." },
    { key: "2026-03", period: "01–31 MARCA 2026", title: "Marzec", marker: "✦", prompt: "Jakie wspomnienie z marca chcesz zachować?" },
    { key: "2026-04", period: "01–30 KWIETNIA 2026", title: "Kwiecień", marker: "✧", prompt: "Zapisz tutaj chwilę, do której chcesz wrócić." },
    { key: "2026-05", period: "01–31 MAJA 2026", title: "Maj", marker: "✦", prompt: "Co miłego wydarzyło się w maju?" },
    { key: "2026-06", period: "01–30 CZERWCA 2026", title: "Czerwiec", marker: "✧", prompt: "Dodaj własną notatkę, wspomnienie albo kilka słów dla Majci." },
    { key: "2026-07", period: "01–31 LIPCA 2026", title: "Lipiec", marker: "✦", prompt: "Jaką chwilę z lipca warto zapamiętać?" },
    { key: "2026-08", period: "01–31 SIERPNIA 2026", title: "Sierpień", marker: "✧", prompt: "Wpisz tu coś, co chcesz zachować z sierpnia." },
    { key: "2026-09", period: "01–30 WRZEŚNIA 2026", title: "Wrzesień", marker: "✦", prompt: "Zapisz swoje wspomnienie z września." },
    { key: "2026-10", period: "01–27 PAŹDZIERNIKA 2026", title: "Październik — osiem miesięcy", marker: "♥", prompt: "Dopisz kilka słów o Waszych ośmiu miesiącach i o tym dniu." }
  ];

  const monthlyTimeline = $("#monthly-timeline");
  monthlyStories.forEach((month) => {
    const article = document.createElement("article");
    article.className = "timeline-item monthly-item reveal";
    article.innerHTML = `<span class="timeline-marker" aria-hidden="true">${month.marker}</span><p class="timeline-date">${month.period}</p><h3>${month.title}</h3><textarea class="month-note" id="note-${month.key}" aria-label="Notatka: ${month.title}" maxlength="1200" placeholder="${month.prompt}"></textarea><p class="month-note-status" id="status-${month.key}" aria-live="polite"></p>`;
    const note = $("textarea", article);
    const status = $(".month-note-status", article);
    const storageKey = `majcia-story-note-${month.key}`;
    try {
      note.value = localStorage.getItem(storageKey) || "";
    } catch {
      status.textContent = "Zapis lokalny jest niedostępny w tej przeglądarce.";
    }
    note.addEventListener("input", () => {
      try {
        localStorage.setItem(storageKey, note.value);
        status.textContent = "Zapisano na tym urządzeniu.";
      } catch {
        status.textContent = "Nie udało się zapisać. Skopiuj notatkę przed zamknięciem strony.";
      }
    });
    monthlyTimeline.append(article);
  });

  const starField = $("#star-field");
  for (let index = 0; index < 68; index += 1) {
    const star = document.createElement("span");
    star.className = "sky-star";
    star.style.left = `${(index * 47 + 13) % 100}%`;
    star.style.top = `${(index * 67 + 9) % 92}%`;
    star.style.animationDelay = `${(index % 9) * 0.31}s`;
    star.style.opacity = `${0.35 + (index % 6) * 0.1}`;
    starField.append(star);
  }

  const reasonsGrid = $("#reasons-grid");
  reasons.forEach(([title, message], index) => {
    const button = document.createElement("button");
    button.className = "reason-card reveal";
    button.type = "button";
    button.dataset.reason = String(index);
    button.setAttribute("aria-haspopup", "dialog");
    button.innerHTML = `<span class="reason-symbol" aria-hidden="true">${index % 3 === 1 ? "✦" : "♡"}</span><span class="reason-title">${title}</span><span class="reason-hint">odkryj więcej <span aria-hidden="true">↗</span></span>`;
    reasonsGrid.append(button);
  });

  const envelopeGrid = $("#envelope-grid");
  letters.forEach((letter, index) => {
    const button = document.createElement("button");
    button.className = "envelope-card reveal";
    button.type = "button";
    button.dataset.letter = String(index);
    button.setAttribute("aria-haspopup", "dialog");
    button.innerHTML = `<span class="envelope-icon" aria-hidden="true">${index % 2 ? "✉" : "♡"}</span><strong>${letter.label}</strong><small>otwórz list <span aria-hidden="true">↗</span></small>`;
    envelopeGrid.append(button);
  });

  const dialog = $("#message-dialog");
  const dialogTitle = $("#dialog-title");
  const dialogMessage = $("#dialog-message");
  function openMessage(title, message) {
    dialogTitle.textContent = title;
    dialogMessage.replaceChildren(...message.split("\n\n").map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    }));
    dialog.showModal();
  }

  $(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("cancel", () => dialog.close());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) dialog.close();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  $("#reasons-grid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-reason]");
    if (card) openMessage(reasons[Number(card.dataset.reason)][0], reasons[Number(card.dataset.reason)][1]);
  });
  $("#envelope-grid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-letter]");
    if (card) openMessage(letters[Number(card.dataset.letter)].title, letters[Number(card.dataset.letter)].message);
  });
  $("#final-letter-button").addEventListener("click", () => openMessage("Mam Ci jeszcze coś do powiedzenia…", finalLetter));

  function launchHearts() {
    const container = $("#heart-burst");
    for (let index = 0; index < 28; index += 1) {
      const heart = document.createElement("span");
      heart.className = "burst-heart";
      heart.textContent = index % 4 === 0 ? "✦" : "♥";
      heart.style.left = `${(index * 37 + 4) % 100}%`;
      heart.style.animationDelay = `${(index % 8) * 0.09}s`;
      heart.style.fontSize = `${12 + (index % 5) * 4}px`;
      heart.style.setProperty("--drift", `${(index % 2 ? 1 : -1) * (12 + index % 7 * 9)}px`);
      heart.style.setProperty("--spin", `${index % 2 ? 26 : -26}deg`);
      container.append(heart);
      window.setTimeout(() => heart.remove(), 3900);
    }
  }

  $$("[data-secret]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const secret = secretMessages[Number(trigger.dataset.secret)];
      trigger.classList.add("secret-found");
      if (secret.burst) launchHearts();
      openMessage(secret.title, secret.message);
    });
  });

  function addCalendarMonths(date, amount) {
    const next = new Date(date);
    const day = next.getDate();
    next.setDate(1);
    next.setMonth(next.getMonth() + amount);
    const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
    next.setDate(Math.min(day, lastDay));
    return next;
  }

  function updateCounter() {
    const start = new Date(2026, 1, 26, 0, 0, 0);
    const now = new Date();
    if (now < start) {
      ["months", "days", "hours", "minutes", "seconds"].forEach((id) => { $(`#${id}`).textContent = "0"; });
      $("#counter-note").textContent = "nasza wspólna historia zaczyna się 26 lutego 2026";
      return;
    }
    let cursor = new Date(start);
    let months = 0;
    while (addCalendarMonths(cursor, 1) <= now) {
      cursor = addCalendarMonths(cursor, 1);
      months += 1;
    }
    let days = 0;
    while (true) {
      const nextDay = new Date(cursor);
      nextDay.setDate(nextDay.getDate() + 1);
      if (nextDay > now) break;
      cursor = nextDay;
      days += 1;
    }
    const remaining = Math.max(0, now.getTime() - cursor.getTime());
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    $("#months").textContent = String(months);
    $("#days").textContent = String(days);
    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#minutes").textContent = String(minutes).padStart(2, "0");
    $("#seconds").textContent = String(seconds).padStart(2, "0");
  }
  updateCounter();
  window.setInterval(updateCounter, 1000);

  const audio = $("#background-music");
  const musicButton = $("#music-toggle");
  const musicStatus = $("#music-status");
  function showMissingAudio() {
    audio.pause();
    musicButton.textContent = "▶";
    musicButton.setAttribute("aria-label", "Odtwórz muzykę");
    musicButton.title = "Odtwórz muzykę";
    musicStatus.textContent = "Nie udało się odtworzyć pliku Legendary Lovers.mp3. Sprawdź, czy to poprawny plik MP3.";
  }
  async function startMusic() {
    try {
      await audio.play();
      if (audio.error || audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        showMissingAudio();
        return false;
      }
      musicStatus.textContent = "Muzyka towarzyszy naszej historii.";
      return true;
    } catch (error) {
      if (audio.error || audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || error.name === "NotSupportedError") {
        showMissingAudio();
      } else {
        musicStatus.textContent = "Przeglądarka zablokowała autoodtwarzanie. Dotknij strony lub użyj przycisku odtwarzania.";
      }
      return false;
    }
  }
  audio.volume = Number($("#volume").value);
  $("#volume").addEventListener("input", (event) => { audio.volume = Number(event.target.value); });
  musicButton.addEventListener("click", async () => {
    if (!audio.paused) {
      audio.pause();
      return;
    }
    await startMusic();
  });
  function startAfterInteraction(event) {
    if (event.target instanceof Element && event.target.closest("#music-toggle")) return;
    document.removeEventListener("pointerdown", startAfterInteraction, true);
    document.removeEventListener("keydown", startAfterInteraction, true);
    if (audio.paused) void startMusic();
  }
  document.addEventListener("pointerdown", startAfterInteraction, true);
  document.addEventListener("keydown", startAfterInteraction, true);
  void startMusic();
  audio.addEventListener("playing", () => {
    if (audio.error || audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) { showMissingAudio(); return; }
    musicButton.textContent = "Ⅱ";
    musicButton.setAttribute("aria-label", "Wstrzymaj muzykę");
    musicButton.title = "Wstrzymaj muzykę";
  });
  audio.addEventListener("pause", () => { musicButton.textContent = "▶"; musicButton.setAttribute("aria-label", "Odtwórz muzykę"); musicButton.title = "Odtwórz muzykę"; });
  audio.addEventListener("error", showMissingAudio);

  const motionToggle = $("#motion-toggle");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let savedMotion;
  try { savedMotion = localStorage.getItem("majcia-reduce-motion"); } catch { savedMotion = null; }
  motionToggle.checked = savedMotion === null ? motionQuery.matches : savedMotion === "true";
  function setMotionPreference() { document.body.classList.toggle("reduce-motion", motionToggle.checked); }
  motionToggle.addEventListener("change", () => {
    setMotionPreference();
    try { localStorage.setItem("majcia-reduce-motion", String(motionToggle.checked)); } catch { /* Pamięć przeglądarki może być niedostępna. */ }
  });
  motionQuery.addEventListener?.("change", (event) => {
    if (savedMotion === null) { motionToggle.checked = event.matches; setMotionPreference(); }
  });
  setMotionPreference();

  if ("IntersectionObserver" in window && !motionToggle.checked) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((element) => observer.observe(element));
  } else {
    $$(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
})();
