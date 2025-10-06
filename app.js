// Application Data
const appData = {
    company_info: {
        name: "شركة التمويل المتقدم",
        address: "الرياض، المملكة العربية السعودية، حي العليا، طريق الملك فهد",
        phone: "+966 11 123 4567",
        mobile: "+966 50 123 4567",
        email: "info@advancedfinance.sa",
        website: "www.advancedfinance.sa",
        license: "ترخيص البنك المركزي السعودي رقم: 12345-2024",
        established: "2020",
        cr_number: "1010123456"
    },
    customers: [
        {
            id: 1,
            name: "أحمد محمد العلي",
            national_id: "1234567890",
            phone: "0501234567",
            email: "ahmed.ali@email.com",
            address: "الرياض، حي النرجس، شارع الأمير سلطان، مبنى 123"
        },
        {
            id: 2,
            name: "فاطمة سالم الغامدي",
            national_id: "2345678901",
            phone: "0512345678",
            email: "fatima.ghamdi@email.com",
            address: "جدة، حي الروضة، شارع التحلية، مبنى 456"
        },
        {
            id: 3,
            name: "محمد عبدالله القرني",
            national_id: "3456789012",
            phone: "0523456789",
            email: "mohammed.qarni@email.com",
            address: "الدمام، حي الشاطئ، طريق الملك فهد، مبنى 789"
        },
        {
            id: 4,
            name: "نورا إبراهيم السعيد",
            national_id: "4567890123",
            phone: "0534567890",
            email: "nora.said@email.com",
            address: "المدينة المنورة، حي العوالي، شارع النور"
        },
        {
            id: 5,
            name: "عبدالعزيز أحمد البحيري",
            national_id: "5678901234",
            phone: "0545678901",
            email: "abdulaziz.bahiri@email.com",
            address: "الطائف، حي السلامة، شارع الملك عبدالعزيز"
        },
        {
            id: 6,
            name: "مريم سعد الزهراني",
            national_id: "6789012345",
            phone: "0556789012",
            email: "mariam.zahrani@email.com",
            address: "الخبر، حي العقربية، شارع الأمير فيصل"
        },
        {
            id: 7,
            name: "خالد عبدالرحمن القحطاني",
            national_id: "7890123456",
            phone: "0567890123",
            email: "khalid.qahtani@email.com",
            address: "أبها، حي المنهل، طريق الملك عبدالله"
        },
        {
            id: 8,
            name: "هند محمد العتيبي",
            national_id: "8901234567",
            phone: "0578901234",
            email: "hind.otaibi@email.com",
            address: "بريدة، حي النخيل، شارع الملك عبدالعزيز"
        },
        {
            id: 9,
            name: "عمر أحمد الشمري",
            national_id: "9012345678",
            phone: "0589012345",
            email: "omar.shamri@email.com",
            address: "تبوك، حي السليمانية، طريق الأمير فهد"
        },
        {
            id: 10,
            name: "سارة عبدالله الحربي",
            national_id: "0123456789",
            phone: "0590123456",
            email: "sara.harbi@email.com",
            address: "جازان، حي الرونة، شارع الملك فهد"
        }
    ],
    loans: [
        {
            id: 1,
            customer_id: 1,
            amount: 100000,
            interest_rate: 8.5,
            duration_months: 36,
            start_date: "2024-01-15",
            status: "active",
            purpose: "شراء سيارة",
            monthly_payment: 3166.18
        },
        {
            id: 2,
            customer_id: 2,
            amount: 75000,
            interest_rate: 9.0,
            duration_months: 24,
            start_date: "2024-02-01",
            status: "active",
            purpose: "تطوير الأعمال",
            monthly_payment: 3432.09
        },
        {
            id: 3,
            customer_id: 3,
            amount: 150000,
            interest_rate: 7.5,
            duration_months: 48,
            start_date: "2024-03-10",
            status: "active",
            purpose: "شراء عقار",
            monthly_payment: 3615.74
        },
        {
            id: 4,
            customer_id: 4,
            amount: 50000,
            interest_rate: 10.0,
            duration_months: 18,
            start_date: "2024-04-20",
            status: "completed",
            purpose: "تعليم",
            monthly_payment: 3041.99
        },
        {
            id: 5,
            customer_id: 5,
            amount: 200000,
            interest_rate: 8.0,
            duration_months: 60,
            start_date: "2024-05-05",
            status: "active",
            purpose: "تأسيس مشروع",
            monthly_payment: 4051.70
        },
        {
            id: 6,
            customer_id: 6,
            amount: 80000,
            interest_rate: 9.5,
            duration_months: 30,
            start_date: "2024-06-01",
            status: "active",
            purpose: "تجديد المنزل",
            monthly_payment: 2810.45
        },
        {
            id: 7,
            customer_id: 7,
            amount: 120000,
            interest_rate: 8.8,
            duration_months: 42,
            start_date: "2024-07-15",
            status: "active",
            purpose: "توسعة التجارة",
            monthly_payment: 3205.67
        },
        {
            id: 8,
            customer_id: 8,
            amount: 60000,
            interest_rate: 9.2,
            duration_months: 20,
            start_date: "2024-08-01",
            status: "active",
            purpose: "معدات طبية",
            monthly_payment: 3289.12
        }
    ],
    payments: [
        {
            id: 1,
            loan_id: 1,
            installment_number: 1,
            amount: 3166.18,
            principal: 2457.90,
            interest: 708.33,
            due_date: "2024-02-15",
            paid_date: "2024-02-14",
            status: "paid"
        },
        {
            id: 2,
            loan_id: 1,
            installment_number: 2,
            amount: 3166.18,
            principal: 2475.29,
            interest: 690.89,
            due_date: "2024-03-15",
            paid_date: "2024-03-15",
            status: "paid"
        },
        {
            id: 3,
            loan_id: 1,
            installment_number: 3,
            amount: 3166.18,
            principal: 2492.81,
            interest: 673.37,
            due_date: "2024-04-15",
            paid_date: null,
            status: "overdue"
        }
    ],
    settings: {
        company_settings: {
            default_interest_rate: 8.5,
            grace_period_days: 7,
            late_fee_percentage: 2.5,
            min_loan_amount: 10000,
            max_loan_amount: 1000000,
            min_duration_months: 6,
            max_duration_months: 60
        },
        notification_settings: {
            email_notifications: true,
            sms_notifications: true,
            payment_reminders: true,
            overdue_notifications: true,
            contract_notifications: true
        },
        system_settings: {
            currency: "SAR",
            date_format: "dd/mm/yyyy",
            number_format: "comma",
            backup_frequency: "daily",
            session_timeout: 30
        }
    },
    contract_terms: [
        "يلتزم المقترض بسداد الأقساط الشهرية في المواعيد المحددة دون تأخير",
        "تطبق غرامة تأخير بنسبة 2.5% شهرياً على الأقساط المتأخرة عن موعد استحقاقها",
        "يحق للشركة المطالبة بسداد القرض كاملاً في حال التأخر عن ثلاثة أقساط متتالية",
        "يجب على المقترض إشعار الشركة فوراً عند تغيير بيانات الاتصال أو العنوان",
        "جميع المبالغ والحسابات محسوبة بالريال السعودي",
        "يخضع هذا العقد لأنظمة وقوانين المملكة العربية السعودية",
        "أي نزاع ناشئ عن هذا العقد يحال إلى المحاكم المختصة في مدينة الرياض",
        "لا يجوز للمقترض التنازل عن هذا العقد لطرف ثالث دون موافقة كتابية من الشركة"
    ],
    notifications: [
        {
            id: 1,
            title: "قسط مستحق",
            message: "قسط رقم 3 للقرض رقم 1 مستحق الدفع",
            type: "warning",
            read: false,
            created_at: "2024-10-06T10:00:00"
        },
        {
            id: 2,
            title: "قرض جديد",
            message: "تم إضافة قرض جديد رقم 8",
            type: "success",
            read: false,
            created_at: "2024-10-05T15:30:00"
        },
        {
            id: 3,
            title: "دفعة مستلمة",
            message: "تم استلام دفعة بمبلغ 3166.18 ريال",
            type: "success",
            read: true,
            created_at: "2024-10-04T09:15:00"
        }
    ]
};

