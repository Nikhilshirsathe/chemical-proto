import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('virtual-model');
  const [activeStage, setActiveStage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [materials] = useState({
    castorOil: { 
      name: 'Castor Oil', 
      color: '#FFD700',
      description: 'Primary oil component for saponification. Provides moisturizing properties to the final soap product.',
      properties: 'Viscous liquid, rich in ricinoleic acid'
    },
    distilledWater: { 
      name: 'Distilled Water', 
      color: '#87CEEB',
      description: 'Solvent for dissolving sodium hydroxide and facilitating the saponification reaction.',
      properties: 'Pure H₂O, free from impurities'
    },
    naoh: { 
      name: 'Sodium Hydroxide', 
      color: '#FF6B6B',
      description: 'Strong alkali that reacts with oils to form soap through saponification process.',
      properties: 'Caustic base, highly reactive with fats'
    },
    glycerol: { 
      name: 'Glycerol', 
      color: '#98FB98',
      description: 'Humectant that adds moisture retention properties to the soap.',
      properties: 'Viscous, sweet-tasting liquid'
    },
    nacl: { 
      name: 'Sodium Chloride', 
      color: '#F0F8FF',
      description: 'Salt used for soap hardening and precipitation of soap from solution.',
      properties: 'Crystalline solid, increases soap hardness'
    },
    nahco3: { 
      name: 'Sodium Bicarbonate', 
      color: '#DDA0DD',
      description: 'Buffer agent that helps control pH and adds mild abrasive properties.',
      properties: 'White crystalline powder, pH buffer'
    }
  });

  const equipmentData = {
    mixer: {
      name: 'Mixer R-101',
      description: 'High-speed mixer for combining oils with alkali solution. Features temperature control and variable speed agitation.',
      function: 'Homogeneous mixing of reactants',
      specifications: 'Capacity: 100L, Speed: 0-500 RPM'
    },
    reactor: {
      name: 'Reactor R-102', 
      description: 'Jacketed reactor vessel where saponification occurs. Maintains optimal temperature for complete reaction.',
      function: 'Saponification reaction chamber',
      specifications: 'Capacity: 200L, Temperature: 60-80°C'
    },
    filter: {
      name: 'Filter F-101',
      description: 'Multi-stage filtration system removes impurities and unreacted materials from soap solution.',
      function: 'Purification and clarification',
      specifications: 'Mesh size: 100μm, Flow rate: 50L/min'
    },
    storage: {
      name: 'Storage T-101',
      description: 'Final storage tank for quality-controlled liquid soap product with sampling ports.',
      function: 'Product storage and quality control',
      specifications: 'Capacity: 500L, Material: Stainless Steel'
    }
  };

  const sections = [
    { id: 'introduction', name: 'Introduction', icon: '📖' },
    { id: 'objectives', name: 'Objectives', icon: '🎯' },
    { id: 'materials', name: 'Raw Materials', icon: '🧪' },
    { id: 'virtual-model', name: 'Virtual Model', icon: '🏭' },
    { id: 'process-flow', name: 'Process Flow Diagram', icon: '📊' },
    { id: 'block-diagram', name: 'Block Diagram', icon: '📋' },
    { id: 'advantages', name: 'Advantages', icon: '✨' }
  ];

  const startProcess = () => {
    setIsProcessing(true);
    setProcessStep(1);
  };

  useEffect(() => {
    if (isProcessing && processStep < 5) {
      const timer = setTimeout(() => {
        setProcessStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (processStep >= 5) {
      setIsProcessing(false);
    }
  }, [isProcessing, processStep]);

  const renderContent = () => {
    switch(activeSection) {
      case 'virtual-model':
        return renderVirtualModel();
      case 'introduction':
        return renderIntroduction();
      case 'objectives':
        return renderObjectives();
      case 'process-flow':
        return renderProcessFlow();
      case 'materials':
        return renderMaterials();
      case 'advantages':
        return renderAdvantages();
      case 'block-diagram':
        return renderBlockDiagram();
      default:
        return renderVirtualModel();
    }
  };

  const renderIntroduction = () => (
    <div className="content-section">
      <h2>Introduction to Liquid Soap Manufacturing</h2>
      <div className="intro-content">
        <p>Chemically prepared liquid soap is not only effective in removing dirt and grease but also gentle on the skin when properly balanced. This method allows for precise control over the composition, pH, and consistency of the final product, making it ideal for both household and industrial applications.</p>
        
        <p>The process involves heating oils (such as coconut oil, palm oil, or olive oil) and carefully mixing them with a lye solution to initiate the saponification reaction. Additional ingredients like fragrances, colorants, preservatives, and moisturizers are then incorporated to improve the soap's quality and appeal.</p>
        
        <div className="key-benefits">
          <h3>Key Benefits of Chemical Preparation</h3>
          <ul>
            <li>Precise control over composition and pH levels</li>
            <li>Consistent quality and performance</li>
            <li>Customizable formulations for specific applications</li>
            <li>Suitable for both household and industrial use</li>
            <li>Enhanced skin-friendly properties</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderObjectives = () => (
    <div className="content-section">
      <h2>Experiment Objectives</h2>
      <div className="objectives-content">
        <p>The objective of this experiment is to prepare liquid soap through the chemical process of saponification, where fats or oils react with potassium hydroxide (KOH) to form soap and glycerin.</p>
        
        <div className="objectives-list">
          <h3>Primary Goals</h3>
          <div className="objective-card">
            <h4>🧪 Chemical Understanding</h4>
            <p>Understand the chemical reaction involved in saponification and the molecular transformation of fats into soap molecules.</p>
          </div>
          
          <div className="objective-card">
            <h4>🔬 Ingredient Analysis</h4>
            <p>Learn the role of different ingredients and their specific functions in the soap-making process.</p>
          </div>
          
          <div className="objective-card">
            <h4>⚖️ Proper Formulation</h4>
            <p>Master the proper formulation required to produce a high-quality, stable, and skin-friendly liquid soap.</p>
          </div>
          
          <div className="objective-card">
            <h4>🏭 Process Control</h4>
            <p>Develop skills in controlling temperature, pH, and mixing parameters for optimal soap production.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdvantages = () => (
    <div className="content-section">
      <h2>Advantages of Liquid Soap</h2>
      <div className="advantages-grid">
        <div className="advantage-card">
          <div className="advantage-icon">🤲</div>
          <h3>Gentle on Skin</h3>
          <p>Gentle on the skin and moisturizing properties help maintain skin health while providing effective cleaning.</p>
        </div>
        
        <div className="advantage-card">
          <div className="advantage-icon">🫧</div>
          <h3>Superior Cleansing</h3>
          <p>Provides good foaming and cleansing properties that effectively remove dirt, grease, and impurities.</p>
        </div>
        
        <div className="advantage-card">
          <div className="advantage-icon">💧</div>
          <h3>Convenient Usage</h3>
          <p>Convenient and easy to use compared to bar soap, with better dispensing control and hygiene.</p>
        </div>
        
        <div className="advantage-card">
          <div className="advantage-icon">🎨</div>
          <h3>Customizable</h3>
          <p>Can be easily customized with fragrances, colors, or additives to meet specific preferences and requirements.</p>
        </div>
      </div>
    </div>
  );

  const renderProcessFlow = () => (
    <div className="content-section">
      <h2>Enhanced Process Flow Diagram</h2>
      <div className="enhanced-flow-diagram">
        <div className="flow-timeline">
          <div className="flow-stage" onClick={() => setSelectedItem({type: 'flow', data: {name: 'Raw Material Preparation', time: '0-15 min', temp: 'Ambient', description: 'Collection and quality check of all raw materials', details: ['Material inspection', 'Weight verification', 'Temperature conditioning', 'Quality assurance']}})}>            
            <div className="stage-indicator">
              <div className="stage-number">1</div>
            </div>
            <div className="stage-content">
              <h4>Raw Material Preparation</h4>
              <div className="stage-params">
                <span className="param">Time: 0-15 min</span>
                <span className="param">Temp: Ambient</span>
              </div>
            </div>
            <div className="flow-connector"></div>
          </div>
          
          <div className="flow-stage" onClick={() => setSelectedItem({type: 'flow', data: {name: 'High-Speed Mixing', time: '15-35 min', temp: '60-70°C', description: 'Homogeneous blending of oils with alkali solution', details: ['Speed: 200-400 RPM', 'Temperature control', 'Emulsification process', 'Homogeneity check']}})}>            
            <div className="stage-indicator">
              <div className="stage-number">2</div>
            </div>
            <div className="stage-content">
              <h4>High-Speed Mixing</h4>
              <div className="stage-params">
                <span className="param">Time: 15-35 min</span>
                <span className="param">Temp: 60-70°C</span>
              </div>
            </div>
            <div className="flow-connector"></div>
          </div>
          
          <div className="flow-stage" onClick={() => setSelectedItem({type: 'flow', data: {name: 'Saponification Reaction', time: '35-95 min', temp: '75-85°C', description: 'Chemical transformation of fats into soap', details: ['Alkaline hydrolysis', 'Complete conversion', 'pH monitoring', 'Reaction completion']}})}>            
            <div className="stage-indicator">
              <div className="stage-number">3</div>
            </div>
            <div className="stage-content">
              <h4>Saponification Reaction</h4>
              <div className="stage-params">
                <span className="param">Time: 35-95 min</span>
                <span className="param">Temp: 75-85°C</span>
              </div>
            </div>
            <div className="flow-connector"></div>
          </div>
          
          <div className="flow-stage" onClick={() => setSelectedItem({type: 'flow', data: {name: 'Multi-Stage Filtration', time: '95-110 min', temp: '65-75°C', description: 'Removal of impurities and unreacted materials', details: ['Coarse filtration', 'Fine filtration', 'Clarity improvement', 'Impurity removal']}})}>            
            <div className="stage-indicator">
              <div className="stage-number">4</div>
            </div>
            <div className="stage-content">
              <h4>Multi-Stage Filtration</h4>
              <div className="stage-params">
                <span className="param">Time: 95-110 min</span>
                <span className="param">Temp: 65-75°C</span>
              </div>
            </div>
            <div className="flow-connector"></div>
          </div>
          
          <div className="flow-stage" onClick={() => setSelectedItem({type: 'flow', data: {name: 'Quality Control & Storage', time: '110-120 min', temp: '40-50°C', description: 'Final quality testing and product storage', details: ['pH testing', 'Viscosity check', 'Color analysis', 'Final packaging']}})}>            
            <div className="stage-indicator">
              <div className="stage-number">5</div>
            </div>
            <div className="stage-content">
              <h4>Quality Control & Storage</h4>
              <div className="stage-params">
                <span className="param">Time: 110-120 min</span>
                <span className="param">Temp: 40-50°C</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="process-summary">
          <div className="summary-card">
            <h4>Process Overview</h4>
            <div className="summary-stats">
              <div className="stat">
                <span className="stat-value">120</span>
                <span className="stat-label">Total Minutes</span>
              </div>
              <div className="stat">
                <span className="stat-value">85°C</span>
                <span className="stat-label">Max Temperature</span>
              </div>
              <div className="stat">
                <span className="stat-value">5</span>
                <span className="stat-label">Process Stages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="chemical-reaction-section">
        <h3>Chemical Reaction Mechanism</h3>
        <div className="reaction-equation">
          <div className="reactants">
            <div className="molecule">
              <span className="formula">C₃H₅(OCOR)₃</span>
              <span className="name">Triglyceride</span>
            </div>
            <span className="plus">+</span>
            <div className="molecule">
              <span className="formula">3NaOH</span>
              <span className="name">Sodium Hydroxide</span>
            </div>
          </div>
          <div className="reaction-arrow">→</div>
          <div className="products">
            <div className="molecule">
              <span className="formula">3RCOONa</span>
              <span className="name">Soap</span>
            </div>
            <span className="plus">+</span>
            <div className="molecule">
              <span className="formula">C₃H₅(OH)₃</span>
              <span className="name">Glycerin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMaterials = () => (
    <div className="content-section">
      <h2>Raw Materials Specification</h2>
      <div className="materials-grid">
        {Object.entries(materials).map(([key, material]) => (
          <div key={key} className="material-card" onClick={() => setSelectedItem({type: 'material', data: material})}>
            <div className="material-color" style={{backgroundColor: material.color}}></div>
            <h4>{material.name}</h4>
            <p>{material.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBlockDiagram = () => (
    <div className="content-section">
      <div className="section-header">
        <h2>Process Block Diagram</h2>
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? '◀' : '▶'}
        </button>
      </div>
      <div className="professional-block-diagram">
        <div className="process-chain">
          <div className="process-block input-stage" onClick={() => setSelectedItem({type: 'stage', data: {name: 'Raw Material Input', description: 'Collection and preparation of all chemical ingredients required for soap production', details: ['Castor Oil - Primary fat source', 'Distilled Water - Reaction medium', 'Sodium Hydroxide - Saponification agent', 'Glycerol - Moisturizing additive', 'Sodium Chloride - Hardening agent', 'Sodium Bicarbonate - pH buffer']}})}>            
            <div className="block-icon">📥</div>
            <div className="block-title">RAW MATERIALS</div>
            <div className="block-subtitle">Input Stage</div>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-block mixing-stage" onClick={() => setSelectedItem({type: 'stage', data: {name: 'Mixing Process', description: 'High-speed blending of oils with alkali solution to ensure homogeneous mixture', details: ['Temperature Control: 60-70°C', 'Agitation Speed: 200-400 RPM', 'Mixing Time: 15-20 minutes', 'Homogenization achieved']}})}>            
            <div className="block-icon">🌀</div>
            <div className="block-title">MIXING</div>
            <div className="block-subtitle">R-101</div>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-block reaction-stage" onClick={() => setSelectedItem({type: 'stage', data: {name: 'Saponification Reaction', description: 'Chemical transformation of fats and oils into soap through alkaline hydrolysis', details: ['Reaction Temperature: 75-85°C', 'Reaction Time: 45-60 minutes', 'Chemical Equation: Fat + NaOH → Soap + Glycerin', 'Complete conversion achieved']}})}>            
            <div className="block-icon">⚗️</div>
            <div className="block-title">SAPONIFICATION</div>
            <div className="block-subtitle">R-102</div>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-block filtration-stage" onClick={() => setSelectedItem({type: 'stage', data: {name: 'Filtration & Purification', description: 'Removal of impurities and unreacted materials from soap solution', details: ['Multi-stage filtration', 'Particle size: <100μm', 'Clarity improvement', 'Impurity removal: >99%']}})}>            
            <div className="block-icon">🔍</div>
            <div className="block-title">FILTRATION</div>
            <div className="block-subtitle">F-101</div>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-block output-stage" onClick={() => setSelectedItem({type: 'stage', data: {name: 'Final Product Storage', description: 'Quality-controlled storage of finished liquid soap product', details: ['Quality Testing Complete', 'pH: 9.0-10.5', 'Viscosity: Optimized', 'Ready for Packaging']}})}>            
            <div className="block-icon">📦</div>
            <div className="block-title">FINAL PRODUCT</div>
            <div className="block-subtitle">T-101</div>
          </div>
        </div>
        
        <div className="process-metrics">
          <div className="metric-card">
            <div className="metric-value">5</div>
            <div className="metric-label">Process Stages</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">90min</div>
            <div className="metric-label">Total Time</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">85°C</div>
            <div className="metric-label">Max Temp</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">99%</div>
            <div className="metric-label">Efficiency</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVirtualModel = () => (
    <div className="factory-box">
      <div className="factory-header">
        <h2>Liquid Soap Production Plant - Virtual Model</h2>
        <button className="start-btn" onClick={startProcess} disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Start Production'}
        </button>
      </div>
      
      <div className="virtual-factory">
        <div className="factory-row">
          <div className="materials-section">
            <h4>Raw Materials</h4>
            <div className="tanks-row">
              {Object.entries(materials).map(([key, material]) => (
                <div key={key} className="tank-unit" onClick={() => setSelectedItem({type: 'material', data: material})}>
                  <div className="tank-vessel" style={{backgroundColor: material.color}}>
                    <div className="tank-outlet"></div>
                  </div>
                  <div className="tank-label">{material.name}</div>
                </div>
              ))}
            </div>
            <div className="collection-pipe">
              <div className={`pipe-content ${processStep >= 1 ? 'active' : ''}`}></div>
            </div>
          </div>
          
          <div className="connection-pipe horizontal">
            <div className={`pipe-content ${processStep >= 1 ? 'active' : ''}`}></div>
          </div>
          
          <div className="equipment-unit">
            <div className={`vessel mixer ${processStep >= 2 ? 'active' : ''}`} onClick={() => setSelectedItem({type: 'equipment', data: equipmentData.mixer})}>
              <div className="vessel-body" style={{backgroundColor: '#FF9800'}}>
                <div className="inlet-port"></div>
                <div className="outlet-port"></div>
                {processStep >= 2 && <div className="agitator rotating"></div>}
              </div>
            </div>
            <div className="equipment-label">Mixer R-101</div>
          </div>
          
          <div className="connection-pipe horizontal">
            <div className={`pipe-content ${processStep >= 2 ? 'active' : ''}`}></div>
          </div>
          
          <div className="equipment-unit">
            <div className={`vessel reactor ${processStep >= 3 ? 'active' : ''}`} onClick={() => setSelectedItem({type: 'equipment', data: equipmentData.reactor})}>
              <div className="vessel-body" style={{backgroundColor: '#F44336'}}>
                <div className="inlet-port"></div>
                <div className="outlet-port"></div>
                {processStep >= 3 && <div className="reaction-bubbles"></div>}
              </div>
            </div>
            <div className="equipment-label">Reactor R-102</div>
          </div>
          
          <div className="connection-pipe horizontal">
            <div className={`pipe-content ${processStep >= 3 ? 'active' : ''}`}></div>
          </div>
          
          <div className="equipment-unit">
            <div className={`vessel filter ${processStep >= 4 ? 'active' : ''}`} onClick={() => setSelectedItem({type: 'equipment', data: equipmentData.filter})}>
              <div className="vessel-body" style={{backgroundColor: '#9C27B0'}}>
                <div className="inlet-port"></div>
                <div className="outlet-port"></div>
                <div className="filter-element"></div>
              </div>
            </div>
            <div className="equipment-label">Filter F-101</div>
          </div>
          
          <div className="connection-pipe horizontal">
            <div className={`pipe-content ${processStep >= 4 ? 'active' : ''}`}></div>
          </div>
          
          <div className="equipment-unit">
            <div className={`vessel storage ${processStep >= 5 ? 'active' : ''}`} onClick={() => setSelectedItem({type: 'equipment', data: equipmentData.storage})}>
              <div className="vessel-body" style={{backgroundColor: '#4CAF50'}}>
                <div className="inlet-port"></div>
                {processStep >= 5 && <div className="product-level"></div>}
              </div>
            </div>
            <div className="equipment-label">Storage T-101</div>
          </div>
        </div>
      </div>

      <div className="process-status">
        <div className="current-stage">
          {processStep === 0 ? 'Ready to Start Production' : 
           processStep === 1 ? 'Materials → Mixer' :
           processStep === 2 ? 'Mixing Process Active' :
           processStep === 3 ? 'Chemical Reaction in Progress' :
           processStep === 4 ? 'Filtration Process' :
           processStep === 5 ? 'Final Product Storage' : 'Production Complete'}
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <header className="professional-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">🏭</div>
            <div className="company-info">
              <h1>ChemProto Industries</h1>
              <p>Liquid Soap Manufacturing - Virtual Prototyping System</p>
            </div>
          </div>
          <div className="header-controls">
            <div className="status-indicator">
              <span className={`status-dot ${isProcessing ? 'processing' : 'idle'}`}></span>
              <span>{isProcessing ? 'Processing' : 'Ready'}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? '◀' : '▶'}
            </button>
          </div>
          <nav className="sidebar-nav">
            <h3>Navigation</h3>
            {sections.map(section => (
              <button 
                key={section.id}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-text">{section.name}</span>
              </button>
            ))}
          </nav>
          

        </aside>

        <main className="main-content">
          {!sidebarOpen && (
            <button className="floating-toggle" onClick={() => setSidebarOpen(true)}>
              ▶
            </button>
          )}
          <div className="content-header">
            <div className="content-header-left">
              <h2>{sections.find(s => s.id === activeSection)?.name}</h2>
              <div className="breadcrumb">
                <span>Home</span> / <span>{sections.find(s => s.id === activeSection)?.name}</span>
              </div>
            </div>
          </div>
          
          <div className="content-body">
            {renderContent()}
          </div>
        </main>
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedItem.data.name}</h3>
              <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>
            </div>
            <div className="modal-body">
              {selectedItem.type === 'material' ? (
                <div>
                  <p><strong>Properties:</strong> {selectedItem.data.properties}</p>
                  <p><strong>Description:</strong> {selectedItem.data.description}</p>
                </div>
              ) : selectedItem.type === 'equipment' ? (
                <div>
                  <p><strong>Function:</strong> {selectedItem.data.function}</p>
                  <p><strong>Specifications:</strong> {selectedItem.data.specifications}</p>
                  <p><strong>Description:</strong> {selectedItem.data.description}</p>
                </div>
              ) : selectedItem.type === 'flow' ? (
                <div>
                  <div className="flow-stage-info">
                    <div className="info-row">
                      <span><strong>Duration:</strong> {selectedItem.data.time}</span>
                      <span><strong>Temperature:</strong> {selectedItem.data.temp}</span>
                    </div>
                    <p><strong>Description:</strong> {selectedItem.data.description}</p>
                  </div>
                  <div className="stage-details">
                    <h4>Process Parameters:</h4>
                    <ul>
                      {selectedItem.data.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <p><strong>Description:</strong> {selectedItem.data.description}</p>
                  <div className="stage-details">
                    <h4>Process Details:</h4>
                    <ul>
                      {selectedItem.data.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;