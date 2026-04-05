/**
 * Emlak Günlükleri CRM - Full Automatic Translation Logic
 */

// --- 1. Initial Data ---
const defaultUsers = [
    { id: 1, username: 'admin', password: '1234', name: 'Emlak Günlükleri CRM', role: 'admin', status: 'active' },
    { id: 2, username: 'ayse', password: '1234', name: 'Ayşe Nur', role: 'consultant', status: 'active' },
    { id: 3, username: 'mehmet', password: '1234', name: 'Mehmet Y.', role: 'consultant', status: 'active' }
];

const initialProperties = [
    { id: 101, category: 'sale', prop_type: 'Daire', name: 'Ayşe Nur', phone: '', region: 'Konyaaltı', address: 'Antalya Konyaaltı Cad. No:5', rooms: '3+1', m2: '145', age: '5', usage: 'Boş', price: '4.500.000 TL', status: 'Sıcak', agent: 'Ayşe Nur' },
    { id: 102, category: 'sale', prop_type: 'Villa', name: 'Mustafa Bey', phone: '', region: 'Döşemealtı', address: 'Döşemealtı villalar bölgesi', rooms: '5+2', m2: '450', age: '0', usage: 'Boş', price: '12.000.000 TL', status: 'Yeni', agent: 'Mehmet Y.' },
    { id: 103, category: 'rent', prop_type: 'Daire', name: 'Zeynep Hanım', phone: '', region: 'Lara', address: 'Lara fener mah.', rooms: '2+1', m2: '95', age: '12', usage: 'Kiracı', price: '15.000 TL', status: 'Yeni', agent: 'Ayşe Nur' }
];

const initialCustomers = [
    { id: 1, name: 'Ali Yılmaz', phone: '0532 000 0001', email: 'ali@email.com', interest: 'Lüks Daire', region: 'Beşiktaş', meeting_date: '2026-04-05', appointment_datetime: '2026-04-06 14:00', notes: 'Bütçesi uygun, kredi bekliyor.', status: 'Yeni', agent: 'Ayşe Nur', category: 'sale' },
    { id: 2, name: 'Elif Kaya', phone: '0544 000 0002', email: 'elif@email.com', interest: 'Bahçeli Villa', region: 'Antalya', meeting_date: '2026-04-04', appointment_datetime: '', notes: 'Deniz kenarı istiyor.', status: 'Arandı', agent: 'Mehmet Y.', category: 'sale' },
    { id: 3, name: 'Caner Demir', phone: '0555 000 0003', email: 'caner@email.com', interest: 'Stüdyo Daire', region: 'Kadıköy', meeting_date: '2026-04-05', appointment_datetime: '2026-04-07 10:00', notes: 'Üniversiteye yakın olmalı.', status: 'Yeni', agent: 'Ayşe Nur', category: 'rent' }
];

// --- 2. Translation Context ---
const translations = {
    tr: {
        nav_sale: 'Satılık İlanlar',
        nav_rent: 'Kiralık İlanlar',
        nav_customers: 'Tüm Müşteriler',
        nav_consultant_mgmt: 'Danışman Yönetimi',
        nav_personnel_list: 'Personel Listesi',
        nav_psw_change: 'Şifre Değiştir',
        nav_logout: 'Çıkış Yap',
        board_title_sale: 'Satılık Yönetimi',
        board_title_rent: 'Kiralık Yönetimi',
        board_title_cust: 'Müşteri Yönetimi',
        board_title_con: 'Danışman Yönetimi',
        search_placeholder: 'Ara...',
        btn_add_prop: 'Yeni İlan Ekle',
        btn_add_cust: 'Yeni Müşteri Ekle',
        btn_add_con: 'Yeni Danışman Ekle',
        status_new: 'Yeni',
        status_hot: 'Sıcak',
        status_neg: 'Pazarlıkta',
        status_sold: 'Satıldı',
        status_rented: 'Kiralandı',
        status_contacted: 'Arandı',
        status_appointment: 'Randevu Alındı',
        status_done: 'Tamamlandı',
        group_buyers: 'Randevu',
        group_sellers: 'Satıcı Müşteri',
        group_sold: 'Satıldı',
        group_tenants: 'Kiracı',
        group_rent_portfolio: 'Kiralık Portföy',
        group_rented: 'Kiralandı',
        th_title: 'Başlık', th_type: 'Tip', th_loc: 'Konum', th_price: 'Fiyat', th_agent: 'Danışman', th_cust_name: 'Ad Soyad', th_phone: 'Telefon', th_email: 'E-posta', th_interest: 'İlgi Alanı', th_status: 'Durum', th_actions: 'İşlemler',
        th_meeting_date: 'Görüşme Tarihi', th_appointment: 'Randevu', th_region: 'Bölge', th_notes: 'Notlar',
        th_category: 'Kategori', opt_sale: 'Satılık', opt_rent: 'Kiralık',
        login_user: 'Kullanıcı Adı', login_pass: 'Şifre', show_psw: 'Şifreyi Göster', stay_logged_in: 'Sürekli Açık Tut', login_btn: 'Giriş Yap',
        btn_cancel: 'İptal', btn_save: 'Kaydet', btn_update: 'Güncelle',
        old_psw: 'Eski Şifre', new_psw: 'Yeni Şifre', new_psw_repeat: 'Yeni Şifre (Yeniden)',
        msg_required_fields: 'Lütfen zorunlu alanları doldurun!',
        msg_psw_success: 'Şifre güncellendi.',
        msg_psw_mismatch: 'Şifreler eşleşmiyor!'
    },
    en: {
        nav_sale: 'For Sale',
        nav_rent: 'For Rent',
        nav_customers: 'All Clients',
        nav_consultant_mgmt: 'Team Management',
        nav_personnel_list: 'Staff List',
        nav_psw_change: 'Settings',
        nav_logout: 'Log Out',
        board_title_sale: 'Sale Management',
        board_title_rent: 'Rent Management',
        board_title_cust: 'Client Dashboard',
        board_title_con: 'Team Dashboard',
        search_placeholder: 'Search...',
        btn_add_prop: 'New Listing',
        btn_add_cust: 'New Client',
        btn_add_con: 'Add Agent',
        status_new: 'New', status_hot: 'Hot', status_neg: 'Negotiating', status_sold: 'Sold', status_rented: 'Rented', status_contacted: 'Called', status_appointment: 'Meeting Set', status_done: 'Completed',
        group_buyers: 'Appointments',
        group_sellers: 'Seller Portfolios',
        group_sold: 'Sold Items',
        group_tenants: 'Tenants',
        group_rent_portfolio: 'Rent Portfolio',
        group_rented: 'Rented Items',
        th_title: 'Title', th_type: 'Type', th_loc: 'Area', th_price: 'Price', th_agent: 'Agent', th_cust_name: 'Full Name', th_phone: 'Phone', th_email: 'Email', th_interest: 'Interest', th_status: 'Status', th_actions: 'Actions',
        th_meeting_date: 'Meeting Date', th_appointment: 'Appt', th_region: 'Region', th_notes: 'Notes',
        th_category: 'Category', opt_sale: 'Sale', opt_rent: 'Rent',
        login_user: 'Username', login_pass: 'Password', show_psw: 'Show Pass', stay_logged_in: 'Keep me logged in', login_btn: 'Sign In',
        btn_cancel: 'Cancel', btn_save: 'Save Changes', btn_update: 'Update Now',
        old_psw: 'Current Password', new_psw: 'New Password', new_psw_repeat: 'Confirm Password',
        msg_required_fields: 'Please fill all required fields!',
        msg_psw_success: 'Security updated.',
        msg_psw_mismatch: 'Passwords do not match!'
    }
};

