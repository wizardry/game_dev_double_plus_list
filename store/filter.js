export const state = () => ({
  selectedOffice: 0,
  selectedGenre: 0,
  selectedContent: 0,
  selectedJob: 0,
  selectedPopularity: 0,
});
export const mutations = {
  change(state, value) {
    const key = {
      offices: 'selectedOffice',
      genres: 'selectedGenre',
      contents: 'selectedContent',
      jobs: 'selectedJob',
      popularities: 'selectedPopularity',
    }
    state[key[value.type]] = value.value;
  }
};
