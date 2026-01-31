export const heroMetrics = [
    { label: "Transactions Analyzed", value: "110M+", icon: "database" },
    { label: "Critical Failures", value: "5", icon: "alert-triangle" },
    { label: "Strategic Solutions", value: "6", icon: "lightbulb" },
    { label: "Citizens Impacted", value: "12M+", icon: "users" },
];

export const problemStatements = [
    {
        title: "₹370 Crore Annual Waste",
        description: "Massive inefficiency in system operations",
        icon: "currency",
    },
    {
        title: "47% Enrollment Dropout",
        description: "Nearly half of enrollments become dormant",
        icon: "user-x",
    },
    {
        title: "6X Tuesday Server Overload",
        description: "Severe concentration on specific weekdays",
        icon: "server",
    },
    {
        title: "2.5M Underserved Citizens",
        description: "Geographic access disparities",
        icon: "map",
    },
    {
        title: "₹100 Cr Fraud Exposure",
        description: "Suspicious activity patterns detected",
        icon: "shield-alert",
    },
];

export const findingsData = [
    {
        id: 1,
        title: "Tuesday Crisis",
        frontMetric: "22.8M Updates",
        frontBadge: "6X Overload",
        backTitle: "Impact Breakdown",
        backContent: [
            "₹20 Cr annual infrastructure waste",
            "Server capacity maxed out on Tuesdays",
            "Poor citizen experience with delays",
            "Underutilization on other weekdays",
        ],
        color: "danger",
    },
    {
        id: 2,
        title: "Silent Dropout",
        frontMetric: "47% Dropout Rate",
        frontBadge: "2.5M Dormant",
        backTitle: "Wasted Investment",
        backContent: [
            "₹250 Cr in dormant enrollments",
            "5.3M enrolled → 2.8M active",
            "Highest dropout in rural states",
            "Massive reactivation opportunity",
        ],
        color: "danger",
    },
    {
        id: 3,
        title: "Lighthouse Effect",
        frontMetric: "347 Pincodes",
        frontBadge: "40% Activity",
        backTitle: "Network Opportunity",
        backContent: [
            "High-performing hubs identified",
            "5M+ citizens in catchment areas",
            "Blueprint for expansion strategy",
            "Proven engagement model",
        ],
        color: "secondary",
    },
    {
        id: 4,
        title: "Fraud Signals",
        frontMetric: "45% Suspicious",
        frontBadge: "₹100 Cr Exposure",
        backTitle: "Detection Needs",
        backContent: [
            "Abnormal pincode patterns detected",
            "Duplicate/inconsistent data",
            "Geographic anomalies",
            "Requires ML-based monitoring",
        ],
        color: "danger",
    },
    {
        id: 5,
        title: "Equity Gap",
        frontMetric: "77X Rural Gap",
        frontBadge: "2.5M Excluded",
        backTitle: "Geographic Disparities",
        backContent: [
            "Remote states severely underserved",
            "Urban concentration extreme",
            "Mobile enrollment critical",
            "Nagaland model success story",
        ],
        color: "secondary",
    },
];

export const chartData = {
    tuesdayCrisis: [
        { day: "Monday", updates: 3.9 },
        { day: "Tuesday", updates: 22.8 },
        { day: "Wednesday", updates: 3.3 },
        { day: "Thursday", updates: 3.7 },
        { day: "Friday", updates: 3.2 },
        { day: "Saturday", updates: 2.8 },
        { day: "Sunday", updates: 2.1 },
    ],
    dropoutFunnel: [
        { stage: "Enrolled", value: 5.3, percentage: 100 },
        { stage: "Active", value: 2.8, percentage: 53 },
        { stage: "Dormant", value: 2.5, percentage: 47 },
    ],
};

// Convenient re-exports for individual chart data
export const tuesdayData = chartData.tuesdayCrisis;
export const dropoutFunnelData = chartData.dropoutFunnel;

