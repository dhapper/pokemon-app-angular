export class HelperService {

  // Existing method to get type color
  static getTypeColour(type: string): string {
    const typeColors: { [key: string]: string } = {
      'fire': '#F08030',
      'water': '#6390F0',
      'grass': '#7AC74C',
      'electric': '#F7D02C',
      'psychic': '#F95587',
      'normal': '#A8A77A',
      'bug': '#A8B820',
      'fairy': '#D685B6',
      'fighting': '#C22E28',
      'ghost': '#735797',
      'dark': '#705848',
      'dragon': '#6F35FC',
      'rock': '#B6A136',
      'steel': '#B7B7CE',
      'ice': '#98D8D8',
      'poison': '#A33EA1',
      'ground': '#E2BF65',
      'flying': '#A98FF3'
    };

    return typeColors[type.toLowerCase()] || '#A8A77A';
  }

  // Method to get generation-specific Pokémon indices
  getGenerationIndices(gen: number): number[] {
    const generationIndices: { [key: number]: number[] } = {
      1: Array.from({ length: 151 }, (_, i) => i + 1),  // Generation 1 (1-151)
      2: Array.from({ length: 100 }, (_, i) => i + 152),  // Generation 2 (152-251)
      3: Array.from({ length: 135 }, (_, i) => i + 252),  // Generation 3 (252-386)
      4: Array.from({ length: 107 }, (_, i) => i + 387),  // Generation 4 (387-493)
      5: Array.from({ length: 156 }, (_, i) => i + 494),  // Generation 5 (494-649)
      6: Array.from({ length: 72 }, (_, i) => i + 650)   // Generation 6 (650-721)
    };

    return generationIndices[gen] || [];
  }
}