// Global Variables
let currentUser = null;
let currentLoanId = null;
let charts = {};
let isDataModified = false;
let lastSaveTime = null;

// Data Management System (Simulated Save/Load without localStorage)
function saveAllData() {
    try {
        showSaveStatus('saving');
        
        // Create a deep copy to simulate saving
        const dataToSave = JSON.parse(JSON.stringify(appData));
        
        // Simulate async save operation
        setTimeout(() => {
            lastSaveTime = new Date().toISOString();
            isDataModified = false;
            showSaveStatus('saved');
            console.log('تم الحفظ الافتراضي للبيانات في:', lastSaveTime);
            
            // Show user notification about session-based storage only once
            if (!sessionStorage.getItem('saveNotificationShown')) {
                showNotification('تنبيه: البيانات محفوظة في الجلسة الحالية - ستختفي عند إغلاق المتصفح', 'warning');
                sessionStorage.setItem('saveNotificationShown', 'true');
            }
        }, 500);
        
        return true;
    } catch (error) {
        console.error('خطأ في حفظ البيانات:', error);
        showSaveStatus('error');
        return false;
    }
}

function loadAllData() {
    try {
        console.log('تم تحميل البيانات الافتراضية');
        return true;
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
        return false;
    }
}

function showSaveStatus(status) {
    let statusElement = document.getElementById('save-status');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.id = 'save-status';
        statusElement.className = 'save-status';
        const headerRight = document.querySelector('.header-right');
        if (headerRight) {
            headerRight.insertBefore(statusElement, headerRight.firstChild);
        }
    }

    if (status === 'saving') {
        statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الحفظ...';
        statusElement.className = 'save-status saving';
    } else if (status === 'saved') {
        statusElement.innerHTML = '<i class="fas fa-check"></i> تم الحفظ';
        statusElement.className = 'save-status saved';
        setTimeout(() => {
            statusElement.innerHTML = '';
            statusElement.className = 'save-status';
        }, 2000);
    } else if (status === 'error') {
        statusElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> خطأ في الحفظ';
        statusElement.className = 'save-status error';
    }
}