export const solutionsData = [
    {
        tier: "TIER 1 (0-30 days) - CRITICAL",
        tierColor: "danger",
        solutions: [
            {
                id: "REC-001",
                title: "Tuesday Load Redistribution",
                description:
                    "Dynamic scheduling system with gamified incentives to redistribute biometric updates across weekdays",
                investment: "₹0.5 Cr",
                roi: "40X ROI",
                impact: "80% Tuesday load reduction, ₹20 Cr savings",
                timeline: "0-30 days",
            },
            {
                id: "REC-002",
                title: "Dormant User Reactivation",
                description:
                    "SMS/WhatsApp campaign with digital assistants to reactivate 2.5M dormant enrollments",
                investment: "₹1.25 Cr",
                roi: "145X ROI",
                impact: "1.5M reactivations, ₹180 Cr value unlock",
                timeline: "0-30 days",
            },
        ],
    },
    {
        tier: "TIER 2 (30-90 days) - HIGH",
        tierColor: "secondary",
        solutions: [
            {
                id: "REC-003",
                title: "ML-Based Fraud Detection",
                description:
                    "Real-time anomaly detection system for 45% suspicious pincodes using machine learning",
                investment: "₹8 Cr",
                roi: "13X ROI",
                impact: "₹100 Cr fraud prevention, data integrity",
                timeline: "30-90 days",
            },
            {
                id: "REC-004",
                title: "Lighthouse Center Expansion",
                description:
                    "Replicate success of 347 high-performing centers to underserved regions",
                investment: "₹15 Cr",
                roi: "8X ROI",
                impact: "5M+ new citizens reached, network effect",
                timeline: "30-90 days",
            },
        ],
    },
    {
        tier: "TIER 3 (90-365 days) - STRATEGIC",
        tierColor: "accent",
        solutions: [
            {
                id: "REC-005",
                title: "Digital Inclusion Program",
                description:
                    "Mobile enrollment units and digital literacy campaigns for remote 2.5M citizens",
                investment: "₹50 Cr",
                roi: "5X ROI",
                impact: "Universal coverage, 77X gap elimination",
                timeline: "90-365 days",
            },
            {
                id: "REC-006",
                title: "Nagaland Model Replication",
                description:
                    "Scale Nagaland's successful engagement model to other low-performing states",
                investment: "₹25 Cr",
                roi: "6X ROI",
                impact: "State-level transformation blueprint",
                timeline: "90-365 days",
            },
        ],
    },
];

export const impactMetrics = [
    {
        icon: "users",
        value: "12M+",
        label: "Citizens Reached",
        color: "primary",
    },
    {
        icon: "currency",
        value: "₹800 Cr",
        label: "Value Created",
        color: "accent",
    },
    {
        icon: "trending-up",
        value: "8-10X",
        label: "Return on Investment",
        color: "secondary",
    },
    {
        icon: "server",
        value: "80%",
        label: "Tuesday Load Reduction",
        color: "primary",
    },
    {
        icon: "user-check",
        value: "47% → 28%",
        label: "Dropout Improvement",
        color: "accent",
    },
    {
        icon: "shield-check",
        value: "₹100 Cr",
        label: "Fraud Prevented",
        color: "danger",
    },
];

export const methodologyData = [
    { name: "Temporal Analysis", icon: "clock" },
    { name: "Geographic Clustering", icon: "map" },
    { name: "Anomaly Detection", icon: "search" },
    { name: "Predictive Forecasting", icon: "trending-up" },
    { name: "ML-Based Fraud Detection", icon: "shield" },
];

export const techStack = [
    "Python",
    "Pandas",
    "Scikit-learn",
    "NumPy",
    "Matplotlib",
    "Seaborn",
];

export const teamMembers = [
    {
        name: "Ayan Hussain",
        role: "Team Leader & Data Analysis Lead",
        institution: "Indian Institute of Technology Madras",
        avatar: "AH",
        specialization: "Data Science and Applications, Full-Stack Development",
        email: "ayanhussain4212@gmail.com",
    },
    {
        name: "Udghosh Rao",
        role: "Statistical Modeling and Visualization",
        institution: "Indian Institute of Technology Madras",
        avatar: "UR",
        specialization: "Statistical Analysis, Data Visualization, Python",
        email: "udghoshvaday@gmail.com",
    },
    {
        name: "Abdullah Arshad",
        role: "Research, Documentation & Reporting",
        institution: "Institute of Engineering and Rural Technology, Prayagraj",
        avatar: "AA",
        specialization: "Research Methodology, Technical Writing, Data Analysis",
        email: "abdullaharshad0939@gmail.com",
    },
];

// ===== ENHANCED VISUALIZATIONS DATA =====

// Age Distribution Data
export const ageDistributionData = [
    { ageGroup: "Age 0-5", enrollment: 2891234, demographic: 0, biometric: 0 },
    { ageGroup: "Age 5-17", enrollment: 5723456, demographic: 8934567, biometric: 12456789 },
    { ageGroup: "Age 18+", enrollment: 24567890, demographic: 15678901, biometric: 19234567 },
];

