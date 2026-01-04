const translations = { 
    en: { 
        search: "Search pet...", demand: "Dem", normal: "Normal", rainbow: "Rainbow", updated: "Last Update",
        sortHigh: "Value: High to Low", sortLow: "Value: Low to High", calcTitle: "Trade Calculator", addSideLabel: "Add pets to side:",
        sideThem: "Their Offer (Left)", sideYou: "Your Offer (Right)", labelThem: "Them", labelYou: "You", fair: "Fair Trade",
        resetBtn: "Reset Calculator", empty: "Empty", bestSellers: "Best Sellers",
        infoTitle: "Guide & Terms", infoSubtitle: "Learn how to trade like a pro",
        t1T: "What is Demand?", t1D: "Demand determines how popular a pet is. <br><br><strong>10/10:</strong> Everyone wants it, easy overpays.<br><strong>1/10:</strong> Nobody wants it, very hard to trade.",
        t2T: "What is O/C?", t2D: "Short for <strong>'Owners Choice'</strong>. Used for extremely rare pets where the owner decides what offer is good enough. There is no fixed price.",
        t3T: "How to use Calculator?", t3D: "Click on a value (Normal/Rainbow) to add it to the trade. It helps you see if your trade is a Win, Loss, or Fair.",
        t4T: "Accuracy", t4D: "Values are based on real-time market trends and top player trades. They are updated frequently."
    }, 
    pl: { 
        search: "Szukaj peta...", demand: "Dem", normal: "Normalny", rainbow: "Tęczowy", updated: "Ostatnia Akt.",
        sortHigh: "Wartość: Od najwyższej", sortLow: "Wartość: Od najniższej", calcTitle: "Kalkulator Handlu", addSideLabel: "Dodaj do strony:",
        sideThem: "Oferta Innego (Lewo)", sideYou: "Twoja Oferta (Prawo)", labelThem: "Inny", labelYou: "Ty", fair: "Uczciwa Wymiana",
        resetBtn: "Resetuj Kalkulator", empty: "Puste", bestSellers: "Bestsellery",
        infoTitle: "Poradnik i Terminy", infoSubtitle: "Naucz się handlować jak profesjonalista",
        t1T: "Co to jest Demand?", t1D: "Demand (Popyt) określa popularność peta. <br><br><strong>10/10:</strong> Każdy go szuka, łatwe overpay'e.<br><strong>1/10:</strong> Nikt go nie chce, bardzo ciężko go wymienić.",
        t2T: "Co znaczy O/C?", t2D: "Skrót od <strong>'Owners Choice'</strong>. Używany przy najrzadszych petach, gdzie właściciel sam wybiera najlepszą dla niego ofertę. Nie ma stałej ceny.",
        t3T: "Jak używać kalkulatora?", t3D: "Kliknij w wartość peta, aby dodać go do wymiany. Kalkulator pokaże Ci, czy zyskujesz (Win), czy tracisz (Loss) na wymianie.",
        t4T: "Dokładność", t4D: "Wartości bazują na aktualnych trendach rynkowych i wymianach topowych graczy. Są regularnie odświeżane."
    }
};

