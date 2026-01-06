const translations = { 
    en: { 
        search: "Search pet...", demand: "Dem", normal: "Normal", rainbow: "Rainbow", updated: "Last Update",
        sortHigh: "Value: High to Low", sortLow: "Value: Low to High", calcTitle: "Trade Calculator", addSideLabel: "Add pets to side:",
        sideThem: "Their Offer (Left)", sideYou: "Your Offer (Right)", labelThem: "Them", labelYou: "You", fair: "Fair Trade",
        resetBtn: "Reset", empty: "Empty", bestSellers: "Best Sellers",
        infoTitle: "Guide & Terms", infoSubtitle: "Learn how to trade like a pro",
        t1T: "What is Demand?", t1D: "Demand determines how popular a pet is. <br><br><strong>10/10:</strong> Everyone wants it, easy overpays.<br><strong>1/10:</strong> Nobody wants it, very hard to trade.",
        t2T: "What is O/C?", t2D: "Short for <strong>'Owners Choice'</strong>. Used for extremely rare pets where the owner decides what offer is good enough. There is no fixed price.",
        t3T: "How to use Calculator?", t3D: "Click on a value (Normal/Rainbow) to add it to the trade. It helps you see if your trade is a Win, Loss, or Fair.",
        t4T: "Accuracy", t4D: "Values are based on real-time market trends and top player trades. They are updated frequently.",
        t5T: "Golden Pets", t5D: "Their price is the same as Rainbow because the Rainbow Machine doesn't work like the Golden Machine where you have a chance to upgrade.",
        guessTitle: "Guess the Value!", score: "Score", miniGames: "Mini Games",
        tradeTitle: "Trade Simulator", youGive: "You Give", youGet: "You Get", win: "Win", fair: "Fair", loss: "Loss",
        leaderboard: "Leaderboard", play: "Play", nickname: "Nickname", set: "Set", nickTaken: "Nickname already taken!", saved: "Nickname saved!",
        tradeMode: "Trading Simulator", quizMode: "Quiz about Values"
    }, 
    pl: { 
        search: "Szukaj peta...", demand: "Dem", normal: "Normalny", rainbow: "Tęczowy", updated: "Ostatnia Akt.",
        sortHigh: "Wartość: Od najwyższej", sortLow: "Wartość: Od najniższej", calcTitle: "Kalkulator Handlu", addSideLabel: "Dodaj do strony:",
        sideThem: "Oferta Innego (Lewo)", sideYou: "Twoja Oferta (Prawo)", labelThem: "Inny", labelYou: "Ty", fair: "Uczciwa Wymiana",
        resetBtn: "Reset", empty: "Puste", bestSellers: "Bestsellery",
        infoTitle: "Poradnik i Terminy", infoSubtitle: "Naucz się handlować jak profesjonalista",
        t1T: "Co to jest Demand?", t1D: "Demand (Popyt) określa popularność peta. <br><br><strong>10/10:</strong> Każdy go szuka, łatwe overpay'e.<br><strong>1/10:</strong> Nikt go nie chce, bardzo ciężko go wymienić.",
        t2T: "Co znaczy O/C?", t2D: "Skrót od <strong>'Owners Choice'</strong>. Używany przy najrzadszych petach, gdzie właściciel sam wybiera najlepszą dla niego ofertę. Nie ma stałej ceny.",
        t3T: "Jak używać kalkulatora?", t3D: "Kliknij w wartość peta, aby dodać go do wymiany. Kalkulator pokaże Ci, czy zyskujesz (Win), czy tracisz (Loss) na wymianie.",
        t4T: "Dokładność", t4D: "Wartości bazują na aktualnych trendach rynkowych i wymianach topowych graczy. Są regularnie odświeżane.",
        t5T: "Golden Pets", t5D: "Cena ich jest taka sama jak rainbow poniewaz maszyna rainbow nie dziala jak maszyna golden ze ma sie x% na ulepszenie peta",
        guessTitle: "Zgadnij Wartość!", score: "Wynik", miniGames: "Mini Gry",
        tradeTitle: "Symulator Wymian", youGive: "Dajesz", youGet: "Dostajesz", win: "Win", fair: "Fair", loss: "Loss",
        leaderboard: "Topka", play: "Graj", nickname: "Twój Nick", set: "Ustaw", nickTaken: "Nick jest już zajęty!", saved: "Zapisano nick!",
        tradeMode: "Symulator Wymian", quizMode: "Quiz o Wartościach"
    },
    es: { 
        search: "Buscar mascota...", demand: "Dem", normal: "Normal", rainbow: "Arcoíris", updated: "Última Act.",
        sortHigh: "Valor: Alto a Bajo", sortLow: "Valor: Bajo a Alto", calcTitle: "Calculadora de Intercambio", addSideLabel: "Añadir al lado:",
        sideThem: "Su Oferta (Izq)", sideYou: "Tu Oferta (Der)", labelThem: "Ellos", labelYou: "Tú", fair: "Intercambio Justo",
        resetBtn: "Reiniciar", empty: "Vacío", bestSellers: "Más Vendidos",
        infoTitle: "Guía y Términos", infoSubtitle: "Aprende a intercambiar como un pro",
        t1T: "¿Qué es la Demanda?", t1D: "La demanda determina la popularidad. <br><br><strong>10/10:</strong> Todos la quieren, sobrepagos fáciles.<br><strong>1/10:</strong> Nadie la quiere, difícil de intercambiar.",
        t2T: "¿Qué es O/C?", t2D: "Abreviatura de <strong>'Owners Choice'</strong>. Usado para mascotas muy raras donde el dueño decide qué oferta es suficiente. No hay precio fijo.",
        t3T: "¿Cómo usar la Calculadora?", t3D: "Haz clic en un valor para añadirlo. Te ayuda a ver si tu intercambio es Ganancia (Win), Pérdida (Loss) o Justo (Fair).",
        t4T: "Precisión", t4D: "Los valores se basan en tendencias de mercado en tiempo real y se actualizan frecuentemente.",
        t5T: "Mascotas Doradas", t5D: "Su precio es el mismo que Rainbow porque la Máquina Rainbow no funciona como la Máquina Dorada donde tienes probabilidad de mejorar.",
        guessTitle: "¡Adivina el Valor!", score: "Puntuación", miniGames: "Minijuegos",
        tradeTitle: "Simulador de Comercio", youGive: "Das", youGet: "Recibes", win: "Ganancia", fair: "Justo", loss: "Pérdida",
        leaderboard: "Clasificación", play: "Jugar", nickname: "Apodo", set: "Fijar", nickTaken: "¡Apodo ya en uso!", saved: "¡Apodo guardado!",
        tradeMode: "Simulador de Comercio", quizMode: "Cuestionario de Valores"
    },
    de: { 
        search: "Suche Haustier...", demand: "Nachfrage", normal: "Normal", rainbow: "Regenbogen", updated: "Letztes Update",
        sortHigh: "Wert: Hoch bis Niedrig", sortLow: "Wert: Niedrig bis Hoch", calcTitle: "Handelsrechner", addSideLabel: "Haustiere hinzufügen:",
        sideThem: "Deren Angebot (Links)", sideYou: "Dein Angebot (Rechts)", labelThem: "Andere", labelYou: "Du", fair: "Fairer Handel",
        resetBtn: "Reset", empty: "Leer", bestSellers: "Bestseller",
        infoTitle: "Anleitung & Begriffe", infoSubtitle: "Lerne wie ein Profi zu handeln",
        t1T: "Was ist Nachfrage?", t1D: "Nachfrage bestimmt die Beliebtheit. <br><br><strong>10/10:</strong> Jeder will es, leichte Overpays.<br><strong>1/10:</strong> Niemand will es, schwer zu handeln.",
        t2T: "Was ist O/C?", t2D: "Abkürzung für <strong>'Owners Choice'</strong>. Wird für extrem seltene Haustiere verwendet, bei denen der Besitzer entscheidet. Kein fester Preis.",
        t3T: "Wie benutzt man den Rechner?", t3D: "Klicke auf einen Wert, um ihn hinzuzufügen. Er zeigt dir, ob der Handel ein Gewinn (Win), Verlust (Loss) oder Fair ist.",
        t4T: "Genauigkeit", t4D: "Werte basieren auf Echtzeit-Markttrends und Trades von Top-Spielern. Sie werden häufig aktualisiert.",
        t5T: "Goldene Haustiere", t5D: "Ihr Preis ist derselbe wie bei Rainbow, da die Rainbow-Maschine nicht wie die Gold-Maschine funktioniert, bei der man eine Chance auf Verbesserung hat.",
        guessTitle: "Rate den Wert!", score: "Punktzahl", miniGames: "Minispiele",
        tradeTitle: "Handelssimulator", youGive: "Du gibst", youGet: "Du bekommst", win: "Gewinn", fair: "Fair", loss: "Verlust",
        leaderboard: "Bestenliste", play: "Spielen", nickname: "Spitzname", set: "Setzen", nickTaken: "Spitzname bereits vergeben!", saved: "Spitzname gespeichert!",
        tradeMode: "Handelssimulator", quizMode: "Werte-Quiz"
    }
};

