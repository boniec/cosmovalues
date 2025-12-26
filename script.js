const INITIAL_DATA = [
    { name: "Krampus", category: "Percentage", demand: "8/10", val: "2,300", valG: "7,500", valR: "8,000", updated: "12/26/2025", img: "images/Krampus.png" },
    { name: "Evil Snowman", category: "Secrets", demand: "8/10", val: "120", valG: "550", valR: "700", updated: "12/26/2025", img: "images/Evil Snowman.png" },
    { name: "Gilded Seraphim", category: "Legendary", demand: "10/10", val: "1,350", valG: "O/C", valR: "O/C", updated: "12/26/2025", img: "images/Gilded Seraphim.png" },
    { name: "Ornament", category: "Mythical", demand: "8/10", val: "0.2", valG: "0.4", valR: "0.7", updated: "12/26/2025", img: "images/Ornament.png" },
    { name: "Nutcracker", category: "Secrets", demand: "10/10", val: "4", valG: "8", valR: "13", updated: "12/26/2025", img: "images/Nutcracker.png" },
    { name: "Frost Spirit", category: "Secrets", demand: "8/10", val: "75", valG: "180", valR: "215", updated: "12/26/2025", img: "images/Frost Spirit.png" },
    { name: "Christmas Tree", category: "Mythical", demand: "8/10", val: "175", valG: "365", valR: "410", updated: "12/26/2025", img: "images/Christmas Tree.png" },
    { name: "Sharkie", category: "Limited", demand: "4/10", val: "4", valG: "8", valR: "12", updated: "12/26/2025", img: "images/Sharkie.png" },
    { name: "5m Frost Monarch", category: "Limited", demand: "5/10", val: "1,350", valG: "4,900", valR: "5,100", updated: "12/26/2025", img: "images/5m Frost Monarch.png" },
    { name: "5m North Star", category: "Mythical", demand: "4/10", val: "200", valG: "450", valR: "550", updated: "12/26/2025", img: "images/5m North Star.png" },
    { name: "Archangel", category: "Mythical", demand: "0/10", val: "1", valG: "2", valR: "4", updated: "12/25/2025", img: "images/Archangel.png" },
    { name: "BubbleGum Chaos", category: "Secrets", demand: "2/10", val: "0.1", valG: "0.2", valR: "0.5", updated: "12/25/2025", img: "images/BubbleGum Chaos.png" },
    { name: "Candy God", category: "Secrets", demand: "3/10", val: "55", valG: "125", valR: "220", updated: "12/26/2025", img: "images/Candy God.png" },
    { name: "Chocolate Marauder", category: "Percentage", demand: "3/10", val: "340", valG: "560", valR: "780", updated: "12/26/2025", img: "images/Chocolate Marauder.png" },
    { name: "Chronos", category: "Leaderboard", demand: "8/10", val: "9,500", valG: "32,500", valR: "35,000", updated: "12/26/2025", img: "images/Chronos.png" },
    { name: "Divine Celestia", category: "Secrets", demand: "10/10", val: "12,000", valG: "50,000", valR: "52,000", updated: "12/26/2025", img: "images/Divine Celestia.png" },
    { name: "Divine Dragon", category: "Secrets", demand: "3/10", val: "30", valG: "75", valR: "90", updated: "12/26/2025", img: "images/Divine Dragon.png" },
    { name: "Frost Queen", category: "Limited", demand: "4/10", val: "65", valG: "85", valR: "100", updated: "12/26/2025", img: "images/Frost Queen.png" },
    { name: "Frosty Snowman", category: "Limited", demand: "9/10", val: "180", valG: "700", valR: "810", updated: "12/26/2025", img: "images/Frosty Snowman.png" },
    { name: "Gingerbread Dragon", category: "Percentage", demand: "4/10", val: "2", valG: "4", valR: "7.5", updated: "12/26/2025", img: "images/Gingerbread Dragon.png" },
    { name: "Kairos", category: "Mythical", demand: "6/10", val: "115", valG: "180", valR: "240", updated: "12/26/2025", img: "images/Kairos.png" },
    { name: "King Emblazed", category: "Secrets", demand: "1/10", val: "0.1", valG: "0.2", valR: "0.3", updated: "12/26/2025", img: "images/King Emblazed.png" },
    { name: "King Kraken", category: "Secrets", demand: "6/10", val: "400", valG: "2,250", valR: "2,450", updated: "12/26/2025", img: "images/King Kraken.png" },
    { name: "Magmasaur", category: "Secrets", demand: "4/10", val: "50", valG: "95", valR: "125", updated: "12/26/2025", img: "images/Magmasaur.png" },
    { name: "Orca Dominator", category: "Percentage", demand: "4/10", val: "55", valG: "150", valR: "165", updated: "12/26/2025", img: "images/Orca Dominator.png" },
    { name: "Paradox", category: "Secrets", demand: "7/10", val: "170", valG: "450", valR: "550", updated: "12/26/2025", img: "images/Paradox.png" },
    { name: "Raging Claw", category: "Secrets", demand: "2/10", val: "70", valG: "230", valR: "270", updated: "12/26/2025", img: "images/Raging Claw.png" },
    { name: "Sakura Dominator", category: "Mythical", demand: "3/10", val: "75", valG: "170", valR: "200", updated: "12/26/2025", img: "images/Sakura Dominator.png" },
    { name: "Sakura Queen", category: "Mythical", demand: "0/10", val: "0.1", valG: "0.25", valR: "0.3", updated: "12/26/2025", img: "images/Sakura Queen.png" },
    { name: "Samureye", category: "Leaderboard", demand: "0/10", val: "0.1", valG: "0.2", valR: "0.25", updated: "12/26/2025", img: "images/Samureye.png" },
    { name: "Silver Emperor", category: "Percentage", demand: "8/10", val: "1,050", valG: "2,750", valR: "3,050", updated: "12/26/2025", img: "images/Silver Emperor.png" },
    { name: "Social Dragon", category: "Leaderboard", demand: "5/10", val: "14", valG: "55", valR: "85", updated: "12/26/2025", img: "images/Social Dragon.png" },
    { name: "Trophy Guardian", category: "Secrets", demand: "8/10", val: "550", valG: "1,950", valR: "2,050", updated: "12/26/2025", img: "images/Trophy Guardian.png" },
    { name: "Weeping Angel", category: "Secrets", demand: "2/10", val: "45", valG: "95", valR: "115", updated: "12/26/2025", img: "images/Weeping Angel.png" }
];