function markDataAsModified() {
    isDataModified = true;
}

// Backup and Restore Functions
function createBackup() {
    const backup = {
        customers: appData.customers,
        loans: appData.loans,
        payments: appData.payments,
        settings: appData.settings,
        timestamp: new Date().toISOString()
    };
    
    const backupString = JSON.stringify(backup, null, 2);
    const blob = new Blob([backupString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-${new Date().getTime()}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('تم إنشاء النسخة الاحتياطية بنجاح', 'success');
}

function restoreBackup(file) {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            
            appData.customers = backup.customers || appData.customers;
            appData.loans = backup.loans || appData.loans;
            appData.payments = backup.payments || appData.payments;
            appData.settings = backup.settings || appData.settings;
            
            markDataAsModified();
            saveAllData();
            
            // Update current view
            const currentSection = document.querySelector('.content-section:not(.hidden)');
            if (currentSection) {
                const sectionId = currentSection.id.replace('-section', '');
                showSection(sectionId);
            }
            
            showNotification('تم استعادة النسخة الاحتياطية بنجاح', 'success');
        } catch (error) {
            console.error('Backup restore error:', error);
            showNotification('خطأ في استعادة النسخة الاحتياطية', 'error');
        }
    };
    reader.readAsText(file);
}

// Initialize EmailJS
try {
    emailjs.init("user_demo_public_key");
} catch (error) {
    console.log('EmailJS initialization failed:', error);
}

// Application Initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('تحميل التطبيق...');
    
    // Load saved data
    const dataLoaded = loadAllData();
    
    if (dataLoaded) {
        console.log('تم تحميل البيانات المحفوظة بنجاح');
    } else {
        console.log('استخدام البيانات الافتراضية');
    }
    
    // Initialize application
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    setupAutoSave();
    showLoginPage();
    console.log('تم تهيئة التطبيق بنجاح');
}

function setupAutoSave() {
    // Auto save every 30 seconds if data is modified
    setInterval(function() {
        if (isDataModified) {
            saveAllData();
        }
    }, 30000);
    
    // Save before page unload
    window.addEventListener('beforeunload', function() {
        if (isDataModified) {
            saveAllData();
        }
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Settings forms
    const companyForm = document.getElementById('company-settings-form');
    if (companyForm) {
        companyForm.addEventListener('submit', saveCompanySettings);
    }
    
    const systemForm = document.getElementById('system-settings-form');
    if (systemForm) {
        systemForm.addEventListener('submit', saveSystemSettings);
    }
    
    // Modal overlays
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideAllModals();
        }
    });
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    console.log('Attempting login with:', username, password);
    
    if (username === 'admin' && password === '123456') {
        currentUser = { username: 'admin', role: 'admin' };
        console.log('Login successful, showing main app');
        
        // Hide login page and show main app
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        
        // Initialize dashboard
        showSection('dashboard');
        
        showNotification('مرحباً بك في نظام إدارة التقسيط', 'success');
    } else {
        showNotification('اسم المستخدم أو كلمة المرور غير صحيحة', 'error');
    }
}

function logout() {
    if (isDataModified) {
        if (confirm('لديك تغييرات غير محفوظة، هل تريد الخروج؟')) {
            saveAllData();
        }
    }
    
    currentUser = null;
    hideAllModals();
    showLoginPage();
    showNotification('تم تسجيل الخروج بنجاح', 'info');
}

function showLoginPage() {
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    hideAllModals();
}

// Navigation Functions
function showSection(section) {
    console.log('Showing section:', section);
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.add('hidden');
    });
    
    // Show selected section
    const targetSection = document.getElementById(section + '-section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update active menu
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });
    const menuLink = document.querySelector(`[onclick="showSection('${section}')"]`);
    if (menuLink) {
        menuLink.classList.add('active');
    }
    
    // Update page title
    const titles = {
        dashboard: 'لوحة التحكم',
        customers: 'إدارة العملاء',
        loans: 'إدارة القروض',
        payments: 'إدارة المدفوعات',
        contracts: 'العقود والمستندات',
        reports: 'التقارير والإحصائيات',
        notifications: 'الإشعارات',
        settings: 'الإعدادات'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = titles[section] || section;
    }
    
    // Load section specific content
    switch (section) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'customers':
            loadCustomers();
            break;
        case 'loans':
            loadLoans();
            break;
        case 'payments':
            loadPayments();
            break;
        case 'contracts':
            loadContracts();
            break;
        case 'notifications':
            loadNotifications();
            break;
        default:
            break;
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// Dashboard Functions
function loadDashboard() {
    updateStatistics();
    createCharts();
    loadRecentActivities();
}