const NOW = Date.now();
const INITIAL_DATA = [
{ name: "Frosty Snowman", category: "Limited", img: "images/Frosty Snowman.png", updated: NOW, normal: { val: "100", demand: "7" }, rainbow: { val: "450", demand: "8" } },
{ name: "5M North Star", category: "Limited", img: "images/5m North Star.png", updated: NOW, normal: { val: "280", demand: "8" }, rainbow: { val: "1,300", demand: "8" } },
{ name: "5M Frost Monarch", category: "Limited", img: "images/5m Frost Monarch.png", updated: NOW, normal: { val: "1,150", demand: "8" }, rainbow: { val: "5,000", demand: "9" } },
{ name: "Frost Spirit", category: "Limited", img: "images/Frost Spirit.png", updated: NOW, normal: { val: "50", demand: "7" }, rainbow: { val: "230", demand: "7" } },
{ name: "Christmas Tree", category: "Limited", img: "images/Christmas Tree.png", updated: NOW, normal: { val: "140", demand: "7" }, rainbow: { val: "620", demand: "8" } },
{ name: "Gilded Seraphim", category: "Limited", img: "images/Gilded Seraphim.png", updated: NOW, normal: { val: "950", demand: "8" }, rainbow: { val: "4,200", demand: "9" } },
{ name: "2026 Balloons", category: "Limited", img: "images/2026 Balloons.png", updated: NOW, normal: { val: "100", demand: "7" }, rainbow: { val: "450", demand: "7" } },
{ name: "New Year Dragon", category: "Limited", img: "images/New Year Dragon.png", updated: NOW, normal: { val: "450", demand: "7" }, rainbow: { val: "2,000", demand: "8" } },
{ name: "2026 Overlord", category: "Limited", img: "images/2026 Overlord.png", updated: NOW, normal: { val: "1,200", demand: "8" }, rainbow: { val: "5,400", demand: "9" } },
{ name: "Frost Queen", category: "Secrets", img: "images/Frost Queen.png", updated: NOW, normal: { val: "25", demand: "2" }, rainbow: { val: "115", demand: "3" } },
{ name: "Divine Dragon", category: "Secrets", img: "images/Divine Dragon.png", updated: NOW, normal: { val: "30", demand: "3" }, rainbow: { val: "135", demand: "3" } },
{ name: "2026 Star", category: "Percentage", img: "images/2026 Star.png", updated: NOW, normal: { val: "1,100", demand: "8" }, rainbow: { val: "4,850", demand: "9" } },
{ name: "Weeping Angel", category: "Secrets", img: "images/Weeping Angel.png", updated: NOW, normal: { val: "35", demand: "3" }, rainbow: { val: "160", demand: "3" } },
{ name: "Sakura Dominator", category: "Secrets", img: "images/Sakura Dominator.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
{ name: "Raging Claw", category: "Secrets", img: "images/Raging Claw.png", updated: NOW, normal: { val: "45", demand: "3" }, rainbow: { val: "200", demand: "3" } },
{ name: "Social Dragon", category: "Percentage", img: "images/Social Dragon.png", updated: NOW, normal: { val: "6", demand: "2" }, rainbow: { val: "30", demand: "5" } },
{ name: "Magmasaur", category: "Secrets", img: "images/Magmasaur.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
{ name: "Candy God", category: "Secrets", img: "images/Candy God.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
{ name: "Chocolate Marauder", category: "Secrets", img: "images/Chocolate Marauder.png", updated: NOW, normal: { val: "65", demand: "3" }, rainbow: { val: "300", demand: "4" } },
{ name: "Orca Dominator", category: "Secrets", img: "images/Orca Dominator.png", updated: NOW, normal: { val: "45", demand: "3" }, rainbow: { val: "200", demand: "4" } },
{ name: "King Kraken", category: "Secrets", img: "images/King Kraken.png", updated: NOW, normal: { val: "160", demand: "4" }, rainbow: { val: "750", demand: "5" } },
{ name: "Luminary Star", category: "Secrets", img: "images/Luminary Star.png", updated: NOW, normal: { val: "110", demand: "7" }, rainbow: { val: "500", demand: "8" } },
{ name: "Cosmic Chaos", category: "Secrets", img: "images/Cosmic Chaos.png", updated: NOW, normal: { val: "500", demand: "8" }, rainbow: { val: "2,250", demand: "8" } },
{ name: "Top 250", category: "Leaderboard", img: "images/Top 250.png", updated: NOW, normal: { val: "550", demand: "7" }, rainbow: { val: "2,500", demand: "8" } },
{ name: "Top 100", category: "Leaderboard", img: "images/Top 100.png", updated: NOW, normal: { val: "1,250", demand: "7" }, rainbow: { val: "4,800", demand: "8" } },
{ name: "Top 10", category: "Leaderboard", img: "images/Top 10.png", updated: NOW, normal: { val: "12,000", demand: "8" }, rainbow: { val: "O/C", demand: "10" } },
{ name: "Celestial Candycane", category: "Percentage", img: "images/Celestial Candycane.png", updated: NOW, normal: { val: "850", demand: "8" }, rainbow: { val: "4,050", demand: "9" } },
{ name: "Hooded Krampus", category: "Percentage", img: "images/Hooded Krampus.png", updated: NOW, normal: { val: "450", demand: "8" }, rainbow: { val: "2,000", demand: "8" } },
{ name: "Disco Lord", category: "Percentage", img: "images/Disco Lord.png", updated: NOW, normal: { val: "1,400", demand: "8" }, rainbow: { val: "6,300", demand: "9" } },
{ name: "Starshine Warrior", category: "Mythical", img: "images/Starshine Warrior.png", updated: NOW, normal: { val: "2", demand: "7" }, rainbow: { val: "20", demand: "9" } },
{ name: "Kairos", category: "Percentage", img: "images/Kairos.png", updated: NOW, normal: { val: "100", demand: "7" }, rainbow: { val: "350", demand: "7" } },
{ name: "Paradox", category: "Percentage", img: "images/Paradox.png", updated: NOW, normal: { val: "130", demand: "7" }, rainbow: { val: "600", demand: "7" } },
{ name: "Chronos", category: "Percentage", img: "images/Chronos.png", updated: NOW, normal: { val: "9,500", demand: "9" }, rainbow: { val: "O/C", demand: "10" } },
{ name: "Gift Mimic", category: "Percentage", img: "images/Gift Mimic.png", updated: NOW, normal: { val: "40", demand: "5" }, rainbow: { val: "180", demand: "6" } },
{ name: "Snow Thief", category: "Percentage", img: "images/Snow Thief.png", updated: NOW, normal: { val: "45", demand: "5" }, rainbow: { val: "200", demand: "6" } },
{ name: "Evil Snowman", category: "Percentage", img: "images/Evil Snowman.png", updated: NOW, normal: { val: "65", demand: "6" }, rainbow: { val: "300", demand: "7" } },
{ name: "Krampus", category: "Percentage", img: "images/Krampus.png", updated: NOW, normal: { val: "2,700", demand: "8" }, rainbow: { val: "O/C", demand: "10" } }
];

const MOCK_LB = [
    { name: "CosmoDev", score: 50 },
    { name: "Szakirek", score: 45 },
    { name: "Boniec", score: 40 }
];

const firebaseConfig = {
    apiKey: "AIzaSyAkqaAjyLGKUjsuWfJycGp98WB5J_5WHSU",
    authDomain: "leaderboard-61d31.firebaseapp.com",
    projectId: "leaderboard-61d31",
    storageBucket: "leaderboard-61d31.firebasestorage.app",
    messagingSenderId: "580124836764",
    appId: "1:580124836764:web:3946a876cce42bb731fe59",
    measurementId: "G-BT7ZBNXETZ",
    databaseURL: "https://leaderboard-61d31-default-rtdb.firebaseio.com" // Sprawdz w konsoli Firebase czy to dobry URL!
};

let db;
try { if(firebaseConfig.apiKey) { firebase.initializeApp(firebaseConfig); db = firebase.firestore(); if(firebase.analytics) firebase.analytics(); } } catch(e) { console.log("Firebase not setup - using LocalStorage"); }
// -----------------------------

let currentLang = 'en', currentCategory = 'Best Sellers', yourItems = [], theirItems = [], pets = INITIAL_DATA, gameScore = 0, playerName = localStorage.getItem('cosmo_player_name') || "Player";

const parseVal = (v) => { if (!v || v.toString().toUpperCase() === "O/C") return 0; return parseFloat(v.toString().replace(/,/g, '')) || 0; };
const formatVal = (v) => { if (v >= 1000000) return (v / 1000000).toFixed(2) + "M"; if (v >= 1000) return (v / 1000).toFixed(1) + "K"; return v.toLocaleString(); };

function timeAgo(date) {
    const seconds = Math.floor((Date.now() - date) / 1000);
    let interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}

function updateStaticTexts() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => { const key = el.getAttribute('data-t'); if (t[key]) el.innerText = t[key]; });
    document.getElementById('search').placeholder = t.search;
}

function changeLanguage() { currentLang = document.getElementById('langSelect').value; updateStaticTexts(); render(); updateCalc(); }
function setCategory(cat) { currentCategory = cat; document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('onclick').includes(`'${cat}'`))); render(); }

