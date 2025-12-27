const translations = { 
    en: { 
        search: "Search pet...", demand: "Demand", normal: "Normal", golden: "Golden", rainbow: "Rainbow", updated: "Updated",
        sortHigh: "Value: High to Low", sortLow: "Value: Low to High", calcTitle: "Trade Calculator", addSideLabel: "Add pets to side:",
        sideThem: "Their Offer (Left)", sideYou: "Your Offer (Right)", labelThem: "Them", labelYou: "You", fair: "Fair Trade",
        resetBtn: "Reset Calculator", empty: "Empty",
        infoTitle: "Guide & Terms", infoSubtitle: "Learn how to trade like a pro",
        t1T: "What is Demand?", t1D: "Demand determines how popular a pet is. <br><br><strong>10/10:</strong> Everyone wants it, easy overpays.<br><strong>1/10:</strong> Nobody wants it, very hard to trade.",
        t2T: "What is O/C?", t2D: "Short for <strong>'Owners Choice'</strong>. Used for extremely rare pets where the owner decides what offer is good enough. There is no fixed price.",
        t3T: "How to use Calculator?", t3D: "Click on a value (Normal/Golden/Rainbow) to add it to the trade. It helps you see if your trade is a Win, Loss, or Fair.",
        t4T: "Accuracy", t4D: "Values are based on real-time market trends and top player trades. They are updated frequently."
    }, 
    pl: { 
        search: "Szukaj peta...", demand: "Popyt", normal: "Normalny", golden: "Złoty", rainbow: "Tęczowy", updated: "Aktualizacja",
        sortHigh: "Wartość: Od najwyższej", sortLow: "Wartość: Od najniższej", calcTitle: "Kalkulator Handlu", addSideLabel: "Dodaj do strony:",
        sideThem: "Oferta Innego (Lewo)", sideYou: "Twoja Oferta (Prawo)", labelThem: "Inny", labelYou: "Ty", fair: "Uczciwa Wymiana",
        resetBtn: "Resetuj Kalkulator", empty: "Puste",
        infoTitle: "Poradnik i Terminy", infoSubtitle: "Naucz się handlować jak profesjonalista",
        t1T: "Co to jest Demand?", t1D: "Demand (Popyt) określa popularność peta. <br><br><strong>10/10:</strong> Każdy go szuka, łatwe overpay'e.<br><strong>1/10:</strong> Nikt go nie chce, bardzo ciężko go wymienić.",
        t2T: "Co znaczy O/C?", t2D: "Skrót od <strong>'Owners Choice'</strong>. Używany przy najrzadszych petach, gdzie właściciel sam wybiera najlepszą dla niego ofertę. Nie ma stałej ceny.",
        t3T: "Jak używać kalkulatora?", t3D: "Kliknij w wartość peta, aby dodać go do wymiany. Kalkulator pokaże Ci, czy zyskujesz (Win), czy tracisz (Loss) na wymianie.",
        t4T: "Dokładność", t4D: "Wartości bazują na aktualnych trendach rynkowych i wymianach topowych graczy. Są regularnie odświeżane."
    }
};