// --- 3. State Management ---

// Migrate old property data to new format if needed
function migrateProperties(items) {
    return items.map(item => {
        // If old format (has 'title' but no 'prop_type'), migrate it
        if (item.title && !item.prop_type) {
            return {
                ...item,
                prop_type: item.type || 'Daire',
                name: '',
                phone: '',
                address: item.location || '',
                rooms: '3+1',
                m2: '',
                age: '',
                usage: 'Boş',
                // Remove old fields
                title: undefined,
                type: undefined,
                location: undefined
            };
        }
        return item;
    });
}

const rawProperties = JSON.parse(localStorage.getItem('properties'));
const state = {
    items: rawProperties ? migrateProperties(rawProperties) : initialProperties,
    customers: JSON.parse(localStorage.getItem('crm_customers_list')) || initialCustomers,
    users: JSON.parse(localStorage.getItem('crm_users')) || defaultUsers,
    currentUser: null,
    activeTab: 'sale',
    modalType: null,
    searchTerm: '',
    sectionFilters: {},  // { sectionKey: { columnKey: value_or_array } }
    sortConfig: { key: null, direction: 'asc' },
    language: localStorage.getItem('crm_lang') || 'tr'
};

const getInitialUser = () => {
    const persistent = JSON.parse(localStorage.getItem('currentUser_persistent'));
    if (persistent && persistent.expiry && Date.now() < persistent.expiry) return persistent.user;
    return JSON.parse(sessionStorage.getItem('currentUser'));
};

const t = (key) => translations[state.language][key] || key;

// --- 4. Logic Functions (Setup) ---

// Toast notification helper
function showToast(msg, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('toast-show'), 10);
    setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function initApp() {
    state.currentUser = getInitialUser();
    updateUTextsByLang(); // First, translate static text

    if (!state.currentUser) {
        document.getElementById('login-overlay').style.display = 'flex';
        document.getElementById('app').style.display = 'none';
    } else {
        const freshUser = state.users.find(u => u.username === state.currentUser.username);
        if (!freshUser || freshUser.status === 'passive') { logout(); return; }
        
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        document.getElementById('current-user-name').innerText = freshUser.name;
        document.getElementById('current-user-role').innerText = freshUser.role === 'admin' ? (state.language === 'tr' ? 'Yönetici' : 'Admin') : (state.language === 'tr' ? 'Danışman' : 'Agent');

        if (freshUser.role === 'admin') {
            document.getElementById('admin-only-nav').style.display = 'block';
            updateAdminNav();
        } else {
            document.getElementById('admin-only-nav').style.display = 'none';
            switchTab('sale');
        }
    }
    initIcons();
}

function updateUTextsByLang() {
    // 1. Automatic Translation via [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Handle span/div/button
        if (el.tagName === 'INPUT' && el.type !== 'submit') {
            el.placeholder = t(key);
        } else {
            const innerSpan = el.querySelector('span');
            if (innerSpan) innerSpan.innerText = t(key); // Preserve icon structure
            else el.childNodes.forEach(node => { if(node.nodeType === 3) node.nodeValue = t(key); }); // Handle raw text node
        }
    });

    // 2. Extra dynamic handles
    document.getElementById('search-input').placeholder = t('search_placeholder');
    document.querySelectorAll('.lang-btn').forEach(btn => btn.style.opacity = '0.4');
    document.getElementById(`lang-${state.language}`).style.opacity = '1';

    // 3. Tab Specific Refresh
    if (state.currentUser) {
        if (state.activeTab === 'sale' || state.activeTab === 'rent') switchTab(state.activeTab);
        else if (state.activeTab === 'customers') switchTab('customers');
        else switchTab('consultants');
    }
}

function setLanguage(lang) {
    state.language = lang;
    localStorage.setItem('crm_lang', lang);
    updateUTextsByLang();
    initIcons();
}

function switchTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    const actionContainer = document.getElementById('property-actions');
    const existingButtons = actionContainer.querySelectorAll('.btn-add-dynamic');
    existingButtons.forEach(b => b.remove());

    if (tab === 'sale' || tab === 'rent') {
        const isSale = tab === 'sale';
        document.getElementById(isSale ? 'nav-sale' : 'nav-rent').classList.add('active');
        document.getElementById('board-title').innerText = isSale ? t('board_title_sale') : t('board_title_rent');
        
        // Dynamic Buttons
        const label1 = isSale ? 'Randevu Kaydı' : 'Kiracı Ekle';
        const label2 = isSale ? 'Satılık Portföy Ekle' : 'Kiralık Portföy Ekle';
        
        const btn1 = `<button class="btn btn-secondary btn-add-dynamic" id="add-cust-dynamic"><i data-lucide="user-plus"></i> ${label1}</button>`;
        const btn2 = `<button class="btn btn-primary btn-add-dynamic" id="add-prop-dynamic"><i data-lucide="plus"></i> ${label2}</button>`;
        
        actionContainer.insertAdjacentHTML('beforeend', btn1 + btn2);
        
        document.getElementById('add-cust-dynamic').onclick = () => {
            state.editingCustomer = { id: Date.now(), name: '', phone: '', email: '', interest: '', status: 'Yeni', agent: state.currentUser.name, category: tab };
            openCustomerDetail(state.editingCustomer.id);
        };
        document.getElementById('add-prop-dynamic').onclick = () => {
            state.editingItem = { id: Date.now(), prop_type: 'Daire', name: '', address: '', rooms: '3+1', m2: '', age: '', usage: 'Boş', price: '', status: 'Yeni', agent: state.currentUser.name, category: tab };
            openPropertyDetail(state.editingItem.id);
        };
        
        document.getElementById('add-item-btn').style.display = 'none';
        renderBoard(tab);
    } else if (tab === 'customers') {
        document.getElementById('nav-customers').classList.add('active');
        document.getElementById('board-title').innerText = t('board_title_cust');
        document.getElementById('add-item-btn').style.display = 'flex';
        document.getElementById('add-item-btn').innerHTML = `<i data-lucide="user-plus"></i> ${t('btn_add_cust')}`;
        renderCustomers();
    } else if (tab === 'consultants') {
        document.getElementById('board-title').innerText = t('board_title_con');
        document.getElementById('add-item-btn').style.display = 'none';
        renderConsultants();
    }
    initIcons();
}

// --- 5. Data Rendering ---



// Module-level section filter helper (used by renderBoard and renderCustomers)
function applyFilters(data, sKey) {
    const filters = state.sectionFilters[sKey] || {};
    return data.filter(item =>
        Object.keys(filters).every(key => {
            const filter = filters[key];
            if (!filter || (Array.isArray(filter) && filter.length === 0)) return true;
            const value = (item[key] || '').toString();
            return Array.isArray(filter)
                ? filter.some(f => value === f)
                : value.toLowerCase().includes(filter.toLowerCase());
        })
    );
}