const NOW = Date.now();
const INITIAL_DATA = [
    { name: "Frosty Snowman", category: "Limited", img: "images/Frosty Snowman.png", updated: NOW, normal: { val: "100", demand: "7" }, rainbow: { val: "450", demand: "8" } },
    { name: "5M North Star", category: "Limited", img: "images/5M North Star.png", updated: NOW, normal: { val: "280", demand: "8" }, rainbow: { val: "1,300", demand: "8" } },
    { name: "5M Frost Monarch", category: "Limited", img: "images/5M Frost Monarch.png", updated: NOW, normal: { val: "1,200", demand: "8" }, rainbow: { val: "5,500", demand: "9" } },
    { name: "Frost Spirit", category: "Limited", img: "images/Frost Spirit.png", updated: NOW, normal: { val: "50", demand: "7" }, rainbow: { val: "230", demand: "7" } },
    { name: "Christmas Tree", category: "Limited", img: "images/Christmas Tree.png", updated: NOW, normal: { val: "140", demand: "7" }, rainbow: { val: "620", demand: "8" } },
    { name: "Gilded Seraphim", category: "Limited", img: "images/Gilded Seraphim.png", updated: NOW, normal: { val: "950", demand: "8" }, rainbow: { val: "4,200", demand: "9" } },
    { name: "2026 Balloons", category: "Limited", img: "images/2026 Balloons.png", updated: NOW, normal: { val: "120", demand: "7" }, rainbow: { val: "540", demand: "7" } },
    { name: "New Year Dragon", category: "Limited", img: "images/New Year Dragon.png", updated: NOW, normal: { val: "500", demand: "7" }, rainbow: { val: "2,200", demand: "8" } },
    { name: "2026 Overlord", category: "Limited", img: "images/2026 Overlord.png", updated: NOW, normal: { val: "1,300", demand: "8" }, rainbow: { val: "5,850", demand: "9" } },
    { name: "Frost Queen", category: "Secrets", img: "images/Frost Queen.png", updated: NOW, normal: { val: "25", demand: "2" }, rainbow: { val: "115", demand: "3" } },
    { name: "Divine Dragon", category: "Secrets", img: "images/Divine Dragon.png", updated: NOW, normal: { val: "30", demand: "3" }, rainbow: { val: "135", demand: "3" } },
    { name: "Weeping Angel", category: "Secrets", img: "images/Weeping Angel.png", updated: NOW, normal: { val: "35", demand: "3" }, rainbow: { val: "160", demand: "3" } },
    { name: "Sakura Dominator", category: "Secrets", img: "images/Sakura Dominator.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
    { name: "Raging Claw", category: "Secrets", img: "images/Raging Claw.png", updated: NOW, normal: { val: "45", demand: "3" }, rainbow: { val: "200", demand: "3" } },
    { name: "Magmasaur", category: "Secrets", img: "images/Magmasaur.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
    { name: "Candy God", category: "Secrets", img: "images/Candy God.png", updated: NOW, normal: { val: "40", demand: "3" }, rainbow: { val: "180", demand: "3" } },
    { name: "Chocolate Marauder", category: "Secrets", img: "images/Chocolate Marauder.png", updated: NOW, normal: { val: "65", demand: "3" }, rainbow: { val: "300", demand: "4" } },
    { name: "Orca Dominator", category: "Secrets", img: "images/Orca Dominator.png", updated: NOW, normal: { val: "45", demand: "3" }, rainbow: { val: "200", demand: "4" } },
    { name: "King Kraken", category: "Secrets", img: "images/King Kraken.png", updated: NOW, normal: { val: "160", demand: "4" }, rainbow: { val: "750", demand: "5" } },
    { name: "Luminary Star", category: "Secrets", img: "images/Luminary Star.png", updated: NOW, normal: { val: "110", demand: "7" }, rainbow: { val: "500", demand: "8" } },
    { name: "Cosmic Chaos", category: "Secrets", img: "images/Cosmic Chaos.png", updated: NOW, normal: { val: "500", demand: "8" }, rainbow: { val: "2,250", demand: "8" } },
    { name: "Top 250", category: "Leaderboard", img: "images/Top 250.png", updated: NOW, normal: { val: "550", demand: "7" }, rainbow: { val: "2,500", demand: "8" } },
    { name: "Top 100", category: "Leaderboard", img: "images/Top 100.png", updated: NOW, normal: { val: "1,250", demand: "7" }, rainbow: { val: "4,800", demand: "8" } },
    { name: "Top 10", category: "Leaderboard", img: "images/Top 10.png", updated: NOW, normal: { val: "11,500", demand: "8" }, rainbow: { val: "O/C", demand: "10" } },
    { name: "Celestial Candycane", category: "Percentage", img: "images/Celestial Candycane.png", updated: NOW, normal: { val: "900", demand: "7" }, rainbow: { val: "4,050", demand: "8" } },
    { name: "Hooded Krampus", category: "Percentage", img: "images/Hooded Krampus.png", updated: NOW, normal: { val: "450", demand: "7" }, rainbow: { val: "2,000", demand: "8" } },
    { name: "Disco Lord", category: "Percentage", img: "images/Disco Lord.png", updated: NOW, normal: { val: "1,300", demand: "7" }, rainbow: { val: "5,800", demand: "8" } },
    { name: "Starshine Warrior", category: "Mythical", img: "images/Starshine Warrior.png", updated: NOW, normal: { val: "2", demand: "7" }, rainbow: { val: "20", demand: "9" } },
    { name: "Kairos", category: "Percentage", img: "images/Kairos.png", updated: NOW, normal: { val: "100", demand: "7" }, rainbow: { val: "350", demand: "7" } },
    { name: "Paradox", category: "Percentage", img: "images/Paradox.png", updated: NOW, normal: { val: "130", demand: "7" }, rainbow: { val: "600", demand: "7" } },
    { name: "Chronos", category: "Percentage", img: "images/Chronos.png", updated: NOW, normal: { val: "9,500", demand: "9" }, rainbow: { val: "O/C", demand: "10" } },
    { name: "Gift Mimic", category: "Percentage", img: "images/Gift Mimic.png", updated: NOW, normal: { val: "40", demand: "5" }, rainbow: { val: "180", demand: "6" } },
    { name: "Snow Thief", category: "Percentage", img: "images/Snow Thief.png", updated: NOW, normal: { val: "45", demand: "5" }, rainbow: { val: "200", demand: "6" } },
    { name: "Evil Snowman", category: "Percentage", img: "images/Evil Snowman.png", updated: NOW, normal: { val: "65", demand: "6" }, rainbow: { val: "300", demand: "7" } },
    { name: "Krampus", category: "Percentage", img: "images/Krampus.png", updated: NOW, normal: { val: "2,600", demand: "8" }, rainbow: { val: "O/C", demand: "10" } }
];

let currentLang = 'en', currentCategory = 'Best Sellers', yourItems = [], theirItems = [], pets = INITIAL_DATA;

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
function setCategory(cat) { currentCategory = cat; document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.innerText.includes(cat))); render(); }

function render() { 
    const grid = document.getElementById('petGrid'), infoPanel = document.getElementById('infoPanel');
    const search = document.getElementById('search').value.toLowerCase(), sort = document.getElementById('sortOrder').value, t = translations[currentLang]; 

    if (currentCategory === 'Informations') {
        grid.classList.add('hidden'); infoPanel.classList.remove('hidden');
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
        return;
    } else { grid.classList.remove('hidden'); infoPanel.classList.add('hidden'); }

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

function initOnlineCounter() {
    const el = document.getElementById('userCount');
    if (!el) return;
    // Ponieważ strona jest statyczna (brak backendu), nie można zliczyć innych użytkowników.
    // Ustawiamy 1 (Ty), aby wartość była prawdziwa.
    el.innerText = "1";
}

document.addEventListener('DOMContentLoaded', () => { updateStaticTexts(); render(); initOnlineCounter(); });
