// Données pour Best Building
const bestBuildingData = {
    company: {
        name: "Best Building",
        phone1: "+225 07 07 30 58 56",
        phone2: "+225 05 05 62 64 16",
        email: "Bestbuilding@gmail.com",
        website: "bestbuilding.ci",
        address: "Abidjan zone 3, Bd de Marseille",
        location: "Côte d'Ivoire"
    },
    
    navigation: [
        { name: "Accueil", url: "index.html", active: false },
        { name: "À Propos", url: "about.html", active: false },
        { name: "Services", url: "services.html", active: false },
        { name: "Portfolio", url: "portfolio.html", active: false },
        { name: "Contact", url: "contact.html", active: false }
    ],
    
    testimonials: [
        {
            name: "Kouadio Jean-Baptiste",
            company: "Propriétaire",
            image: "assets/images/resources/person-sm-06.jpg",
            text: "Best Building a réalisé la construction de ma maison familiale. Le travail est impeccable et respecte parfaitement les délais convenus. Je recommande vivement leurs services.",
            rating: 5
        },
        {
            name: "Adjoua Marie-Claire",
            company: "Entrepreneuse",
            image: "assets/images/resources/person-sm-01.jpg",
            text: "Excellente équipe pour la rénovation de mon bureau. Professionnalisme, qualité et respect de l'environnement. Très satisfaite du résultat final.",
            rating: 5
        },
        {
            name: "Yao Michel",
            company: "Directeur Commercial",
            image: "assets/images/resources/person-sm-02.jpg",
            text: "Best Building a transformé notre espace commercial. L'aménagement est moderne et fonctionnel. Une équipe à l'écoute et très compétente.",
            rating: 5
        },
        {
            name: "Akissi Grace",
            company: "Architecte",
            image: "assets/images/resources/person-sm-03.jpg",
            text: "Collaboration excellente sur plusieurs projets. Best Building comprend les enjeux architecturaux et livre des travaux de grande qualité.",
            rating: 5
        },
        {
            name: "Koffi Paul",
            company: "Ingénieur",
            image: "assets/images/resources/person-sm-04.jpg",
            text: "Respect des normes techniques et de sécurité exemplaire. Best Building est un partenaire de confiance pour tous types de projets de construction.",
            rating: 5
        }
    ],
    
    products: [
        {
            name: "Matériaux de Construction",
            description: "Ciment, fer, briques de qualité",
            image: "assets/images/resources/project1.jpg",
            category: "Matériaux"
        },
        {
            name: "Équipements de Chantier",
            description: "Outils et machines professionnels",
            image: "assets/images/resources/project2.jpg",
            category: "Équipements"
        },
        {
            name: "Matériaux de Finition",
            description: "Carrelage, peinture, revêtements",
            image: "assets/images/resources/project3.jpg",
            category: "Finition"
        },
        {
            name: "Éléments Décoratifs",
            description: "Accessoires et éléments design",
            image: "assets/images/resources/project1.jpg",
            category: "Décoration"
        }
    ],
    
    services: [
        "Construction de bâtiments résidentiels et commerciaux",
        "Rénovation et aménagement intérieur", 
        "Respect des normes de sécurité et engagement écoresponsable"
    ],
    
    footerLinks: {
        services: [
            { name: "Construction", url: "services.html" },
            { name: "Rénovation", url: "services.html" },
            { name: "Aménagement", url: "services.html" },
            { name: "Consultation", url: "contact.html" },
            { name: "Devis gratuit", url: "contact.html" },
            { name: "Suivi de projet", url: "portfolio.html" }
        ],
        company: [
            { name: "À Propos", url: "about.html" },
            { name: "Services", url: "services.html" },
            { name: "Portfolio", url: "portfolio.html" },
            { name: "Livraison", url: "#" },
            { name: "Contact", url: "contact.html" },
        ]
    }
};

