/**
 * Calculation module for determining total, permanent, and temporary hardness of water
 * Based on complexometric titration with EDTA
 */

class HardnessCalculator {
  constructor() {
    this.exp1Data = null;
    this.exp2Data = null;
    this.results = null;
  }

  /**
   * Load results from localStorage
   */
  loadResults() {
    const allResults = localStorage.getItem('all_results');
    if (!allResults) {
      console.error('No results found in localStorage');
      return false;
    }

    const data = JSON.parse(allResults);
    this.exp1Data = data.exp1;
    this.exp2Data = data.exp2;
    return true;
  }

  /**
   * Calculate hardness values
   * Using the formula: Hardness (ppm) = (Normality * Volume) / (Sample Volume) * 50000
   * But simplified as shown in the PHP: Hardness (ppm) = (Normality / 10) * 5000
   */
  calculate() {
    if (!this.exp1Data || !this.exp2Data) {
      console.error('Data not loaded. Call loadResults() first.');
      return null;
    }

    // Extract data from both experiments
    const exp1 = this.exp1Data;
    const exp2 = this.exp2Data;

    // Calculate normality from the titrant volume and titrate volume
    // N1 * V1 = N2 * V2 (at equivalence point)
    
    // For Total Hardness (Experiment 1)
    // Accept several possible field names from different migration stages
    const totalHardnessNormality = parseFloat(exp1.normality_titrant || exp1.result1 || exp1.normality || 0);
    const totalHardinessInPPM = (totalHardnessNormality * 5000);

    // For Permanent Hardness (Experiment 2)
    const permanentHardnessNormality = parseFloat(exp2.normality_titrant || exp2.normality_titrant2 || exp2.result1 || 0);
    const permanentHardinessInPPM = (permanentHardnessNormality * 5000);

    // For Temporary Hardness
    const temporaryHardinessInPPM = totalHardinessInPPM - permanentHardinessInPPM;

    this.results = {
      // Total Hardness
      totalHardness: {
        sampleVolume: exp1.volume_titrate,
        volumeUsed: exp1.volume_titrant,
        normality: totalHardnessNormality / 10,
        ppm: totalHardinessInPPM
      },
      // Permanent Hardness
      permanentHardness: {
        sampleVolume: exp2.volume_titrate,
        volumeUsed: exp2.volume_titrant,
        normality: permanentHardnessNormality / 10,
        ppm: permanentHardinessInPPM
      },
      // Temporary Hardness
      temporaryHardness: {
        ppm: temporaryHardinessInPPM
      }
    };

    return this.results;
  }

  /**
   * Get the calculated results
   */
  getResults() {
    return this.results;
  }

  /**
   * Format a number to 2 decimal places
   */
  static round(value, decimals = 2) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  /**
   * Get results formatted for display
   */
  getFormattedResults() {
    if (!this.results) return null;

    return {
      totalHardness: {
        sampleVolume: HardnessCalculator.round(this.results.totalHardness.sampleVolume, 2),
        volumeUsed: HardnessCalculator.round(this.results.totalHardness.volumeUsed, 2),
        normality: HardnessCalculator.round(this.results.totalHardness.normality, 3),
        ppm: HardnessCalculator.round(this.results.totalHardness.ppm, 2)
      },
      permanentHardness: {
        sampleVolume: HardnessCalculator.round(this.results.permanentHardness.sampleVolume, 2),
        volumeUsed: HardnessCalculator.round(this.results.permanentHardness.volumeUsed, 2),
        normality: HardnessCalculator.round(this.results.permanentHardness.normality, 3),
        ppm: HardnessCalculator.round(this.results.permanentHardness.ppm, 2)
      },
      temporaryHardness: {
        ppm: HardnessCalculator.round(this.results.temporaryHardness.ppm, 2)
      }
    };
  }

  /**
   * Clear all stored data from localStorage
   */
  static clearStorage() {
    localStorage.removeItem('experiment1_data');
    localStorage.removeItem('all_results');
  }
}

// Export for use in Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HardnessCalculator;
}

