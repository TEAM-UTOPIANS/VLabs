/**
 * Titration Calculations Module
 * Handles all calculations for the ferrous content determination experiment
 * This replaces the PHP backend calculations
 */

class TitrationCalculator {
  constructor(n1, n2, v1, v2) {
    /**
     * n1: Normality of FAS (Ferrous Ammonium Sulfate) solution - initial value (0.7)
     * n2: Normality of K2Cr2O7 (Potassium Dichromate) solution - generated randomly
     * v1: Volume of K2Cr2O7 used in titration - calculated
     * v2: Volume of solution in flask (25 ml)
     */
    this.n1 = n1; // Normality of FAS
    this.n2 = n2; // Normality of K2Cr2O7
    this.v1 = v1; // Volume of K2Cr2O7 used
    this.v2 = v2; // Volume of FAS in flask
    
    // Molecular weights and conversion factors
    this.molarityFAS = this.calculateMolarity();
    this.ironContent = this.calculateIronContent();
  }

  /**
   * Calculate molarity of FAS solution from normality
   * Molarity = Normality / number of electrons transferred
   * For FAS in redox reactions, typically divided by 6
   * (6 electrons are transferred in the Fe²⁺ to Fe³⁺ oxidation by K2Cr2O7)
   */
  calculateMolarity() {
    return this.n2 / 6;
  }

  /**
   * Calculate iron content in the sample
   * Using the relationship: n1*v1 = n2*v2 (normality relationship)
   * 
   * At equivalence point in redox titration:
   * Moles of K2Cr2O7 = (n2 * v1) / 1000
   * Moles of Fe²⁺ = 6 * Moles of K2Cr2O7 (since 1 Cr2O7²⁻ oxidizes 6 Fe²⁺)
   * 
   * Mass of Fe = Moles of Fe²⁺ × Atomic weight of Fe (55.85 g/mol)
   * Iron Content (g/L) = (Mass of Fe / Volume in L) × 1000
   */
  calculateIronContent() {
    // Calculate moles of K2Cr2O7 used
    const molesKDichromate = (this.n2 * this.v1) / 1000;
    
    // Calculate moles of Fe²⁺ (1 Cr2O7²⁻ oxidizes 6 Fe²⁺)
    const molesFe = 6 * molesKDichromate;
    
    // Calculate mass of Fe in grams
    const massFeGrams = molesFe * 55.85;
    
    // Calculate concentration in g/L (volume is v2 ml = v2/1000 L)
    const volumeLiters = this.v2 / 1000;
    const ironContentGperL = massFeGrams / volumeLiters;
    
    return ironContentGperL;
  }

  /**
   * Get formatted results object for display
   */
  getResults() {
    return {
      volumeFlask: this.roundToDecimals(this.v2, 2),
      volumeKDichromate: this.roundToDecimals(this.v1, 2),
      molarityFAS: this.roundToDecimals(this.molarityFAS, 2),
      ironContent: this.roundToDecimals(this.ironContent, 2),
      // Additional data for reference
      normalityFAS: this.roundToDecimals(this.n1, 2),
      normalityKDichromate: this.roundToDecimals(this.n2, 2)
    };
  }

  /**
   * Utility function to round numbers to specified decimal places
   */
  roundToDecimals(value, decimals) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  /**
   * Get detailed calculation breakdown (useful for showing working)
   */
  getCalculationDetails() {
    const molesKDichromate = (this.n2 * this.v1) / 1000;
    const molesFe = 6 * molesKDichromate;
    const massFeGrams = molesFe * 55.85;
    
    return {
      step1: {
        label: "Moles of K2Cr2O7 used",
        formula: "(n2 × v1) / 1000",
        calculation: `(${this.n2} × ${this.v1}) / 1000`,
        result: this.roundToDecimals(molesKDichromate, 6)
      },
      step2: {
        label: "Moles of Fe²⁺ (1:6 ratio)",
        formula: "6 × Moles of K2Cr2O7",
        calculation: `6 × ${this.roundToDecimals(molesKDichromate, 6)}`,
        result: this.roundToDecimals(molesFe, 6)
      },
      step3: {
        label: "Mass of Fe in grams",
        formula: "Moles of Fe²⁺ × 55.85",
        calculation: `${this.roundToDecimals(molesFe, 6)} × 55.85`,
        result: this.roundToDecimals(massFeGrams, 6)
      },
      step4: {
        label: "Iron Content (g/L)",
        formula: "Mass of Fe / Volume (L)",
        calculation: `${this.roundToDecimals(massFeGrams, 6)} / ${this.v2 / 1000}`,
        result: this.roundToDecimals(this.ironContent, 2)
      }
    };
  }

  /**
   * Store results in localStorage for retrieval on results page
   */
  saveToStorage() {
    const results = this.getResults();
    localStorage.setItem('titrationResults', JSON.stringify(results));
    return results;
  }

  /**
   * Static method to load results from localStorage
   */
  static loadFromStorage() {
    const data = localStorage.getItem('titrationResults');
    return data ? JSON.parse(data) : null;
  }

  /**
   * Static method to clear stored results
   */
  static clearStorage() {
    localStorage.removeItem('titrationResults');
  }
}

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TitrationCalculator;
}