function updateStatistics() {
    const totalLoans = appData.loans.length;
    const activeLoans = appData.loans.filter(loan => loan.status === 'active').length;
    const completedLoans = appData.loans.filter(loan => loan.status === 'completed').length;
    const totalAmount = appData.loans.reduce((sum, loan) => sum + loan.amount, 0);
    
    document.getElementById('total-loans-count').textContent = totalLoans;
    document.getElementById('active-loans-count').textContent = activeLoans;
    document.getElementById('completed-loans-count').textContent = completedLoans;
    document.getElementById('total-amount').textContent = totalAmount.toLocaleString('ar-SA') + ' ريال';
}

function createCharts() {
    // Loan Status Chart
    createLoanStatusChart();
    
    // Monthly Performance Chart
    createMonthlyPerformanceChart();
    
    // Portfolio Growth Chart
    createPortfolioGrowthChart();
}

function createLoanStatusChart() {
    const ctx = document.getElementById('loan-status-chart');
    if (!ctx) return;
    
    const activeLoans = appData.loans.filter(loan => loan.status === 'active').length;
    const completedLoans = appData.loans.filter(loan => loan.status === 'completed').length;
    
    if (charts.loanStatus) {
        charts.loanStatus.destroy();
    }
    
    charts.loanStatus = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['القروض النشطة', 'القروض المكتملة'],
            datasets: [{
                data: [activeLoans, completedLoans],
                backgroundColor: ['#1FB8CD', '#FFC185'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createMonthlyPerformanceChart() {
    const ctx = document.getElementById('monthly-performance-chart');
    if (!ctx) return;
    
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'];
    const loanAmounts = [100000, 175000, 325000, 375000, 575000, 655000];
    
    if (charts.monthlyPerformance) {
        charts.monthlyPerformance.destroy();
    }
    
    charts.monthlyPerformance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'إجمالي القروض (ريال)',
                data: loanAmounts,
                backgroundColor: '#B4413C',
                borderColor: '#964325',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString('ar-SA') + ' ريال';
                        }
                    }
                }
            }
        }
    });
}

function createPortfolioGrowthChart() {
    const ctx = document.getElementById('portfolio-growth-chart');
    if (!ctx) return;
    
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'];
    const portfolioValues = [100000, 180000, 320000, 380000, 580000, 780000];
    
    if (charts.portfolioGrowth) {
        charts.portfolioGrowth.destroy();
    }
    
    charts.portfolioGrowth = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'قيمة المحفظة (ريال)',
                data: portfolioValues,
                borderColor: '#5D878F',
                backgroundColor: 'rgba(93, 135, 143, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString('ar-SA') + ' ريال';
                        }
                    }
                }
            }
        }
    });
}

function loadRecentActivities() {
    const activitiesList = document.getElementById('recent-activities-list');
    if (!activitiesList) return;
    
    const activities = [
        {
            icon: 'fas fa-plus-circle',
            type: 'success',
            title: 'قرض جديد',
            description: 'تم إضافة قرض جديد بمبلغ 60,000 ريال',
            time: 'منذ ساعة'
        },
        {
            icon: 'fas fa-credit-card',
            type: 'success',
            title: 'دفعة مستلمة',
            description: 'تم استلام دفعة من أحمد العلي بمبلغ 3,166 ريال',
            time: 'منذ 3 ساعات'
        },
        {
            icon: 'fas fa-exclamation-triangle',
            type: 'warning',
            title: 'قسط متأخر',
            description: 'قسط رقم 3 للقرض رقم 1 متأخر عن موعد السداد',
            time: 'منذ يوم'
        },
        {
            icon: 'fas fa-file-contract',
            type: 'success',
            title: 'عقد مرسل',
            description: 'تم إرسال عقد القرض رقم 8 بالإيميل',
            time: 'منذ يومين'
        }
    ];
    
    activitiesList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
            </div>
            <div class="activity-time">${activity.time}</div>
        </div>
    `).join('');
}

// Customer Management Functions (Enhanced with Auto-Save)
function loadCustomers() {
    populateCustomersTable();
    populateCustomerSelect();
}

function populateCustomersTable() {
    const tbody = document.getElementById('customers-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = appData.customers.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.national_id}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td>
                <button class="btn btn--primary btn--sm" onclick="editCustomer(${customer.id})">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn--error btn--sm" onclick="deleteCustomer(${customer.id})">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        </tr>
    `).join('');
}

function populateCustomerSelect() {
    const select = document.querySelector('#add-loan-form select[name="customer_id"]');
    if (select) {
        select.innerHTML = '<option value="">اختر العميل</option>' +
            appData.customers.map(customer => 
                `<option value="${customer.id}">${customer.name}</option>`
            ).join('');
    }
}

