import contents from'./data/contents';
import genres from'./data/genres';
import jobs from'./data/jobs';
import trainings from'./data/trainings';

console.log(contents());
export const state = () => ({
  contents: contents(),
  genres: genres(),
  jobs: jobs(),
  trainings: trainings(),
});
export const mutations = () => ({});