function render() { 
    const grid = document.getElementById('petGrid'), infoPanel = document.getElementById('infoPanel'), gamePanel = document.getElementById('gamePanel');
    const search = document.getElementById('search').value.toLowerCase(), sort = document.getElementById('sortOrder').value, t = translations[currentLang]; 

    if (currentCategory === 'Informations') {
        grid.classList.add('hidden'); infoPanel.classList.remove('hidden'); gamePanel.classList.add('hidden');
        document.getElementById('infoTitle').innerText = t.infoTitle;
        document.getElementById('infoSubtitle').innerText = t.infoSubtitle;
        document.getElementById('term1Title').innerHTML = `<span class="w-1 h-4 bg-blue-500 rounded-full"></span> ${t.t1T}`;
        document.getElementById('term1Desc').innerHTML = t.t1D;
        document.getElementById('term2Title').innerHTML = `<span class="w-1 h-4 bg-blue-500 rounded-full"></span> ${t.t2T}`;
        document.getElementById('term2Desc').innerHTML = t.t2D;
        document.getElementById('term3Title').innerHTML = `<span class="w-1 h-4 bg-blue-500 rounded-full"></span> ${t.t3T}`;
        document.getElementById('term3Desc').innerHTML = t.t3D;
        document.getElementById('term4Title').innerHTML = `<span class="w-1 h-4 bg-blue-500 rounded-full"></span> ${t.t4T}`;
        document.getElementById('term4Desc').innerHTML = t.t4D;
        document.getElementById('term5Title').innerHTML = `<span class="w-1 h-4 bg-blue-500 rounded-full"></span> ${t.t5T}`;
        document.getElementById('term5Desc').innerHTML = t.t5D;
        return;
    } else if (currentCategory === 'Mini Games') {
        grid.classList.add('hidden'); infoPanel.classList.add('hidden'); gamePanel.classList.remove('hidden');
        showMiniGamesSelection();
        return;
    } else { grid.classList.remove('hidden'); infoPanel.classList.add('hidden'); gamePanel.classList.add('hidden'); }

    grid.innerHTML = ""; 
    let filtered = pets.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search);
        if (!matchesSearch) return false;
        if (currentCategory === 'Best Sellers') {
            const demandScore = parseInt(p.normal.demand) || 0;
            return demandScore >= 8; 
        }
        return p.category === currentCategory;
    }); 
    if (sort === "valHigh") filtered.sort((a, b) => parseVal(b.normal.val) - parseVal(a.normal.val)); 
    if (sort === "valLow") filtered.sort((a, b) => parseVal(a.normal.val) - parseVal(b.normal.val)); 

    const getDemandColor = (d) => {
        const n = parseInt(d) || 0;
        if(n >= 8) return "text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]"; // Mega Zielony
        if(n >= 4) return "text-yellow-400";
        return "text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]"; // Mega Czerwony
    };

    filtered.forEach(p => { 
        grid.innerHTML += `
            <div class="glass p-3 rounded-xl pet-card flex flex-col transition border-t-2 border-blue-500/50 animate-fadeIn">
                <div class="h-20 flex items-center justify-center bg-blue-900/10 rounded-lg mb-2 p-1 relative overflow-hidden">
                    <img src="${p.img}" class="max-h-full drop-shadow-xl z-10" onerror="this.onerror=null; this.src='https://placehold.co/400x400/0f172a/3b82f6?text=IMAGE+COMING+SOON';">
                    <div class="absolute inset-0 bg-blue-500/5 blur-xl"></div>
                    <span class="absolute top-1 right-1 text-[6px] bg-blue-600/30 px-1.5 py-0.5 rounded text-blue-300 font-bold uppercase tracking-widest z-20">${p.category}</span>
                </div>
                <h3 class="orbitron text-xs text-white mb-1 truncate text-left">${p.name}</h3>
                <div class="grid grid-cols-2 gap-1.5 mb-2 mt-1">
                    <button onclick="addToCalc('${p.name}', '${p.normal.val}', 'Normal')" class="flex flex-col justify-center items-center bg-blue-500/10 p-1.5 rounded-lg hover:bg-blue-600/20 transition group border border-blue-500/20 hover:border-blue-500/50">
                        <div class="flex items-center gap-1 mb-0.5">
                            <span class="text-[8px] text-blue-300 uppercase">${t.normal}</span>
                            <span class="text-[8px] ${getDemandColor(p.normal.demand)} bg-slate-800 px-1 rounded">${p.normal.demand}/10</span>
                        </div>
                        <span class="text-xs text-white group-hover:text-blue-400">${p.normal.val}</span>
                    </button>
                    <button onclick="addToCalc('${p.name}', '${p.rainbow.val}', 'Rainbow')" class="flex flex-col justify-center items-center bg-pink-500/10 p-1.5 rounded-lg hover:bg-pink-600/20 transition group border border-pink-500/20 hover:border-pink-500/50">
                        <div class="flex items-center gap-1 mb-0.5">
                            <span class="text-[8px] uppercase text-rainbow">${t.rainbow}</span>
                            <span class="text-[8px] ${getDemandColor(p.rainbow.demand)} bg-slate-800 px-1 rounded">${p.rainbow.demand}/10</span>
                        </div>
                        <span class="text-xs text-white group-hover:text-pink-400">${p.rainbow.val}</span>
                    </button>
                </div>
                <div class="mt-auto text-[8px] text-slate-500 tracking-widest text-center italic">${t.updated}: ${timeAgo(p.updated)}</div>
            </div>`; 
    }); 
} 

