import contents from'./data/contents';
import genres from'./data/genres';
import jobs from'./data/jobs';
import trainings from'./data/trainings';

export const state = () => ({
  contents: [],
  genres: [],
  jobs: [],
  trainings: [],
});
export const mutations = {
  init(state) {
    state.contents = contents();
    state.genres = genres();
    state.jobs = jobs();
    state.trainings = trainings();
  }
};