function renderBoard(category) {
    let items = state.items.filter(i => (i.category || 'sale') === category);
    let customers = state.customers.filter(c => (c.category || 'sale') === category);

    if (state.currentUser.role === 'consultant') {
        items = items.filter(i => i.agent === state.currentUser.name);
        customers = customers.filter(c => c.agent === state.currentUser.name);
    }
    
    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        items = items.filter(i => i.name.toLowerCase().includes(term) || i.address.toLowerCase().includes(term));
        customers = customers.filter(c => c.name.toLowerCase().includes(term) || c.interest.toLowerCase().includes(term));
    }

    // Per-section column filters are applied via the module-level applyFilters()

    // Sorting
    const sortData = (data) => {
        if (!state.sortConfig.key) return data;
        return [...data].sort((a, b) => {
            const valA = (a[state.sortConfig.key] || '').toString().toLowerCase();
            const valB = (b[state.sortConfig.key] || '').toString().toLowerCase();
            if (valA < valB) return state.sortConfig.direction === 'asc' ? -1 : 1;
            if (valA > valB) return state.sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const sections = category === 'sale' ? [
        { key: 'group_buyers',        type: 'customers',   data: sortData(customers.filter(c => c.status !== 'Tamamlandı')) },
        { key: 'group_sellers',       type: 'mixed',       data: sortData([...items.filter(i => i.status !== 'Satıldı'), ...customers.filter(c => c.status === 'Tamamlandı')]) },
        { key: 'group_sold',          type: 'properties',  data: sortData(items.filter(i => i.status === 'Satıldı')) }
    ] : [
        { key: 'group_tenants',       type: 'customers',   data: sortData(customers) },
        { key: 'group_rent_portfolio',type: 'properties',  data: sortData(items.filter(i => i.status !== 'Kiralandı')) },
        { key: 'group_rented',        type: 'properties',  data: sortData(items.filter(i => i.status === 'Kiralandı')) }
    ];

    const statusMap = { 'Yeni': 'new', 'Sıcak': 'hot', 'Pazarlıkta': 'neg', 'Satıldı': 'sold', 'Kiralandı': 'sold', 'Görüşüldü': 'contacted', 'Randevu Alındı': 'appointment', 'Tamamlandı': 'done' };

    // hb(sKey, key, label, options?) — header builder, section-isolated
    const hb = (sKey, key, label, options = null) => {
        const sf = state.sectionFilters[sKey] || {};
        const f = sf[key];
        const hasFilter = Array.isArray(f) ? f.length > 0 : !!f;
        const icon = options ? 'chevron-down' : 'search';
        const pid = `fp-${sKey}-${key}`;  // unique popup id per section
        let popupHtml;
        if (options) {
            const sel = Array.isArray(f) ? f : [];
            popupHtml = `<div class="filter-checkbox-list">
                ${options.map(opt => `
                    <label class="filter-checkbox-item">
                        <input type="checkbox" ${sel.includes(opt) ? 'checked' : ''}
                               onchange="toggleCheckboxFilter('${sKey}','${key}','${opt}',this.checked)">
                        <span>${opt}</span>
                    </label>`).join('')}
                <button class="filter-clear-btn" onclick="clearSectionFilter('${sKey}','${key}')">Temizle</button>
            </div>`;
        } else {
            popupHtml = `<input type="text" placeholder="${label} ara..." oninput="setSectionFilter('${sKey}','${key}',this.value)" value="${f || ''}">`;
        }
        return `
            <div class="record-header-cell" style="cursor:pointer;display:flex;align-items:center;gap:0.4rem;position:relative">
                <span onclick="toggleSort('${key}')">${label}</span>
                <i data-lucide="${icon}" style="width:12px;opacity:0.5" onclick="toggleSectionFilter(event,'${pid}')"></i>
                ${hasFilter ? '<div class="filter-indicator"></div>' : ''}
                <div id="${pid}" class="column-filter-pop" onclick="event.stopPropagation()">${popupHtml}</div>
            </div>`;
    };

    const boardView = document.getElementById('board-view');
    boardView.innerHTML = '';

    sections.forEach(section => {
        let headerHtml = '';
        let rowsHtml = '';

        const PROP_STATUSES_SALE = ['Yeni','Sıcak','Pazarlıkta','Satıldı'];
        const PROP_STATUSES_RENT = ['Yeni','Sıcak','Pazarlıkta','Kiralandı'];
        const CUST_STATUSES = ['Yeni','Görüşüldü','Randevu Alındı','Tamamlandı'];
        const PROP_TYPES = ['Daire','Villa','Lüks Konut','Arsa'];
        const ROOMS = ['1+1','2+1','3+1','4+1','4+2','5+1','5+2','6+1','6+2','7+'];
        const USAGES = ['Boş','Kiracı','Mülk Sahibi'];
        const sk = section.key; // shorthand for this section's key

        // Apply this section's own filters to its data
        const visibleData = applyFilters(section.data, sk);

        if (section.type === 'customers') {
            headerHtml = `
                <div class="record-header grid-cust">
                    ${hb(sk,'status', t('th_status'), CUST_STATUSES)}
                    ${hb(sk,'name', t('th_cust_name'))}
                    ${hb(sk,'phone', t('th_phone'))}
                    ${hb(sk,'region', t('th_region'))}
                    ${hb(sk,'interest', t('th_interest'))}
                    ${hb(sk,'meeting_date', t('th_meeting_date'))}
                    ${hb(sk,'appointment_datetime', t('th_appointment'))}
                    ${hb(sk,'notes', t('th_notes'))}
                    ${hb(sk,'agent', t('th_agent'))}
                </div>`;
            rowsHtml = visibleData.map(c => `
                <div class="record-row grid-cust" onclick="openCustomerDetail(${c.id})">
                    <div class="record-cell"><span class="status-pill status-${statusMap[c.status] || 'new'}">${c.status}</span></div>
                    <div class="record-cell" style="font-weight:600">${c.name}</div>
                    <div class="record-cell">${c.phone}</div>
                    <div class="record-cell">${c.region || '-'}</div>
                    <div class="record-cell">${c.interest}</div>
                    <div class="record-cell">${c.meeting_date || '-'}</div>
                    <div class="record-cell" style="display:flex;align-items:center;gap:0.5rem">
                        ${c.appointment_datetime || '-'}
                        ${c.appointment_datetime ? '<i data-lucide="check-circle" style="width:14px;color:var(--accent-green)"></i>' : ''}
                    </div>
                    <div class="record-cell" style="color:var(--text-secondary);font-style:italic">${c.notes || '-'}</div>
                    <div class="record-cell">${c.agent}</div>
                </div>`).join('');
        } else if (section.type === 'properties') {
            const propStat = category === 'sale' ? PROP_STATUSES_SALE : PROP_STATUSES_RENT;
            headerHtml = `
                <div class="record-header grid-prop">
                    ${hb(sk,'status', t('th_status'), propStat)}
                    ${hb(sk,'prop_type', 'Mülk', PROP_TYPES)}
                    ${hb(sk,'name', 'Sahibi')}
                    ${hb(sk,'address', 'Adres')}
                    ${hb(sk,'rooms', 'Oda', ROOMS)}
                    ${hb(sk,'m2', 'm2')}
                    ${hb(sk,'age', 'Yaş')}
                    ${hb(sk,'usage', 'Kullanım', USAGES)}
                    ${hb(sk,'price', t('th_price'))}
                    ${hb(sk,'agent', t('th_agent'))}
                </div>`;
            rowsHtml = visibleData.map(item => `
                <div class="record-row grid-prop" onclick="openPropertyDetail(${item.id})">
                    <div class="record-cell"><span class="status-pill status-${statusMap[item.status] || 'new'}">${item.status}</span></div>
                    <div class="record-cell">${item.prop_type || '-'}</div>
                    <div class="record-cell" style="font-weight:600">${item.name || '-'}</div>
                    <div class="record-cell">${item.address || '-'}</div>
                    <div class="record-cell">${item.rooms || '-'}</div>
                    <div class="record-cell">${item.m2 || '-'}</div>
                    <div class="record-cell">${item.age || '-'}</div>
                    <div class="record-cell">${item.usage || '-'}</div>
                    <div class="record-cell" style="color:var(--primary);font-weight:600">${item.price || '-'}</div>
                    <div class="record-cell">${item.agent}</div>
                </div>`).join('');
        } else if (section.type === 'mixed') {
            const allStat = [...PROP_STATUSES_SALE,...CUST_STATUSES].filter((v,i,a)=>a.indexOf(v)===i);
            headerHtml = `
                <div class="record-header grid-mixed">
                    ${hb(sk,'status', t('th_status'), allStat)}
                    ${hb(sk,'prop_type', 'Mülk', PROP_TYPES)}
                    ${hb(sk,'name', 'Ad / Sahibi')}
                    ${hb(sk,'phone', t('th_phone'))}
                    ${hb(sk,'region', t('th_region'))}
                    ${hb(sk,'address', 'Adres / İlgi')}
                    ${hb(sk,'rooms', 'Oda', ROOMS)}
                    ${hb(sk,'m2', 'm2')}
                    ${hb(sk,'notes', t('th_notes'))}
                    ${hb(sk,'age', 'Yaş')}
                    ${hb(sk,'usage', 'Kullanım', USAGES)}
                    ${hb(sk,'price', t('th_price'))}
                    ${hb(sk,'agent', t('th_agent'))}
                </div>`;
            rowsHtml = visibleData.map(obj => {
                const isProp = !!obj.address;
                const statusClass = statusMap[obj.status] || 'new';
                return isProp ? `
                <div class="record-row grid-mixed" onclick="openPropertyDetail(${obj.id})">
                    <div class="record-cell"><span class="status-pill status-${statusClass}">${obj.status}</span></div>
                    <div class="record-cell">${obj.prop_type || '-'}</div>
                    <div class="record-cell" style="font-weight:600">${obj.name || '-'}</div>
                    <div class="record-cell">${obj.phone || '-'}</div>
                    <div class="record-cell">${obj.region || '-'}</div>
                    <div class="record-cell">${obj.address || '-'}</div>
                    <div class="record-cell">${obj.rooms || '-'}</div>
                    <div class="record-cell">${obj.m2 || '-'}</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell">${obj.age || '-'}</div>
                    <div class="record-cell">${obj.usage || '-'}</div>
                    <div class="record-cell" style="color:var(--primary);font-weight:600">${obj.price || '-'}</div>
                    <div class="record-cell">${obj.agent}</div>
                </div>` : `
                <div class="record-row grid-mixed" onclick="openCustomerDetail(${obj.id})" style="background:rgba(22, 163, 74, 0.05); border-left: 4px solid var(--accent-green);">
                    <div class="record-cell"><span class="status-pill status-${(obj.seller_status || 'Yeni').toLowerCase() === 'yeni' ? 'new' : (obj.seller_status || 'yeni').toLowerCase() === 'sıcak' ? 'hot' : (obj.seller_status || 'yeni').toLowerCase() === 'pazarlıkta' ? 'neg' : 'sold'}">${obj.seller_status || 'Yeni'}</span></div>
                    <div class="record-cell"><span style="background:var(--accent-green); color:white; padding:2px 6px; border-radius:4px; font-size:0.65rem; font-weight:700; display:inline-flex; align-items:center; gap:3px;"><i data-lucide="star" style="width:10px; height:10px;"></i> SATICI</span></div>
                    <div class="record-cell" style="font-weight:600"><i data-lucide="user" style="width:13px;margin-right:4px"></i>${obj.name}</div>
                    <div class="record-cell">${obj.phone || '-'}</div>
                    <div class="record-cell">${obj.region || '-'}</div>
                    <div class="record-cell">${obj.interest || '-'}</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell" style="font-style:italic;font-size:0.8rem; color:var(--text-secondary)">${obj.notes || '-'}</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell">-</div>
                    <div class="record-cell">${obj.agent}</div>
                </div>`;
            }).join('');
        }

        const html = `
            <section class="group-section" style="margin-bottom:2rem">
                <div class="group-header" style="background:transparent; border-bottom:none; padding-bottom:0.5rem">
                    <div style="display:flex; align-items:center; gap:0.5rem">
                        <i data-lucide="layers" style="width:18px; color:var(--primary)"></i>
                        <h2 style="font-family:var(--font-heading); font-size:1.1rem">${t(section.key)}</h2>
                        <span class="group-count" style="background:var(--primary-light); color:var(--primary); padding:2px 8px; border-radius:99px; font-size:0.75rem; font-weight:600">${visibleData.length} / ${section.data.length}</span>
                    </div>
                </div>
                <div class="record-grid">
                    ${headerHtml}
                    <div class="record-rows-container">
                        ${rowsHtml || `<div style="padding:1.5rem;text-align:center;color:var(--text-secondary);font-size:0.85rem;">Bu bölümde sonuç bulunamadı.</div>`}
                    </div>
                </div>
            </section>`;
        boardView.insertAdjacentHTML('beforeend', html);
    }); // end sections.forEach
    initIcons();
}

function renderCustomers() {
    let custs = state.customers;
    if (state.currentUser.role === 'consultant') custs = custs.filter(c => c.agent === state.currentUser.name);

    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        custs = custs.filter(c => c.name.toLowerCase().includes(term) || c.email.toLowerCase().includes(term));
    }

    const statuses = ['Yeni', 'Görüşüldü', 'Randevu Alındı', 'Tamamlandı'];
    const statusKeys = { 'Yeni': 'status_new', 'Görüşüldü': 'status_contacted', 'Randevu Alındı': 'status_appointment', 'Tamamlandı': 'status_done' };
    const statusMap = { 'Yeni': 'new', 'Görüşüldü': 'contacted', 'Randevu Alındı': 'appointment', 'Tamamlandı': 'done' };

    const boardView = document.getElementById('board-view');
    boardView.innerHTML = '';

    statuses.forEach(status => {
        const groupItems = custs.filter(c => c.status === status);
        if (groupItems.length === 0 && state.searchTerm) return;
        
        const sKey = `custs_${status.replace(/\s+/g, '_')}`;
        const groupFiltered = applyFilters(groupItems, sKey);

        const chb = (key, label, opts) => {
            const sf = state.sectionFilters[sKey] || {};
            const f = sf[key];
            const hasFilter = Array.isArray(f) ? f.length > 0 : !!f;
            const pid = `fp-${sKey}-${key}`;
            const icon = opts ? 'chevron-down' : 'search';
            const popupContent = opts
                ? `<div class="filter-checkbox-list">${opts.map(o => `<label class="filter-checkbox-item"><input type="checkbox" ${(Array.isArray(f)&&f.includes(o))?'checked':''} onchange="toggleCheckboxFilter('${sKey}','${key}','${o}',this.checked)"><span>${o}</span></label>`).join('')}<button class="filter-clear-btn" onclick="clearSectionFilter('${sKey}','${key}')">Temizle</button></div>`
                : `<input type="text" placeholder="${label} ara..." oninput="setSectionFilter('${sKey}','${key}',this.value)" value="${f||''}">`;
            return `<div class="record-header-cell" style="cursor:pointer;display:flex;align-items:center;gap:0.4rem;position:relative">
                <span>${label}</span>
                <i data-lucide="${icon}" style="width:11px;opacity:0.5" onclick="toggleSectionFilter(event,'${pid}')"></i>
                ${hasFilter ? '<div class="filter-indicator"></div>' : ''}
                <div id="${pid}" class="column-filter-pop" onclick="event.stopPropagation()">${popupContent}</div>
            </div>`;
        };

        const rowsHtml = groupFiltered.map(c => `
            <div class="record-row grid-cust" onclick="openCustomerDetail(${c.id})">
                <div class="record-cell"><span class="status-pill status-${statusMap[status]}">${status}</span></div>
                <div class="record-cell" style="font-weight:600">${c.name}</div>
                <div class="record-cell">${c.phone}</div>
                <div class="record-cell">${c.region || '-'}</div>
                <div class="record-cell">${c.interest || '-'}</div>
                <div class="record-cell">${c.meeting_date || '-'}</div>
                <div class="record-cell" style="display:flex; align-items:center; gap:0.5rem">
                    ${c.appointment_datetime || '-'}
                    ${c.appointment_datetime ? '<i data-lucide="check-circle" style="width:14px; color:var(--accent-green)"></i>' : ''}
                </div>
                <div class="record-cell" style="color:var(--text-secondary); font-style:italic">${c.notes || '-'}</div>
                <div class="record-cell">${c.agent}</div>
            </div>`).join('');
        const headerHtml = `
            <div class="record-header grid-cust">
                ${chb('status', t('th_status'), ['Yeni','Arandı','Randevu Alındı','Tamamlandı'])}
                ${chb('name', t('th_cust_name'))}
                ${chb('phone', t('th_phone'))}
                ${chb('region', t('th_region'))}
                ${chb('interest', t('th_interest'))}
                ${chb('meeting_date', t('th_meeting_date'))}
                ${chb('appointment_datetime', t('th_appointment'))}
                ${chb('notes', t('th_notes'))}
                ${chb('agent', t('th_agent'))}
            </div>`;

        const html = `
            <section class="group-section" style="margin-bottom:2rem">
                <div class="group-header" style="background:transparent; border-bottom:none; padding-bottom:0.5rem">
                    <div style="display:flex; align-items:center; gap:0.5rem">
                        <i data-lucide="users" style="width:18px; color:var(--primary)"></i>
                        <h2 style="font-family:var(--font-heading); font-size:1.1rem">${t(statusKeys[status])}</h2>
                        <span class="group-count" style="background:var(--primary-light); color:var(--primary); padding:2px 8px; border-radius:99px; font-size:0.75rem; font-weight:600">${groupFiltered.length} / ${groupItems.length}</span>
                    </div>
                </div>
                <div class="record-grid">
                    ${headerHtml}
                    <div class="record-rows-container">
                        ${rowsHtml}
                    </div>
                </div>
            </section>`;
        boardView.insertAdjacentHTML('beforeend', html);
    });
    initIcons();
}

function renderConsultants() {
    const cons = state.users.filter(u => u.role === 'consultant');
    const boardView = document.getElementById('board-view');
    boardView.innerHTML = `<table class="board-table" style="margin-top: 1rem;">
        <thead><tr><th>${t('th_cust_name')}</th><th>${t('login_user')}</th><th>${t('th_status')}</th><th>${t('th_actions')}</th></tr></thead>
        <tbody>${cons.map(c => `<tr>
            <td>${c.name}</td><td>${c.username}</td>
            <td><span class="status-pill status-${c.status === 'active' ? 'sold' : 'hot'}">${c.status === 'active' ? (state.language==='tr'?'Aktif':'Active') : (state.language==='tr'?'Pasif':'Locked')}</span></td>
            <td><button class="btn btn-secondary" onclick="openConsultantEdit(${c.id})"><i data-lucide="edit-3"></i></button>
                <button class="btn btn-secondary" style="color:var(--accent-red)" onclick="deleteConsultant(${c.id})"><i data-lucide="trash-2"></i></button>
                <button class="btn btn-secondary" onclick="toggleUserStatus(${c.id})">${c.status === 'active' ? (state.language==='tr'?'Pasif Yap':'Lock') : (state.language==='tr'?'Aktif Yap':'Unlock')}</button></td>
        </tr>`).join('')}</tbody>
    </table>`;
    initIcons();
}

// --- 6. Auth & Events ---

function logout() { sessionStorage.removeItem('currentUser'); localStorage.removeItem('currentUser_persistent'); window.location.reload(); }
function saveUsers() { localStorage.setItem('crm_users', JSON.stringify(state.users)); }
function saveProperties() { localStorage.setItem('properties', JSON.stringify(state.items)); }
function saveCustomers() { localStorage.setItem('crm_customers_list', JSON.stringify(state.customers)); }
function initIcons() { if (typeof lucide !== 'undefined') lucide.createIcons(); }

document.getElementById('login-submit').onclick = () => {
    const u = document.getElementById('login-username').value.trim();
    const p = document.getElementById('login-password').value.trim();
    const user = state.users.find(x => x.username === u && x.password === p);
    if (user) {
        if (user.status === 'passive') { alert('Err'); return; }
        state.currentUser = user;
        if (document.getElementById('login-remember').checked) localStorage.setItem('currentUser_persistent', JSON.stringify({ user, expiry: Date.now() + 604800000 }));
        else sessionStorage.setItem('currentUser', JSON.stringify(user));
        initApp();
    } else { document.getElementById('login-error').innerText = 'Hata!'; document.getElementById('login-error').style.display = 'block'; }
};

document.getElementById('logout-btn').onclick = logout;
document.getElementById('lang-tr').onclick = () => setLanguage('tr');
document.getElementById('lang-en').onclick = () => setLanguage('en');
document.getElementById('nav-sale').onclick = () => switchTab('sale');
document.getElementById('nav-rent').onclick = () => switchTab('rent');
document.getElementById('nav-customers').onclick = () => switchTab('customers');
document.getElementById('search-input').oninput = (e) => { state.searchTerm = e.target.value; if(state.activeTab==='sale' || state.activeTab === 'rent') renderBoard(state.activeTab); else renderCustomers(); };

// Settings & Password logic
document.getElementById('user-settings-btn').onclick = () => { document.getElementById('user-settings-modal').style.display = 'flex'; };
document.getElementById('save-user-password').onclick = () => {
    const old = document.getElementById('old-password').value;
    const n = document.getElementById('new-password').value;
    const r = document.getElementById('new-password-repeat').value;
    let me = state.users.find(x => x.username === state.currentUser.username);
    if (old !== me.password) { alert('Hata!'); return; }
    if (n !== r || n.length < 4) { alert(t('msg_psw_mismatch')); return; }
    me.password = n; saveUsers(); document.getElementById('user-settings-modal').style.display = 'none'; alert(t('msg_psw_success'));
};

// Close modals via event delegation (handles dynamically injected buttons)
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        const btn = e.target.closest('#close-modal, #cancel-modal, #close-user-modal, #cancel-user-modal, #close-consultant-modal, #cancel-consultant-modal');
        if (btn) overlay.style.display = 'none';
    });
});