// Fonction pour générer le header
function generateHeader() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const headerHTML = `
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="index.html" title="">
                        <img src="assets/images/logo.svg" alt="Best Building">
                    </a>
                </div>
                <nav>
                    <ul>
                        ${bestBuildingData.navigation.map(item => `
                            <li><a ${currentPage === item.url ? 'class="active"' : ''} href="${item.url}" title="">${item.name}</a></li>
                        `).join('')}
                    </ul>
                </nav>
                <ul class="mint-funcz">
                </ul>
                <div class="contact-head-info">
                    <h4>${bestBuildingData.company.phone1}</h4>
                    <a href="contact.html" title="">Demander un devis</a>
                </div>
                <div class="menu-btnn">
                    <div class="menu-btn">
                        <span class="bar1"></span>
                        <span class="bar2"></span>
                        <span class="bar3"></span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('dynamic-header').innerHTML = headerHTML;
}

// Fonction pour générer le menu mobile
function generateMobileMenu() {
    const mobileMenuHTML = `
        <ul>
            ${bestBuildingData.navigation.map(item => `
                <li><a href="${item.url}" title="">${item.name}</a></li>
            `).join('')}
        </ul>
    `;
    
    document.getElementById('mobile-menu').innerHTML = mobileMenuHTML;
}

// Fonction pour générer les témoignages
function generateTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (!testimonialsContainer) return;
    
    const testimonialsHTML = bestBuildingData.testimonials.map(testimonial => `
        <div class="col-lg-4">
            <div class="testi-slide">
                <div class="testi-head">
                    <img src="${testimonial.image}" alt="">
                    <div class="user-info">
                        <h3>${testimonial.name}</h3>
                        <span>${testimonial.company}</span>
                    </div>
                </div>
                <p>${testimonial.text}</p>
                <ul class="rating">
                    ${Array(testimonial.rating).fill('<li><i class="la la-star"></i></li>').join('')}
                </ul>
            </div>
        </div>
    `).join('');
    
    testimonialsContainer.innerHTML = testimonialsHTML;
}

// Fonction pour générer les produits de la boutique
function generateShopProducts() {
    const shopContainer = document.getElementById('shop-products');
    if (!shopContainer) return;
    
    const productsHTML = bestBuildingData.products.map(product => `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="project-item">
                <img src="${product.image}" alt="">
                <div class="project-info">
                    <h3><a href="#" title="">${product.name}</a></h3>
                    <span>${product.description}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    shopContainer.innerHTML = productsHTML;
}

// Fonction pour générer le footer
function generateFooter() {
    const footerHTML = `
        <div class="container">
            <div class="top-footer">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="widget widget-info">
                            <h3 class="widget-title">NEWSLETTER</h3>
                            <form class="widget-form">
                                <input type="text" name="email" placeholder="Votre e-mail">
                                <button type="submit"><i class="la la-arrow-right"></i></button>
                            </form>
                            <span>Inscrivez-vous pour recevoir des offres spéciales !</span>
                            <ul class="social-links">
                                <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#" title=""><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="widget widget-contact text-right">
                                    <h3 class="widget-title">Contactez-nous</h3>
                                    <ul class="ft-links">
                                        <li>${bestBuildingData.company.address}, ${bestBuildingData.company.location}</li>
                                        <li>${bestBuildingData.company.phone1}</li>
                                        <li>${bestBuildingData.company.phone2}</li>
                                        <li><a href="mailto:${bestBuildingData.company.email}" title="">${bestBuildingData.company.email}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div class="widget widget-category text-right">
                                    <h3 class="widget-title">Nos Services</h3>
                                    <ul class="ft-links">
                                        ${bestBuildingData.footerLinks.services.map(service => `
                                            <li><a href="${service.url}" title="">${service.name}</a></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="widget widget-company text-right">
                                    <h3 class="widget-title">Entreprise</h3>
                                    <ul class="ft-links">
                                        ${bestBuildingData.footerLinks.company.map(link => `
                                            <li><a href="${link.url}" title="">${link.name}</a></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="ft-logo">
                    <img src="assets/images/footer logo.svg" alt="">
                </div>
                <ul class="btm-links">
                    <li><a href="#" title="">Politique de Confidentialité</a></li>
                    <li><a href="#" title="">Conditions Générales</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
        </div>
    `;
    
    document.getElementById('dynamic-footer').innerHTML = footerHTML;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    generateHeader();
    generateMobileMenu();
    generateTestimonials();
    generateShopProducts();
    generateFooter();
});

// Fonction pour envoyer un message WhatsApp
function sendWhatsAppMessage(message) {
    const phoneNumber = bestBuildingData.company.phone1.replace(/\s+/g, '').replace('+', '');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Ajouter des événements pour les formulaires de contact
document.addEventListener('DOMContentLoaded', function() {
    // Formulaire de consultation
    const consultForms = document.querySelectorAll('.subsc-form');
    consultForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = this.querySelector('input[name="phone"]').value;
            const message = `Bonjour Best Building, je souhaite une consultation gratuite. Mon numéro: ${phone}`;
            sendWhatsAppMessage(message);
        });
    });
    
    // Formulaire de contact principal
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const phone = this.querySelector('input[name="phone"]').value;
            const message = this.querySelector('textarea').value;
            
            const whatsappMessage = `Bonjour Best Building,
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Message: ${message}`;
            
            sendWhatsAppMessage(whatsappMessage);
        });
    }
});