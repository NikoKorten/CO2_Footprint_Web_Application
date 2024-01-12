// the script is only executed once the entire html document has been loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // list of various countries and fictitious co2 emission values (worldwide)
    const emissionsData = [
        { country: 'USA', company: 'Apple', emissions: getRandomEmission() },
        { country: 'USA', company: 'Microsoft', emissions: getRandomEmission() },
        { country: 'USA', company: 'Google', emissions: getRandomEmission() },
        { country: 'China', company: 'Alibaba Group', emissions: getRandomEmission() },
        { country: 'China', company: 'Tencent', emissions: getRandomEmission() },
        { country: 'China', company: 'Huawei', emissions: getRandomEmission() },
        { country: 'India', company: 'Infosys', emissions: getRandomEmission() },
        { country: 'India', company: 'Tata Consultancy Services (TCS)', emissions: getRandomEmission() },
        { country: 'India', company: 'Reliance Industries', emissions: getRandomEmission() },
        { country: 'Brazil', company: 'Embraer', emissions: getRandomEmission() },
        { country: 'Brazil', company: 'Totvs', emissions: getRandomEmission() },
        { country: 'Brazil', company: 'Nubank', emissions: getRandomEmission() },
        { country: 'Russia', company: 'Kaspersky Lab', emissions: getRandomEmission() },
        { country: 'Russia', company: 'Yandex', emissions: getRandomEmission() },
        { country: 'Russia', company: 'Mail.ru Group', emissions: getRandomEmission() },
        { country: 'Japan', company: 'Sony', emissions: getRandomEmission() },
        { country: 'Japan', company: 'Toyota', emissions: getRandomEmission() },
        { country: 'Japan', company: 'SoftBank', emissions: getRandomEmission() },
        { country: 'Germany', company: 'Siemens', emissions: getRandomEmission() },
        { country: 'Germany', company: 'SAP', emissions: getRandomEmission() },
        { country: 'Germany', company: 'Deutsche Telekom', emissions: getRandomEmission() },
        { country: 'France', company: 'Airbus', emissions: getRandomEmission() },
        { country: 'France', company: 'Dassault Systèmes', emissions: getRandomEmission() },
        { country: 'France', company: 'Thales Group', emissions: getRandomEmission() },
        { country: 'United Kingdom', company: 'ARM Holdings', emissions: getRandomEmission() },
        { country: 'United Kingdom', company: 'Rolls-Royce Holdings', emissions: getRandomEmission() },
        { country: 'United Kingdom', company: 'BAE Systems', emissions: getRandomEmission() },
        { country: 'Italy', company: 'Leonardo S.p.A.', emissions: getRandomEmission() },
        { country: 'Italy', company: 'Enel', emissions: getRandomEmission() },
        { country: 'Italy', company: 'STMicroelectronics', emissions: getRandomEmission() },
        { country: 'South Korea', company: 'Samsung', emissions: getRandomEmission() },
        { country: 'South Korea', company: 'LG Electronics', emissions: getRandomEmission() },
        { country: 'South Korea', company: 'SK Hynix', emissions: getRandomEmission() },
        { country: 'Canada', company: 'BlackBerry', emissions: getRandomEmission() },
        { country: 'Canada', company: 'Shopify', emissions: getRandomEmission() },
        { country: 'Canada', company: 'OpenText', emissions: getRandomEmission() },
        { country: 'Mexico', company: 'América Móvil', emissions: getRandomEmission() },
        { country: 'Mexico', company: 'Grupo Bimbo', emissions: getRandomEmission() },
        { country: 'Mexico', company: 'Cemex', emissions: getRandomEmission() },
        { country: 'Netherlands', company: 'ASML', emissions: getRandomEmission() },
        { country: 'Netherlands', company: 'Philips', emissions: getRandomEmission() },
        { country: 'Netherlands', company: 'Booking Holdings', emissions: getRandomEmission() },
        { country: 'Spain', company: 'Indra', emissions: getRandomEmission() },
        { country: 'Spain', company: 'Telefonica', emissions: getRandomEmission() },
        { country: 'Spain', company: 'Banco Santander', emissions: getRandomEmission() },
        { country: 'Sweden', company: 'Ericsson', emissions: getRandomEmission() },
        { country: 'Sweden', company: 'Volvo Group', emissions: getRandomEmission() },
        { country: 'Sweden', company: 'Spotify', emissions: getRandomEmission() },
        { country: 'Portugal', company: 'EDP - Energias de Portugal', emissions: getRandomEmission() },
        { country: 'Portugal', company: 'Altice Portugal', emissions: getRandomEmission() },
        { country: 'Portugal', company: 'Critical Software', emissions: getRandomEmission() },
        { country: 'Switzerland', company: 'ABB', emissions: getRandomEmission() },
        { country: 'Switzerland', company: 'Roche', emissions: getRandomEmission() },
        { country: 'Switzerland', company: 'Nestlé', emissions: getRandomEmission() },
        { country: 'Poland', company: 'CD Projekt', emissions: getRandomEmission() },
        { country: 'Poland', company: 'Asseco Poland', emissions: getRandomEmission() },
        { country: 'Poland', company: 'PKN Orlen', emissions: getRandomEmission() },
        { country: 'Norway', company: 'Telenor', emissions: getRandomEmission() },
        { country: 'Norway', company: 'Equinor', emissions: getRandomEmission() },
        { country: 'Norway', company: 'DNB ASA', emissions: getRandomEmission() },
    ];

    // the function generates an randomly selected value between 3 and 200 and is intended to represent the CO2 emissions of a city, measured in megatons
    function getRandomEmission() {
        return Math.floor(Math.random() * 293) + 3;
    }

    // fills the emission-table-body HTML element with emission value array
    function displayEmissionData(data) {
        const tableBody = document.getElementById('emission-table-body');
        tableBody.innerHTML = '';

        data.forEach(entry => {
            console.log(entry);
            const row = document.createElement('tr');
            row.innerHTML = `<td>${escapeHtml(entry.country)}</td><td>${escapeHtml(entry.company)}</td><td>${escapeHtml(entry.emissions)}</td>`;
            tableBody.appendChild(row);
        });
    }

    // sort and filter generated emission data based on user input
    function sortAndFilterData() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const key = document.getElementById('sortSelect').value;

        const filteredData = emissionsData.filter(entry =>
            entry.country.toLowerCase().includes(searchInput) ||
            entry.company.toLowerCase().includes(searchInput)
        );

        if (key !== 'none') {
            filteredData.sort((a, b) => {
                if (key === 'emissions') {
                    return a[key] - b[key];
                } else {
                    return a[key].localeCompare(b[key]);
                }
            });
        }

        displayEmissionData(filteredData);
    }

    document.getElementById('sortSelect').addEventListener('change', sortAndFilterData);
    document.getElementById('searchInput').addEventListener('input', sortAndFilterData);

    function filterData() {
        sortAndFilterData();
    }

    document.getElementById('sortSelect').addEventListener('change', function () {
        sortAndFilterData();
    });

    // escape special characters in a string to prevent XXS
    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') {
            return String(unsafe);
        }
        // replace special characters with their HTML entities 
        return unsafe.replace(/[&<"'>]/g, match => {
            switch (match) {
                case '&':
                    return '&amp;';
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '"':
                    return '&quot;';
                case "'":
                    return '&#039;';
            }
        });
    }

    // determine if the website has a right-to-left font culture, and if so, adjustments to the header are made
    const isRtl = window.getComputedStyle(document.body).direction === 'rtl';

    if (isRtl) {
        document.body.style.direction = 'rtl';
        document.querySelector('header').style.direction = 'rtl';
        document.querySelector('nav').style.direction = 'rtl';
        document.querySelector('.navbar-nav').style.flexDirection = 'row-reverse';
    }

    displayEmissionData(emissionsData);
    sortAndFilterData();
});