function addToCalc(name, val, type) { if(val === "O/C") return; const side = document.getElementById('sideSwitch').value; if(side === 'you') yourItems.push({ name, val, type }); else theirItems.push({ name, val, type }); updateCalc(); } 
function removeFromSide(idx, side) { if(side === 'you') yourItems.splice(idx, 1); else theirItems.splice(idx, 1); updateCalc(); } 
function clearCalc() { yourItems = []; theirItems = []; updateCalc(); } 

function updateCalc() { 
    const yourList = document.getElementById('yourList'), theirList = document.getElementById('theirList');
    const yourTotalEl = document.getElementById('yourTotal'), theirTotalEl = document.getElementById('theirTotal'), diffEl = document.getElementById('tradeDiff'), t = translations[currentLang];
    let totalYou = 0, totalThem = 0;

    const renderItem = (item, idx, side) => `
        <div class="flex flex-col bg-white/5 p-2 rounded-xl text-[10px] border-l-2 ${item.type === 'Rainbow' ? 'border-pink-500' : 'border-blue-500'} animate-fadeIn mb-2 text-left">
            <div class="flex justify-between items-start mb-1">
                <span class="text-white truncate w-full">${item.name}</span>
                <button onclick="removeFromSide(${idx}, '${side}')" class="text-red-500 ml-1 px-1 hover:scale-125 transition">×</button>
            </div>
            <div class="flex justify-between items-center opacity-60 italic"><span>${t[item.type.toLowerCase()]}</span><span class="text-blue-400">${item.val}</span></div>
        </div>`;

    yourList.innerHTML = yourItems.length ? "" : `<p class='text-[10px] text-center opacity-30 italic py-4'>${t.empty}</p>`;
    yourItems.forEach((item, idx) => { totalYou += parseVal(item.val); yourList.innerHTML += renderItem(item, idx, 'you'); });
    theirList.innerHTML = theirItems.length ? "" : `<p class='text-[10px] text-center opacity-30 italic py-4'>${t.empty}</p>`;
    theirItems.forEach((item, idx) => { totalThem += parseVal(item.val); theirList.innerHTML += renderItem(item, idx, 'them'); });

    yourTotalEl.innerText = formatVal(totalYou); theirTotalEl.innerText = formatVal(totalThem);
    const diff = totalThem - totalYou;
    if(diff > 0) { diffEl.innerText = `Win: +${formatVal(diff)}`; diffEl.className = "text-center text-green-500 py-3 bg-green-500/10 rounded-xl"; }
    else if(diff < 0) { diffEl.innerText = `Loss: ${formatVal(diff)}`; diffEl.className = "text-center text-red-500 py-3 bg-red-500/10 rounded-xl"; }
    else { diffEl.innerText = t.fair; diffEl.className = "text-center text-gray-400 py-3 bg-white/5 rounded-xl"; }
} 