let currentCategory = 'Home';
let pets = JSON.parse(localStorage.getItem('cosmo_db')) || INITIAL_DATA;
let isAdmin = false;
let editIdx = null;

function updateLiveCounter() {
    const el = document.getElementById('userCount');
    if(el) el.innerText = Math.floor(Math.random() * (28 - 14 + 1)) + 14;
}
setInterval(updateLiveCounter, 4000);
updateLiveCounter();

const parseVal = (v) => {
    if (!v) return 0;
    if (v.toString().toUpperCase() === "O/C") return 999999999;
    return parseFloat(v.toString().replace(/,/g, '')) || 0;
};

const parseDemand = (d) => {
    const match = d.toString().match(/(\d+)\/10/);
    return match ? parseInt(match[1]) : 0;
};

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.innerText.includes(cat)));
    render();
}

function render() {
    const grid = document.getElementById('petGrid');
    if(!grid) return;
    const searchInput = document.getElementById('search');
    const search = searchInput ? searchInput.value.toLowerCase() : "";
    const sortOrder = document.getElementById('sortOrder').value;
    grid.innerHTML = "";

    let filtered = pets.filter(p => {
        const ms = p.name.toLowerCase().includes(search);
        const mc = (currentCategory === 'Home') || (p.category === currentCategory);
        return ms && mc;
    });

    if (sortOrder === "valHigh") filtered.sort((a, b) => parseVal(b.val) - parseVal(a.val));
    if (sortOrder === "valLow") filtered.sort((a, b) => parseVal(a.val) - parseVal(b.val));
    if (sortOrder === "demandHigh") filtered.sort((a, b) => parseDemand(b.demand) - parseDemand(a.demand));
    if (sortOrder === "demandLow") filtered.sort((a, b) => parseDemand(a.demand) - parseDemand(b.demand));

    filtered.forEach((p) => {
        const realIdx = pets.indexOf(p);
        let n = parseVal(p.val);
        let displayG = (p.valG && p.valG !== "") ? p.valG : (n >= 999999 ? p.val : (n * 5).toLocaleString());
        let displayR = (p.valR && p.valR !== "") ? p.valR : (n >= 999999 ? p.val : (n * 25).toLocaleString());

        let imgHTML = "";
        if (p.img && p.img !== "images/" && p.img.trim() !== "") {
            imgHTML = `<img src="${p.img}" class="max-h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" onerror="this.parentElement.innerHTML='<div class=\'no-img-box w-full h-full\'>IMAGE COMING SOON</div>'">`;
        } else {
            imgHTML = `<div class="no-img-box w-full h-full">IMAGE COMING SOON</div>`;
        }

        grid.innerHTML += `
            <div class="glass p-6 rounded-2xl pet-card relative border-t-blue-600 border-t-4">
                <div class="absolute top-2 right-2 text-[8px] bg-blue-600/20 px-2 py-1 rounded text-blue-400 font-bold uppercase tracking-widest">${p.category}</div>
                <div class="h-32 flex items-center justify-center mb-4 bg-white/5 rounded-xl overflow-hidden p-2">
                    ${imgHTML}
                </div>
                <h3 class="orbitron text-lg font-bold text-white mb-1 leading-tight">${p.name}</h3>
                <div class="text-[10px] text-blue-400 font-bold uppercase mb-4 tracking-tighter italic">Demand: ${p.demand}</div>
                <div class="space-y-2 border-t border-white/5 pt-4 text-sm mb-4">
                    <div class="flex justify-between"><span>Normal</span><b class="text-white">${p.val}</b></div>
                    <div class="flex justify-between"><span class="text-yellow-500 italic">Golden</span><b class="text-yellow-400 font-bold">${displayG}</b></div>
                    <div class="flex justify-between"><span class="text-pink-500 italic">Rainbow</span><b class="text-pink-400 font-bold">${displayR}</b></div>
                </div>
                <div class="mt-auto text-[9px] text-slate-500 uppercase italic tracking-widest">Updated: ${p.updated}</div>
                ${isAdmin ? `<div class="mt-4 flex gap-2 pt-4 border-t border-white/10">
                    <button onclick="openEdit(${realIdx})" class="flex-1 bg-blue-600/30 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-blue-600/50 transition">Edit</button>
                    <button onclick="del(${realIdx})" class="bg-red-600/30 px-3 py-2 rounded-lg text-[10px] font-bold hover:bg-red-600/50">X</button>
                </div>` : ''}
            </div>`;
    });
}