const INITIAL_DATA = [
    { name: "Krampus", category: "Percentage", demand: "High 8/10", val: "1,500", valG: "4,850", valR: "5,000", img: "images/Krampus.png", updated: "12/27/2025" },
    { name: "Evil Snowman", category: "Percentage", demand: "High 8/10", val: "105", valG: "420", valR: "450", img: "images/Evil Snowman.png", updated: "12/27/2025" },
    { name: "Gilded Seraphim", category: "Secrets", demand: "Very High 9/10", val: "1100", valG: "O/C", valR: "O/C", img: "images/Gilded Seraphim.png", updated: "12/27/2025" },
    { name: "Ornament", category: "Legendary", demand: "Very Low 2/10", val: "0", valG: "0.2", valR: "0.3", img: "images/Ornament.png", updated: "12/27/2025" },
    { name: "Nutcracker", category: "Mythical", demand: "Very Low 3/10", val: "0.2", valG: "0.5", valR: "1", img: "images/Nutcracker.png", updated: "12/27/2025" },
    { name: "UFO Alien", category: "Mythical", demand: "Very High 10/10", val: "1", valG: "4", valR: "7", img: "images/Nutcracker.png", updated: "12/27/2025" },
    { name: "Frost Spirit", category: "Secrets", demand: "High 8/10", val: "75", valG: "290", valR: "310", img: "images/Frost Spirit.png", updated: "12/26/2025" },
    { name: "Christmas Tree", category: "Secrets", demand: "High 8/10", val: "165", valG: "575", valR: "680", img: "images/Christmas Tree.png", updated: "12/27/2025" },
    { name: "Sharkie", category: "Mythical", demand: "Very Low 2/10", val: "0.2", valG: "0.5", valR: "1", img: "images/Sharkie.png", updated: "12/27/2025" },
    { name: "5m Frost Monarch", category: "Limited", demand: "Medium 5/10", val: "1,350", valG: "3,900", valR: "4,100", img: "images/5m Frost Monarch.png", updated: "12/26/2025" },
    { name: "5m North Star", category: "Limited", demand: "High 8/10", val: "380", valG: "1,450", valR: "1,500", img: "images/5m North Star.png", updated: "12/26/2025" },
    { name: "Archangel", category: "Mythical", demand: "Very Low 0/10", val: "1", valG: "2", valR: "4", img: "images/Archangel.png", updated: "12/25/2025" },
    { name: "BubbleGum Chaos", category: "Mythical", demand: "Very Low 2/10", val: "0", valG: "0.1", valR: "0.15", img: "images/BubbleGum Chaos.png", updated: "12/27/2025" },
    { name: "Candy God", category: "Secrets", demand: "Low 3/10", val: "35", valG: "165", valR: "185", img: "images/Candy God.png", updated: "12/27/2025" },
    { name: "Cosmic Chaos", category: "Secrets", demand: "High 8/10", val: "350", valG: "1,800", valR: "1,950", img: "images/Candy God.png", updated: "12/27/2025" },
    { name: "Chocolate Marauder", category: "Secrets", demand: "Low 3/10", val: "75", valG: "155", valR: "170", img: "images/Chocolate Marauder.png", updated: "12/26/2025" },
    { name: "Chronos", category: "Percentage", demand: "High 8/10", val: "8,700", valG: "O/C", valR: "O/C", img: "images/Chronos.png", updated: "12/26/2025" },
    { name: "Divine Celestia", category: "Leaderboard", demand: "Very High 10/10", val: "16,000", valG: "O/C", valR: "O/C", img: "images/Divine Celestia.png", updated: "12/27/2025" },
    { name: "Divine Dragon", category: "Secrets", demand: "Low 3/10", val: "30", valG: "75", valR: "90", img: "images/Divine Dragon.png", updated: "12/26/2025" },
    { name: "Frost Queen", category: "Secrets", demand: "Low 4/10", val: "65", valG: "85", valR: "100", img: "images/Frost Queen.png", updated: "12/26/2025" },
    { name: "Frosty Snowman", category: "Limited", demand: "High 7/10", val: "95", valG: "450", valR: "495", img: "images/Frosty Snowman.png", updated: "12/27/2025" },
    { name: "Gingerbread Dragon", category: "Percentage", demand: "Low 4/10", val: "0", valG: "0.2", valR: "0.5", img: "images/Gingerbread Dragon.png", updated: "12/26/2025" },
    { name: "Kairos", category: "Percentage", demand: "Medium 6/10", val: "120", valG: "480", valR: "550", img: "images/Kairos.png", updated: "12/26/2025" },
    { name: "Celestial Candycane", category: "Percentage", demand: "High 8/10", val: "800", valG: "O/C", valR: "O/C", img: "images/Krampus.png", updated: "12/27/2025" },
    { name: "King Emblazed", category: "Mythical", demand: "Very Low 1/10", val: "0.1", valG: "0.2", valR: "0.3", img: "images/King Emblazed.png", updated: "12/26/2025" },
    { name: "King Kraken", category: "Secrets", demand: "Very Low 2/10", val: "950", valG: "1,000", valR: "2,050", img: "images/King Kraken.png", updated: "12/26/2025" },
    { name: "Magmasaur", category: "Secrets", demand: "Low 4/10", val: "50", valG: "95", valR: "125", img: "images/Magmasaur.png", updated: "12/26/2025" },
    { name: "Orca Dominator", category: "Secrets", demand: "Low 4/10", val: "50", valG: "170", valR: "195", img: "images/Orca Dominator.png", updated: "12/26/2025" },
    { name: "Paradox", category: "Percentage", demand: "High 7/10", val: "175", valG: "740", valR: "810", img: "images/Paradox.png", updated: "12/27/2025" },
    { name: "Raging Claw", category: "Secrets", demand: "Very Low 2/10", val: "70", valG: "230", valR: "270", img: "images/Raging Claw.png", updated: "12/26/2025" },
    { name: "Hooded Krampus", category: "Percentage", demand: "High 7/10", val: "440", valG: "O/C", valR: "O/C", img: "images/Hooded Krampus.png", updated: "12/27/2025" },
    { name: "Sakura Dominator", category: "Secrets", demand: "Low 3/10", val: "75", valG: "170", valR: "200", img: "images/Sakura Dominator.png", updated: "12/26/2025" },
    { name: "Sakura Queen", category: "Mythical", demand: "Very Low 0/10", val: "0.1", valG: "0.25", valR: "0.3", img: "images/Sakura Queen.png", updated: "12/26/2025" },
    { name: "Samureye", category: "Mythical", demand: "Very Low 0/10", val: "0.1", valG: "0.2", valR: "0.25", img: "images/Samureye.png", updated: "12/26/2025" },
    { name: "Silver Emperor", category: "Leaderboard", demand: "Very High 9/10", val: "1450", valG: "6,100", valR: "6,200", img: "images/Silver Emperor.png", updated: "12/27/2025" },
    { name: "Social Dragon", category: "Percentage", demand: "Medium 5/10", val: "16", valG: "55", valR: "85", img: "images/Social Dragon.png", updated: "12/27/2025" },
    { name: "Trophy Guardian", category: "Leaderboard", demand: "Very High 9/10", val: "660", valG: "2,850", valR: "2,950", img: "images/Trophy Guardian.png", updated: "12/27/2025" },
    { name: "Weeping Angel", category: "Secrets", demand: "Very Low 2/10", val: "45", valG: "95", valR: "115", img: "images/Weeping Angel.png", updated: "12/26/2025" }
];