async function getLeaderboard(type) {
    if (db) {
        try {
            const q = await db.collection(type).orderBy("score", "desc").limit(10).get();
            return q.docs.map(doc => doc.data());
        } catch (e) { console.error(e); return MOCK_LB; }
    }
    // Fallback to LocalStorage (jesli nie ma Firebase)
    const key = `lb_${type}`;
    let data = JSON.parse(localStorage.getItem(key));
    if (!data) { data = [...MOCK_LB]; localStorage.setItem(key, JSON.stringify(data)); }
    return data;
}

async function saveScore(type, score) {
    if (db) {
        try {
            await db.collection(type).add({ name: playerName, score: score, date: Date.now() });
            return;
        } catch (e) { console.error(e); }
    }
    // Fallback to LocalStorage
    const key = `lb_${type}`;
    let data = await getLeaderboard(type);
    data.push({ name: playerName, score: score });
    data.sort((a, b) => b.score - a.score);
    data = data.slice(0, 10);
    localStorage.setItem(key, JSON.stringify(data));
}

async function saveNickname() {
    const inp = document.getElementById('nicknameInput');
    const newName = inp.value.trim();
    if(!inp || !newName) return;

    const t = translations[currentLang];
    if(newName === playerName) { alert(t.saved); return; }

    let isTaken = false;
    if (db) {
        try {
            const q1 = await db.collection('guess').where('name', '==', newName).limit(1).get();
            if (!q1.empty) isTaken = true;
            else {
                const q2 = await db.collection('trade').where('name', '==', newName).limit(1).get();
                if (!q2.empty) isTaken = true;
            }
        } catch (e) { console.error(e); }
    } else {
        const check = (list) => list.some(u => u.name.toLowerCase() === newName.toLowerCase());
        if (check(JSON.parse(localStorage.getItem('lb_guess')) || MOCK_LB) || check(JSON.parse(localStorage.getItem('lb_trade')) || MOCK_LB)) isTaken = true;
    }

    if(isTaken) { alert(t.nickTaken); return; }

    playerName = newName;
    localStorage.setItem('cosmo_player_name', playerName);
    alert(t.saved);

    // ODŚWIEŻ LEADERBOARD i mini games panel
    const gamePanel = document.getElementById('gamePanel');
    if(gamePanel && gamePanel.innerHTML.includes('nicknameInput')) {
        const type = gamePanel.innerHTML.includes('trade') ? 'trade' : 'guess';
        showGameMenu(type);
    }
}