function adminAuth() { if(prompt("Pass:") === "cosmo123") { isAdmin = true; document.getElementById('adminPanel').classList.remove('hidden'); render(); } }
function logout() { isAdmin = false; document.getElementById('adminPanel').classList.add('hidden'); render(); }

function openModal() {
    editIdx = null;
    document.getElementById('pName').value = ""; document.getElementById('pNormal').value = "";
    document.getElementById('pGolden').value = ""; document.getElementById('pRainbow').value = "";
    document.getElementById('pDemand').value = ""; document.getElementById('pImg').value = "";
    document.getElementById('pCategory').value = "Legendary";
    document.getElementById('modal').classList.remove('hidden');
}

function openEdit(i) {
    editIdx = i; const p = pets[i];
    document.getElementById('pName').value = p.name;
    document.getElementById('pNormal').value = p.val;
    document.getElementById('pGolden').value = p.valG;
    document.getElementById('pRainbow').value = p.valR;
    document.getElementById('pDemand').value = p.demand;
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pImg').value = p.img.replace('images/', '');
    document.getElementById('modal').classList.remove('hidden');
}

function save() {
    let imgName = document.getElementById('pImg').value.trim();
    let finalImg = imgName === "" ? "" : (imgName.startsWith('http') ? imgName : 'images/' + imgName);
    const data = {
        name: document.getElementById('pName').value,
        category: document.getElementById('pCategory').value,
        val: document.getElementById('pNormal').value,
        valG: document.getElementById('pGolden').value,
        valR: document.getElementById('pRainbow').value,
        demand: document.getElementById('pDemand').value,
        img: finalImg,
        updated: new Date().toLocaleDateString()
    };
    if(editIdx !== null) pets[editIdx] = data; else pets.unshift(data);
    localStorage.setItem('cosmo_db', JSON.stringify(pets));
    closeModal(); render();
}

function closeModal() { document.getElementById('modal').classList.add('hidden'); }
function del(i) { if(confirm("Delete?")) { pets.splice(i,1); localStorage.setItem('cosmo_db', JSON.stringify(pets)); render(); } }

document.addEventListener('DOMContentLoaded', () => {
    const s = document.getElementById('search');
    if(s) s.addEventListener('input', render);
    render();
});