let currentLang = 'en', currentCategory = 'Home', yourItems = [], theirItems = [], pets = INITIAL_DATA;

const parseVal = (v) => { if (!v || v.toString().toUpperCase() === "O/C") return 0; return parseFloat(v.toString().replace(/,/g, '')) || 0; };
const formatVal = (v) => { if (v >= 1000000) return (v / 1000000).toFixed(2) + "M"; if (v >= 1000) return (v / 1000).toFixed(1) + "K"; return v.toLocaleString(); };

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
    let filtered = pets.filter(p => p.name.toLowerCase().includes(search) && (currentCategory === 'Home' || p.category === currentCategory)); 
    if (sort === "valHigh") filtered.sort((a, b) => parseVal(b.val) - parseVal(a.val)); 
    if (sort === "valLow") filtered.sort((a, b) => parseVal(a.val) - parseVal(b.val)); 

    filtered.forEach(p => { 
        grid.innerHTML += `
            <div class="glass p-5 rounded-2xl pet-card flex flex-col transition border-t-2 border-blue-500/50 animate-fadeIn">
                <div class="h-32 flex items-center justify-center bg-blue-900/10 rounded-xl mb-4 p-2 relative overflow-hidden">
                    <img src="${p.img}" class="max-h-full drop-shadow-2xl z-10" onerror="this.onerror=null; this.src='https://placehold.co/400x400/0f172a/3b82f6?text=IMAGE+COMING+SOON';">
                    <div class="absolute inset-0 bg-blue-500/5 blur-xl"></div>
                    <span class="absolute top-2 right-2 text-[8px] bg-blue-600/30 px-2 py-0.5 rounded text-blue-300 font-bold uppercase tracking-widest z-20">${p.category}</span>
                </div>
                <h3 class="orbitron text-md font-bold text-white mb-1 truncate text-left">${p.name}</h3>
                <div class="text-[9px] text-slate-400 font-bold mb-4 uppercase tracking-wider text-left">${t.demand}: <span class="text-blue-400">${p.demand}</span></div>
                <div class="space-y-2 mb-4">
                    <button onclick="addToCalc('${p.name}', '${p.val}', 'Normal')" class="w-full flex justify-between items-center bg-white/5 p-2 rounded-lg hover:bg-blue-600/20 transition group border border-transparent hover:border-blue-500/50">
                        <span class="text-[10px] text-slate-400 uppercase flex items-center gap-1 font-bold text-left"><span class="text-blue-500 text-lg">+</span> ${t.normal}</span>
                        <span class="text-sm font-bold text-white group-hover:text-blue-400">${p.val}</span>
                    </button>
                    <button onclick="addToCalc('${p.name}', '${p.valG}', 'Golden')" class="w-full flex justify-between items-center bg-white/5 p-2 rounded-lg hover:bg-yellow-600/20 transition group border border-transparent hover:border-yellow-500/50 text-yellow-500">
                        <span class="text-[10px] uppercase flex items-center gap-1 font-bold italic opacity-70 text-left"><span class="text-yellow-500 text-lg">+</span> ${t.golden}</span>
                        <span class="text-sm font-bold group-hover:text-yellow-400">${p.valG}</span>
                    </button>
                    <button onclick="addToCalc('${p.name}', '${p.valR}', 'Rainbow')" class="w-full flex justify-between items-center bg-white/5 p-2 rounded-lg hover:bg-pink-600/20 transition group border border-transparent hover:border-pink-500/50 text-pink-500">
                        <span class="text-[10px] uppercase flex items-center gap-1 font-bold italic opacity-70 text-left"><span class="text-pink-500 text-lg">+</span> ${t.rainbow}</span>
                        <span class="text-sm font-bold group-hover:text-pink-400">${p.valR}</span>
                    </button>
                </div>
                <div class="mt-auto text-[8px] text-slate-600 uppercase font-bold tracking-widest text-center italic">${t.updated}: ${p.updated}</div>
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
        <div class="flex flex-col bg-white/5 p-2 rounded-xl text-[10px] border-l-2 ${item.type === 'Golden' ? 'border-yellow-500' : item.type === 'Rainbow' ? 'border-pink-500' : 'border-blue-500'} animate-fadeIn mb-2 text-left">
            <div class="flex justify-between items-start mb-1">
                <span class="font-bold text-white truncate w-full">${item.name}</span>
                <button onclick="removeFromSide(${idx}, '${side}')" class="text-red-500 ml-1 font-bold px-1 hover:scale-125 transition">×</button>
            </div>
            <div class="flex justify-between items-center opacity-60 italic"><span>${t[item.type.toLowerCase()]}</span><span class="text-blue-400 font-bold">${item.val}</span></div>
        </div>`;

    yourList.innerHTML = yourItems.length ? "" : `<p class='text-[10px] text-center opacity-30 italic py-4'>${t.empty}</p>`;
    yourItems.forEach((item, idx) => { totalYou += parseVal(item.val); yourList.innerHTML += renderItem(item, idx, 'you'); });
    theirList.innerHTML = theirItems.length ? "" : `<p class='text-[10px] text-center opacity-30 italic py-4'>${t.empty}</p>`;
    theirItems.forEach((item, idx) => { totalThem += parseVal(item.val); theirList.innerHTML += renderItem(item, idx, 'them'); });

    yourTotalEl.innerText = formatVal(totalYou); theirTotalEl.innerText = formatVal(totalThem);
    const diff = totalThem - totalYou;
    if(diff > 0) { diffEl.innerText = `Win: +${formatVal(diff)}`; diffEl.className = "text-center font-bold text-green-500 py-3 bg-green-500/10 rounded-xl"; }
    else if(diff < 0) { diffEl.innerText = `Loss: ${formatVal(diff)}`; diffEl.className = "text-center font-bold text-red-500 py-3 bg-red-500/10 rounded-xl"; }
    else { diffEl.innerText = t.fair; diffEl.className = "text-center font-bold text-gray-400 py-3 bg-white/5 rounded-xl"; }
} 

document.addEventListener('DOMContentLoaded', () => { updateStaticTexts(); render(); });