function showMiniGamesSelection() {
    const t = translations[currentLang];
    const gamePanel = document.getElementById('gamePanel');
    gamePanel.innerHTML = `
        <div class="max-w-2xl mx-auto text-center animate-fadeIn">
            <h2 class="orbitron text-3xl text-white mb-8">${t.miniGames}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button onclick="showGameMenu('trade')" class="glass p-8 rounded-3xl border border-violet-500/30 hover:bg-violet-500/10 hover:scale-105 transition group">
                    <div class="text-4xl mb-4">⚖️</div>
                    <h3 class="orbitron text-xl text-violet-400 mb-2 group-hover:text-violet-300">${t.tradeMode}</h3>
                </button>
                <button onclick="showGameMenu('guess')" class="glass p-8 rounded-3xl border border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition group">
                    <div class="text-4xl mb-4">❓</div>
                    <h3 class="orbitron text-xl text-cyan-400 mb-2 group-hover:text-cyan-300">${t.quizMode}</h3>
                </button>
            </div>
        </div>`;
}

async function showGameMenu(type) {
    const t = translations[currentLang];
    const lb = (await getLeaderboard(type)).slice(0, 3);
    const title = type === 'guess' ? t.guessTitle : t.tradeTitle;
    const onclick = type === 'guess' ? 'startMiniGame()' : 'startTradeSim()';
    
    let lbHtml = lb.map((p, i) => `
        <div class="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10 ${i===0 ? 'border-yellow-500/50 bg-yellow-500/10' : ''}">
            <div class="flex items-center gap-3">
                <span class="font-bold ${i===0 ? 'text-yellow-400 text-xl' : 'text-slate-400'}">#${i+1}</span>
                <span class="text-white font-bold">${p.name} ${i===0 ? '👑' : ''}</span>
            </div>
            <span class="text-blue-400 font-mono">${p.score}</span>
        </div>`).join('');

    const gamePanel = document.getElementById('gamePanel');
    gamePanel.innerHTML = `
        <div class="max-w-md mx-auto text-center animate-fadeIn">
            <h2 class="orbitron text-3xl text-white mb-6">${title}</h2>
            <div class="glass p-6 rounded-3xl mb-6 border border-white/10">
                <h3 class="text-blue-400 uppercase text-xs font-bold mb-4 tracking-widest">${t.leaderboard}</h3>
                <div class="space-y-2 mb-6">${lbHtml}</div>
                <div class="flex gap-2"><input type="text" id="nicknameInput" value="${playerName}" placeholder="${t.nickname}" class="bg-slate-950/50 border border-white/10 rounded-xl px-4 py-2 text-white text-center w-full outline-none focus:border-blue-500 transition"><button onclick="saveNickname()" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-bold transition">${t.set}</button></div>
            </div>
            <button onclick="${onclick}" class="bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-105 transition text-white text-xl font-bold py-4 px-12 rounded-2xl shadow-xl shadow-blue-600/20">${t.play}</button>
        </div>`;
}