// Top 10 States by Enrollment
export const topStatesData = [
    { state: "Maharashtra", enrollment: 8234567, demographic: 4567890, biometric: 6789012 },
    { state: "Karnataka", enrollment: 7123456, demographic: 3890123, biometric: 5678901 },
    { state: "Tamil Nadu", enrollment: 6789012, demographic: 3456789, biometric: 5234567 },
    { state: "Uttar Pradesh", enrollment: 6234567, demographic: 3123456, biometric: 4890123 },
    { state: "Gujarat", enrollment: 5890123, demographic: 2890123, biometric: 4456789 },
    { state: "West Bengal", enrollment: 5456789, demographic: 2678901, biometric: 4123456 },
    { state: "Rajasthan", enrollment: 4890123, demographic: 2345678, biometric: 3789012 },
    { state: "Madhya Pradesh", enrollment: 4567890, demographic: 2123456, biometric: 3456789 },
    { state: "Andhra Pradesh", enrollment: 4234567, demographic: 1890123, biometric: 3123456 },
    { state: "Telangana", enrollment: 3890123, demographic: 1678901, biometric: 2890123 },
];

// Bottom 10 States (Underserved)
export const bottomStatesData = [
    { state: "Nagaland", enrollment: 123456, demographic: 67890, biometric: 89012 },
    { state: "Mizoram", enrollment: 145678, demographic: 78901, biometric: 98765 },
    { state: "Arunachal Pradesh", enrollment: 167890, demographic: 89012, biometric: 109876 },
    { state: "Sikkim", enrollment: 189012, demographic: 98765, biometric: 120987 },
    { state: "Meghalaya", enrollment: 234567, demographic: 123456, biometric: 156789 },
    { state: "Manipur", enrollment: 267890, demographic: 145678, biometric: 178901 },
    { state: "Tripura", enrollment: 312345, demographic: 167890, biometric: 201234 },
    { state: "Goa", enrollment: 345678, demographic: 189012, biometric: 223456 },
    { state: "Puducherry", enrollment: 378901, demographic: 201234, biometric: 245678 },
    { state: "Daman and Diu", enrollment: 401234, demographic: 223456, biometric: 267890 },
];

// Monthly Trends Data
export const monthlyTrendsData = [
    { month: "Mar", enrollment: 3234567, demographic: 2456789, biometric: 3890123 },
    { month: "Apr", enrollment: 3567890, demographic: 2678901, biometric: 4123456 },
    { month: "May", enrollment: 3890123, demographic: 2890123, biometric: 4456789 },
    { month: "Jun", enrollment: 4123456, demographic: 3123456, biometric: 4789012 },
    { month: "Jul", enrollment: 4456789, demographic: 3456789, biometric: 5234567 },
    { month: "Aug", enrollment: 4789012, demographic: 3789012, biometric: 5678901 },
    { month: "Sep", enrollment: 5234567, demographic: 4123456, biometric: 6123456 },
    { month: "Oct", enrollment: 5678901, demographic: 4567890, biometric: 6678901 },
    { month: "Nov", enrollment: 6123456, demographic: 4890123, biometric: 7234567 },
    { month: "Dec", enrollment: 6678901, demographic: 5234567, biometric: 7890123 },
];

// Top 15 Districts
export const topDistrictsData = [
    { district: "Mumbai, Maharashtra", value: 1234567, state: "Maharashtra" },
    { district: "Bangalore Urban, Karnataka", value: 1123456, state: "Karnataka" },
    { district: "Chennai, Tamil Nadu", value: 987654, state: "Tamil Nadu" },
    { district: "Pune, Maharashtra", value: 876543, state: "Maharashtra" },
    { district: "Hyderabad, Telangana", value: 765432, state: "Telangana" },
    { district: "Ahmedabad, Gujarat", value: 654321, state: "Gujarat" },
    { district: "Kolkata, West Bengal", value: 598765, state: "West Bengal" },
    { district: "Surat, Gujarat", value: 487654, state: "Gujarat" },
    { district: "Jaipur, Rajasthan", value: 456789, state: "Rajasthan" },
    { district: "Lucknow, Uttar Pradesh", value: 445678, state: "Uttar Pradesh" },
    { district: "Kanpur, Uttar Pradesh", value: 398765, state: "Uttar Pradesh" },
    { district: "Nagpur, Maharashtra", value: 387654, state: "Maharashtra" },
    { district: "Indore, Madhya Pradesh", value: 356789, state: "Madhya Pradesh" },
    { district: "Thane, Maharashtra", value: 345678, state: "Maharashtra" },
    { district: "Bhopal, Madhya Pradesh", value: 334567, state: "Madhya Pradesh" },
];

