import React, { useState } from 'react';
import './Dashboard2.css';

const Dashboard2 = () => {
  const [budget, setBudget] = useState("");
  const [usage, setUsage] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [batteryLife, setBatteryLife] = useState("");
  const [brand, setBrand] = useState("");

  const getRecommendation = () => {
    if (!budget || !usage) {
      return "Veuillez sélectionner au moins budget et usage";
    }

    if (budget === "200") {
      return "Aucun modèle disponible";
    }

    if (budget === "1001" && usage === "photo") {
      return "Huawei P60 Pro (1199 €)";
    }

    if (budget === "1000" || budget === "800") {
      if (usage === "jeux") {
        return "Samsung Galaxy S24 (849 €)";
      }
      if (usage === "travail") {
        return "Google Pixel 8 (799 €)";
      }
    }

    return "Aucune recommandation disponible pour ces critères";
  };

  return (
    <div className="dashboard2">
      <h2>Trouver mon Modèle</h2>
      
      <div className="form-group">
        <label htmlFor="budget">Budget maximum :</label>
        <select 
          id="budget"
          value={budget} 
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Choisir</option>
          <option value="200">{'< 200 €'}</option>
          <option value="400">200-400 €</option>
          <option value="600">400-600 €</option>
          <option value="800">600-800 €</option>
          <option value="1000">800-1000 €</option>
          <option value="1001">{`> 1000 €`}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="usage">Usage principal :</label>
        <select 
          id="usage"
          value={usage} 
          onChange={(e) => setUsage(e.target.value)}
        >
          <option value="">Choisir</option>
          <option value="jeux">Jeux</option>
          <option value="photo">Photo</option>
          <option value="travail">Travail</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="screenSize">Taille de l'écran :</label>
        <select 
          id="screenSize"
          value={screenSize} 
          onChange={(e) => setScreenSize(e.target.value)}
        >
          <option value="">Choisir</option>
          <option value="small">{'Petit (< 6")'}</option>
          <option value="medium">{'Moyen (6-6.5")'}</option>
          <option value="large">{'Grand (> 6.5")'}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="batteryLife">Autonomie :</label>
        <select 
          id="batteryLife"
          value={batteryLife} 
          onChange={(e) => setBatteryLife(e.target.value)}
        >
          <option value="">Choisir</option>
          <option value="less10">{'< 10h'}</option>
          <option value="more10">{`> 10h`}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="brand">Marque :</label>
        <select 
          id="brand"
          value={brand} 
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Choisir</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Google">Google</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>

      <div className="recommendation">
        <h3>Recommandation :</h3>
        <p>{getRecommendation()}</p>
      </div>

      <button disabled className="save-button">
        Sauvegarder
      </button>

      <div style={{backgroundColor: "grey", width: "320px", height: "50px", margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center"}}>
        Bannière Publicitaire
      </div>
    </div>
  );
};

export default Dashboard2;