function startMiniGame() {
    gameScore = 0;
    nextRound();
}

const niceRound = (num) => {
    if (num >= 1000) return Math.round(num / 100) * 100;
    if (num >= 100) return Math.round(num / 10) * 10;
    return num;
};

function nextRound() {
    const t = translations[currentLang];
    const pet = pets[Math.floor(Math.random() * pets.length)];
    const isRainbow = Math.random() > 0.5;
    const type = isRainbow ? 'Rainbow' : 'Normal';
    const valStr = isRainbow ? pet.rainbow.val : pet.normal.val;
    
    if(valStr === 'O/C') { nextRound(); return; }
    
    const correctVal = parseVal(valStr);
    let options = [correctVal];
    while(options.length < 3) {
        const ratio = 0.8 + (Math.random() * 0.4); // Generate values between -20% and +20%
        let wrong = Math.floor(correctVal * ratio);
        wrong = niceRound(wrong); // Round to make it look realistic
        if(wrong === correctVal) wrong = correctVal + (Math.random() > 0.5 ? (correctVal >= 100 ? 10 : 5) : (correctVal >= 100 ? -10 : -5));
        if(!options.includes(wrong) && wrong !== correctVal && wrong > 0) options.push(wrong);
    }
    options.sort(() => Math.random() - 0.5);
    
    const gamePanel = document.getElementById('gamePanel');
    gamePanel.innerHTML = `
        <div class="max-w-md mx-auto">
            <h2 class="orbitron text-3xl text-cyan-400 mb-2">${t.guessTitle}</h2>
            <p class="text-slate-400 mb-6">${t.score}: <span class="text-white font-bold text-xl">${gameScore}</span></p>
            <div class="bg-slate-900/50 p-6 rounded-3xl border border-cyan-500/20 mb-8 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <img src="${pet.img}" class="w-32 h-32 mx-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-4 transition hover:scale-110 duration-300">
                <h3 class="text-xl font-bold text-white">${pet.name}</h3>
                <p class="text-sm uppercase tracking-widest ${isRainbow ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500' : 'text-blue-400'} font-bold mt-1">${isRainbow ? t.rainbow : t.normal}</p>
            </div>
            <div class="grid grid-cols-1 gap-3">
                ${options.map(opt => `<button onclick="checkGameAnswer(this, ${opt}, ${correctVal})" class="game-btn glass p-4 rounded-xl text-lg font-bold hover:bg-cyan-500/20 hover:border-cyan-500 transition border border-white/5 text-slate-200">${formatVal(opt)}</button>`).join('')}
            </div>
        </div>`;
}

function checkGameAnswer(btn, selected, correct) {
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach(b => b.disabled = true);
    if(selected === correct) {
        btn.classList.remove('glass', 'border-white/5'); btn.classList.add('bg-green-500', 'border-green-400', 'text-white', 'shadow-[0_0_20px_rgba(34,197,94,0.4)]'); btn.innerText += ` ✅`;
        gameScore++; setTimeout(nextRound, 1500);
    } else {
        btn.classList.remove('glass', 'border-white/5'); btn.classList.add('bg-red-500', 'border-red-400', 'text-white'); btn.innerText += ` ❌`;
        buttons.forEach(b => { if(b.innerText.includes(formatVal(correct))) b.classList.add('bg-green-500/50', 'text-white'); });
        setTimeout(async () => { await saveScore('guess', gameScore); showGameMenu('guess'); }, 2000);
    }
}