// Prop Logic
document.getElementById('add-item-btn').onclick = () => {
    if (state.activeTab === 'sale' || state.activeTab === 'rent') {
        state.editingItem = { id: Date.now(), prop_type: 'Daire', name: '', address: '', rooms: '3+1', m2: '', age: '', usage: 'Boş', price: '', status: 'Yeni', agent: state.currentUser.name, category: state.activeTab };
        openPropertyDetail(state.editingItem.id);
    } else {
        state.editingCustomer = { id: Date.now(), name: '', phone: '', email: '', interest: '', status: 'Yeni', agent: state.currentUser.name, category: 'sale' };
        openCustomerDetail(state.editingCustomer.id);
    }
};

window.openPropertyDetail = (id) => {
    state.modalType = 'property';
    state.editingItem = { ...(state.items.find(x => x.id === id) || state.editingItem) };
    const isAdmin = state.currentUser.role === 'admin';
    const agents = state.users.filter(u => u.role === 'consultant');

    // Set modal title
    document.getElementById('modal-title-h2').innerText = state.editingItem.name ? `${state.editingItem.prop_type || 'İlan'} — ${state.editingItem.name}` : 'Yeni İlan';

    // Set modal footer
    document.getElementById('modal-footer').innerHTML = `
        <div id="delete-container">
            ${isAdmin ? `<button class="btn btn-secondary" style="color:var(--accent-red)" onclick="deleteProperty(${state.editingItem.id})"><i data-lucide="trash-2"></i> Sil</button>` : ''}
        </div>
        <div style="display:flex; gap:1rem;">
            <button class="btn btn-secondary" id="cancel-modal">${t('btn_cancel')}</button>
            <button class="btn btn-primary" id="save-modal">${t('btn_save')}</button>
        </div>`;

    const scrollBody = document.getElementById('modal-scroll-body');
    scrollBody.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">${t('th_category')}</label>
                <select id="p-category" class="form-select" onchange="updatePropStatuses(this.value)">
                    <option value="sale" ${state.editingItem.category === 'sale' ? 'selected' : ''}>${t('opt_sale')}</option>
                    <option value="rent" ${state.editingItem.category === 'rent' ? 'selected' : ''}>${t('opt_rent')}</option>
                </select>
            </div>
            <div class="form-group"><label class="form-label">${t('th_status')}</label>
                <select id="p-status" class="form-select">${(state.editingItem.category === 'sale' ? ['Yeni','Sıcak','Pazarlıkta','Satıldı'] : ['Yeni','Sıcak','Pazarlıkta','Kiralandı']).map(s => `<option value="${s}" ${state.editingItem.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
            </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
             <div class="form-group"><label class="form-label">Mülk Tipi</label>
                <select id="p-type" class="form-select">
                    ${['Daire','Villa','Lüks Konut','Arsa'].map(o => `<option value="${o}" ${state.editingItem.prop_type === o ? 'selected' : ''}>${o}</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">Ad Soyad (Mülk Sahibi)</label><input type="text" id="p-name" class="form-input" value="${state.editingItem.name || ''}"></div>
        </div>
        <div class="form-group"><label class="form-label">Telefon (Mülk Sahibi)</label><input type="tel" id="p-phone" class="form-input" placeholder="05xx xxx xx xx" value="${state.editingItem.phone || ''}"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">${t('th_region')}</label><input type="text" id="p-region" class="form-input" placeholder="Lara, Konyaaltı vs." value="${state.editingItem.region || ''}"></div>
            <div class="form-group"><label class="form-label">Adres / Konum</label><input type="text" id="p-address" class="form-input" value="${state.editingItem.address || ''}"></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">Oda Sayısı</label>
                <select id="p-rooms" class="form-select">
                    ${['1+1','2+1','3+1','4+1','4+2','5+1','5+2','6+1','6+2','7+'].map(o => `<option value="${o}" ${state.editingItem.rooms === o ? 'selected' : ''}>${o}</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">m2 (Net)</label><input type="text" id="p-m2" class="form-input" value="${state.editingItem.m2 || ''}"></div>
            <div class="form-group"><label class="form-label">Bina Yaşı</label><input type="text" id="p-age" class="form-input" value="${state.editingItem.age || ''}"></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">Kullanım Durumu</label>
                <select id="p-usage" class="form-select">
                    ${['Boş','Kiracı','Mülk Sahibi'].map(o => `<option value="${o}" ${state.editingItem.usage === o ? 'selected' : ''}>${o}</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label class="form-label">Fiyat</label><input type="text" id="p-price" class="form-input" value="${state.editingItem.price}"></div>
        </div>
        <div class="form-group" style="${isAdmin ? '' : 'display:none'}"><label class="form-label">${t('th_agent')}</label>
            <select id="p-agent" class="form-select">${agents.map(a => `<option value="${a.name}" ${state.editingItem.agent === a.name ? 'selected' : ''}>${a.name}</option>`).join('')}</select>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
    // Bind save button directly
    setTimeout(() => {
        const saveBtn = document.getElementById('save-modal');
        if (saveBtn) saveBtn.onclick = doSaveModal;
    }, 0);
};

window.openCustomerDetail = (id) => {
    state.modalType = 'customer';
    state.editingCustomer = { ...(state.customers.find(x => x.id === id) || state.editingCustomer) };
    const isAdmin = state.currentUser.role === 'admin';
    const agents = state.users.filter(u => u.status === 'active');

    // Set modal footer with delete and save buttons
    const modalFooter = document.getElementById('modal-footer');
    modalFooter.innerHTML = `<button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">${t('btn_cancel')}</button>
        ${isAdmin ? `<button class="btn btn-danger" onclick="deleteCustomer(${id})">Sil</button>` : ''}
        <button class="btn btn-primary" id="save-modal">${t('btn_save')}</button>`;

    const cat = state.editingCustomer.category || 'sale';
    const scrollBody = document.getElementById('modal-scroll-body');
    scrollBody.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">${t('th_category')}</label>
                <select id="c-category" class="form-select">
                    <option value="sale" ${cat === 'sale' ? 'selected' : ''}>${t('opt_sale')}</option>
                    <option value="rent" ${cat === 'rent' ? 'selected' : ''}>${t('opt_rent')}</option>
                </select>
            </div>
            <div class="form-group"><label class="form-label">${t('th_status')}</label>
                <select id="c-status" class="form-select" onchange="const ss = document.getElementById('c-seller-status-wrap'); if(this.value==='Tamamlandı') ss.style.display='block'; else ss.style.display='none';">${['Yeni','Arandı','Randevu Alındı','Tamamlandı'].map(s => `<option value="${s}" ${state.editingCustomer.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
            </div>
        </div>
        <div id="c-seller-status-wrap" class="form-group" style="display:${state.editingCustomer.status === 'Tamamlandı' ? 'block' : 'none'}; background:rgba(22, 163, 74, 0.05); padding:1rem; border-radius:8px; border:1px dashed var(--accent-green); margin-bottom:1rem;">
            <label class="form-label" style="color:var(--accent-green); font-weight:700;">Portföy / Satıcı Durumu</label>
            <select id="c-seller-status" class="form-select">
                ${(cat === 'sale' ? ['Yeni','Sıcak','Pazarlıkta','Satıldı'] : ['Yeni','Sıcak','Pazarlıkta','Kiralandı']).map(s => `<option value="${s}" ${(state.editingCustomer.seller_status || 'Yeni') === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
            <p style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.4rem;">Bu müşteri "Tamamlandı" aşamasında olduğu için portföy durumunu buradan yönetebilirsiniz.</p>
        </div>
        <div class="form-group"><label class="form-label">${t('th_cust_name')}</label><input type="text" id="c-name" class="form-input" value="${state.editingCustomer.name || ''}"></div>
        <div class="form-group"><label class="form-label">${t('th_phone')}</label><input type="text" id="c-phone" class="form-input" value="${state.editingCustomer.phone || ''}"></div>
        <div class="form-group"><label class="form-label">${t('th_region')}</label><input type="text" id="c-region" class="form-input" placeholder="Kadıköy, Lara vs." value="${state.editingCustomer.region || ''}"></div>
        <div class="form-group"><label class="form-label">${t('th_interest')}</label><input type="text" id="c-interest" class="form-input" value="${state.editingCustomer.interest || ''}"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
            <div class="form-group"><label class="form-label">${t('th_meeting_date')}</label><input type="date" id="c-meeting-date" class="form-input" value="${state.editingCustomer.meeting_date || ''}"></div>
            <div class="form-group" style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
                <div>
                    <label class="form-label">Randevu Tarihi</label>
                    <input type="date" id="c-app-date" class="form-input" value="${(state.editingCustomer.appointment_datetime || '').split(' ')[0] || ''}">
                </div>
                <div>
                    <label class="form-label">Saat</label>
                    <input type="text" id="c-app-time" class="form-input" placeholder="14:00" value="${(state.editingCustomer.appointment_datetime || '').split(' ')[1] || ''}">
                </div>
            </div>
        </div>
        <div class="form-group"><label class="form-label">${t('th_email')}</label><input type="email" id="c-email" class="form-input" value="${state.editingCustomer.email || ''}"></div>
        <div class="form-group"><label class="form-label">${t('th_notes')}</label><textarea id="c-notes" class="form-input" style="height:80px; resize:none">${state.editingCustomer.notes || ''}</textarea></div>
        <div class="form-group" style="${isAdmin ? '' : 'display:none'}"><label class="form-label">${t('th_agent')}</label>
            <select id="c-agent" class="form-select">${agents.map(a => `<option value="${a.name}" ${state.editingCustomer.agent === a.name ? 'selected' : ''}>${a.name}</option>`).join('')}</select>
        </div>`;
    document.getElementById('modal-overlay').style.display = 'flex';
    // Bind the save button
    setTimeout(() => {
        const saveBtn = document.getElementById('save-modal');
        if (saveBtn) saveBtn.onclick = doSaveModal;
    }, 0);
};

// Central save handler used by both property and customer modals
function doSaveModal() {
    if (state.modalType === 'property') {
        const isAdmin = state.currentUser.role === 'admin';
        const updated = { 
            ...state.editingItem, 
            category: document.getElementById('p-category').value, 
            status: document.getElementById('p-status').value,
            prop_type: document.getElementById('p-type').value,
            name: document.getElementById('p-name').value.trim(),
            phone: document.getElementById('p-phone').value.trim(),
            region: document.getElementById('p-region').value.trim(),
            address: document.getElementById('p-address').value.trim(),
            rooms: document.getElementById('p-rooms').value,
            m2: document.getElementById('p-m2').value.trim(),
            age: document.getElementById('p-age').value.trim(),
            usage: document.getElementById('p-usage').value,
            price: document.getElementById('p-price').value.trim(),
            agent: isAdmin ? document.getElementById('p-agent').value : state.editingItem.agent 
        };
        const idx = state.items.findIndex(i => i.id === updated.id);
        if (idx > -1) state.items[idx] = updated; else state.items.push(updated);
        saveProperties(); 
        if(state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
    } else if (state.modalType === 'customer') {
        const name = document.getElementById('c-name').value.trim(); const phone = document.getElementById('c-phone').value.trim(); const interest = document.getElementById('c-interest').value.trim();
        if(!name || !phone || !interest) { alert(t('msg_required_fields')); return; }
        
        const appDate = document.getElementById('c-app-date').value;
        const appTime = document.getElementById('c-app-time').value.trim();
        const appointment_datetime = appDate ? (appDate + (appTime ? ' ' + appTime : '')) : '';
        
        const updated = { 
            ...state.editingCustomer, 
            category: document.getElementById('c-category').value, 
            name, phone, 
            email: document.getElementById('c-email').value, 
            interest, 
            status: document.getElementById('c-status').value, 
            seller_status: document.getElementById('c-seller-status') ? document.getElementById('c-seller-status').value : (state.editingCustomer.seller_status || 'Yeni'),
            region: document.getElementById('c-region').value, 
            meeting_date: document.getElementById('c-meeting-date').value, 
            appointment_datetime, 
            notes: document.getElementById('c-notes').value, 
            agent: state.currentUser.role==='admin' ? document.getElementById('c-agent').value : state.editingCustomer.agent 
        };
        const idx = state.customers.findIndex(i => i.id === updated.id);
        if (idx > -1) state.customers[idx] = updated; else state.customers.push(updated);
        saveCustomers();
        // Notify user when customer moves to seller section or transitions status
        if (updated.status === 'Tamamlandı' && state.editingCustomer.status !== 'Tamamlandı') {
            updated.seller_status = 'Yeni'; // Auto-init on transition
            const msg = state.language === 'tr'
                ? `✅ ${updated.name} satıcı portföyüne taşındı ve durumu "Yeni" olarak belirlendi.`
                : `✅ ${updated.name} moved to Seller portfolio as "New".`;
            setTimeout(() => { if(document.getElementById('toast-container')) showToast(msg, 'success'); }, 400);
        } else if (updated.status === 'Tamamlandı' && updated.seller_status !== state.editingCustomer.seller_status) {
             const msg = state.language === 'tr' ? `Portföy durumu "${updated.seller_status}" olarak güncellendi.` : `Portfolio status updated to "${updated.seller_status}".`;
             setTimeout(() => { if(document.getElementById('toast-container')) showToast(msg, 'success'); }, 400);
        }
        if(state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
        else if (state.activeTab === 'customers') renderCustomers();
    }
    document.getElementById('modal-overlay').style.display = 'none';
}

// Legacy static save-modal button (fallback)
document.getElementById('save-modal').onclick = doSaveModal;

const showConfirm = (msg, onConfirm) => {
    document.getElementById('confirm-msg').innerText = msg;
    document.getElementById('confirm-modal-overlay').style.display = 'flex';
    document.getElementById('confirm-yes').onclick = () => { onConfirm(); document.getElementById('confirm-modal-overlay').style.display = 'none'; };
    document.getElementById('confirm-no').onclick = () => { document.getElementById('confirm-modal-overlay').style.display = 'none'; };
};

window.deleteProperty = (id) => { 
    showConfirm('Bu ilanı silmek istediğinizden emin misiniz?', () => {
        state.items = state.items.filter(x => x.id !== id); saveProperties(); 
        document.getElementById('modal-overlay').style.display='none'; renderBoard(state.activeTab); 
    });
};

window.deleteCustomer = (id) => { 
    showConfirm('Bu müşteriyi silmek istediğinizden emin misiniz?', () => {
        state.customers = state.customers.filter(x => x.id !== id); saveCustomers(); 
        document.getElementById('modal-overlay').style.display='none'; 
        if(state.activeTab==='customers') renderCustomers(); else renderBoard(state.activeTab); 
    });
};

window.updatePropStatuses = (cat) => {
    const statuses = cat === 'sale' ? ['Yeni','Sıcak','Pazarlıkta','Satıldı'] : ['Yeni','Sıcak','Pazarlıkta','Kiralandı'];
    const select = document.getElementById('p-status');
    const val = select.value;
    select.innerHTML = statuses.map(s => `<option value="${s}" ${val === s ? 'selected' : ''}>${s}</option>`).join('');
};

// Admin Nav Logic
function updateAdminNav() {
    const cons = state.users.filter(u => u.role === 'consultant');
    const nav = document.getElementById('admin-only-nav');
    nav.innerHTML = `<div style="padding: 1rem 1.5rem 0.5rem; font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase;">${t('nav_consultant_mgmt')}</div>
        <a href="#" class="nav-item" id="nav-cons-manage"><i data-lucide="users"></i><span>${t('nav_personnel_list')}</span></a>
        ${cons.map(c => `<a href="#" class="nav-item nav-agent-filter" data-filter="${c.name}"><i data-lucide="user"></i><span>${c.name}</span></a>`).join('')}`;
    document.getElementById('nav-cons-manage').onclick = () => switchTab('consultants');
    document.querySelectorAll('.nav-agent-filter').forEach(el => { el.onclick = () => { state.selectedAgentFilter = el.getAttribute('data-filter'); switchTab('sale'); document.getElementById('board-title').innerText = el.innerText; }; });
    initIcons();
}

// Consultant Edit
window.openConsultantEdit = (id) => {
    state.editingConsultant = state.users.find(x => x.id === id);
    document.getElementById('consultant-modal-title').innerText = t('nav_consultant_mgmt');
    document.getElementById('con-name').value = state.editingConsultant.name;
    document.getElementById('con-username').value = state.editingConsultant.username;
    document.getElementById('con-password').value = state.editingConsultant.password;
    document.getElementById('consultant-modal-overlay').style.display = 'flex';
};
document.getElementById('save-consultant-btn').onclick = () => {
    const name = document.getElementById('con-name').value;
    if(state.editingConsultant) { let u = state.users.find(x => x.id === state.editingConsultant.id); u.name = name; u.password = document.getElementById('con-password').value; }
    else state.users.push({ id: Date.now(), name, username: document.getElementById('con-username').value, password: document.getElementById('con-password').value, status: 'active', role: 'consultant' });
    saveUsers(); document.getElementById('consultant-modal-overlay').style.display = 'none'; renderConsultants(); updateAdminNav();
};
window.deleteConsultant = (id) => { 
    showConfirm('Bu danışmanı silmek istediğinizden emin misiniz?', () => {
        state.users = state.users.filter(x => x.id !== id); saveUsers(); renderConsultants(); updateAdminNav(); 
    });
};
window.toggleUserStatus = (id) => { let u = state.users.find(x => x.id === id); u.status = (u.status==='active'?'passive':'active'); saveUsers(); renderConsultants(); updateAdminNav(); };

// Sidebar Toggle
const sb = document.querySelector('.sidebar');
const ol = document.getElementById('sidebar-overlay');
const mt = document.getElementById('mobile-toggle');
const tgl = () => { sb.classList.toggle('visible'); ol.classList.toggle('active'); };
mt.onclick = tgl; ol.onclick = tgl;
document.addEventListener('click', (e) => { if(window.innerWidth <= 800 && e.target.closest('.nav-item')) { sb.classList.remove('visible'); ol.classList.remove('active'); } });

// Section-isolated filter & sort logic
window.toggleSectionFilter = (e, popId) => {
    e.stopPropagation();
    document.querySelectorAll('.column-filter-pop').forEach(p => { if (p.id !== popId) p.style.display = 'none'; });
    const pop = document.getElementById(popId);
    if (!pop) return;
    pop.style.display = pop.style.display === 'block' ? 'none' : 'block';
    if (pop.style.display === 'block') {
        const inp = pop.querySelector('input[type="text"]');
        if (inp) inp.focus();
    }
};

window.setSectionFilter = (sKey, key, value) => {
    if (!state.sectionFilters[sKey]) state.sectionFilters[sKey] = {};
    state.sectionFilters[sKey][key] = value;
    if (state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
    else renderCustomers();
};

window.toggleCheckboxFilter = (sKey, key, value, checked) => {
    if (!state.sectionFilters[sKey]) state.sectionFilters[sKey] = {};
    if (!Array.isArray(state.sectionFilters[sKey][key])) state.sectionFilters[sKey][key] = [];
    if (checked) { if (!state.sectionFilters[sKey][key].includes(value)) state.sectionFilters[sKey][key].push(value); }
    else { state.sectionFilters[sKey][key] = state.sectionFilters[sKey][key].filter(v => v !== value); }
    if (state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
    else renderCustomers();
};

window.clearSectionFilter = (sKey, key) => {
    if (state.sectionFilters[sKey]) delete state.sectionFilters[sKey][key];
    if (state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
    else renderCustomers();
};

// Legacy aliases (kept for safety)
window.toggleColumnFilter = window.toggleSectionFilter;
window.setColumnFilter = (key, value) => {};
window.clearColumnFilter = (key) => {};

window.toggleSort = (key) => {
    if(state.sortConfig.key === key) {
        state.sortConfig.direction = state.sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
        state.sortConfig.key = key;
        state.sortConfig.direction = 'asc';
    }
    if(state.activeTab === 'sale' || state.activeTab === 'rent') renderBoard(state.activeTab);
    else renderCustomers();
};

document.addEventListener('click', () => {
    document.querySelectorAll('.column-filter-pop').forEach(p => p.style.display = 'none');
});

document.addEventListener('DOMContentLoaded', initApp);
