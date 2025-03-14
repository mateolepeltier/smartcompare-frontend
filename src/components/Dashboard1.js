import React, { useState, useEffect } from 'react';
import './Dashboard1.css';

const defaultImages = {
  "Samsung Galaxy S24": "https://images.unsplash.com/photo-1677606932182-cdc576638c75?auto=format&fit=crop&w=400&q=80",
  "Apple iPhone 15": "https://images.unsplash.com/photo-1662002586148-f9fb94a4f56e?auto=format&fit=crop&w=400&q=80",
  "Xiaomi Xiaomi 14": "https://images.unsplash.com/photo-1614028674026-a00e53aade1b?auto=format&fit=crop&w=400&q=80",
  "Google Pixel 8": "https://images.unsplash.com/photo-1635178961152-620e870e1e8d?auto=format&fit=crop&w=400&q=80",
  "Huawei P60 Pro": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80"
};

const Dashboard1 = () => {
  const [smartphones, setSmartphones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [filters, setFilters] = useState({
    marque: '',
    prix: '',
    stockage: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSmartphones();
  }, []);

  const fetchSmartphones = async () => {
    try {
      const response = await fetch('https://smartcompare.onrender.com/api/smartphones');
      const data = await response.json();
      setSmartphones(data.sort((a, b) => parseInt(b.prix) - parseInt(a.prix)));
      setFilteredPhones(data.sort((a, b) => parseInt(b.prix) - parseInt(a.prix)));
    } catch (error) {
      console.error('Erreur lors du chargement des smartphones:', error);
    }
  };

  useEffect(() => {
    let filtered = [...smartphones];

    // Filtre par marque
    if (filters.marque) {
      filtered = filtered.filter(phone => phone.marque === filters.marque);
    }

    // Filtre par prix
    if (filters.prix) {
      switch (filters.prix) {
        case 'moins500':
          filtered = filtered.filter(phone => phone.prix < 500);
          break;
        case '500-1000':
          filtered = filtered.filter(phone => phone.prix >= 500 && phone.prix <= 1000);
          break;
        case 'plus1000':
          filtered = filtered.filter(phone => phone.prix > 1000);
          break;
        default:
          break;
      }
    }

    // Filtre par stockage - Correction
    if (filters.stockage) {
      filtered = filtered.filter(phone => parseInt(phone.stockage) === parseInt(filters.stockage));
    }

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(phone => 
        phone.modele.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPhones(filtered);
  }, [filters, searchTerm, smartphones]);

  return (
    <div className="dashboard1">
      <div className="filters-container">
        <select 
          value={filters.marque}
          onChange={(e) => setFilters({...filters, marque: e.target.value})}
        >
          <option value="">Toutes les marques</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Huawei">Huawei</option>
        </select>

        <select 
          value={filters.prix}
          onChange={(e) => setFilters({...filters, prix: e.target.value})}
        >
          <option value="">Tous les prix</option>
          <option value="moins500">Moins de 500 €</option>
          <option value="500-1000">500 - 1000 €</option>
          <option value="plus1000">Plus de 1000 €</option>
        </select>

        <select 
          value={filters.stockage}
          onChange={(e) => setFilters({...filters, stockage: e.target.value})}
        >
          <option value="">Tous les stockages</option>
          <option value="128">128 Go</option>
          <option value="256">256 Go</option>
          <option value="512">512 Go</option>
          <option value="1024">1 To</option>
        </select>

        <input
          type="text"
          placeholder="Rechercher un modèle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="phones-list">
        {filteredPhones.map((phone) => (
          <div key={phone._id} className="phone-card">
            <img 
              src={phone.image || defaultImages[`${phone.marque} ${phone.modele}`] || defaultImages["Samsung Galaxy S24"]}
              alt={`${phone.marque} ${phone.modele}`}
              className="phone-image"
              loading="lazy"
              width="400"
              height="400"
            />
            <div className="phone-info">
              <h3>{phone.marque} {phone.modele}</h3>
              <p>{phone.prix} €</p>
              <p>{phone.stockage} Go</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ad-container">
        <div className="ad-banner"></div>
      </div>
    </div>
  );
};

export default Dashboard1; 