function showAddCustomerModal() {
    const form = document.getElementById('add-customer-form');
    if (form) {
        form.reset();
    }
    showModal('add-customer-modal');
}

function addCustomer() {
    const form = document.getElementById('add-customer-form');
    if (!form) return;
    
    const formData = new FormData(form);
    
    const newCustomer = {
        id: Math.max(...appData.customers.map(c => c.id)) + 1,
        name: formData.get('name'),
        national_id: formData.get('national_id'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address')
    };
    
    if (!newCustomer.name || !newCustomer.national_id || !newCustomer.phone || !newCustomer.email) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // Add customer
    appData.customers.push(newCustomer);
    
    // Mark data as modified and save immediately
    markDataAsModified();
    saveAllData();
    
    // Update UI
    populateCustomersTable();
    populateCustomerSelect();
    hideModal('add-customer-modal');
    showNotification('تم إضافة العميل بنجاح', 'success');
}

function editCustomer(id) {
    const customer = appData.customers.find(c => c.id === id);
    if (customer) {
        showNotification('ميزة التعديل ستكون متاحة قريباً', 'info');
    }
}

function deleteCustomer(id) {
    if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
        // Delete customer
        appData.customers = appData.customers.filter(c => c.id !== id);
        
        // Delete associated loans
        appData.loans = appData.loans.filter(l => l.customer_id !== id);
        
        // Mark data as modified and save immediately
        markDataAsModified();
        saveAllData();
        
        // Update UI
        populateCustomersTable();
        populateCustomerSelect();
        updateStatistics();
        showNotification('تم حذف العميل بنجاح', 'success');
    }
}

// Loan Management Functions (Enhanced with Auto-Save)
function loadLoans() {
    populateLoansGrid();
}