let tradeYou = [], tradeThem = [];

function startTradeSim() {
    gameScore = 0;
    nextTradeRound();
}

function nextTradeRound() {
    const t = translations[currentLang];
    tradeYou = []; tradeThem = [];
    
    // Generate random pets for both sides
    for(let i=0; i < (Math.random() > 0.7 ? 2 : 1); i++) tradeYou.push(getRandomPet());
    for(let i=0; i < (Math.random() > 0.7 ? 2 : 1); i++) tradeThem.push(getRandomPet());

    const renderSide = (items) => items.map(i => `
        <div class="bg-slate-900/50 p-3 rounded-xl border border-white/5 flex items-center gap-3">
            <img src="${i.img}" class="w-10 h-10">
            <div class="text-left">
                <p class="text-xs font-bold text-white truncate w-24">${i.name}</p>
                <p class="text-[9px] ${i.type === 'Rainbow' ? 'text-pink-400' : 'text-blue-400'} uppercase">${i.type === 'Rainbow' ? t.rainbow : t.normal}</p>
            </div>
        </div>`).join('');

    const gamePanel = document.getElementById('gamePanel');
    gamePanel.innerHTML = `
        <div class="max-w-lg mx-auto trade-game-container">
            <h2 class="orbitron text-3xl text-violet-400 mb-2">${t.tradeTitle}</h2>
            <p class="text-slate-400 mb-6">${t.score}: <span class="text-white font-bold text-xl">${gameScore}</span></p>
            
            <div class="flex gap-4 mb-8">
                <div class="flex-1 bg-white/5 p-4 rounded-2xl border border-green-500/20">
                    <h3 class="text-green-400 uppercase text-xs font-bold mb-3">${t.youGive}</h3>
                    <div class="space-y-2">${renderSide(tradeYou)}</div>
                </div>
                <div class="flex items-center text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></div>
                <div class="flex-1 bg-white/5 p-4 rounded-2xl border border-red-500/20">
                    <h3 class="text-red-400 uppercase text-xs font-bold mb-3">${t.youGet}</h3>
                    <div class="space-y-2">${renderSide(tradeThem)}</div>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-3">
                <button onclick="checkTradeAnswer(this, 'win')" class="game-btn glass p-4 rounded-xl text-lg font-bold hover:bg-green-500/20 hover:border-green-500 transition border border-white/5 text-green-400">${t.win}</button>
                <button onclick="checkTradeAnswer(this, 'fair')" class="game-btn glass p-4 rounded-xl text-lg font-bold hover:bg-gray-500/20 hover:border-gray-500 transition border border-white/5 text-gray-300">${t.fair}</button>
                <button onclick="checkTradeAnswer(this, 'loss')" class="game-btn glass p-4 rounded-xl text-lg font-bold hover:bg-red-500/20 hover:border-red-500 transition border border-white/5 text-red-400">${t.loss}</button>
            </div>
        </div>`;
}

function getRandomPet() {
    const p = pets[Math.floor(Math.random() * pets.length)];
    const isRainbow = Math.random() > 0.3;
    const val = parseVal(isRainbow ? p.rainbow.val : p.normal.val);
    if(val === 0) return getRandomPet();
    return { name: p.name, img: p.img, type: isRainbow ? 'Rainbow' : 'Normal', val: val };
}

function checkTradeAnswer(btn, guess) {
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach(b => b.disabled = true);
    
    const totalYou = tradeYou.reduce((a, b) => a + b.val, 0);
    const totalThem = tradeThem.reduce((a, b) => a + b.val, 0);
    
    let result = 'fair';
    if (totalThem > totalYou * 1.1) result = 'win';
    else if (totalThem < totalYou * 0.9) result = 'loss';

    if(guess === result) {
        btn.classList.remove('glass', 'border-white/5'); btn.classList.add('bg-green-500', 'text-white');
        gameScore++; setTimeout(nextTradeRound, 1500);
    } else {
        btn.classList.remove('glass', 'border-white/5'); btn.classList.add('bg-red-500', 'text-white');
        setTimeout(async () => { await saveScore('trade', gameScore); showGameMenu('trade'); }, 2000);
    }
}

function initOnlineCounter() {
    const el = document.getElementById('userCount');
    if (!el) return;
    
    try {
        const rtdb = firebase.database();
        const connectionsRef = rtdb.ref('connections');
        const connectedRef = rtdb.ref('.info/connected');

        connectedRef.on('value', (snap) => {
            if (snap.val() === true) {
                const con = connectionsRef.push();
                con.onDisconnect().remove();
                con.set(true);
            }
        });

        connectionsRef.on('value', (snap) => { el.innerText = snap.numChildren() || 1; });
    } catch (e) { console.log("RTDB Error:", e); el.innerText = "1"; }
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        btn.classList.remove('translate-y-20', 'opacity-0');
    } else {
        btn.classList.add('translate-y-20', 'opacity-0');
    }
});

document.addEventListener('DOMContentLoaded', () => { updateStaticTexts(); render(); initOnlineCounter(); });