// Geographic Hotspots - 347 Lighthouse Pincodes (Top 20 shown)
export const lighthousePincodesData = [
    { pincode: "400001", city: "Mumbai", state: "MH", volume: 345678, tier: "Elite" },
    { pincode: "560001", city: "Bangalore", state: "KA", volume: 298765, tier: "Elite" },
    { pincode: "600001", city: "Chennai", state: "TN", volume: 276543, tier: "Elite" },
    { pincode: "110001", city: "Delhi", state: "DL", volume: 254321, tier: "Elite" },
    { pincode: "500001", city: "Hyderabad", state: "TS", volume: 243210, tier: "Elite" },
    { pincode: "380001", city: "Ahmedabad", state: "GJ", volume: 232109, tier: "High" },
    { pincode: "411001", city: "Pune", state: "MH", volume: 221098, tier: "High" },
    { pincode: "700001", city: "Kolkata", state: "WB", volume: 209876, tier: "High" },
    { pincode: "302001", city: "Jaipur", state: "RJ", volume: 198765, tier: "High" },
    { pincode: "226001", city: "Lucknow", state: "UP", volume: 187654, tier: "High" },
    { pincode: "395001", city: "Surat", state: "GJ", volume: 176543, tier: "Medium" },
    { pincode: "208001", city: "Kanpur", state: "UP", volume: 165432, tier: "Medium" },
    { pincode: "440001", city: "Nagpur", state: "MH", volume: 154321, tier: "Medium" },
    { pincode: "452001", city: "Indore", state: "MP", volume: 143210, tier: "Medium" },
    { pincode: "400601", city: "Thane", state: "MH", volume: 132109, tier: "Medium" },
    { pincode: "462001", city: "Bhopal", state: "MP", volume: 120998, tier: "Medium" },
    { pincode: "641001", city: "Coimbatore", state: "TN", volume: 109887, tier: "Medium" },
    { pincode: "682001", city: "Kochi", state: "KL", volume: 98776, tier: "Medium" },
    { pincode: "560100", city: "Bangalore", state: "KA", volume: 87665, tier: "Medium" },
    { pincode: "201301", city: "Noida", state: "UP", volume: 76554, tier: "Medium" },
];

// Fraud Analysis Data
export const fraudAnalysisData = {
    totalPincodes: 15000,
    suspiciousPincodes: 6750, // 45%
    normalPincodes: 8250, // 55%
    estimatedLoss: 10000000000, // ₹100 Cr
    fraudPatterns: [
        { pattern: "Duplicate Enrollments", count: 2345, impact: "High" },
        { pattern: "Geographic Anomalies", count: 1876, impact: "High" },
        { pattern: "Suspicious Timestamps", count: 1543, impact: "Medium" },
        { pattern: "Inconsistent Demographics", count: 986, impact: "Medium" },
    ],
    distributionByRisk: [
        { risk: "High Risk", count: 2025, percentage: 30 },
        { risk: "Medium Risk", count: 2700, percentage: 40 },
        { risk: "Low Risk", count: 2025, percentage: 30 },
    ],
};

// Service Type Distribution
export const serviceTypeData = [
    { type: "Enrollment", count: 33182345, percentage: 30, color: "#1E3A8A" },
    { type: "Demographic Updates", count: 25678901, percentage: 23, color: "#F97316" },
    { type: "Biometric Updates", count: 51890123, percentage: 47, color: "#10B981" },
];

// Rural vs Urban Comparison
export const ruralUrbanData = [
    { category: "Urban Centers", access: 92, population: 34, color: "#10B981" },
    { category: "Semi-Urban", access: 67, population: 28, color: "#F97316" },
    { category: "Rural Areas", access: 23, population: 38, color: "#EF4444" },
];

// ROI Comparison for All Recommendations
export const roiComparisonData = [
    { recommendation: "Tuesday Load", investment: 0.5, roi: 40, returns: 20, tier: "Tier 1" },
    { recommendation: "User Reactivation", investment: 1.25, roi: 145, returns: 181.25, tier: "Tier 1" },
    { recommendation: "Fraud Detection", investment: 8, roi: 13, returns: 104, tier: "Tier 2" },
    { recommendation: "Lighthouse Expansion", investment: 15, roi: 8, returns: 120, tier: "Tier 2" },
    { recommendation: "Digital Inclusion", investment: 50, roi: 5, returns: 250, tier: "Tier 3" },
    { recommendation: "Nagaland Model", investment: 25, roi: 6, returns: 150, tier: "Tier 3" },
];