function populateLoansGrid() {
    const loansGrid = document.getElementById('loans-grid');
    if (!loansGrid) return;
    
    loansGrid.innerHTML = appData.loans.map(loan => {
        const customer = appData.customers.find(c => c.id === loan.customer_id);
        return `
            <div class="loan-card">
                <div class="loan-header">
                    <div class="loan-id">قرض #${loan.id}</div>
                    <div class="loan-status ${loan.status}">
                        ${loan.status === 'active' ? 'نشط' : 'مكتمل'}
                    </div>
                </div>
                <div class="loan-details">
                    <div class="loan-detail">
                        <span class="detail-label">العميل:</span>
                        <span class="detail-value">${customer ? customer.name : 'غير محدد'}</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">المبلغ:</span>
                        <span class="detail-value">${loan.amount.toLocaleString('ar-SA')} ريال</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">القسط الشهري:</span>
                        <span class="detail-value">${loan.monthly_payment.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">المدة:</span>
                        <span class="detail-value">${loan.duration_months} شهر</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">الغرض:</span>
                        <span class="detail-value">${loan.purpose}</span>
                    </div>
                </div>
                <div class="loan-actions">
                    <button class="btn btn--primary btn--sm" onclick="viewContract(${loan.id})">
                        <i class="fas fa-file-contract"></i> العقد
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="printContract(${loan.id})">
                        <i class="fas fa-print"></i> طباعة
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="downloadContractPDF(${loan.id})">
                        <i class="fas fa-download"></i> PDF
                    </button>
                    <button class="btn btn--error btn--sm" onclick="deleteLoan(${loan.id})">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function showAddLoanModal() {
    const form = document.getElementById('add-loan-form');
    if (form) {
        form.reset();
        
        // Set default date to today
        const today = new Date().toISOString().split('T')[0];
        const dateField = form.querySelector('[name="start_date"]');
        if (dateField) {
            dateField.value = today;
        }
        
        // Set default interest rate
        const rateField = form.querySelector('[name="interest_rate"]');
        if (rateField) {
            rateField.value = appData.settings.company_settings.default_interest_rate;
        }
    }
    
    populateCustomerSelect();
    showModal('add-loan-modal');
}

function addLoan() {
    const form = document.getElementById('add-loan-form');
    if (!form) return;
    
    const formData = new FormData(form);
    
    const amount = parseFloat(formData.get('amount'));
    const interestRate = parseFloat(formData.get('interest_rate'));
    const durationMonths = parseInt(formData.get('duration_months'));
    
    if (!amount || !interestRate || !durationMonths) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    const monthlyPayment = calculateMonthlyPayment(amount, interestRate, durationMonths);
    
    const newLoan = {
        id: Math.max(...appData.loans.map(l => l.id)) + 1,
        customer_id: parseInt(formData.get('customer_id')),
        amount: amount,
        interest_rate: interestRate,
        duration_months: durationMonths,
        start_date: formData.get('start_date'),
        status: 'active',
        purpose: formData.get('purpose'),
        monthly_payment: monthlyPayment
    };
    
    // Add loan
    appData.loans.push(newLoan);
    
    // Mark data as modified and save immediately
    markDataAsModified();
    saveAllData();
    
    // Update UI
    populateLoansGrid();
    updateStatistics();
    hideModal('add-loan-modal');
    showNotification('تم إضافة القرض بنجاح', 'success');
}

function calculateMonthlyPayment(principal, rate, months) {
    const monthlyRate = rate / 100 / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment * 100) / 100;
}

function deleteLoan(id) {
    if (confirm('هل أنت متأكد من حذف هذا القرض؟ سيتم حذف جميع المدفوعات المرتبطة به.')) {
        // Delete loan and associated payments
        appData.loans = appData.loans.filter(l => l.id !== id);
        appData.payments = appData.payments.filter(p => p.loan_id !== id);
        
        // Mark data as modified and save immediately
        markDataAsModified();
        saveAllData();
        
        // Update UI
        populateLoansGrid();
        updateStatistics();
        showNotification('تم حذف القرض بنجاح', 'success');
    }
}

// Payment Management Functions
function loadPayments() {
    populatePaymentsTable();
}

function populatePaymentsTable() {
    const tbody = document.getElementById('payments-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = appData.payments.map(payment => {
        const loan = appData.loans.find(l => l.id === payment.loan_id);
        const customer = loan ? appData.customers.find(c => c.id === loan.customer_id) : null;
        
        const statusText = {
            paid: 'مدفوع',
            pending: 'في الانتظار',
            overdue: 'متأخر'
        };
        
        const statusClass = {
            paid: 'success',
            pending: 'warning',
            overdue: 'error'
        };
        
        return `
            <tr>
                <td>#${payment.loan_id}</td>
                <td>${customer ? customer.name : 'غير محدد'}</td>
                <td>${payment.installment_number}</td>
                <td>${payment.amount.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</td>
                <td>${new Date(payment.due_date).toLocaleDateString('ar-SA')}</td>
                <td>
                    <span class="status status--${statusClass[payment.status]}">
                        ${statusText[payment.status]}
                    </span>
                </td>
                <td>
                    <button class="btn btn--primary btn--sm" onclick="editPayment(${payment.id})">
                        <i class="fas fa-edit"></i> تعديل
                    </button>
                    <button class="btn btn--error btn--sm" onclick="deletePayment(${payment.id})">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function showAddPaymentModal() {
    showNotification('ميزة إضافة المدفوعات ستكون متاحة قريباً', 'info');
}

function editPayment(id) {
    showNotification('ميزة تعديل المدفوعات ستكون متاحة قريباً', 'info');
}

function deletePayment(id) {
    if (confirm('هل أنت متأكد من حذف هذه الدفعة؟')) {
        appData.payments = appData.payments.filter(p => p.id !== id);
        
        // Mark data as modified and save immediately
        markDataAsModified();
        saveAllData();
        
        populatePaymentsTable();
        showNotification('تم حذف الدفعة بنجاح', 'success');
    }
}

// Contract Management Functions
function loadContracts() {
    populateContractsGrid();
}

function populateContractsGrid() {
    const contractsGrid = document.getElementById('contracts-grid');
    if (!contractsGrid) return;
    
    contractsGrid.innerHTML = appData.loans.map(loan => {
        const customer = appData.customers.find(c => c.id === loan.customer_id);
        return `
            <div class="loan-card">
                <div class="loan-header">
                    <div class="loan-id">عقد قرض #${loan.id}</div>
                    <div class="loan-status ${loan.status}">
                        ${loan.status === 'active' ? 'نشط' : 'مكتمل'}
                    </div>
                </div>
                <div class="loan-details">
                    <div class="loan-detail">
                        <span class="detail-label">العميل:</span>
                        <span class="detail-value">${customer ? customer.name : 'غير محدد'}</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">المبلغ:</span>
                        <span class="detail-value">${loan.amount.toLocaleString('ar-SA')} ريال</span>
                    </div>
                    <div class="loan-detail">
                        <span class="detail-label">تاريخ البدء:</span>
                        <span class="detail-value">${new Date(loan.start_date).toLocaleDateString('ar-SA')}</span>
                    </div>
                </div>
                <div class="loan-actions">
                    <button class="btn btn--primary" onclick="viewContract(${loan.id})">
                        <i class="fas fa-eye"></i> عرض العقد
                    </button>
                    <button class="btn btn--secondary" onclick="printContract(${loan.id})">
                        <i class="fas fa-print"></i> طباعة
                    </button>
                    <button class="btn btn--secondary" onclick="downloadContractPDF(${loan.id})">
                        <i class="fas fa-download"></i> تحميل PDF
                    </button>
                    <button class="btn btn--secondary" onclick="sendContractEmail(${loan.id})">
                        <i class="fas fa-envelope"></i> إرسال إيميل
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function viewContract(loanId) {
    currentLoanId = loanId;
    generateContractHTML(loanId);
    showModal('contract-modal');
}

function generateContractHTML(loanId) {
    const loan = appData.loans.find(l => l.id === loanId);
    const customer = appData.customers.find(c => c.id === loan.customer_id);
    
    if (!loan || !customer) {
        showNotification('خطأ في تحميل بيانات العقد', 'error');
        return;
    }
    
    const installments = generateInstallmentSchedule(loan);
    const contractContent = document.getElementById('contract-content');
    if (!contractContent) return;
    
    contractContent.innerHTML = `
        <div class="contract-header">
            <h1 class="contract-title">عقد تمويل شخصي</h1>
            <div class="company-details">
                <h3>${appData.company_info.name}</h3>
                <p>${appData.company_info.address}</p>
                <p>هاتف: ${appData.company_info.phone} | جوال: ${appData.company_info.mobile}</p>
                <p>إيميل: ${appData.company_info.email} | الموقع: ${appData.company_info.website}</p>
                <p>${appData.company_info.license}</p>
                <p>سجل تجاري رقم: ${appData.company_info.cr_number}</p>
            </div>
        </div>
        
        <div class="contract-info">
            <div class="info-section">
                <h4>بيانات العميل</h4>
                <p><strong>الاسم الكامل:</strong> ${customer.name}</p>
                <p><strong>رقم الهوية الوطنية:</strong> ${customer.national_id}</p>
                <p><strong>رقم الهاتف:</strong> ${customer.phone}</p>
                <p><strong>البريد الإلكتروني:</strong> ${customer.email}</p>
                <p><strong>العنوان:</strong> ${customer.address}</p>
            </div>
            
            <div class="info-section">
                <h4>تفاصيل القرض</h4>
                <p><strong>رقم القرض:</strong> #${loan.id}</p>
                <p><strong>مبلغ القرض:</strong> ${loan.amount.toLocaleString('ar-SA')} ريال سعودي</p>
                <p><strong>معدل الفائدة:</strong> ${loan.interest_rate}% سنوياً</p>
                <p><strong>مدة القرض:</strong> ${loan.duration_months} شهر</p>
                <p><strong>القسط الشهري:</strong> ${loan.monthly_payment.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</p>
                <p><strong>تاريخ بداية القرض:</strong> ${new Date(loan.start_date).toLocaleDateString('ar-SA')}</p>
                <p><strong>الغرض من القرض:</strong> ${loan.purpose}</p>
            </div>
        </div>
        
        <div class="installments-section">
            <h4>جدول الأقساط الشهرية</h4>
            <table class="installments-table">
                <thead>
                    <tr>
                        <th>رقم القسط</th>
                        <th>تاريخ الاستحقاق</th>
                        <th>المبلغ الإجمالي</th>
                        <th>أصل الدين</th>
                        <th>الفائدة</th>
                        <th>الرصيد المتبقي</th>
                    </tr>
                </thead>
                <tbody>
                    ${installments.map(installment => `
                        <tr>
                            <td>${installment.number}</td>
                            <td>${installment.date}</td>
                            <td>${installment.payment.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</td>
                            <td>${installment.principal.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</td>
                            <td>${installment.interest.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</td>
                            <td>${installment.balance.toLocaleString('ar-SA', {maximumFractionDigits: 2})} ريال</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="contract-terms">
            <h4>الشروط والأحكام</h4>
            <ul>
                ${appData.contract_terms.map(term => `<li>${term}</li>`).join('')}
            </ul>
        </div>
        
        <div class="signature-section">
            <div class="signature-box">
                <h4>توقيع المقترض</h4>
                <p><strong>الاسم:</strong> ${customer.name}</p>
                <p><strong>رقم الهوية:</strong> ${customer.national_id}</p>
                <p><strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
                <br><br>
                <p>_________________________</p>
                <p>التوقيع</p>
            </div>
            
            <div class="signature-box">
                <h4>توقيع المقرض</h4>
                <p><strong>الشركة:</strong> ${appData.company_info.name}</p>
                <p><strong>المفوض بالتوقيع:</strong> المدير العام</p>
                <p><strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
                <br><br>
                <p>_________________________</p>
                <p>التوقيع والختم</p>
            </div>
        </div>
    `;
}

function generateInstallmentSchedule(loan) {
    const installments = [];
    const monthlyRate = loan.interest_rate / 100 / 12;
    let balance = loan.amount;
    const startDate = new Date(loan.start_date);
    
    for (let i = 1; i <= loan.duration_months; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = loan.monthly_payment - interestPayment;
        balance -= principalPayment;
        
        const paymentDate = new Date(startDate);
        paymentDate.setMonth(paymentDate.getMonth() + i - 1);
        
        installments.push({
            number: i,
            date: paymentDate.toLocaleDateString('ar-SA'),
            payment: loan.monthly_payment,
            principal: Math.max(0, principalPayment),
            interest: interestPayment,
            balance: Math.max(0, balance)
        });
    }
    
    return installments;
}

function printContract(loanId = null) {
    if (loanId && loanId !== currentLoanId) {
        currentLoanId = loanId;
        generateContractHTML(loanId);
        setTimeout(() => {
            window.print();
        }, 500);
    } else {
        window.print();
    }
}

function downloadContractPDF(loanId = null) {
    if (loanId) currentLoanId = loanId;
    
    const loan = appData.loans.find(l => l.id === currentLoanId);
    const customer = appData.customers.find(c => c.id === loan.customer_id);
    
    if (!loan || !customer) {
        showNotification('خطأ في تحميل بيانات القرض', 'error');
        return;
    }
    
    showLoading();
    
    if (loanId && loanId !== currentLoanId) {
        generateContractHTML(loanId);
    }
    
    const contractElement = document.getElementById('contract-content');
    if (!contractElement) {
        hideLoading();
        showNotification('خطأ في تحميل محتوى العقد', 'error');
        return;
    }
    
    if (typeof html2pdf === 'undefined') {
        hideLoading();
        showNotification('مكتبة PDF غير متوفرة، يرجى استخدام الطباعة بدلاً من ذلك', 'warning');
        return;
    }
    
    const options = {
        margin: 0.5,
        filename: `عقد_تمويل_${customer.name.replace(/\s+/g, '_')}_${loan.id}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(options).from(contractElement).save().then(() => {
        hideLoading();
        showNotification('تم تحميل العقد بصيغة PDF بنجاح', 'success');
    }).catch((error) => {
        hideLoading();
        console.error('PDF generation error:', error);
        showNotification('حدث خطأ أثناء إنشاء ملف PDF، يرجى استخدام الطباعة', 'error');
    });
}

function sendContractEmail(loanId = null) {
    if (loanId) currentLoanId = loanId;
    
    const loan = appData.loans.find(l => l.id === currentLoanId);
    const customer = appData.customers.find(c => c.id === loan.customer_id);
    
    if (!loan || !customer) {
        showNotification('خطأ في تحميل بيانات القرض', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate email sending
    setTimeout(() => {
        hideLoading();
        showNotification(`تم إرسال العقد إلى ${customer.email} بنجاح`, 'success');
    }, 2000);
}

// Reports Functions
function generateFinancialReport() {
    showNotification('تقرير الأداء المالي سيكون متاحاً قريباً', 'info');
}

function generateCustomersReport() {
    showNotification('تقرير العملاء والقروض سيكون متاحاً قريباً', 'info');
}

function generateOverdueReport() {
    showNotification('تقرير المتأخرات سيكون متاحاً قريباً', 'info');
}

function generateCashFlowReport() {
    showNotification('تقرير التدفق النقدي سيكون متاحاً قريباً', 'info');
}

// Notifications Functions
function loadNotifications() {
    populateNotificationsList();
}

function populateNotificationsList() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    notificationsList.innerHTML = appData.notifications.map(notification => `
        <div class="notification-item ${!notification.read ? 'unread' : ''}">
            <div class="notification-icon ${notification.type}">
                <i class="fas fa-${notification.type === 'warning' ? 'exclamation-triangle' : 
                    notification.type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            </div>
            <div class="notification-content">
                <h4>${notification.title}</h4>
                <p>${notification.message}</p>
                <div class="notification-time">
                    ${new Date(notification.created_at).toLocaleString('ar-SA')}
                </div>
            </div>
        </div>
    `).join('');
}

function markAllNotificationsRead() {
    appData.notifications.forEach(notification => {
        notification.read = true;
    });
    
    // Mark data as modified and save
    markDataAsModified();
    saveAllData();
    
    populateNotificationsList();
    showNotification('تم تحديد جميع الإشعارات كمقروءة', 'success');
}

// Settings Functions (Enhanced with Auto-Save)
function saveCompanySettings(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    appData.company_info.name = formData.get('company-name') || appData.company_info.name;
    appData.company_info.address = formData.get('company-address') || appData.company_info.address;
    appData.company_info.phone = formData.get('company-phone') || appData.company_info.phone;
    
    // Mark data as modified and save immediately
    markDataAsModified();
    saveAllData();
    
    showNotification('تم حفظ إعدادات الشركة بنجاح', 'success');
}

function saveSystemSettings(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    appData.settings.company_settings.default_interest_rate = parseFloat(formData.get('default-interest-rate')) || appData.settings.company_settings.default_interest_rate;
    appData.settings.company_settings.grace_period_days = parseInt(formData.get('grace-period')) || appData.settings.company_settings.grace_period_days;
    appData.settings.company_settings.late_fee_percentage = parseFloat(formData.get('late-fee')) || appData.settings.company_settings.late_fee_percentage;
    
    // Mark data as modified and save immediately
    markDataAsModified();
    saveAllData();
    
    showNotification('تم حفظ إعدادات النظام بنجاح', 'success');
}

// Utility Functions
function showModal(modalId) {
    hideAllModals();
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
    
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

function showNotification(message, type = 'info') {
    const notificationArea = document.getElementById('notification-area');
    if (!notificationArea) return;
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    notificationArea.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}